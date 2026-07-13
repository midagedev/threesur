import { PerspectiveCamera, Vector3 } from 'three';

// 상방 55° 내려보기, 부드러운 추적, 트라우마 기반 셰이크 + 동적 줌/룩어헤드.
// 스프라이트 빌보드가 뷰 방향과 수직이 되도록 기울기 계산에 공유한다.
// 주의: 빌보드는 -ELEVATION 고정 기울기로 구워지므로, 시네마틱 궤도(azimuth)/고도
// 오프셋을 크게 주면 스프라이트가 뒤틀린다 → cinematics가 소폭(궤도 ≤25°, 고도 ≤15°)만 밀어넣는다.
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

// 동적 카메라 튜닝 ("차분한 기본 + 순간의 과감함" — #14 증폭 후 #28 게임필 재조정)
const ZOOM_RATE = 2.5; // 위협/차분/속도 줌 수렴 속도(≈0.4s 시정수)
const THREAT_ZOOM = 0.3; // 위협 밀도 최대 시 추가 거리 배수(+30% 줌아웃)
const CALM_ZOOM = 0.05; // 위협 0일 때 살짝 줌인(-5%)
const SPEED_ZOOM = 0.05; // 전력 이동 시 미세 줌아웃(최대 +5%, 속력비 비례) — 오너 "아주 살짝만"
const ZOOM_CAP = 1.32; // 위협+속도 합산 줌아웃 상한(시네마틱 임펄스/지속은 별도 가산)
const LOOKAHEAD_MAX = 2.2; // 진행방향 최대 선행(월드) — 5.5→2.2, 센터 이탈 최소화 최우선
// 좌우(월드 X) 룩어헤드 이방성 감쇠. 앙각 55° 탑다운 투영에서 X는 화면 가로에 거의 1:1로
// 크게 투영되어 좌우 치우침이 심하게 체감된다(Z 깊이는 앙각만큼 압축). 통상 플레이는 azi=0이라
// 월드 X = 화면 가로. 시네마틱 궤도(≤23°/35°)에서도 X 성분이 화면 가로에 지배적이라 유효.
const LOOKAHEAD_X_DAMP = 0.55;
const LOOKAHEAD_RATE = 1.8; // 룩어헤드 수렴 속도 — 4→1.8, 조이스틱 방향전환 요동 억제

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
  private zoom = 1; // 현재 위협/차분 거리 배수(스무딩)
  private threat = 0; // 위협 밀도 0..1 (줌아웃)
  private speedFrac = 0; // 최근 프레임 속력비 0..1 (속도 비례 미세 줌아웃)
  private cine = 0; // 시네마틱 줌 임펄스(음수=줌인), 지수 감쇠
  private cineHold = 0; // 시네마틱 지속 줌(cinematics가 매 프레임 세팅, 자체 이징)
  private azi = 0; // 시네마틱 궤도 방위각(rad) — cinematics가 매 프레임 세팅
  private elevOff = 0; // 시네마틱 고도 오프셋(rad, 음수=낮은 앵글)
  private offX = 0; // 시네마틱 프레이밍 오프셋(월드) — 카메라+룩포인트 동시 평행이동(트럭)
  private offZ = 0;
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
    this.fovPunch = Math.max(-6, Math.min(6, this.fovPunch + degrees));
  }

  // 주변 위협 밀도(0..1). 높을수록 완만히 줌아웃해 포위 상황을 넓게 본다.
  setThreat(t: number): void {
    this.threat = t < 0 ? 0 : t > 1 ? 1 : t;
  }

  // 진행방향 룩어헤드: 속도벡터와 최대속도 대비 속력비를 받아 카메라를 살짝 앞서 보낸다.
  setLookAhead(vx: number, vz: number, speedFrac: number): void {
    const s = Math.min(1, speedFrac);
    this.speedFrac = s;
    const l = Math.hypot(vx, vz) || 1;
    // X(좌우)는 화면 가로에 크게 투영되므로 이방성 감쇠, Z(깊이)는 그대로.
    this.laTX = (vx / l) * s * LOOKAHEAD_MAX * LOOKAHEAD_X_DAMP;
    this.laTZ = (vz / l) * s * LOOKAHEAD_MAX;
  }

  // 시네마틱 줌 임펄스(대시/펀치 킥). amount 음수=줌인(예: -0.16). 지수 감쇠.
  cinematic(amount: number): void {
    this.cine = amount;
  }

  // 시네마틱 지속 포즈: 궤도 방위각(rad) + 고도 오프셋(rad) + 지속 줌(배수, 음수=줌인)
  // + 프레이밍 오프셋(월드 X/Z, 카메라와 룩포인트를 함께 평행이동 = 빌보드 안전한 트럭/팬).
  // cinematics가 자체 이징으로 계산한 순간값을 매 프레임 그대로 밀어넣는다(직접 적용 → 정확한 타이밍).
  // 미사용 시 전부 0을 넣어 기본 포즈로 복귀시킨다.
  setCinematicPose(azimuth: number, elevOffset: number, zoomHold: number, offsetX = 0, offsetZ = 0): void {
    this.azi = azimuth;
    this.elevOff = elevOffset;
    this.cineHold = zoomHold;
    this.offX = offsetX;
    this.offZ = offsetZ;
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

    // 동적 줌: 위협 줌아웃 + 차분 줌인 + 속도 미세 줌아웃(스무딩·합산 상한) + 시네마틱(직접 가산).
    this.cine *= Math.exp(-dt / 0.7);
    if (Math.abs(this.cine) < 0.002) this.cine = 0;
    const zoomTarget = Math.min(
      ZOOM_CAP,
      1 + this.threat * THREAT_ZOOM - CALM_ZOOM * (1 - this.threat) + SPEED_ZOOM * this.speedFrac,
    );
    this.zoom += (zoomTarget - this.zoom) * Math.min(1, ZOOM_RATE * dt);
    const dist = DISTANCE * Math.max(0.5, this.zoom + this.cine + this.cineHold);

    // FOV 펀치 감쇠 (~180ms 시정수)
    if (Math.abs(this.fovPunch) > 0.001) {
      this.fovPunch *= Math.exp(-dt / 0.18);
      if (Math.abs(this.fovPunch) < 0.001) this.fovPunch = 0;
      this.camera.fov = BASE_FOV + this.fovPunch;
      this.camera.updateProjectionMatrix();
    }

    // 기본 트랜스폼 (동적 거리 + 시네마틱 궤도/고도 오프셋)
    // azi=0, elevOff=0 이면 원래 상방 55° 정후방 추적과 정확히 일치.
    let se = SIN_E;
    let ce = COS_E;
    if (this.elevOff !== 0) {
      const e = ELEVATION + this.elevOff;
      se = Math.sin(e);
      ce = Math.cos(e);
    }
    const horiz = dist * ce;
    const cx = this.sx.x + this.offX;
    const cz = this.sx.z + this.offZ;
    if (this.azi !== 0) {
      this.camera.position.set(cx + horiz * Math.sin(this.azi), dist * se, cz + horiz * Math.cos(this.azi));
    } else {
      this.camera.position.set(cx, dist * se, cz + horiz);
    }
    this.look.set(cx, LOOK_Y, cz);
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
