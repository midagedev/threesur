import {
  Scene,
} from 'three';
import type { EffectsSystem } from '../gfx/effects';
import type { ParticleSystem } from '../gfx/particles';
import type { MarkerLayer } from '../gfx/markers';
import type { Rng } from '../core/rng';
import { WorldSpriteBatch, WORLD_ASSETS } from '../gfx/worldKit';
import { ShadowRenderer } from '../gfx/sprites';
import { getLang } from '../core/i18n';

export type BuffKind = 'attack' | 'speed' | 'musou';

// 전장 오브젝트 (DESIGN §10). 맵에 산재, 상호작용. run이 시스템을 주입하고 매 프레임 update.
export interface ObjectDeps {
  effects: EffectsSystem;
  particles: ParticleSystem;
  rng: Rng;
  playerX: () => number;
  playerZ: () => number;
  playerRadius: number;
  damageArea: (x: number, z: number, radius: number, damage: number) => void; // 화약통 폭발(적 피해) — run이 hash로 처리
  heal: (amount: number) => void; // 만두 (최대 체력 비율)
  applyBuff: (kind: BuffKind, durationSec: number) => void; // 사당 30초 버프
  banner: (text: string, color: string) => void;
  playerHpFrac?: () => number; // #41 만두 연민 가중치용(현재 HP 비율) — run 배선 스니펫
  stunEnemies?: (x: number, z: number, radius: number, durationSec: number) => void; // #41 전고 스턴
  magnetizeGems?: () => void; // #41 동라 젬 자석
}

const OBJ_CAP = 32;
const KIND_BARREL = 0;
const KIND_DUMPLING = 1;
const KIND_SHRINE = 2;
const KIND_PALISADE = 3;
const KIND_GONG = 4; // 동라 銅鑼 — 접촉 시 필드 젬 자석 (#41 15.7)
const KIND_DRUM = 5; // 전고 戰鼓 — 접근 시 북 울림 스턴 (#41 15.4)
const BARREL_RADIUS = 6.5; // #41 15.6: 4→6.5
const FUSE_TIME = 3.0; // 점화 후 폭발까지(오너 피드백: 1s→3s, 전략적 여유). 연쇄 도미노는 0.3s 유지
const DRUM_CD = 25; // #41 15.4: 전고 재발동 쿨다운
const HINT_RADIUS = 5.2; // 근접 힌트 표시 거리

// 종류별 이름표 / 힌트 / 이름표 높이 / 상시 글로우(r,g,b,반경, 0이면 없음)
const OBJ_NAME_KO = ['화약통 火藥', '만두 수레 饅頭', '군신 사당 軍神祠', '목책 木柵', '동라 銅鑼', '전고 戰鼓'];
const OBJ_NAME_EN = ['Powder Keg 火藥', 'Bun Cart 饅頭', 'War-God Shrine 軍神祠', 'Palisade 木柵', 'War Gong 銅鑼', 'War Drum 戰鼓'];
const OBJ_HINT_KO = ['공격 → 폭파', '회복 +30%', '버프 획득', '공격 → 돌파', '접촉 → 젬 흡수', '접근 → 적 기절'];
const OBJ_HINT_EN = ['Attack → explode', 'Heal +30%', 'Gain buff', 'Attack → break', 'Touch → pull gems', 'Near → stun foes'];
const objName = (k: number): string => (getLang() === 'en' ? OBJ_NAME_EN[k] : OBJ_NAME_KO[k]);
const objHint = (k: number): string => (getLang() === 'en' ? OBJ_HINT_EN[k] : OBJ_HINT_KO[k]);
const OBJ_LABEL_Y = [2.5, 2.6, 3.8, 2.6, 2.6, 2.6];
const OBJ_GLOW: (readonly [number, number, number, number] | null)[] = [
  [1.5, 0.5, 0.18, 2.5], // 화약통 — 위험한 붉은 잔광
  [0.55, 1.25, 0.7, 2.2], // 만두 수레 — 온기 도는 녹빛
  [1.5, 1.05, 0.4, 3.4], // 군신 사당 — 금빛 후광(가장 크게)
  null, // 목책 — 글로우 없음
  [1.7, 1.3, 0.4, 2.6], // 동라 — 금빛 공명
  [1.4, 0.9, 0.5, 2.4], // 전고 — 낮은 주황 진동
];

