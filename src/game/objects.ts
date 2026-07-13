import {
  Scene,
} from 'three';
import type { EffectsSystem } from '../gfx/effects';
import type { ParticleSystem } from '../gfx/particles';
import type { Rng } from '../core/rng';
import { WorldSpriteBatch, WORLD_ASSETS } from '../gfx/worldKit';

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

// 화약통(폭발·연쇄) / 만두 수레(회복) / 군신 사당(버프) 관리.
export class BattlefieldObjects {
  private readonly d: ObjectDeps;
  private readonly x = new Float32Array(OBJ_CAP);
  private readonly z = new Float32Array(OBJ_CAP);
  private readonly kind = new Uint8Array(OBJ_CAP);
  private readonly alive = new Uint8Array(OBJ_CAP);
  private spawnTimer = 4;

  private readonly batch: WorldSpriteBatch;

  constructor(scene: Scene, deps: ObjectDeps) {
    this.d = deps;
    this.batch = new WorldSpriteBatch(scene, OBJ_CAP);
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
    // 플레이어 접촉(만두/사당)
    const px = this.d.playerX();
    const pz = this.d.playerZ();
    const cr = this.d.playerRadius + 0.9;
    for (let i = 0; i < OBJ_CAP; i++) {
      if (this.alive[i] === 0) continue;
      const dx = px - this.x[i];
      const dz = pz - this.z[i];
      if (this.kind[i] === KIND_BARREL || this.kind[i] === KIND_PALISADE) continue; // 무기로만 반응
      if (dx * dx + dz * dz <= cr * cr) this.interact(i);
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
    }
    this.batch.end();
  }

  get visibleCount(): number {
    let count = 0;
    for (let i = 0; i < OBJ_CAP; i++) count += this.alive[i];
    return count;
  }
}
