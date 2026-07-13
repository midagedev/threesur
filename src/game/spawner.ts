import type { Atlas } from '../gfx/atlas';
import {
  BEHAVIOR_CASTER,
  BEHAVIOR_CHARGE,
  BEHAVIOR_SHIELD,
  BEHAVIOR_VOLLEY,
  EnemyPool,
  SHEET_SOLDIERS,
  SHEET_VARIANTS,
  SHEET_APRIORITY,
} from './enemies';
import { ENEMY_TYPES } from '../data/enemyTypes';
import type { EnemyType } from '../data/enemyTypes';
import { rng } from '../core/rng';
import type { BattlefieldMap } from './battlefieldMap';

const BLOCK_PX = 192; // 4열 × 48px (variants)
const APRIORITY_BLOCK = 4 * 48;
const RING_MIN = 19;
const RING_MAX = 24;
const ENEMY_SOFT_CAP = 420; // #25 동시 최대 소프트 캡(체감·가독성; 여전히 대군, 성능 300+ 여유)
const ELITE_INTERVAL = 90; // 초

// 웨이브(세력) 색군 — DESIGN 14.4.
// 대군이 "한 세력"으로 읽히도록 시간대별 응집 틴트 그룹(2~3색)을 쓰고, 단계가 바뀌면 톤이 전환된다.
// 가독성 게이트: 어떤 틴트도 (R·G·B 동시 高=플레이어 백금) / (G·B 高=플레이어 청록) / (R·B 高·G 低=마탄 마젠타)
// 영역에 들어가지 않게 큐레이션 → 피아·투사체 언어(플레이어 금빛 림 / 적 어두운 외곽 / 마탄 진홍·마젠타)와 충돌 없음.
export interface Faction {
  id: string;
  ko: string;
  hanja: string;
  en: string;
  banner: [number, number, number]; // 배너 대표색(밝게, 0..1)
  tints: [number, number, number][]; // 병사 몸체 미세 틴트 그룹(응집·혼합)
  variantStart: number; // 색변형 스프라이트 인덱스 구간 시작
  variantCount: number;
}

const FACTIONS: Faction[] = [
  { id: 'yellowturban', ko: '황건적', hanja: '黃巾', en: 'Yellow Turbans',
    banner: [0.85, 0.62, 0.24],
    tints: [[1.32, 1.06, 0.5], [1.38, 1.12, 0.56], [1.24, 0.98, 0.46]],
    variantStart: 0, variantCount: 7 },
  { id: 'dongzhuo', ko: '동탁군', hanja: '董卓', en: "Dong Zhuo's Host",
    banner: [0.72, 0.2, 0.17],
    tints: [[1.4, 0.66, 0.56], [1.28, 0.58, 0.5], [1.46, 0.74, 0.64]],
    variantStart: 7, variantCount: 7 },
  { id: 'yuanshao', ko: '원소군', hanja: '袁紹', en: "Yuan Shao's Host",
    banner: [0.24, 0.44, 0.72],
    tints: [[0.66, 0.84, 1.4], [0.74, 0.9, 1.32], [0.6, 0.78, 1.46]],
    variantStart: 14, variantCount: 6 },
  { id: 'warlords', ko: '군웅', hanja: '群雄', en: 'Warlords',
    banner: [0.5, 0.54, 0.6],
    tints: [[0.88, 0.9, 1.02], [0.78, 0.82, 0.94], [1.0, 0.94, 0.92]],
    variantStart: 20, variantCount: 4 },
];

// 세력 경계: 보스 슬롯(3/6/9분) 약 15초 전 — 새 군세가 먼저 밀려오고(색 전환+배너),
// 그 챔피언(보스)이 뒤이어 등장. 두 세트피스를 분리해 화면 과밀을 피한다.
function factionForMinute(minute: number): number {
  if (minute < 2.75) return 0;
  if (minute < 5.75) return 1;
  if (minute < 8.75) return 2;
  return 3;
}

// DESIGN 5절 타임라인 스포너. 화면 밖 링에서 스폰, 시간에 따라 종류/밀도/HP 증가.
export class Spawner {
  private acc = 0;
  private eliteTimer = ELITE_INTERVAL;
  private surroundTimer = 0;
  private bossActive = false;
  private factionIdx = 0; // 현재 세력 단계(전환 감지용)
  onWave: ((faction: Faction) => void) | null = null; // 세력 전환 시 배너 트리거(run이 주입)
  private readonly atlas: Atlas;
  private readonly pool: EnemyPool;
  private readonly map: BattlefieldMap;
  private readonly apriorityNames: string[];

  constructor(atlas: Atlas, pool: EnemyPool, map: BattlefieldMap) {
    this.atlas = atlas;
    this.pool = pool;
    this.map = map;
    // apriority 인덱스→한글 이름
    const chars = atlas.manifest.sheets.apriority.chars;
    this.apriorityNames = new Array(16).fill('장수');
    for (const key in chars) {
      const idx = chars[key];
      this.apriorityNames[idx] = atlas.manifest.names[key] ?? key;
    }
  }