// 화약통(폭발·연쇄) / 만두 수레(회복) / 군신 사당(버프) 관리.
export class BattlefieldObjects {
  private readonly d: ObjectDeps;
  private readonly x = new Float32Array(OBJ_CAP);
  private readonly z = new Float32Array(OBJ_CAP);
  private readonly kind = new Uint8Array(OBJ_CAP);
  private readonly alive = new Uint8Array(OBJ_CAP);
  private readonly igniteT = new Float32Array(OBJ_CAP); // 화약통 점화 잔여(>0=점화 중), 0=미점화, #41 15.6
  private readonly drumCd = new Float32Array(OBJ_CAP); // 전고 재발동 쿨다운
  private spawnTimer = 4;

  private readonly batch: WorldSpriteBatch;
  private readonly shadows: ShadowRenderer;

  constructor(scene: Scene, deps: ObjectDeps) {
    this.d = deps;
    this.batch = new WorldSpriteBatch(scene, OBJ_CAP);
    this.shadows = new ShadowRenderer(OBJ_CAP);
    scene.add(this.shadows.mesh);
  }

  reset(): void {
    this.alive.fill(0);
    this.igniteT.fill(0);
    this.drumCd.fill(0);
    this.spawnTimer = 4;
  }

  private spawnObject(gameTime: number): void {
    let slot = -1;
    for (let i = 0; i < OBJ_CAP; i++) if (this.alive[i] === 0) { slot = i; break; }
    if (slot < 0) return;
    const r = this.d.rng;
    // 종류 확률(#41 회복 이코노미): 만두 90s+로 조기화(회복 접근성↑) + 동라/전고 신규.
    const rv = r.next();
    // 연민 가중치: 플레이어가 저체력(<40%)이면 만두 확률을 크게 올려 회복 접근성 보장.
    const dumplingGate = (this.d.playerHpFrac?.() ?? 1) < 0.4 ? 0.6 : 0.44;
    let kind = KIND_BARREL;
    if (rv < 0.07) kind = KIND_GONG; // 동라 7%
    else if (rv < 0.15) kind = KIND_DRUM; // 전고 8%
    else if (rv < 0.24) kind = KIND_SHRINE; // 사당 9%
    else if (gameTime > 90 && rv < dumplingGate) kind = KIND_DUMPLING; // 만두 (90s+ 조기화, 저체력 시↑)
    else if (rv > 0.72) kind = KIND_PALISADE; // 목책
    // 그 외 화약통
    // 플레이어 주변 링에 배치(고정, 플레이어가 다가가 상호작용)
    const a = r.next() * Math.PI * 2;
    const dist = r.range(8, 16);
    this.x[slot] = this.d.playerX() + Math.cos(a) * dist;
    this.z[slot] = this.d.playerZ() + Math.sin(a) * dist;
    this.kind[slot] = kind;
    this.igniteT[slot] = 0;
    this.drumCd[slot] = 0;
    this.alive[slot] = 1;
  }

  // 낙양 거점화(DESIGN 20): 지정 위치에 만두/동라 배치. 슬롯 없으면 false.
  // 랜덤 spawnObject와 달리 SiegeSystem이 내성 안뜰 좌표를 계산해 호출한다.
  private placeAt(kind: number, x: number, z: number): boolean {
    let slot = -1;
    for (let i = 0; i < OBJ_CAP; i++) if (this.alive[i] === 0) { slot = i; break; }
    if (slot < 0) return false;
    this.x[slot] = x;
    this.z[slot] = z;
    this.kind[slot] = kind;
    this.igniteT[slot] = 0;
    this.drumCd[slot] = 0;
    this.alive[slot] = 1;
    return true;
  }

  spawnDumplingAt(x: number, z: number): boolean {
    return this.placeAt(KIND_DUMPLING, x, z);
  }

  spawnGongAt(x: number, z: number): boolean {
    return this.placeAt(KIND_GONG, x, z);
  }

