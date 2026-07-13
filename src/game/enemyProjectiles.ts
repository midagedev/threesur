import {
  Scene,
  PlaneGeometry,
  InstancedMesh,
  InstancedBufferAttribute,
  ShaderMaterial,
  AdditiveBlending,
  DynamicDrawUsage,
} from 'three';
import type { ParticleSystem } from '../gfx/particles';
import type { EffectsSystem } from '../gfx/effects';
import { RetroProjectileBatch } from '../gfx/projectileSprites';

const CAP = 256;

// 적 원거리 투사체 풀 (궁수 화살 / 책사 유도 마탄). 플레이어 피격 판정.
export class EnemyProjectilePool {
  private readonly x = new Float32Array(CAP);
  private readonly z = new Float32Array(CAP);
  private readonly vx = new Float32Array(CAP);
  private readonly vz = new Float32Array(CAP);
  private readonly life = new Float32Array(CAP);
  private readonly damage = new Float32Array(CAP);
  private readonly radius = new Float32Array(CAP);
  private readonly homing = new Uint8Array(CAP);
  private readonly kind = new Uint8Array(CAP); // 0 화살 / 1 마탄
  private readonly cr = new Float32Array(CAP);
  private readonly cg = new Float32Array(CAP);
  private readonly cb = new Float32Array(CAP);
  private readonly size = new Float32Array(CAP);
  private readonly trailT = new Float32Array(CAP);
  private readonly alive = new Uint8Array(CAP);
  private readonly free = new Int32Array(CAP);
  private freeTop = 0;

  private readonly mesh: InstancedMesh;
  private readonly matArr: Float32Array;
  private readonly colArr: Float32Array;
  private readonly kindArr: Float32Array;
  private readonly colAttr: InstancedBufferAttribute;
  private readonly kindAttr: InstancedBufferAttribute;
  private readonly spriteBatches: RetroProjectileBatch[];

