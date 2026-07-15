import {
  Scene,
  InstancedMesh,
  PlaneGeometry,
  ShaderMaterial,
  NormalBlending,
  DoubleSide,
  DynamicDrawUsage,
  Object3D,
  Vector3,
} from 'three';
import type { EffectsSystem } from './effects';
import { TG_CIRCLE } from './telegraph';

// 낙양 공방전 불화살 낙하(공성 볼리). 상공에서 비스듬히 떨어지는 InstancedMesh 스트릭 +
// 착탄 예고는 telegraph 원(EffectsSystem 소유)을 재사용해 t초 동안 채운다.
// 착탄 순간: 작은 흙먼지 링 + 잔불 스코치 데칼(둘 다 기존 EffectsSystem API 재사용). 광원 추가 없음.
// 절제 원칙: 살대는 어둡게, 촉만 블룸 임계에 살짝 걸리는 온색 — 화이트아웃 회피 우선.

const CAP = 28; // 동시 화살 상한
const RADIUS = 1.7; // 착탄 예고 원 반경(게임 피해 판정과 동일 계약)
const Y0 = 14; // 발사 고도(하늘)
const FALL_MAX = 0.6; // 실제로 낙하가 보이는 최종 구간(t가 더 커도 이 구간만 스트릭)
const SLANT = 2.4; // 낙하 수평 드리프트 — 볼리 공통 풍향으로 비스듬한 일제사
const ARROW_LEN = 2.6; // 스트릭 길이(속도감)
const ARROW_W = 0.14; // 스트릭 폭

const ARROW_VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  }
`;

// 살대(어두움, 길게 감쇠) + 촉(온색, 짧게 밝음). 촉만 블룸에 살짝 걸린다(최대 1.0).
const ARROW_FRAG = /* glsl */ `
  varying vec2 vUv;
  void main() {
    float across = 1.0 - abs(vUv.x - 0.5) * 2.0;
    float core = pow(max(across, 0.0), 1.5);
    float tip = smoothstep(0.22, 0.0, vUv.y);       // y=0(선두)에서 1 → 촉
    float shaft = smoothstep(1.0, 0.12, vUv.y);      // 꼬리로 갈수록 페이드 → 살대
    vec3 shaftCol = vec3(0.05, 0.045, 0.04);
    vec3 tipCol = vec3(1.0, 0.5, 0.2);
    float body = core * shaft;
    float head = core * tip;
    vec3 col = shaftCol * body + tipCol * head;
    float a = clamp(body * 0.5 + head * 0.95, 0.0, 1.0);
    if (a < 0.01) discard;
    gl_FragColor = vec4(col, a);
  }