  update(dt: number, gameTime: number): void {
    // 스폰(낮은 빈도)
    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnTimer = this.d.rng.range(6, 11);
      this.spawnObject(gameTime);
    }
    // 플레이어 접촉(만두/사당/동라) + 근접(전고) + 상시 이펙트 + 화약통 점화 진행
    const px = this.d.playerX();
    const pz = this.d.playerZ();
    const cr = this.d.playerRadius + 0.9;
    const p = this.d.particles;
    for (let i = 0; i < OBJ_CAP; i++) {
      if (this.alive[i] === 0) continue;
      const k = this.kind[i];
      const x = this.x[i];
      const z = this.z[i];
      // 상시 이펙트(Math.random 게이트 — 게임플레이 rng와 분리한 순수 연출)
      if (k === KIND_DUMPLING) {
        if (Math.random() < 9 * dt) p.steam(x, z + 0.2);
      } else if (k === KIND_SHRINE) {
        if (Math.random() < 7 * dt) p.incense(x, z);
      } else if (k === KIND_BARREL) {
        if (Math.random() < 3.5 * dt) p.spark(x, z);
      }
      // 화약통 점화 상태 진행: 심지 불꽃 + 통 점멸 후 폭발
      if (k === KIND_BARREL && this.igniteT[i] > 0) {
        this.igniteT[i] -= dt;
        if (Math.random() < 40 * dt) p.spark(x, z + 0.5); // 심지 불꽃(빠른 스파크)
        if (this.igniteT[i] <= 0) { this.explode(i); continue; }
      }
      if (k === KIND_BARREL || k === KIND_PALISADE) continue; // 무기로만 반응
      // 전고: 근접 시 25s 쿨로 북 울림 스턴
      if (k === KIND_DRUM) {
        if (this.drumCd[i] > 0) this.drumCd[i] -= dt;
        const ddx = px - x;
        const ddz = pz - z;
        if (this.drumCd[i] <= 0 && ddx * ddx + ddz * ddz <= 36) this.beatDrum(i); // 반경 6 접근
        continue;
      }
      const dx = px - x;
      const dz = pz - z;
      if (dx * dx + dz * dz <= cr * cr) this.interact(i);
    }
  }

  // 표식 레이어에 종류별 글로우/이름표/근접 힌트를 밀어넣는다(run이 프레임마다 호출).
  emitMarkers(layer: MarkerLayer, px: number, pz: number): void {
    const hintSq = HINT_RADIUS * HINT_RADIUS;
    for (let i = 0; i < OBJ_CAP; i++) {
      if (this.alive[i] === 0) continue;
      const k = this.kind[i];
      const x = this.x[i];
      const z = this.z[i];
      const g = OBJ_GLOW[k];
      if (g) layer.glowAt(x, z, g[3], g[0], g[1], g[2]);
      layer.name(objName(k), x, OBJ_LABEL_Y[k], z);
      // 상호작용 어포던스 링 — 사당/동라/전고가 "쓸 수 있는 것"으로 읽히고 위치가 드러나게(#50 오너 Q).
      if (k === KIND_SHRINE) layer.interactRing(x, z, 1.5, 1.05, 0.4, true); // 금빛 버프
      else if (k === KIND_GONG) layer.interactRing(x, z, 1.5, 1.2, 0.5, true); // 동라 자석
      else if (k === KIND_DRUM) layer.interactRing(x, z, 1.4, 0.85, 0.4, this.drumCd[i] <= 0); // 전고: 쿨 중이면 흐리게
      const dx = px - x;
      const dz = pz - z;
      if (dx * dx + dz * dz <= hintSq) layer.hint(objHint(k), x, OBJ_LABEL_Y[k] + 1.0, z);
    }
  }

  private interact(i: number): void {
    if (this.kind[i] === KIND_DUMPLING) {
      this.d.heal(0.3); // 최대 체력 30%
      this.d.particles.burst(this.x[i], this.z[i], 1.6, 2.2, 1.0, 12, 3);
      this.d.banner(getLang() === 'en' ? 'Bun Cart 饅頭' : '만두 수레 饅頭', '#9affc0');
    } else if (this.kind[i] === KIND_SHRINE) {
      const kinds: BuffKind[] = ['attack', 'speed', 'musou'];
      const kind = kinds[this.d.rng.int(3)];
      this.d.applyBuff(kind, 30);
      this.d.effects.spawnRing(this.x[i], this.z[i], 6, 2.4, 2.0, 0.8, 0.7);
      const en = getLang() === 'en';
      const label = kind === 'attack' ? (en ? 'Attack Up' : '공격 강화') : kind === 'speed' ? (en ? 'Gale' : '질풍') : (en ? 'Musou Charge' : '무쌍 충전');
      this.d.banner(`${en ? 'War-God Shrine' : '군신 사당'} · ${label}`, '#e8c667');
    } else if (this.kind[i] === KIND_GONG) {
      // 동라: 필드 전체 젬 자석 + 금빛 공명 링 2겹 (#41 15.7)
      this.d.magnetizeGems?.();
      this.d.effects.spawnRing(this.x[i], this.z[i], 10, 2.0, 1.5, 0.5, 0.6);
      this.d.effects.spawnRing(this.x[i], this.z[i], 18, 1.8, 1.35, 0.45, 0.8);
      this.d.banner(getLang() === 'en' ? 'War Gong 銅鑼' : '동라 銅鑼', '#ffd86b');
    }
    this.alive[i] = 0;
  }

  // 전고: 북 울림 — 반경 내 적 0.8s 스턴 + 낮은 주황 충격 링(광원 없음, 절제). 25s 쿨.
  private beatDrum(i: number): void {
    this.drumCd[i] = DRUM_CD;
    this.d.stunEnemies?.(this.x[i], this.z[i], 9, 0.8);
    this.d.effects.spawnRing(this.x[i], this.z[i], 9, 1.5, 0.85, 0.4, 0.55);
    this.d.particles.burst(this.x[i], this.z[i], 1.3, 0.85, 0.4, 16, 4);
    this.d.banner(getLang() === 'en' ? 'War Drum 戰鼓' : '전고 戰鼓', '#e4a05b');
  }

  // 무기 판정 지점(x,z,r)이 화약 수레/목책에 닿으면 반응. 하나라도 맞으면 true.
  // TODO(통합): run이 무기 타격 지점마다 호출하거나, 오브젝트를 hash에 등록해 무기가 직접 질의.
  hitAt(x: number, z: number, r: number): boolean {
    let any = false;
    for (let i = 0; i < OBJ_CAP; i++) {
      if (this.alive[i] === 0 || (this.kind[i] !== KIND_BARREL && this.kind[i] !== KIND_PALISADE)) continue;
      const dx = x - this.x[i];
      const dz = z - this.z[i];
      const rr = r + 0.7;
      if (dx * dx + dz * dz <= rr * rr) {
        if (this.kind[i] === KIND_BARREL) {
          // #41 15.6: 즉발 대신 1.0s 점화 상태 진입(update가 심지 불꽃/점멸 후 폭발).
          if (this.igniteT[i] <= 0) {
            this.igniteT[i] = FUSE_TIME;
            this.d.effects.spawnRing(this.x[i], this.z[i], 1.4, 2.2, 1.4, 0.5, 0.25); // 점화 신호
          }
        } else this.breakPalisade(i);
        any = true;
      }
    }
    return any;
  }

  // 실제 폭발(점화 종료 시). 반경↑·피해↑ + 2겹 충격파 + 그을음 데칼 + 짧은 광원 펄스(≤0.6s, 화이트아웃 금지).
  private explode(i: number): void {
    const ex = this.x[i];
    const ez = this.z[i];
    this.alive[i] = 0;
    this.igniteT[i] = 0;
    this.d.effects.spawnRing(ex, ez, BARREL_RADIUS, 2.6, 1.0, 0.3, 0.55);
    this.d.effects.spawnRing(ex, ez, BARREL_RADIUS * 0.55, 2.9, 1.5, 0.6, 0.35); // 내측 화염 링
    this.d.effects.spawnDecal?.(ex, ez, BARREL_RADIUS * 0.8, 0.5, 0.28, 0.14); // 그을음 데칼
    this.d.effects.spawnLight?.(ex, ez, 2.4, 1.15, 0.4, BARREL_RADIUS * 1.3, 0.32); // 짧은 광원 펄스
    this.d.particles.burst(ex, ez, 2.6, 1.1, 0.3, 42, 9);
    this.d.damageArea(ex, ez, BARREL_RADIUS, 120); // 90→120
    // 연쇄: 즉발 아닌 0.3s 지연 점화 도미노.
    for (let j = 0; j < OBJ_CAP; j++) {
      if (this.alive[j] === 0 || this.kind[j] !== KIND_BARREL || this.igniteT[j] > 0) continue;
      const dx = this.x[j] - ex;
      const dz = this.z[j] - ez;
      if (dx * dx + dz * dz <= BARREL_RADIUS * BARREL_RADIUS) this.igniteT[j] = 0.3;
    }
  }

  private breakPalisade(i: number): void {
    const x = this.x[i];
    const z = this.z[i];
    this.alive[i] = 0;
    this.d.effects.spawnRing(x, z, 2.8, 1.6, 1.05, 0.45, 0.3);
    this.d.particles.burst(x, z, 1.5, 0.85, 0.35, 22, 5);
    this.d.damageArea(x, z, 2.5, 35);
    this.d.banner(getLang() === 'en' ? 'Palisade Broken 木柵' : '목책 돌파 木柵', '#e4a05b');
  }

  render(time: number): void {
    this.batch.begin();
    this.shadows.begin();
    for (let i = 0; i < OBJ_CAP; i++) {
      if (this.alive[i] === 0) continue;
      if (this.kind[i] === KIND_BARREL) {
        // 점화 중이면 통이 밝게↔어둡게 깜빡(폭발 임박할수록 빠르게 — 고전 폭탄 텔). 미점화면 상시 잔광.
        let tint = 1.12;
        if (this.igniteT[i] > 0) {
          const freq = 2 + Math.max(0, FUSE_TIME - this.igniteT[i]) * 3.5; // 2Hz → ~12Hz
          tint = Math.sin(time * freq * Math.PI * 2) > 0 ? 2.3 : 0.7;
        }
        this.batch.push(WORLD_ASSETS.powderCart, this.x[i], this.z[i], 2.4, 2.0, tint);
      } else if (this.kind[i] === KIND_DUMPLING) {
        this.batch.push(WORLD_ASSETS.dumplingCart, this.x[i], this.z[i], 2.5, 2.1, 1.18);
      } else if (this.kind[i] === KIND_SHRINE) {
        this.batch.push(WORLD_ASSETS.shrine, this.x[i], this.z[i], 2.8, 3.3, 1.13);
      } else if (this.kind[i] === KIND_GONG) {
        this.batch.push(WORLD_ASSETS.gong, this.x[i], this.z[i], 2.4, 2.2, 1.1);
      } else if (this.kind[i] === KIND_DRUM) {
        this.batch.push(WORLD_ASSETS.warDrum, this.x[i], this.z[i], 2.4, 2.2, 1.1);
      } else {
        this.batch.push(WORLD_ASSETS.palisade, this.x[i], this.z[i], 3.7, 2.15, 1.05);
      }
      const radius = this.kind[i] === KIND_PALISADE ? 1.55 : this.kind[i] === KIND_SHRINE ? 1.08 : 0.92;
      this.shadows.push(this.x[i], this.z[i], radius);
    }
    this.batch.end();
    this.shadows.end();
  }

  get visibleCount(): number {
    let count = 0;
    for (let i = 0; i < OBJ_CAP; i++) count += this.alive[i];
    return count;
  }

  // 로컬 시각 회귀 테스트용: 네 종류를 플레이어 주변에 고정 배치한다.
  testShowcase(centerX: number, centerZ: number): void {
    this.alive.fill(0);
    const placements = [
      [-4.2, -3.0, KIND_BARREL],
      [4.2, -3.0, KIND_DUMPLING],
      [-4.2, 3.2, KIND_SHRINE],
      [4.2, 3.2, KIND_PALISADE],
    ] as const;
    for (let i = 0; i < placements.length; i++) {
      this.x[i] = centerX + placements[i][0];
      this.z[i] = centerZ + placements[i][1];
      this.kind[i] = placements[i][2];
      this.alive[i] = 1;
    }
  }
}
