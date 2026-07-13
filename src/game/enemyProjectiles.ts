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

export const EK_ARROW = 0;
export const EK_STRATEGIST = 1;
export const EK_FIREBALL = 2;
export const EK_POISON = 3;
export const EK_LIGHTNING = 4;
export const EK_HEAVY = 5;
const ENEMY_PROJECTILE_KINDS = 6;

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
  private readonly turn = new Float32Array(CAP);
  private readonly kind = new Uint8Array(CAP);
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
  // 적탄 지면 위험 표식: 붉은 점 그림자로 위치를 바닥에 항상 찍는다(피할 대상이 제일 잘 보이게).
  private readonly dots: InstancedMesh;
  private readonly dotArr: Float32Array;

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
          // 적탄은 "피해야 할 대상" — 후광을 아군보다 또렷하게(0.42) 태워 위험을 강조.
          gl_FragColor = vec4(vColor * b * 0.42, b * 0.34);
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

    // 붉은 지면 위험 점(애디티브). 적탄 위치를 바닥에 항상 표기.
    const dotGeo = new PlaneGeometry(1, 1);
    dotGeo.rotateX(-Math.PI / 2);
    const dotMat = new ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0); }
      `,
      fragmentShader: /* glsl */ `
        uniform float uTime;
        varying vec2 vUv;
        void main() {
          float r = length(vUv - 0.5) * 2.0;
          if (r > 1.0) discard;
          float ring = smoothstep(1.0, 0.55, r) * smoothstep(0.15, 0.5, r); // 링
          float core = smoothstep(0.4, 0.0, r) * 0.6;
          float pulse = 0.75 + 0.25 * sin(uTime * 9.0);
          float b = (ring + core) * pulse;
          gl_FragColor = vec4(vec3(2.2, 0.15, 0.12) * b, b * 0.7);
        }
      `,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
      depthTest: true,
    });
    this.dots = new InstancedMesh(dotGeo, dotMat, CAP);
    this.dots.instanceMatrix.setUsage(DynamicDrawUsage);
    this.dots.frustumCulled = false;
    this.dots.count = 0;
    this.dots.renderOrder = 1; // 지면
    this.dotArr = this.dots.instanceMatrix.array as Float32Array;
    scene.add(this.dots);
    this.spriteBatches = [
      new RetroProjectileBatch(scene, 'enemy-arrow', CAP, 5, 0.92), // 기본 궁수: 깔끔한 단발 화살
      new RetroProjectileBatch(scene, 'enemy-orb', CAP, 5, 0.92), // 책사 마탄: 어두운 구체(플레이어 부적과 구분)
      new RetroProjectileBatch(scene, 'boss-fireball', CAP, 5, 0.92),
      new RetroProjectileBatch(scene, 'boss-poison-orb', CAP, 5, 0.92),
      new RetroProjectileBatch(scene, 'boss-lightning-spear', CAP, 5, 0.92),
      new RetroProjectileBatch(scene, 'boss-heavy-shot', CAP, 5, 0.92),
    ];
  }

  get object(): InstancedMesh {
    return this.mesh;
  }

  get activeCount(): number {
    return CAP - this.freeTop;
  }

  get kindCounts(): number[] {
    const counts = new Array<number>(ENEMY_PROJECTILE_KINDS).fill(0);
    for (let i = 0; i < CAP; i++) {
      if (this.alive[i]) counts[this.kind[i]]++;
    }
    return counts;
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
    const safeKind = Math.max(EK_ARROW, Math.min(EK_HEAVY, kind | 0));
    this.life[i] = homing ? 4.5 : safeKind === EK_HEAVY ? 3.8 : 3.0;
    this.damage[i] = damage;
    this.homing[i] = homing ? 1 : 0;
    this.kind[i] = safeKind;
    this.trailT[i] = 0;
    switch (safeKind) {
      case EK_STRATEGIST:
        this.cr[i] = 1.55; this.cg[i] = 0.5; this.cb[i] = 2.25;
        this.size[i] = 1.05; this.radius[i] = 0.4; this.turn[i] = 3.0;
        break;
      case EK_FIREBALL:
        this.cr[i] = 2.5; this.cg[i] = 0.65; this.cb[i] = 0.18;
        this.size[i] = 1.35; this.radius[i] = 0.48; this.turn[i] = 0;
        break;
      case EK_POISON:
        this.cr[i] = 0.6; this.cg[i] = 2.05; this.cb[i] = 1.0;
        this.size[i] = 1.18; this.radius[i] = 0.45; this.turn[i] = 1.35;
        break;
      case EK_LIGHTNING:
        // 적 = 위험(자마젠타). 아군 청백 낙뢰와 확실히 구분.
        this.cr[i] = 1.9; this.cg[i] = 0.55; this.cb[i] = 2.55;
        this.size[i] = 1.5; this.radius[i] = 0.38; this.turn[i] = 0;
        break;
      case EK_HEAVY:
        this.cr[i] = 2.65; this.cg[i] = 0.95; this.cb[i] = 0.22;
        this.size[i] = 1.7; this.radius[i] = 0.65; this.turn[i] = 0;
        break;
      default:
        // 적 기본 궁수 = 진홍(아군 금색 화살과 구분).
        this.cr[i] = 2.5; this.cg[i] = 0.5; this.cb[i] = 0.38;
        this.size[i] = 1.3; this.radius[i] = 0.3; this.turn[i] = 0;
        break;
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
        const k = Math.min(1, this.turn[i] * dt);
        this.vx[i] += ((dx / d) * sp - this.vx[i]) * k;
        this.vz[i] += ((dz / d) * sp - this.vz[i]) * k;
      }
      this.x[i] += this.vx[i] * dt;
      this.z[i] += this.vz[i] * dt;
      this.trailT[i] -= dt;
      if (this.trailT[i] <= 0) {
        particles.projectileTrail(
          this.x[i], this.z[i], this.vx[i], this.vz[i], this.cr[i], this.cg[i], this.cb[i],
          this.kind[i] === EK_ARROW ? 0 : 3,
        );
        this.trailT[i] = this.kind[i] === EK_ARROW ? 0.09 : 0.055;
      }
      const dx = px - this.x[i];
      const dz = pz - this.z[i];
      const rr = this.radius[i] + r2base;
      if (dx * dx + dz * dz <= rr * rr) {
        particles.projectileImpact(
          this.x[i], this.z[i], this.cr[i], this.cg[i], this.cb[i], this.kind[i] === EK_ARROW ? 0 : 3,
        );
        if (this.kind[i] !== EK_ARROW) {
          const ring = this.kind[i] === EK_HEAVY ? 2.1 : this.kind[i] === EK_FIREBALL ? 1.65 : 1.25;
          effects.spawnRing(this.x[i], this.z[i], ring, this.cr[i], this.cg[i], this.cb[i], 0.24);
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
    (this.dots.material as ShaderMaterial).uniforms.uTime.value = time;
    for (const batch of this.spriteBatches) batch.begin(time);
    let w = 0;
    for (let i = 0; i < CAP; i++) {
      if (this.alive[i] === 0) continue;
      const m = w * 16;
      const theta = Math.atan2(-this.vz[i], this.vx[i]);
      const ct = Math.cos(theta);
      const st = Math.sin(theta);
      const elongated = this.kind[i] === EK_ARROW || this.kind[i] === EK_LIGHTNING || this.kind[i] === EK_HEAVY;
      const sx = elongated ? this.size[i] * 1.6 : this.size[i];
      const sz = elongated ? this.size[i] * 0.5 : this.size[i];
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
      let artScaleX = this.size[i] * 1.4;
      let artScaleZ = artScaleX;
      if (this.kind[i] === EK_ARROW) {
        artScaleX = this.size[i] * 1.8;
        artScaleZ = this.size[i] * 0.58;
      } else if (this.kind[i] === EK_LIGHTNING) {
        artScaleX = this.size[i] * 1.9;
        artScaleZ = this.size[i] * 0.68;
      } else if (this.kind[i] === EK_HEAVY) {
        artScaleX = this.size[i] * 1.65;
        artScaleZ = this.size[i] * 0.82;
      }
      this.spriteBatches[this.kind[i]].push(
        this.x[i], 1.055, this.z[i], theta, artScaleX, artScaleZ, 1,
      );
      // 붉은 지면 위험 점(투사체보다 살짝 크게, 위치 표기)
      const dm = w * 16;
      const dsize = (this.radius[i] + 0.55) * 2;
      this.dotArr[dm] = dsize;
      this.dotArr[dm + 5] = 1;
      this.dotArr[dm + 10] = dsize;
      this.dotArr[dm + 12] = this.x[i];
      this.dotArr[dm + 13] = 0.05;
      this.dotArr[dm + 14] = this.z[i];
      this.dotArr[dm + 15] = 1;
      w++;
    }
    this.mesh.count = w;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.colAttr.needsUpdate = true;
    this.kindAttr.needsUpdate = true;
    this.dots.count = w;
    this.dots.instanceMatrix.needsUpdate = true;
    for (const batch of this.spriteBatches) batch.end();
  }
}
