import {
  Scene,
} from 'three';
import type { EffectsSystem } from '../gfx/effects';
import type { ParticleSystem } from '../gfx/particles';
import type { MarkerLayer } from '../gfx/markers';
import type { Rng } from '../core/rng';
import { WorldSpriteBatch, WORLD_ASSETS } from '../gfx/worldKit';
import { ShadowRenderer } from '../gfx/sprites';

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
}

const OBJ_CAP = 32;
const KIND_BARREL = 0;
const KIND_DUMPLING = 1;
const KIND_SHRINE = 2;
const KIND_PALISADE = 3;
const BARREL_RADIUS = 4;
const HINT_RADIUS = 5.2; // 근접 힌트 표시 거리

// 종류별 이름표 / 힌트 / 이름표 높이 / 상시 글로우(r,g,b,반경, 0이면 없음)
const OBJ_NAME = ['화약통 火藥', '만두 수레 饅頭', '군신 사당 軍神祠', '목책 木柵'];
const OBJ_HINT = ['공격 → 폭파', '회복 +30%', '버프 획득', '공격 → 돌파'];
const OBJ_LABEL_Y = [2.5, 2.6, 3.8, 2.6];
const OBJ_GLOW: (readonly [number, number, number, number] | null)[] = [
  [1.5, 0.5, 0.18, 2.5], // 화약통 — 위험한 붉은 잔광
  [0.55, 1.25, 0.7, 2.2], // 만두 수레 — 온기 도는 녹빛
  [1.5, 1.05, 0.4, 3.4], // 군신 사당 — 금빛 후광(가장 크게)
  null, // 목책 — 글로우 없음
];

// 화약통(폭발·연쇄) / 만두 수레(회복) / 군신 사당(버프) 관리.
export class BattlefieldObjects {
  private readonly d: ObjectDeps;
  private readonly x = new Float32Array(OBJ_CAP);
  private readonly z = new Float32Array(OBJ_CAP);
  private readonly kind = new Uint8Array(OBJ_CAP);
  private readonly alive = new Uint8Array(OBJ_CAP);
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
    this.spawnTimer = 4;
  }

  private spawnObject(gameTime: number): void {
    let slot = -1;
    for (let i = 0; i < OBJ_CAP; i++) if (this.alive[i] === 0) { slot = i; break; }
    if (slot < 0) return;
    const r = this.d.rng;
    // 종류 확률: 전투 선택을 만드는 화약 수레/목책 위주, 5분+ 만두, 가끔 사당
    const rv = r.next();
    let kind = KIND_BARREL;
    if (gameTime > 300 && rv < 0.18) kind = KIND_DUMPLING;
    else if (rv < 0.1) kind = KIND_SHRINE;
    else if (rv > 0.68) kind = KIND_PALISADE;
    // 플레이어 주변 링에 배치(고정, 플레이어가 다가가 상호작용)
    const a = r.next() * Math.PI * 2;
    const dist = r.range(8, 16);
    this.x[slot] = this.d.playerX() + Math.cos(a) * dist;
    this.z[slot] = this.d.playerZ() + Math.sin(a) * dist;
    this.kind[slot] = kind;
    this.alive[slot] = 1;
  }

  update(dt: number, gameTime: number): void {
    // 스폰(낮은 빈도)
    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnTimer = this.d.rng.range(6, 11);
      this.spawnObject(gameTime);
    }
    // 플레이어 접촉(만두/사당) + 상시 이펙트(연기/김/스파크)
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
      if (k === KIND_BARREL || k === KIND_PALISADE) continue; // 무기로만 반응
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
      layer.name(OBJ_NAME[k], x, OBJ_LABEL_Y[k], z);
      const dx = px - x;
      const dz = pz - z;
      if (dx * dx + dz * dz <= hintSq) layer.hint(OBJ_HINT[k], x, OBJ_LABEL_Y[k] + 1.0, z);
    }
  }

  private interact(i: number): void {
    if (this.kind[i] === KIND_DUMPLING) {
      this.d.heal(0.3); // 최대 체력 30%
      this.d.particles.burst(this.x[i], this.z[i], 1.6, 2.2, 1.0, 12, 3);
      this.d.banner('만두 수레 饅頭', '#9affc0');
    } else if (this.kind[i] === KIND_SHRINE) {
      const kinds: BuffKind[] = ['attack', 'speed', 'musou'];
      const kind = kinds[this.d.rng.int(3)];
      this.d.applyBuff(kind, 30);
      this.d.effects.spawnRing(this.x[i], this.z[i], 6, 2.4, 2.0, 0.8, 0.7);
      const label = kind === 'attack' ? '공격 강화' : kind === 'speed' ? '질풍' : '무쌍 충전';
      this.d.banner(`군신 사당 · ${label}`, '#e8c667');
    }
    this.alive[i] = 0;
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
        if (this.kind[i] === KIND_BARREL) this.explode(i);
        else this.breakPalisade(i);
        any = true;
      }
    }
    return any;
  }

  private explode(i: number): void {
    const ex = this.x[i];
    const ez = this.z[i];
    this.alive[i] = 0;
    this.d.effects.spawnRing(ex, ez, BARREL_RADIUS, 2.6, 1.0, 0.3, 0.5);
    this.d.particles.burst(ex, ez, 2.6, 1.1, 0.3, 30, 8);
    this.d.damageArea(ex, ez, BARREL_RADIUS, 90);
    // 연쇄 유폭
    for (let j = 0; j < OBJ_CAP; j++) {
      if (this.alive[j] === 0 || this.kind[j] !== KIND_BARREL) continue;
      const dx = this.x[j] - ex;
      const dz = this.z[j] - ez;
      if (dx * dx + dz * dz <= BARREL_RADIUS * BARREL_RADIUS) this.explode(j);
    }
  }

  private breakPalisade(i: number): void {
    const x = this.x[i];
    const z = this.z[i];
    this.alive[i] = 0;
    this.d.effects.spawnRing(x, z, 2.8, 1.6, 1.05, 0.45, 0.3);
    this.d.particles.burst(x, z, 1.5, 0.85, 0.35, 22, 5);
    this.d.damageArea(x, z, 2.5, 35);
    this.d.banner('목책 돌파 木柵', '#e4a05b');
  }

  render(_time: number): void {
    this.batch.begin();
    this.shadows.begin();
    for (let i = 0; i < OBJ_CAP; i++) {
      if (this.alive[i] === 0) continue;
      if (this.kind[i] === KIND_BARREL) {
        this.batch.push(WORLD_ASSETS.powderCart, this.x[i], this.z[i], 2.4, 2.0, 1.12);
      } else if (this.kind[i] === KIND_DUMPLING) {
        this.batch.push(WORLD_ASSETS.dumplingCart, this.x[i], this.z[i], 2.5, 2.1, 1.18);
      } else if (this.kind[i] === KIND_SHRINE) {
        this.batch.push(WORLD_ASSETS.shrine, this.x[i], this.z[i], 2.8, 3.3, 1.13);
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
