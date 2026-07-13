import {
  Scene,
  CircleGeometry,
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

const CAP = 64;
const TICK = 0.25; // 도트 대미지 주기

// 화염 장판 풀 (화계 / 적벽업화). 지면 데칼(절차 노이즈 불꽃) + 상승 파티클 + 도트.
export class ZonePool {
  private readonly x = new Float32Array(CAP);
  private readonly z = new Float32Array(CAP);
  private readonly radius = new Float32Array(CAP);
  private readonly life = new Float32Array(CAP);
  private readonly maxLife = new Float32Array(CAP);
  private readonly dps = new Float32Array(CAP);
  private readonly vx = new Float32Array(CAP);
  private readonly vz = new Float32Array(CAP);
  private readonly tickT = new Float32Array(CAP);
  private readonly cr = new Float32Array(CAP);
  private readonly cg = new Float32Array(CAP);
  private readonly cb = new Float32Array(CAP);
  private readonly alive = new Uint8Array(CAP);
  private readonly free = new Int32Array(CAP);
  private freeTop = 0;

  private readonly mesh: InstancedMesh;
  private readonly matArr: Float32Array;
  private readonly colArr: Float32Array;
  private readonly fadeArr: Float32Array;
  private readonly colAttr: InstancedBufferAttribute;
  private readonly fadeAttr: InstancedBufferAttribute;
  // 화염 장판이 주변을 일렁이며 비추도록 동적 광원 방출 (run이 LightField로 주입).
  spawnLight: ((x: number, z: number, r: number, g: number, b: number, radius: number, life: number) => void) | null = null;

  constructor(scene: Scene) {
    for (let i = 0; i < CAP; i++) this.free[i] = CAP - 1 - i;
    this.freeTop = CAP;

    const geo = new CircleGeometry(1, 40);
    geo.rotateX(-Math.PI / 2);
    this.colArr = new Float32Array(CAP * 3);
    this.fadeArr = new Float32Array(CAP);
    this.colAttr = new InstancedBufferAttribute(this.colArr, 3);
    this.fadeAttr = new InstancedBufferAttribute(this.fadeArr, 1);
    this.colAttr.setUsage(DynamicDrawUsage);
    this.fadeAttr.setUsage(DynamicDrawUsage);
    geo.setAttribute('aColor', this.colAttr);
    geo.setAttribute('aFade', this.fadeAttr);

    const mat = new ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: /* glsl */ `
        attribute vec3 aColor;
        attribute float aFade;
        varying vec2 vLocal;
        varying vec3 vColor;
        varying float vFade;
        void main() {
          vLocal = position.xz; // -1..1 원반
          vColor = aColor;
          vFade = aFade;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float uTime;
        varying vec2 vLocal;
        varying vec3 vColor;
        varying float vFade;
        // 값 노이즈
        float hash(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453); }
        float noise(vec2 p){
          vec2 i = floor(p); vec2 f = fract(p);
          float a = hash(i), b = hash(i + vec2(1.0,0.0));
          float c = hash(i + vec2(0.0,1.0)), d = hash(i + vec2(1.0,1.0));
          vec2 u = f*f*(3.0-2.0*f);
          return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
        }
        void main() {
          float r = length(vLocal);
          if (r > 1.0) discard;
          float t = uTime;
          float n = noise(vLocal * 4.0 + vec2(0.0, -t * 1.6));
          n += 0.5 * noise(vLocal * 8.0 + vec2(t * 0.8, -t * 2.2));
          n /= 1.5;
          // 가장자리 일렁임 + 중심 발광 (과다 블룸 방지로 강도 억제)
          float edge = 1.0 - smoothstep(0.5, 1.0, r);
          float flame = edge * (0.3 + n * 0.65);
          float core = smoothstep(0.55, 0.0, r) * 0.25;
          float b = (flame + core) * vFade;
          if (b <= 0.01) discard;
          vec3 col = mix(vColor, vec3(1.7, 1.0, 0.35), core);
          gl_FragColor = vec4(col * b * 0.6, b * 0.85);
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
    this.mesh.renderOrder = 3;
    this.matArr = this.mesh.instanceMatrix.array as Float32Array;
    scene.add(this.mesh);
  }

  get object(): InstancedMesh {
    return this.mesh;
  }

  reset(): void {
    this.alive.fill(0);
    for (let i = 0; i < CAP; i++) this.free[i] = CAP - 1 - i;
    this.freeTop = CAP;
  }

  spawn(
    x: number,
    z: number,
    radius: number,
    life: number,
    dps: number,
    r = 2.4,
    g = 0.9,
    b = 0.25,
    vx = 0,
    vz = 0,
  ): void {
    if (this.freeTop === 0) return;
    const i = this.free[--this.freeTop];
    this.x[i] = x;
    this.z[i] = z;
    this.radius[i] = radius;
    this.life[i] = life;
    this.maxLife[i] = life;
    this.dps[i] = dps;
    this.vx[i] = vx;
    this.vz[i] = vz;
    this.tickT[i] = 0;
    this.cr[i] = r;
    this.cg[i] = g;
    this.cb[i] = b;
    this.alive[i] = 1;
  }

  update(
    dt: number,
    enemies: EnemyPool,
    hash: SpatialHash,
    damageText: DamageText,
    onKill: (idx: number) => void,
    particles: ParticleSystem,
    scratch: number[],
  ): void {
    for (let i = 0; i < CAP; i++) {
      if (this.alive[i] === 0) continue;
      this.x[i] += this.vx[i] * dt;
      this.z[i] += this.vz[i] * dt;
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        this.alive[i] = 0;
        this.free[this.freeTop++] = i;
        continue;
      }
      // 상승 불꽃 (프레임당 확률적, 풀 부담·블룸 억제)
      if (Math.random() < 0.22) particles.fireEmber(this.x[i], this.z[i], this.radius[i] * 0.8);
      // 일렁이는 화염 광원(짧은 수명으로 매 프레임 갱신 → 깜빡임)
      if (this.spawnLight && Math.random() < 0.55) {
        const fl = 0.35 + Math.random() * 0.3;
        this.spawnLight(this.x[i], this.z[i], this.cr[i] * fl, this.cg[i] * fl, this.cb[i] * fl, this.radius[i] * 2.0, 0.14);
      }
      this.tickT[i] -= dt;
      if (this.tickT[i] > 0) continue;
      this.tickT[i] = TICK;
      const px = this.x[i];
      const pz = this.z[i];
      const rad = this.radius[i];
      const dmg = this.dps[i] * TICK;
      const n = hash.query(px, pz, rad, scratch);
      for (let c = 0; c < n; c++) {
        const j = scratch[c];
        if (enemies.alive[j] === 0) continue;
        const dx = enemies.x[j] - px;
        const dz = enemies.z[j] - pz;
        const rr = rad + enemies.radius[j];
        if (dx * dx + dz * dz > rr * rr) continue;
        const died = enemies.damageAt(j, dmg);
        damageText.spawn(dmg, enemies.x[j], enemies.scale[j] * 0.7, enemies.z[j], false);
        if (died) onKill(j);
      }
    }
  }

  render(time: number): void {
    (this.mesh.material as ShaderMaterial).uniforms.uTime.value = time;
    let w = 0;
    for (let i = 0; i < CAP; i++) {
      if (this.alive[i] === 0) continue;
      const m = w * 16;
      const rad = this.radius[i];
      this.matArr[m] = rad;
      this.matArr[m + 5] = 1;
      this.matArr[m + 10] = rad;
      this.matArr[m + 12] = this.x[i];
      this.matArr[m + 13] = 0.05;
      this.matArr[m + 14] = this.z[i];
      this.matArr[m + 15] = 1;
      const c = w * 3;
      this.colArr[c] = this.cr[i];
      this.colArr[c + 1] = this.cg[i];
      this.colArr[c + 2] = this.cb[i];
      // 등장/소멸 페이드
      const lt = this.life[i] / this.maxLife[i];
      this.fadeArr[w] = Math.min(1, (1 - lt) * 8 + 0.4) * Math.min(1, lt * 4 + 0.2);
      w++;
    }
    this.mesh.count = w;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.colAttr.needsUpdate = true;
    this.fadeAttr.needsUpdate = true;
  }
}