`;

export class ArrowRain {
  private readonly effects: EffectsSystem;
  private readonly mesh: InstancedMesh;
  private readonly dummy = new Object3D();
  private readonly up = new Vector3(0, 1, 0);
  private readonly backDir = new Vector3(0, 1, 0);

  // SoA 재사용 풀. phase: 0=미사용, 1=대기(예고만), 2=낙하 중.
  private readonly phase = new Uint8Array(CAP);
  private readonly wait = new Float32Array(CAP); // 낙하 시작까지 남은 초
  private readonly fall = new Float32Array(CAP); // 낙하 구간 길이
  private readonly ttl = new Float32Array(CAP); // 낙하 잔여 시간(fall→0)
  private readonly tx = new Float32Array(CAP); // 착탄 목표
  private readonly tz = new Float32Array(CAP);
  private readonly wx = new Float32Array(CAP); // 풍향(수평 단위)
  private readonly wz = new Float32Array(CAP);
  private readonly bdx = new Float32Array(CAP); // 낙하선 역방향(스트릭 정렬용 단위)
  private readonly bdy = new Float32Array(CAP);
  private readonly bdz = new Float32Array(CAP);
  private cur = 0;

  constructor(scene: Scene, effects: EffectsSystem) {
    this.effects = effects;
    const geo = new PlaneGeometry(1, 1);
    geo.translate(0, 0.5, 0); // 피벗 = 선두(촉, 로컬 y=0), +Y로 꼬리
    const mat = new ShaderMaterial({
      vertexShader: ARROW_VERT,
      fragmentShader: ARROW_FRAG,
      transparent: true,
      blending: NormalBlending,
      side: DoubleSide,
      depthWrite: false,
      depthTest: true,
    });
    this.mesh = new InstancedMesh(geo, mat, CAP);
    this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.count = 0;
    this.mesh.renderOrder = 4;
    scene.add(this.mesh);
  }

  // 볼리: 착탄 예고 원(telegraph) 스폰 + 화살 예약. shots[i].t = 착탄까지 초.
  // game 레인(siege.ts)이 같은 payload로 피해를 판정한다 — (x,z)와 t를 시각·판정 동기.
  volley(shots: { x: number; z: number; t: number }[]): void {
    if (shots.length === 0) return;
    // 볼리 공통 풍향(약간 랜덤) — 한 일제사는 같은 각도로 비스듬히 쏟아진다.
    const wa = Math.random() * Math.PI * 2;
    const wx = Math.cos(wa);
    const wz = Math.sin(wa);
    for (const s of shots) {
      const t = Math.max(0.05, s.t);
      // 예고 원: 반경 RADIUS(월드), t 동안 progress 채움. 온색 danger 톤(NormalBlending, 저알파 → 블룸 무관).
      this.effects.spawnTelegraph(TG_CIRCLE, s.x, s.z, 0, RADIUS * 2, RADIUS * 2, 0, t, 1.0, 0.4, 0.14);
      this.alloc(s.x, s.z, t, wx, wz);
    }
  }

  private alloc(tx: number, tz: number, t: number, wx: number, wz: number): void {
    const i = this.cur;
    this.cur = (this.cur + 1) % CAP;
    const fall = Math.min(t, FALL_MAX);
    this.phase[i] = 1;
    this.wait[i] = Math.max(0, t - fall); // 예고가 대부분 찬 뒤 마지막 구간에 낙하
    this.fall[i] = fall;
    this.ttl[i] = fall;
    this.tx[i] = tx;
    this.tz[i] = tz;
    this.wx[i] = wx;
    this.wz[i] = wz;
    // 스트릭은 낙하선을 따라 정렬: 로컬 +Y(꼬리 방향)를 낙하선 역방향(위+풍상)으로.
    const bx = wx * SLANT;
    const bz = wz * SLANT;
    const bl = Math.hypot(bx, Y0, bz) || 1;
    this.bdx[i] = bx / bl;
    this.bdy[i] = Y0 / bl;
    this.bdz[i] = bz / bl;
  }

  update(dt: number): void {
    let w = 0;
    for (let i = 0; i < CAP; i++) {
      const ph = this.phase[i];
      if (ph === 0) continue;
      if (ph === 1) {
        this.wait[i] -= dt;
        if (this.wait[i] > 0) continue; // 아직 예고만(화살 비표시)
        this.phase[i] = 2;
        this.ttl[i] = this.fall[i];
      }
      // 낙하 중
      this.ttl[i] -= dt;
      if (this.ttl[i] <= 0) {
        this.impact(i);
        this.phase[i] = 0;
        continue;
      }
      const f = this.ttl[i] / this.fall[i]; // 1(발사)→0(착탄)
      const hv = 1 - (1 - f) * (1 - f); // 중력 가속(지면 근처에서 빠르게)
      // 직선 슬랜트: (목표 + 풍향*SLANT, Y0) → (목표, 0). 착탄점은 정확히 (tx,tz).
      const px = this.tx[i] + this.wx[i] * SLANT * hv;
      const py = Y0 * hv;
      const pz = this.tz[i] + this.wz[i] * SLANT * hv;
      this.dummy.position.set(px, py, pz);
      this.backDir.set(this.bdx[i], this.bdy[i], this.bdz[i]);
      this.dummy.quaternion.setFromUnitVectors(this.up, this.backDir);
      this.dummy.scale.set(ARROW_W, ARROW_LEN, 1);
      this.dummy.updateMatrix();
      this.mesh.setMatrixAt(w, this.dummy.matrix);
      w++;
    }
    this.mesh.count = w;
    this.mesh.instanceMatrix.needsUpdate = true;
  }

  // 착탄: 작은 흙먼지 링(반경<3이라 spawnRing 내부 광원 미발동) + 잔불 스코치 데칼(주입돼 있으면).
  private impact(i: number): void {
    const x = this.tx[i];
    const z = this.tz[i];
    this.effects.spawnRing(x, z, 1.6, 0.75, 0.5, 0.28, 0.32);
    // spawnDecal은 run이 주입하는 nullable 필드(effects.ts 자체도 332/386행에서 동일 널가드) — null-safe 호출.
    this.effects.spawnDecal?.(x, z, 1.3, 0.85, 0.4, 0.16);
  }

  reset(): void {
    this.phase.fill(0);
    this.cur = 0;
    this.mesh.count = 0;
  }
}