  constructor(scene: Scene) {
    for (let i = 0; i < CAP; i++) this.free[i] = CAP - 1 - i;
    this.freeTop = CAP;

    const geo = new PlaneGeometry(1, 1, 1, 1);
    geo.rotateX(-Math.PI / 2);
    this.colArr = new Float32Array(CAP * 3);
    this.kindArr = new Float32Array(CAP);
    this.colAttr = new InstancedBufferAttribute(this.colArr, 3);
    this.kindAttr = new InstancedBufferAttribute(this.kindArr, 1);
    this.colAttr.setUsage(DynamicDrawUsage);
    geo.setAttribute('aColor', this.colAttr);
    geo.setAttribute('aKind', this.kindAttr);

    const mat = new ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: /* glsl */ `
        attribute vec3 aColor;
        attribute float aKind;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vKind;
        void main() {
          vUv = uv;
          vColor = aColor;
          vKind = aKind;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vKind;
        void main() {
          vec2 p = vUv - 0.5;
          float b;
          if (vKind < 0.5) {
            float body = smoothstep(1.0, 0.4, abs(p.y)*2.0);
            float head = smoothstep(0.2, 1.0, vUv.x);
            b = body * (0.4 + head);
          } else {
            float r = length(p) * 2.0;
            float pulse = 0.8 + 0.2 * sin(uTime * 12.0);
            b = smoothstep(1.0, 0.0, r) * pulse;
          }
          if (b <= 0.01) discard;
          gl_FragColor = vec4(vColor * b * 0.75, b * 0.4);
        }
      `,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
      depthTest: true,
    });

    this.mesh = new InstancedMesh(geo, mat, CAP);
    this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.count = 0;
    this.mesh.renderOrder = 4;
    this.matArr = this.mesh.instanceMatrix.array as Float32Array;
    scene.add(this.mesh);
    this.spriteBatches = [
      new RetroProjectileBatch(scene, 'enemy-arrow', CAP),
      new RetroProjectileBatch(scene, 'enemy-orb', CAP),
    ];
  }

  get object(): InstancedMesh {
    return this.mesh;
  }

  get activeCount(): number {
    return CAP - this.freeTop;
  }

  reset(): void {
    this.alive.fill(0);
    for (let i = 0; i < CAP; i++) this.free[i] = CAP - 1 - i;
    this.freeTop = CAP;
  }

  spawn(
    x: number,
    z: number,
    dirX: number,
    dirZ: number,
    speed: number,
    damage: number,
    homing: boolean,
    kind: number,
  ): void {
    if (this.freeTop === 0) return;
    const i = this.free[--this.freeTop];
    this.x[i] = x;
    this.z[i] = z;
    this.vx[i] = dirX * speed;
    this.vz[i] = dirZ * speed;
    this.life[i] = homing ? 4.5 : 3.0;
    this.damage[i] = damage;
    this.radius[i] = 0.35;
    this.homing[i] = homing ? 1 : 0;
    this.kind[i] = kind;
    this.trailT[i] = 0;
    if (kind === 1) {
      this.cr[i] = 1.6;
      this.cg[i] = 0.5;
      this.cb[i] = 2.2;
      this.size[i] = 1.0;
    } else {
      this.cr[i] = 2.2;
      this.cg[i] = 1.0;
      this.cb[i] = 0.6;
      this.size[i] = 1.4;
    }
    this.alive[i] = 1;
  }

  update(
    dt: number,
    px: number,
    pz: number,
    playerR: number,
    hitPlayer: (dmg: number) => boolean,
    particles: ParticleSystem,
    effects: EffectsSystem,
  ): void {
    const r2base = playerR;
    for (let i = 0; i < CAP; i++) {
      if (this.alive[i] === 0) continue;
      if (this.homing[i]) {
        const dx = px - this.x[i];
        const dz = pz - this.z[i];
        const d = Math.hypot(dx, dz) || 1;
        const sp = Math.hypot(this.vx[i], this.vz[i]);
        const k = Math.min(1, 2.2 * dt);
        this.vx[i] += ((dx / d) * sp - this.vx[i]) * k;
        this.vz[i] += ((dz / d) * sp - this.vz[i]) * k;
      }
      this.x[i] += this.vx[i] * dt;
      this.z[i] += this.vz[i] * dt;
      this.trailT[i] -= dt;
      if (this.trailT[i] <= 0) {
        particles.projectileTrail(
          this.x[i], this.z[i], this.vx[i], this.vz[i], this.cr[i], this.cg[i], this.cb[i],
          this.kind[i] === 0 ? 0 : 3,
        );
        this.trailT[i] = this.kind[i] === 0 ? 0.09 : 0.055;
      }
      const dx = px - this.x[i];
      const dz = pz - this.z[i];
      const rr = this.radius[i] + r2base;
      if (dx * dx + dz * dz <= rr * rr) {
        particles.projectileImpact(
          this.x[i], this.z[i], this.cr[i], this.cg[i], this.cb[i], this.kind[i] === 0 ? 0 : 3,
        );
        if (this.kind[i] === 1) {
          effects.spawnRing(this.x[i], this.z[i], 1.25, this.cr[i], this.cg[i], this.cb[i], 0.24);
        }
        hitPlayer(this.damage[i]);
        this.alive[i] = 0;
        this.free[this.freeTop++] = i;
        continue;
      }
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        this.alive[i] = 0;
        this.free[this.freeTop++] = i;
      }
    }
  }

  render(time: number): void {
    (this.mesh.material as ShaderMaterial).uniforms.uTime.value = time;
    for (const batch of this.spriteBatches) batch.begin(time);
    let w = 0;
    for (let i = 0; i < CAP; i++) {
      if (this.alive[i] === 0) continue;
      const m = w * 16;
      const theta = Math.atan2(-this.vz[i], this.vx[i]);
      const ct = Math.cos(theta);
      const st = Math.sin(theta);
      const sx = this.kind[i] === 0 ? this.size[i] * 1.6 : this.size[i];
      const sz = this.kind[i] === 0 ? this.size[i] * 0.5 : this.size[i];
      this.matArr[m] = ct * sx;
      this.matArr[m + 2] = -st * sx;
      this.matArr[m + 5] = 1;
      this.matArr[m + 8] = st * sz;
      this.matArr[m + 10] = ct * sz;
      this.matArr[m + 12] = this.x[i];
      this.matArr[m + 13] = 1.0;
      this.matArr[m + 14] = this.z[i];
      this.matArr[m + 15] = 1;
      const c = w * 3;
      this.colArr[c] = this.cr[i];
      this.colArr[c + 1] = this.cg[i];
      this.colArr[c + 2] = this.cb[i];
      this.kindArr[w] = this.kind[i];
      const artScale = this.kind[i] === 0 ? this.size[i] * 1.75 : this.size[i] * 1.35;
      this.spriteBatches[this.kind[i]].push(
        this.x[i], 1.055, this.z[i], theta, artScale, artScale, 1,
      );
      w++;
    }
    this.mesh.count = w;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.colAttr.needsUpdate = true;
    this.kindAttr.needsUpdate = true;
    for (const batch of this.spriteBatches) batch.end();
  }
}
