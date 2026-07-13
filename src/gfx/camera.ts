import { PerspectiveCamera, Vector3 } from 'three';

// 상방 55° 내려보기, 부드러운 추적, 트라우마 기반 셰이크 + 동적 줌/룩어헤드.
// 스프라이트 빌보드가 뷰 방향과 수직이 되도록 기울기 계산에 공유한다.
export const ELEVATION = (55 * Math.PI) / 180;
const DISTANCE = 24;
const SIN_E = Math.sin(ELEVATION);
const COS_E = Math.cos(ELEVATION);
const LOOK_Y = 1.1; // 플레이어 몸통 높이를 바라봄
const FOLLOW_RATE = 9; // 추적 강도

// 트라우마 기반 셰이크 튜닝 (game-feel: trauma² 곡선 + 하드캡 + 선형 감쇠)
const TRAUMA_DECAY = 1.5; // 초당 트라우마 감쇠
const MAX_OFFSET = 1.1; // 최대 셰이크 위치 오프셋(월드 단위, 카메라 원거리 보정)
const MAX_ROLL = 0.08; // 최대 롤(라디안)

// 동적 카메라 튜닝
const ZOOM_RATE = 2.5; // 줌 수렴 속도
const THREAT_ZOOM = 0.2; // 위협 밀도 최대 시 추가 거리 배수(+20% 줌아웃)
const LOOKAHEAD_MAX = 3.6; // 진행방향 최대 선행(월드)
const LOOKAHEAD_RATE = 4; // 룩어헤드 수렴 속도

// 결정론적 값 노이즈 [-1,1]. 축별 시드로 독립성 유지, 누적 시간 구동.
function pseudoNoise(t: number, seed: number): number {
  const x = Math.sin(t * 12.9898 + seed * 78.233) * 43758.5453;
  return (x - Math.floor(x)) * 2 - 1;
}

const BASE_FOV = 40;

export class CameraRig {
  readonly camera: PerspectiveCamera;
  private readonly sx = { x: 0, z: 0 }; // 스무딩된 추적 중심(룩어헤드 포함)
  private trauma = 0;
  private time = 0;
  private inited = false;
  private fovPunch = 0; // 가산 FOV(도) — 처치 시 미세 펀치줌
  private zoom = 1; // 현재 거리 배수
  private threat = 0; // 위협 밀도 0..1 (줌아웃)
  private cine = 0; // 시네마틱 줌 기여(음수=줌인), 지수 감쇠
  private laX = 0; // 룩어헤드 오프셋(현재)
  private laZ = 0;
  private laTX = 0; // 룩어헤드 목표
  private laTZ = 0;
  private readonly look = new Vector3();

  constructor() {
    this.camera = new PerspectiveCamera(BASE_FOV, window.innerWidth / window.innerHeight, 0.1, 300);
  }

  onResize(w: number, h: number): void {
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  addTrauma(amount: number): void {
    this.trauma = Math.min(1, this.trauma + amount);
  }

  // FOV 펀치(도). 처치 순간 미세 펄스(음수 = 살짝 당김).
  punchFov(degrees: number): void {
    this.fovPunch = Math.max(-3, Math.min(3, this.fovPunch + degrees));
  }

  // 주변 위협 밀도(0..1). 높을수록 완만히 줌아웃해 포위 상황을 넓게 본다.
  setThreat(t: number): void {
    this.threat = t < 0 ? 0 : t > 1 ? 1 : t;
  }

  // 진행방향 룩어헤드: 속도벡터와 최대속도 대비 속력비를 받아 카메라를 살짝 앞서 보낸다.
  setLookAhead(vx: number, vz: number, speedFrac: number): void {
    const s = Math.min(1, speedFrac);
    const l = Math.hypot(vx, vz) || 1;
    this.laTX = (vx / l) * s * LOOKAHEAD_MAX;
    this.laTZ = (vz / l) * s * LOOKAHEAD_MAX;
  }

  // 시네마틱 줌 펄스(무쌍/보스 등장). amount 음수=줌인(예: -0.16).
  cinematic(amount: number): void {
    this.cine = amount;
  }

  update(dt: number, targetX: number, targetZ: number): void {
    this.time += dt;

    // 룩어헤드 수렴 → 추적 목표에 가산
    this.laX += (this.laTX - this.laX) * Math.min(1, LOOKAHEAD_RATE * dt);
    this.laZ += (this.laTZ - this.laZ) * Math.min(1, LOOKAHEAD_RATE * dt);
    const tX = targetX + this.laX;
    const tZ = targetZ + this.laZ;

    if (!this.inited) {
      this.sx.x = tX;
      this.sx.z = tZ;
      this.inited = true;
    }
    const k = 1 - Math.exp(-FOLLOW_RATE * dt);
    this.sx.x += (tX - this.sx.x) * k;
    this.sx.z += (tZ - this.sx.z) * k;

    // 동적 줌: 위협 줌아웃 + 시네마틱 기여. 시네마틱은 지수 감쇠.
    this.cine *= Math.exp(-dt / 0.7);
    if (Math.abs(this.cine) < 0.002) this.cine = 0;
    const zoomTarget = 1 + this.threat * THREAT_ZOOM + this.cine;
    this.zoom += (zoomTarget - this.zoom) * Math.min(1, ZOOM_RATE * dt);
    const dist = DISTANCE * this.zoom;

    // FOV 펀치 감쇠 (~180ms 시정수)
    if (Math.abs(this.fovPunch) > 0.001) {
      this.fovPunch *= Math.exp(-dt / 0.18);
      if (Math.abs(this.fovPunch) < 0.001) this.fovPunch = 0;
      this.camera.fov = BASE_FOV + this.fovPunch;
      this.camera.updateProjectionMatrix();
    }

    // 기본 트랜스폼 (동적 거리 적용)
    this.camera.position.set(this.sx.x, dist * SIN_E, this.sx.z + dist * COS_E);
    this.look.set(this.sx.x, LOOK_Y, this.sx.z);
    this.camera.lookAt(this.look);

    // 셰이크 (trauma² 곡선, 누적 시간 노이즈)
    this.trauma = Math.max(0, this.trauma - TRAUMA_DECAY * dt);
    if (this.trauma > 0) {
      const shake = this.trauma * this.trauma;
      const f = this.time * 32;
      this.camera.position.x += MAX_OFFSET * shake * pseudoNoise(f, 1);
      this.camera.position.y += MAX_OFFSET * shake * pseudoNoise(f, 2);
      this.camera.rotation.z += MAX_ROLL * shake * pseudoNoise(f, 3);
    }
  }
}
