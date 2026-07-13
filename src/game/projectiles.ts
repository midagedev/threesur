import {
  Scene,
  PlaneGeometry,
  InstancedMesh,
  InstancedBufferAttribute,
  ShaderMaterial,
  AdditiveBlending,
  DynamicDrawUsage,
} from 'three';
import type { EnemyPool } from './enemies';
import type { SpatialHash } from './collision';
import type { DamageText } from '../gfx/damageText';
import type { ParticleSystem } from '../gfx/particles';
import type { EffectsSystem } from '../gfx/effects';
import { RetroProjectileBatch } from '../gfx/projectileSprites';
import { ArrowMeshBatch } from '../gfx/meshProjectiles';
import type { LightUniforms } from '../gfx/lightField';

const CAP = 384;
const HITMAX = 8; // 관통 시 중복 타격 방지용 최근 타격 목록 크기

// 시각 종류
export const PK_ARROW = 0;
export const PK_TALISMAN = 1;
export const PK_SLASHWAVE = 2;
export const PK_ORB = 3;
export const PK_CAVALRY = 4;
export const PK_FIRE_ARROW = 5; // 원융노(진화) 화염 화살

// 플레이어 투사체 풀. SoA 시뮬 + 지면정렬 발광 쿼드 InstancedMesh 렌더.
// 관통/유도/궤도(팔진도)/기마(서량철기) 모드를 하나로 처리.
export class ProjectilePool {
  private readonly x = new Float32Array(CAP);
  private readonly z = new Float32Array(CAP);
  private readonly vx = new Float32Array(CAP);
  private readonly vz = new Float32Array(CAP);
  private readonly life = new Float32Array(CAP);
  private readonly invDur = new Float32Array(CAP);
  private readonly damage = new Float32Array(CAP);
  private readonly radius = new Float32Array(CAP);
  private readonly pierce = new Int16Array(CAP);
  private readonly homing = new Uint8Array(CAP);
  private readonly turn = new Float32Array(CAP);
  private readonly kind = new Uint8Array(CAP);
  private readonly cr = new Float32Array(CAP);
  private readonly cg = new Float32Array(CAP);
  private readonly cb = new Float32Array(CAP);
  private readonly len = new Float32Array(CAP);
  private readonly wid = new Float32Array(CAP);
  private readonly hy = new Float32Array(CAP);
  private readonly mode = new Uint8Array(CAP); // 0 직진 / 1 궤도
  private readonly oAng = new Float32Array(CAP);
  private readonly oRad = new Float32Array(CAP);
  private readonly oVel = new Float32Array(CAP);
  private readonly atkT = new Float32Array(CAP);
  private readonly dusty = new Uint8Array(CAP);
  private readonly trailT = new Float32Array(CAP);
  private readonly alive = new Uint8Array(CAP);
  private readonly hits = new Int32Array(CAP * HITMAX);
  private readonly hitN = new Uint8Array(CAP);
  private readonly free = new Int32Array(CAP);
  private freeTop = 0;

  private readonly mesh: InstancedMesh;
  private readonly matArr: Float32Array;
  private readonly colArr: Float32Array;
  private readonly kindArr: Float32Array;
  private readonly fadeArr: Float32Array;
  private readonly colAttr: InstancedBufferAttribute;
  private readonly kindAttr: InstancedBufferAttribute;
  private readonly fadeAttr: InstancedBufferAttribute;
  private readonly spriteBatches: RetroProjectileBatch[];
  private readonly arrows: ArrowMeshBatch;