  reset(): void {
    this.acc = 0;
    this.eliteTimer = ELITE_INTERVAL;
    this.surroundTimer = 0;
    this.bossActive = false;
    this.factionIdx = 0; // 시작 세력(황건)은 배너 없이 진입
  }

  setBossActive(v: boolean): void {
    this.bossActive = v;
  }

  private hpScale(minute: number): number {
    let s = 1 + 0.13 * minute + 0.011 * minute * minute;
    if (minute > 10) s *= Math.pow(1.35, minute - 10); // 무한 모드: 매분 가속
    return s;
  }

  update(dt: number, gameTime: number, px: number, pz: number): void {
    const minute = gameTime / 60;
    // 세력 단계 전환 감지 → 배너 트리거(3/6/9분). 무한 모드에서는 군웅 단계 고정.
    const fi = factionForMinute(minute);
    if (fi !== this.factionIdx) {
      this.factionIdx = fi;
      this.onWave?.(FACTIONS[fi]);
    }
    // #25 밀도 밸런스: 초반 레이트 완화(2.6→1.7/분) + 상한 25→18로 6분 스파이크 평탄화.
    let rate = Math.min(18, 2 + minute * 1.7); // 초당 스폰 수
    if (this.bossActive) rate *= 0.6; // 보스 중 소폭 감소

    if (this.pool.aliveCount < ENEMY_SOFT_CAP) {
      this.acc += rate * dt;
      while (this.acc >= 1) {
        this.acc -= 1;
        if (this.pool.aliveCount >= ENEMY_SOFT_CAP) break;
        this.spawnOne(minute, px, pz);
      }
    } else {
      this.acc = 0;
    }

    // 엘리트: 90초마다
    if (!this.bossActive) {
      this.eliteTimer -= dt;
      if (this.eliteTimer <= 0) {
        this.eliteTimer += ELITE_INTERVAL;
        this.spawnElite(minute, px, pz);
      }
    }

    // 포위 스폰 이벤트 (5분+): 20초마다 원형 대군
    if (!this.bossActive && gameTime >= 300) {
      this.surroundTimer -= dt;
      if (this.surroundTimer <= 0) {
        this.surroundTimer = 22;
        this.spawnSurround(minute, px, pz);
      }
    }
  }

  private ringPos(px: number, pz: number, out: { x: number; z: number }): void {
    const ang = rng.next() * Math.PI * 2;
    const r = rng.range(RING_MIN, RING_MAX);
    out.x = px + Math.cos(ang) * r;
    out.z = pz + Math.sin(ang) * r;
    this.map.projectWalkable(out.x, out.z, 0.75, out);
  }

  private readonly _p = { x: 0, z: 0 };
  private readonly _spawnP = { x: 0, z: 0 };

  private spawnOne(minute: number, px: number, pz: number): void {
    const type = this.pickType(minute);
    this.ringPos(px, pz, this._p);
    this.placeEnemy(type, this._p.x, this._p.z, minute);
  }

  private placeEnemy(type: EnemyType, x: number, z: number, minute: number): number {
    this.map.projectWalkable(x, z, type.radius + 0.08, this._spawnP);
    x = this._spawnP.x;
    z = this._spawnP.z;
    const hp = type.hp * this.hpScale(minute);
    let sheetId = SHEET_SOLDIERS;
    let blockPx = this.atlas.soldierBlockPx(type.charIndex);
    let blockPy = 0;
    const faction = FACTIONS[factionForMinute(minute)];
    // 색변형 스프라이트: 세력 구간 내 무작위 → 대군에 미세한 몸체 다양성(1분 이후).
    if (minute >= 1) {
      const variants = this.atlas.variantBlocks(type.id);
      if (variants.length > 0) {
        const vi = (faction.variantStart + rng.int(faction.variantCount)) % variants.length;
        const vb = variants[vi];
        sheetId = SHEET_VARIANTS;
        blockPx = vb.c * BLOCK_PX;
        blockPy = vb.r * 256;
      }
    }
    const i = this.pool.spawn(
      x, z, hp, type.speed, type.radius, type.damage, type.gemValue, type.worldScale,
      sheetId, blockPx, blockPy,
    );
    if (i < 0) return -1;
    // 세력 틴트(그룹 내 무작위 → 2~3색 혼합, 응집)
    const t = faction.tints[rng.int(faction.tints.length)];
    this.pool.tr[i] = t[0];
    this.pool.tg[i] = t[1];
    this.pool.tb[i] = t[2];
    // 원거리 AI 세팅
    if (type.ranged) {
      this.pool.ranged[i] = 1;
      this.pool.range[i] = type.range ?? 11;
      this.pool.atkCd[i] = type.atkCd ?? 2.5;
      this.pool.projDamage[i] = type.projDamage ?? 8;
      this.pool.projSpeed[i] = type.projSpeed ?? 10;
      this.pool.projHoming[i] = type.projHoming ? 1 : 0;
    }
    if (type.id === 'general_spear' || (type.id === 'runner' && rng.next() < 0.34)) {
      this.pool.behavior[i] = BEHAVIOR_CHARGE;
    } else if (type.id === 'general_bow') {
      this.pool.behavior[i] = BEHAVIOR_VOLLEY;
    } else if (type.id === 'strategist') {
      this.pool.behavior[i] = BEHAVIOR_CASTER;
    } else if (type.id === 'guard') {
      this.pool.behavior[i] = BEHAVIOR_SHIELD;
    }
    return i;
  }

