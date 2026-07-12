import {
  Scene,
  BoxGeometry,
  InstancedMesh,
  InstancedBufferAttribute,
  MeshBasicMaterial,
  DynamicDrawUsage,
} from 'three';
import type { EffectsSystem } from '../gfx/effects';
import type { ParticleSystem } from '../gfx/particles';
import type { Rng } from '../core/rng';

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
const BARREL_RADIUS = 4;

// 화약통(폭발·연쇄) / 만두 수레(회복) / 군신 사당(버프) 관리.
export class BattlefieldObjects {
  private readonly d: ObjectDeps;
  private readonly x = new Float32Array(OBJ_CAP);
  private readonly z = new Float32Array(OBJ_CAP);
  private readonly kind = new Uint8Array(OBJ_CAP);
  private readonly alive = new Uint8Array(OBJ_CAP);
  private spawnTimer = 4;

  private readonly mesh: InstancedMesh;
  private readonly matArr: Float32Array;
  private readonly colArr: Float32Array;
  private readonly colAttr: InstancedBufferAttribute;

  constructor(scene: Scene, deps: ObjectDeps) {
    this.d = deps;
    const geo = new BoxGeometry(0.9, 1.1, 0.9);
    const mat = new MeshBasicMaterial({ toneMapped: false });
    this.mesh = new InstancedMesh(geo, mat, OBJ_CAP);
    this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.colArr = new Float32Array(OBJ_CAP * 3);
    this.colAttr = new InstancedBufferAttribute(this.colArr, 3);
    this.colAttr.setUsage(DynamicDrawUsage);
    this.mesh.instanceColor = this.colAttr;
    this.mesh.frustumCulled = false;
    this.mesh.count = 0;
    this.matArr = this.mesh.instanceMatrix.array as Float32Array;
    scene.add(this.mesh);
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
    // 종류 확률: 화약통 위주, 5분+ 만두, 가끔 사당
    const rv = r.next();
    let kind = KIND_BARREL;
    if (gameTime > 300 && rv < 0.25) kind = KIND_DUMPLING;
    else if (rv < 0.15) kind = KIND_SHRINE;
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
      if (this.kind[i] === KIND_BARREL) continue; // 무기로만 터짐
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

  // 무기 판정 지점(x,z,r)이 화약통에 닿으면 폭발(+연쇄). 하나라도 터지면 true.
  // TODO(통합): run이 무기 타격 지점마다 호출하거나, 오브젝트를 hash에 등록해 무기가 직접 질의.
  hitAt(x: number, z: number, r: number): boolean {
    let any = false;
    for (let i = 0; i < OBJ_CAP; i++) {
      if (this.alive[i] === 0 || this.kind[i] !== KIND_BARREL) continue;
      const dx = x - this.x[i];
      const dz = z - this.z[i];
      const rr = r + 0.7;
      if (dx * dx + dz * dz <= rr * rr) {
        this.explode(i);
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

  render(time: number): void {
    let w = 0;
    for (let i = 0; i < OBJ_CAP; i++) {
      if (this.alive[i] === 0) continue;
      const m = w * 16;
      const bob = 0.55 + Math.sin(time * 3 + i) * 0.06;
      this.matArr[m] = 1;
      this.matArr[m + 5] = 1;
      this.matArr[m + 10] = 1;
      this.matArr[m + 12] = this.x[i];
      this.matArr[m + 13] = bob;
      this.matArr[m + 14] = this.z[i];
      this.matArr[m + 15] = 1;
      const c = w * 3;
      // 화약통=적갈색, 만두=금색, 사당=청록 발광
      if (this.kind[i] === KIND_BARREL) { this.colArr[c] = 1.4; this.colArr[c + 1] = 0.5; this.colArr[c + 2] = 0.2; }
      else if (this.kind[i] === KIND_DUMPLING) { this.colArr[c] = 2.4; this.colArr[c + 1] = 1.9; this.colArr[c + 2] = 0.6; }
      else { this.colArr[c] = 0.6; this.colArr[c + 1] = 2.0; this.colArr[c + 2] = 1.8; }
      w++;
    }
    this.mesh.count = w;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.colAttr.needsUpdate = true;
  }
}
