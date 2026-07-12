import type { Atlas } from '../gfx/atlas';
import { EnemyPool, SHEET_SOLDIERS, SHEET_VARIANTS, SHEET_APRIORITY } from './enemies';
import { ENEMY_TYPES } from '../data/enemyTypes';
import type { EnemyType } from '../data/enemyTypes';
import { rng } from '../core/rng';

const BLOCK_PX = 192; // 4열 × 48px (variants)
const APRIORITY_BLOCK = 4 * 48;
const RING_MIN = 19;
const RING_MAX = 24;
const ENEMY_SOFT_CAP = 620; // 동시 최대(보스/졸개 여유)
const ELITE_INTERVAL = 90; // 초

// 분마다 도는 강조 틴트 팔레트(색변형과 별개로 미세 색조 로테이션)
const PALETTE: [number, number, number][] = [
  [1, 1, 1],
  [1.15, 1.0, 0.85],
  [0.9, 1.05, 1.2],
  [1.2, 0.9, 1.0],
  [1.0, 1.15, 0.95],
  [1.2, 1.1, 0.8],
  [0.95, 0.95, 1.25],
  [1.25, 0.95, 0.9],
  [1.1, 1.2, 1.0],
  [1.2, 1.0, 1.15],
];

// DESIGN 5절 타임라인 스포너. 화면 밖 링에서 스폰, 시간에 따라 종류/밀도/HP 증가.
export class Spawner {
  private acc = 0;
  private eliteTimer = ELITE_INTERVAL;
  private surroundTimer = 0;
  private bossActive = false;
  private readonly atlas: Atlas;
  private readonly pool: EnemyPool;
  private readonly apriorityNames: string[];

  constructor(atlas: Atlas, pool: EnemyPool) {
    this.atlas = atlas;
    this.pool = pool;
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
    let rate = Math.min(25, 2 + minute * 2.6); // 초당 스폰 수
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
    this.eliteTimer -= dt;
    if (this.eliteTimer <= 0) {
      this.eliteTimer += ELITE_INTERVAL;
      this.spawnElite(minute, px, pz);
    }

    // 포위 스폰 이벤트 (5분+): 20초마다 원형 대군
    if (gameTime >= 300) {
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
  }

  private readonly _p = { x: 0, z: 0 };

  private spawnOne(minute: number, px: number, pz: number): void {
    const type = this.pickType(minute);
    this.ringPos(px, pz, this._p);
    this.placeEnemy(type, this._p.x, this._p.z, minute);
  }

  private placeEnemy(type: EnemyType, x: number, z: number, minute: number): number {
    const hp = type.hp * this.hpScale(minute);
    let sheetId = SHEET_SOLDIERS;
    let blockPx = this.atlas.soldierBlockPx(type.charIndex);
    let blockPy = 0;
    const m = Math.floor(minute);
    if (m >= 1) {
      const variants = this.atlas.variantBlocks(type.id);
      if (variants.length > 0) {
        const vb = variants[(m - 1) % variants.length];
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
    // 분 팔레트 미세 틴트
    const pal = PALETTE[m % PALETTE.length];
    this.pool.tr[i] = pal[0];
    this.pool.tg[i] = pal[1];
    this.pool.tb[i] = pal[2];
    // 원거리 AI 세팅
    if (type.ranged) {
      this.pool.ranged[i] = 1;
      this.pool.range[i] = type.range ?? 11;
      this.pool.atkCd[i] = type.atkCd ?? 2.5;
      this.pool.projDamage[i] = type.projDamage ?? 8;
      this.pool.projSpeed[i] = type.projSpeed ?? 10;
      this.pool.projHoming[i] = type.projHoming ? 1 : 0;
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
    this.pool.tr[i] = 1.5;
    this.pool.tg[i] = 1.2;
    this.pool.tb[i] = 0.7;
    this.pool.labels[i] = `${this.apriorityNames[charIndex]} 精銳`;
    this.pool.markSpecial(i);
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