  private spawnElite(minute: number, px: number, pz: number): void {
    if (this.pool.aliveCount >= ENEMY_SOFT_CAP) return;
    this.ringPos(px, pz, this._p);
    const charIndex = rng.int(16);
    const hp = ENEMY_TYPES.guard.hp * 25 * this.hpScale(minute);
    const i = this.pool.spawn(
      this._p.x, this._p.z, hp, 2.2, 0.85, 13, 20, 1.5,
      SHEET_APRIORITY, charIndex * APRIORITY_BLOCK, 0,
    );
    if (i < 0) return;
    this.pool.elite[i] = 1;
    this.pool.kbResist[i] = 0.5; // 엘리트: 넉백 50% 저항
    this.pool.behavior[i] = BEHAVIOR_SHIELD;
    this.pool.tr[i] = 1.5;
    this.pool.tg[i] = 1.2;
    this.pool.tb[i] = 0.7;
    this.pool.labels[i] = `${this.apriorityNames[charIndex]} 精銳`;
    this.pool.markSpecial(i);
  }

  // 시각/회귀 테스트용으로 한 패턴을 플레이어 주변에 강제 배치한다.
  forcePattern(name: string, gameTime: number, px: number, pz: number): void {
    const minute = gameTime / 60;
    if (name === 'charge') {
      const i = this.placeEnemy(ENEMY_TYPES.general_spear, px + 8, pz, minute);
      if (i >= 0) this.pool.patternT[i] = 0;
    } else if (name === 'volley') {
      for (let k = -1; k <= 1; k++) {
        const i = this.placeEnemy(ENEMY_TYPES.general_bow, px + k * 2.2, pz + 9, minute);
        if (i >= 0) this.pool.atkTimer[i] = 0;
      }
    } else if (name === 'strategist') {
      const i = this.placeEnemy(ENEMY_TYPES.strategist, px - 8, pz + 5, minute);
      if (i >= 0) this.pool.atkTimer[i] = 0;
    } else if (name === 'shield') {
      this.placeEnemy(ENEMY_TYPES.guard, px + 5, pz + 3, minute);
    }
  }

  spawnGateRush(x: number, z: number, horizontal: boolean, minute: number): void {
    for (let k = 0; k < 10; k++) {
      const row = (k / 2) | 0;
      const lane = (k % 2) * 2 - 1;
      const sx = horizontal ? x + lane * 1.5 : x - 4 - row * 1.4;
      const sz = horizontal ? z - 4 - row * 1.4 : z + lane * 1.5;
      this.placeEnemy(k >= 8 ? ENEMY_TYPES.general_spear : ENEMY_TYPES.runner, sx, sz, minute);
    }
  }

  private spawnSurround(minute: number, px: number, pz: number): void {
    const count = 36;
    const r = RING_MAX;
    for (let k = 0; k < count; k++) {
      if (this.pool.aliveCount >= ENEMY_SOFT_CAP) break;
      const ang = (k / count) * Math.PI * 2 + rng.range(-0.05, 0.05);
      const type = this.pickType(minute);
      this.placeEnemy(type, px + Math.cos(ang) * r, pz + Math.sin(ang) * r, minute);
    }
  }

  private pickType(minute: number): EnemyType {
    const rv = rng.next();
    const T = ENEMY_TYPES;
    if (minute < 1) {
      return rv < 0.6 ? T.worker : T.runner;
    }
    if (minute < 2) {
      if (rv < 0.45) return T.worker;
      if (rv < 0.75) return T.runner;
      return T.guard;
    }
    if (minute < 3) {
      if (rv < 0.35) return T.worker;
      if (rv < 0.6) return T.runner;
      if (rv < 0.85) return T.guard;
      return T.general_spear;
    }
    if (minute < 4.5) {
      if (rv < 0.3) return T.worker;
      if (rv < 0.5) return T.runner;
      if (rv < 0.68) return T.guard;
      if (rv < 0.85) return T.general_spear;
      return T.general_blade;
    }
    if (minute < 6) {
      if (rv < 0.25) return T.worker;
      if (rv < 0.42) return T.runner;
      if (rv < 0.58) return T.guard;
      if (rv < 0.72) return T.general_spear;
      if (rv < 0.87) return T.general_blade;
      return T.general_bow;
    }
    if (minute < 7.5) {
      if (rv < 0.2) return T.runner;
      if (rv < 0.36) return T.guard;
      if (rv < 0.52) return T.general_spear;
      if (rv < 0.68) return T.general_blade;
      if (rv < 0.85) return T.general_bow;
      return T.strategist;
    }
    // 7.5분+ 전 종류 혼합
    if (rv < 0.16) return T.runner;
    if (rv < 0.32) return T.guard;
    if (rv < 0.48) return T.general_spear;
    if (rv < 0.66) return T.general_blade;
    if (rv < 0.83) return T.general_bow;
    return T.strategist;
  }
}