  constructor(scene: Scene, light: LightUniforms) {
    for (let i = 0; i < CAP; i++) this.free[i] = CAP - 1 - i;
    this.freeTop = CAP;

    const geo = new PlaneGeometry(1, 1, 1, 1);
    geo.rotateX(-Math.PI / 2); // XZ 평면에 눕힘 (중심 원점)
    this.colArr = new Float32Array(CAP * 3);
    this.kindArr = new Float32Array(CAP);
    this.fadeArr = new Float32Array(CAP);
    this.colAttr = new InstancedBufferAttribute(this.colArr, 3);
    this.kindAttr = new InstancedBufferAttribute(this.kindArr, 1);
    this.fadeAttr = new InstancedBufferAttribute(this.fadeArr, 1);
    this.colAttr.setUsage(DynamicDrawUsage);
    this.fadeAttr.setUsage(DynamicDrawUsage);
    geo.setAttribute('aColor', this.colAttr);
    geo.setAttribute('aKind', this.kindAttr);
    geo.setAttribute('aFade', this.fadeAttr);

    const mat = new ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: /* glsl */ `
        attribute vec3 aColor;
        attribute float aKind;
        attribute float aFade;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vKind;
        varying float vFade;
        void main() {
          vUv = uv;
          vColor = aColor;
          vKind = aKind;
          vFade = aFade;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vKind;
        varying float vFade;
        void main() {
          vec2 p = vUv - 0.5;
          float along = vUv.x;      // 0..1 (진행 방향 +X)
          float across = abs(p.y) * 2.0;
          float b = 0.0;
          if (vKind < 0.5) {
            // 화살: 뾰족한 머리 + 꼬리 스트릭
            float body = smoothstep(1.0, 0.35, across);
            float head = smoothstep(0.2, 1.0, along);
            float tail = smoothstep(0.0, 0.5, along);
            b = body * mix(tail, 1.0, head) * (0.6 + head);
          } else if (vKind < 1.5) {
            // 부적: 부드러운 발광 블롭 + 짧은 꼬리 + 룬 깜빡임
            float blob = smoothstep(0.6, 0.0, length(p));
            float tailg = smoothstep(0.0, 0.6, along) * smoothstep(1.0, 0.4, across);
            float flick = 0.75 + 0.25 * sin(uTime * 20.0 + vUv.x * 6.0);
            b = (blob + tailg * 0.4) * flick;
          } else if (vKind < 2.5) {
            // 참격파: 넓은 크레센트 밴드
            float band = smoothstep(1.0, 0.2, across) * smoothstep(0.0, 0.3, along) * (1.0 - smoothstep(0.8, 1.0, along));
            b = band * 1.2;
          } else if (vKind < 3.5) {
            // 태극 오브: 이중 소용돌이 발광 구슬
            float r = length(p) * 2.0;
            float disc = smoothstep(1.0, 0.0, r);
            float swirl = 0.5 + 0.5 * sin(atan(p.y, p.x) * 2.0 + uTime * 6.0 + r * 4.0);
            b = disc * (0.6 + 0.5 * swirl);
          } else if (vKind < 4.5) {
            // 기마 돌격: 길고 강한 스트릭
            float body = smoothstep(1.0, 0.2, across);
            float streak = smoothstep(0.0, 0.3, along) * (1.0 - smoothstep(0.7, 1.0, along) * 0.5);
            b = body * streak * 1.3;
          } else {
            // 화염 화살(원융노): 화살형 후광
            float body = smoothstep(1.0, 0.35, across);
            float head = smoothstep(0.2, 1.0, along);
            float tail = smoothstep(0.0, 0.5, along);
            b = body * mix(tail, 1.0, head) * (0.6 + head);
          }
          if (b <= 0.001) discard;
          // 생성 스프라이트가 본체를 담당한다. 이 셰이더는 뒤쪽 후광/속도선만 얇게 맡는다.
          gl_FragColor = vec4(vColor * b * 0.34, b * vFade * 0.2);
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
      new RetroProjectileBatch(scene, 'player-arrow-basic', CAP),
      new RetroProjectileBatch(scene, 'talisman', CAP),
      new RetroProjectileBatch(scene, 'slash-wave', CAP),
      new RetroProjectileBatch(scene, 'bagua-orb', CAP),
      new RetroProjectileBatch(scene, 'cavalry', CAP),
      new RetroProjectileBatch(scene, 'player-arrow', CAP), // 원융노 화염 화살
    ];
    // 화살 계열은 스프라이트 대신 진짜 3D 메시로(부피감 + 광원 수광).
    this.arrows = new ArrowMeshBatch(scene, CAP, light);
  }

  get object(): InstancedMesh {
    return this.mesh;
  }

  reset(): void {
    this.alive.fill(0);
    for (let i = 0; i < CAP; i++) this.free[i] = CAP - 1 - i;
    this.freeTop = CAP;
  }

  private acquire(): number {
    if (this.freeTop === 0) return -1;
    return this.free[--this.freeTop];
  }

  // 직진/유도 투사체 발사.
  spawn(
    x: number,
    z: number,
    dirX: number,
    dirZ: number,
    speed: number,
    damage: number,
    radius: number,
    pierce: number,
    life: number,
    kind: number,
    r: number,
    g: number,
    b: number,
    len: number,
    wid: number,
    homing = false,
    turn = 6,
    dusty = false,
  ): void {
    const i = this.acquire();
    if (i < 0) return;
    this.x[i] = x;
    this.z[i] = z;
    this.vx[i] = dirX * speed;
    this.vz[i] = dirZ * speed;
    this.life[i] = life;
    this.invDur[i] = 1 / life;
    this.damage[i] = damage;
    this.radius[i] = radius;
    this.pierce[i] = pierce;
    this.homing[i] = homing ? 1 : 0;
    this.turn[i] = turn;
    this.kind[i] = kind;
    this.cr[i] = r;
    this.cg[i] = g;
    this.cb[i] = b;
    this.len[i] = len;
    this.wid[i] = wid;
    this.hy[i] = kind === PK_SLASHWAVE ? 0.7 : kind === PK_ORB ? 0.9 : 1.0;
    this.mode[i] = 0;
    this.dusty[i] = dusty ? 1 : 0;
    this.trailT[i] = 0;
    this.hitN[i] = 0;
    this.alive[i] = 1;
  }

  // 궤도 오브 (팔진도). 플레이어를 중심으로 공전.
  spawnOrbit(angle: number, radius: number, angVel: number, damage: number, r: number, g: number, b: number, size: number): void {
    const i = this.acquire();
    if (i < 0) return;
    this.mode[i] = 1;
    this.oAng[i] = angle;
    this.oRad[i] = radius;
    this.oVel[i] = angVel;
    this.damage[i] = damage;
    this.radius[i] = size * 0.6;
    this.kind[i] = PK_ORB;
    this.cr[i] = r;
    this.cg[i] = g;
    this.cb[i] = b;
    this.len[i] = size;
    this.wid[i] = size;
    this.hy[i] = 0.9;
    this.atkT[i] = 0;
    this.life[i] = 1;
    this.invDur[i] = 0;
    this.dusty[i] = 0;
    this.trailT[i] = 0;
    this.alive[i] = 1;
  }

  clearOrbits(): void {
    for (let i = 0; i < CAP; i++) {
      if (this.alive[i] === 1 && this.mode[i] === 1) {
        this.alive[i] = 0;
        this.free[this.freeTop++] = i;
      }
    }
  }

  // 궤도 오브의 대미지/반경/각속도를 매 프레임 최신 스탯으로 갱신(각도는 유지).
  refreshOrbits(damage: number, radius: number, angVel: number): void {
    for (let i = 0; i < CAP; i++) {
      if (this.alive[i] === 1 && this.mode[i] === 1) {
        this.damage[i] = damage;
        this.oRad[i] = radius;
        this.oVel[i] = angVel;
      }
    }
  }

  countOrbits(): number {
    let n = 0;
    for (let i = 0; i < CAP; i++) if (this.alive[i] === 1 && this.mode[i] === 1) n++;
    return n;
  }

  private tryHit(
    i: number,
    enemies: EnemyPool,
    hash: SpatialHash,
    damageText: DamageText,
    onKill: (idx: number) => void,
    scratch: number[],
    orbitPulse: boolean,
    particles: ParticleSystem,
    effects: EffectsSystem,
  ): void {
    const px = this.x[i];
    const pz = this.z[i];
    const rq = this.radius[i] + 0.7;
    const n = hash.query(px, pz, rq, scratch);
    const isOrbit = this.mode[i] === 1;
    const base = i * HITMAX;
    for (let c = 0; c < n; c++) {
      const j = scratch[c];
      if (enemies.alive[j] === 0) continue;
      const dx = enemies.x[j] - px;
      const dz = enemies.z[j] - pz;
      const rr = this.radius[i] + enemies.radius[j];
      if (dx * dx + dz * dz > rr * rr) continue;
      if (isOrbit) {
        if (!orbitPulse) continue;
      } else {
        // 관통: 이미 때린 적 스킵
        let dup = false;
        const cnt = this.hitN[i];
        for (let h = 0; h < cnt; h++) {
          if (this.hits[base + h] === j) {
            dup = true;
            break;
          }
        }
        if (dup) continue;
        if (cnt < HITMAX) this.hits[base + this.hitN[i]++] = j;
      }
      const dmg = this.damage[i];
      const died = enemies.damageAt(j, dmg);
      damageText.spawn(dmg, enemies.x[j], enemies.scale[j] * 0.7, enemies.z[j], false);
      particles.projectileImpact(
        enemies.x[j], enemies.z[j], this.cr[i], this.cg[i], this.cb[i], this.kind[i],
      );
      if (this.kind[i] === PK_SLASHWAVE) {
        effects.spawnRing(enemies.x[j], enemies.z[j], 1.5, this.cr[i], this.cg[i], this.cb[i], 0.2);
      } else if (this.kind[i] === PK_ORB && orbitPulse) {
        effects.spawnRing(enemies.x[j], enemies.z[j], 0.75, this.cr[i], this.cg[i], this.cb[i], 0.18);
      } else if (this.kind[i] === PK_CAVALRY) {
        effects.spawnRing(enemies.x[j], enemies.z[j], 1.9, 1.5, 0.75, 0.35, 0.24);
      }
      // 기술별 넉백: 기마=강하게 진행방향으로 쓸어냄, 참격파=중간, 오브=접촉 시 살짝
      if (!died) {
        if (this.kind[i] === PK_CAVALRY || this.kind[i] === PK_SLASHWAVE) {
          const sp = Math.hypot(this.vx[i], this.vz[i]) || 1;
          enemies.push(j, this.vx[i] / sp, this.vz[i] / sp, this.kind[i] === PK_CAVALRY ? 7 : 3);
        } else if (isOrbit) {
          const dx = enemies.x[j] - px;
          const dz = enemies.z[j] - pz;
          const d = Math.hypot(dx, dz) || 1;
          enemies.push(j, dx / d, dz / d, 2);
        }
      }
      if (died) onKill(j);
      if (!isOrbit) {
        this.pierce[i]--;
        if (this.pierce[i] < 0) {
          this.kill(i);
          return;
        }
      }
    }
  }

  private kill(i: number): void {
    this.alive[i] = 0;
    this.free[this.freeTop++] = i;
  }

  update(
    dt: number,
    px: number,
    pz: number,
    enemies: EnemyPool,
    hash: SpatialHash,
    damageText: DamageText,
    onKill: (idx: number) => void,
    particles: ParticleSystem,
    effects: EffectsSystem,
    scratch: number[],
  ): void {
    for (let i = 0; i < CAP; i++) {
      if (this.alive[i] === 0) continue;
      if (this.mode[i] === 1) {
        // 궤도 오브
        this.oAng[i] += this.oVel[i] * dt;
        this.x[i] = px + Math.cos(this.oAng[i]) * this.oRad[i];
        this.z[i] = pz + Math.sin(this.oAng[i]) * this.oRad[i];
        this.atkT[i] -= dt;
        const pulse = this.atkT[i] <= 0;
        if (pulse) this.atkT[i] = 0.3;
        this.trailT[i] -= dt;
        if (this.trailT[i] <= 0) {
          particles.projectileTrail(
            this.x[i], this.z[i], 0, 0, this.cr[i], this.cg[i], this.cb[i], this.kind[i],
          );
          this.trailT[i] = 0.09;
        }
        this.tryHit(i, enemies, hash, damageText, onKill, scratch, pulse, particles, effects);
        continue;
      }
      // 유도
      if (this.homing[i]) {
        const t = findNearest(enemies, hash, this.x[i], this.z[i], 9, scratch);
        if (t >= 0) {
          const dx = enemies.x[t] - this.x[i];
          const dz = enemies.z[t] - this.z[i];
          const d = Math.hypot(dx, dz) || 1;
          const sp = Math.hypot(this.vx[i], this.vz[i]);
          const k = Math.min(1, this.turn[i] * dt);
          this.vx[i] += (dx / d * sp - this.vx[i]) * k;
          this.vz[i] += (dz / d * sp - this.vz[i]) * k;
        }
      }
      this.x[i] += this.vx[i] * dt;
      this.z[i] += this.vz[i] * dt;
      if (this.dusty[i]) particles.dust(this.x[i], this.z[i]);
      this.trailT[i] -= dt;
      if (this.trailT[i] <= 0) {
        particles.projectileTrail(
          this.x[i], this.z[i], this.vx[i], this.vz[i], this.cr[i], this.cg[i], this.cb[i], this.kind[i],
        );
        this.trailT[i] = this.kind[i] === PK_CAVALRY ? 0.035 : this.kind[i] === PK_ARROW ? 0.08 : 0.055;
      }
      this.tryHit(i, enemies, hash, damageText, onKill, scratch, false, particles, effects);
      if (this.alive[i] === 0) continue;
      this.life[i] -= dt;
      if (this.life[i] <= 0) this.kill(i);
    }
  }

  render(time: number): void {
    (this.mesh.material as ShaderMaterial).uniforms.uTime.value = time;
    for (const batch of this.spriteBatches) batch.begin(time);
    this.arrows.begin();
    let w = 0;
    for (let i = 0; i < CAP; i++) {
      if (this.alive[i] === 0) continue;
      const m = w * 16;
      let theta: number;
      let sx: number;
      let sz: number;
      if (this.mode[i] === 1 || this.kind[i] === PK_ORB) {
        theta = time * 3; // 오브는 자체 회전
        sx = this.len[i];
        sz = this.wid[i];
      } else {
        theta = Math.atan2(-this.vz[i], this.vx[i]);
        sx = this.len[i];
        sz = this.wid[i];
      }
      const ct = Math.cos(theta);
      const st = Math.sin(theta);
      this.matArr[m] = ct * sx;
      this.matArr[m + 1] = 0;
      this.matArr[m + 2] = -st * sx;
      this.matArr[m + 3] = 0;
      this.matArr[m + 4] = 0;
      this.matArr[m + 5] = 1;
      this.matArr[m + 6] = 0;
      this.matArr[m + 7] = 0;
      this.matArr[m + 8] = st * sz;
      this.matArr[m + 9] = 0;
      this.matArr[m + 10] = ct * sz;
      this.matArr[m + 11] = 0;
      this.matArr[m + 12] = this.x[i];
      this.matArr[m + 13] = this.hy[i];
      this.matArr[m + 14] = this.z[i];
      this.matArr[m + 15] = 1;
      const c = w * 3;
      this.colArr[c] = this.cr[i];
      this.colArr[c + 1] = this.cg[i];
      this.colArr[c + 2] = this.cb[i];
      this.kindArr[w] = this.kind[i];
      // 수명 끝/시작 페이드 (직진만)
      let fade = 1;
      if (this.mode[i] === 0) {
        const lt = this.life[i] * this.invDur[i];
        fade = Math.min(1, lt * 4) * Math.min(1, (1 - lt) * 6 + 0.3);
      }
      this.fadeArr[w] = fade;
      const artScale = this.kind[i] === PK_CAVALRY
        ? this.len[i]
        : this.kind[i] === PK_SLASHWAVE
          ? Math.max(this.len[i], this.wid[i])
          : this.len[i] * 1.18;
      const isArrow = this.kind[i] === PK_ARROW || this.kind[i] === PK_FIRE_ARROW;
      if (isArrow) {
        // 3D 화살 메시: 스프라이트 본체를 대체(후광 쿼드는 유지).
        this.arrows.push(
          this.x[i], this.hy[i] + 0.2, this.z[i], theta,
          this.len[i] * 1.05, Math.max(this.wid[i], 0.5) * 1.05,
          this.cr[i], this.cg[i], this.cb[i], fade,
        );
      } else {
        this.spriteBatches[this.kind[i]].push(
          this.x[i], this.hy[i] + 0.055, this.z[i], theta, artScale, artScale, fade,
        );
      }
      w++;
    }
    this.mesh.count = w;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.colAttr.needsUpdate = true;
    this.kindAttr.needsUpdate = true;
    this.fadeAttr.needsUpdate = true;
    for (const batch of this.spriteBatches) batch.end();
    this.arrows.end();
  }
}

// projectiles 내부 전용 최근접(유도 타게팅). collision.findNearestEnemy와 동일 로직.
function findNearest(
  enemies: EnemyPool,
  hash: SpatialHash,
  px: number,
  pz: number,
  maxR: number,
  scratch: number[],
): number {
  const n = hash.query(px, pz, maxR, scratch);
  let best = -1;
  let bestD = maxR * maxR;
  for (let c = 0; c < n; c++) {
    const j = scratch[c];
    if (enemies.alive[j] === 0) continue;
    const dx = enemies.x[j] - px;
    const dz = enemies.z[j] - pz;
    const d2 = dx * dx + dz * dz;
    if (d2 < bestD) {
      bestD = d2;
      best = j;
    }
  }
  return best;
}
