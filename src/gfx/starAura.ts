import {
  Scene,
  PlaneGeometry,
  Mesh,
  InstancedMesh,
  InstancedBufferAttribute,
  ShaderMaterial,
  AdditiveBlending,
  DynamicDrawUsage,
  Color,
} from 'three';

// 군신 사당 버프 스타파워 오라 (마리오 별 무적 오마주 · 삼국 톤 절제 번안).
// 사당 버프(공격/이속/무쌍) 지속 30초 동안 플레이어 주위에 "확실히 읽히는" 스타파워를 붙이되,
// 지속 상태이므로 은은해야 한다 — 화이트아웃/화면 과밀 금지(오너 절제 원칙).
//  · 지면 색순환 림: 골드↔청록↔자홍을 ~1.3s 주기로 도는 낮은 강도 발광 링(채도 살리고 명도 억제).
//  · 회전 스파클 링: 플레이어를 느긋하게 공전하는 SDF 5각별 7개(개별 트윙클·상하 보빙).
//  · 간헐 트윙클: 플레이어 주위로 흩날리는 짧은 반짝 파편(초당 ~4개, 웜화이트).
// active=false 전환 시 0.4s 페이드아웃 후 완전 정지(mesh.count=0). 자체 시계, 프레임당 할당 0.
// 별/트윙클은 koStar와 동일한 SDF 5각별·additive 절제 문법을 재사용(블룸 코어만 살짝 태움).

const STAR_CAP = 16; // 스파클 인스턴스 상한(공전 7 + 트윙클 최대 9)
const ORBIT_N = 7; // 공전 별 개수
const ORBIT_R = 1.9; // 공전 반경(플레이어 반경 밖)
const ORBIT_Y = 1.35; // 공전 높이(상체 부근)
const ORBIT_SPEED = 1.15; // 공전 각속도(rad/s) — 느긋하게
const RING_R = 2.4; // 지면 링 반경
const CYCLE = 1.3; // 색순환 1주기(초) — 3톤 순회
const FADE_IN = 0.25; // 등장 램프
const FADE_OUT = 0.4; // 종료 페이드아웃(즉시 끊기지 않게)
const TWINKLE_RATE = 4; // 초당 트윙클 생성

// 색순환 3톤(RGB). 채도는 살리되 additive 누적/블룸(임계 0.88)을 넘지 않도록 명도 억제.
const ANCH = [
  0.98, 0.72, 0.24, // 골드
  0.2, 0.92, 0.78, // 청록
  0.95, 0.32, 0.8, // 자홍
];

export class StarAura {
  // 스파클(공전 별 + 트윙클 파편) SoA. 공전 별은 매 프레임 시계로 위치 계산,
  // 트윙클은 수명 기반. 둘 다 하나의 InstancedMesh에 컴팩션해 그린다.
  private readonly tx = new Float32Array(STAR_CAP); // 트윙클 위치
  private readonly ty = new Float32Array(STAR_CAP);
  private readonly tz = new Float32Array(STAR_CAP);
  private readonly tvx = new Float32Array(STAR_CAP); // 트윙클 속도
  private readonly tvy = new Float32Array(STAR_CAP);
  private readonly tvz = new Float32Array(STAR_CAP);
  private readonly tlife = new Float32Array(STAR_CAP);
  private readonly tmax = new Float32Array(STAR_CAP);
  private readonly trot = new Float32Array(STAR_CAP);
  private readonly tspin = new Float32Array(STAR_CAP);
  private twCursor = ORBIT_N; // 트윙클 슬롯 롤링 커서(공전 슬롯 뒤부터)

  private readonly mesh: InstancedMesh;
  private readonly matArr: Float32Array;
  private readonly aFade: Float32Array;
  private readonly aWhite: Float32Array;
  private readonly aRot: Float32Array;
  private readonly aScale: Float32Array;
  private readonly fadeAttr: InstancedBufferAttribute;
  private readonly whiteAttr: InstancedBufferAttribute;
  private readonly rotAttr: InstancedBufferAttribute;
  private readonly scaleAttr: InstancedBufferAttribute;
  private readonly starMat: ShaderMaterial;

  private readonly ground: Mesh;
  private readonly groundMat: ShaderMaterial;

  private readonly cyc = new Color();
  private time = 0;
  private vis = 0; // 0..1 페이드
  private spawnAcc = 0;
  private px = 0;
  private pz = 0;

  constructor(scene: Scene) {
    // ── 스파클(SDF 5각별 · additive) ──
    const geo = new PlaneGeometry(1, 1);
    this.aFade = new Float32Array(STAR_CAP);
    this.aWhite = new Float32Array(STAR_CAP);
    this.aRot = new Float32Array(STAR_CAP);
    this.aScale = new Float32Array(STAR_CAP);
    this.fadeAttr = new InstancedBufferAttribute(this.aFade, 1);
    this.whiteAttr = new InstancedBufferAttribute(this.aWhite, 1);
    this.rotAttr = new InstancedBufferAttribute(this.aRot, 1);
    this.scaleAttr = new InstancedBufferAttribute(this.aScale, 1);
    this.fadeAttr.setUsage(DynamicDrawUsage);
    this.whiteAttr.setUsage(DynamicDrawUsage);
    this.rotAttr.setUsage(DynamicDrawUsage);
    this.scaleAttr.setUsage(DynamicDrawUsage);
    geo.setAttribute('aFade', this.fadeAttr);
    geo.setAttribute('aWhite', this.whiteAttr);
    geo.setAttribute('aRot', this.rotAttr);
    geo.setAttribute('aScale', this.scaleAttr);
    this.starMat = new ShaderMaterial({
      uniforms: { uColor: { value: new Color(1, 0.8, 0.3) } },
      // 카메라 정면 빌보드 + 화면상 스핀/스케일 — 각진 탑다운에서도 눌리지 않고 또렷한 5각별로 읽힘.
      // instanceMatrix는 중심 위치만 전달, 스핀(aRot)·크기(aScale)는 뷰공간에서 적용.
      vertexShader: /* glsl */ `
        attribute float aFade; attribute float aWhite; attribute float aRot; attribute float aScale;
        varying vec2 vUv; varying float vFade; varying float vWhite;
        void main() {
          vUv = uv; vFade = aFade; vWhite = aWhite;
          vec4 mv = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          float c = cos(aRot), s = sin(aRot);
          vec2 q = vec2(position.x * c - position.y * s, position.x * s + position.y * c) * aScale;
          mv.xy += q;
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uColor;
        varying vec2 vUv; varying float vFade; varying float vWhite;
        // iq 5각별 SDF(부호거리, 내부<0). rf=내/외 반경비.
        float sdStar5(vec2 p, float r, float rf) {
          const vec2 k1 = vec2(0.809016994375, -0.587785252292);
          const vec2 k2 = vec2(-k1.x, k1.y);
          p.x = abs(p.x);
          p -= 2.0 * max(dot(k1, p), 0.0) * k1;
          p -= 2.0 * max(dot(k2, p), 0.0) * k2;
          p.x = abs(p.x);
          p.y -= r;
          vec2 ba = rf * vec2(-k1.y, k1.x) - vec2(0.0, 1.0);
          float h = clamp(dot(p, ba) / dot(ba, ba), 0.0, r);
          return length(p - ba * h) * sign(p.y * ba.x - p.x * ba.y);
        }
        void main() {
          vec2 p = (vUv - 0.5) * 2.0;
          float d = sdStar5(p, 0.72, 0.42);
          float fill = smoothstep(0.03, -0.05, d) * 0.85;         // 채운 별 실루엣
          float rim = smoothstep(0.07, 0.0, abs(d)) * 0.6;        // 얇은 밝은 테두리
          float core = smoothstep(0.42, 0.0, length(p)) * 0.16;   // 중앙 옅은 광택
          float b = (fill + rim + core) * vFade;
          if (b < 0.01) discard;
          // 순환색 유지(웜화이트로 살짝 밝혀 별 실루엣이 또렷하게). 트윙클 슬롯은 더 화이트로.
          // 게인 1.55로 코어만 블룸(임계 0.88) 살짝 태워 확실히 반짝이되, 개수·반경 절제로 블로우아웃 방지.
          vec3 col = mix(uColor, vec3(1.0, 0.95, 0.82), 0.28 + vWhite * 0.4) + vec3(0.3) * rim;
          gl_FragColor = vec4(col * b * 1.55, b);
        }
      `,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
      depthTest: false,
    });
    this.mesh = new InstancedMesh(geo, this.starMat, STAR_CAP);
    this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.count = 0;
    this.mesh.renderOrder = 18; // 스프라이트 위, koStar(20) 아래
    this.matArr = this.mesh.instanceMatrix.array as Float32Array;
    scene.add(this.mesh);

    // ── 지면 색순환 림(발광 링 + 아주 옅은 내부 채움) ──
    const gGeo = new PlaneGeometry(1, 1);
    gGeo.rotateX(-Math.PI / 2); // 지면에 눕힘
    this.groundMat = new ShaderMaterial({
      uniforms: { uColor: { value: new Color(1, 0.8, 0.3) }, uAlpha: { value: 0 } },
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uColor; uniform float uAlpha;
        varying vec2 vUv;
        void main() {
          float r = length((vUv - 0.5) * 2.0);
          float rim = smoothstep(0.08, 0.0, abs(r - 0.82)); // 얇은 발광 테두리
          float fill = smoothstep(0.82, 0.0, r) * 0.12;     // 내부 아주 옅은 채움
          float edge = 1.0 - smoothstep(0.94, 1.0, r);      // 바깥 컷
          float b = (rim * 0.72 + fill) * edge;
          if (b < 0.004) discard;
          gl_FragColor = vec4(uColor * b * 1.25, b * uAlpha);
        }
      `,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
      depthTest: true,
    });
    this.ground = new Mesh(gGeo, this.groundMat);
    this.ground.scale.set(RING_R * 2, 1, RING_R * 2);
    this.ground.frustumCulled = false;
    this.ground.visible = false;
    this.ground.renderOrder = 2; // 지면(데칼 근처), 스프라이트 아래
    scene.add(this.ground);
  }

  reset(): void {
    this.time = 0;
    this.vis = 0;
    this.spawnAcc = 0;
    this.twCursor = ORBIT_N;
    this.tlife.fill(0);
    this.mesh.count = 0;
    this.ground.visible = false;
  }

  // dt: 프레임 시간. x,z: 플레이어 좌표. active: 사당 버프 활성 여부.
  // active=false여도 vis>0인 동안(페이드아웃) 계속 그린다.
  update(dt: number, x: number, z: number, active: boolean): void {
    if (dt > 0.1) dt = 0.1; // 탭 복귀 등 큰 점프 클램프
    this.px = x;
    this.pz = z;

    // 페이드 램프
    this.vis = active
      ? Math.min(1, this.vis + dt / FADE_IN)
      : Math.max(0, this.vis - dt / FADE_OUT);

    if (this.vis <= 0.001 && !active) {
      // 완전 정지: 남은 트윙클도 없을 때만 idle. (트윙클은 수명으로 자연 소멸)
      let anyTw = false;
      for (let i = ORBIT_N; i < STAR_CAP; i++) if (this.tlife[i] > 0) { anyTw = true; break; }
      if (!anyTw) {
        this.mesh.count = 0;
        this.ground.visible = false;
        return;
      }
    }

    this.time += dt;

    // 색순환(3톤 스무스 보간)
    const cp = (this.time / CYCLE) % 1;
    const seg = cp * 3;
    const k = Math.floor(seg) % 3;
    let f = seg - Math.floor(seg);
    f = f * f * (3 - 2 * f); // smoothstep
    const j = (k + 1) % 3;
    const cr = ANCH[k * 3] + (ANCH[j * 3] - ANCH[k * 3]) * f;
    const cg = ANCH[k * 3 + 1] + (ANCH[j * 3 + 1] - ANCH[k * 3 + 1]) * f;
    const cb = ANCH[k * 3 + 2] + (ANCH[j * 3 + 2] - ANCH[k * 3 + 2]) * f;
    this.cyc.setRGB(cr, cg, cb);
    (this.starMat.uniforms.uColor.value as Color).copy(this.cyc);
    (this.groundMat.uniforms.uColor.value as Color).copy(this.cyc);

    // 지면 림: 은은한 맥동 + 페이드
    const pulse = 0.85 + 0.15 * Math.sin(this.time * 3.0);
    this.groundMat.uniforms.uAlpha.value = this.vis * pulse;
    this.ground.visible = this.vis > 0.001;
    this.ground.position.set(x, 0.06, z);

    // 트윙클 생성(active 동안만, 초당 TWINKLE_RATE)
    if (active) {
      this.spawnAcc += dt * TWINKLE_RATE;
      while (this.spawnAcc >= 1) {
        this.spawnAcc -= 1;
        this.spawnTwinkle();
      }
    }

    // ── 인스턴스 컴팩션 write ──
    const t = this.time;
    let w = 0;
    // 공전 별
    if (this.vis > 0.001) {
      for (let i = 0; i < ORBIT_N; i++) {
        const ang = t * ORBIT_SPEED + (i / ORBIT_N) * Math.PI * 2;
        const sx = x + Math.cos(ang) * ORBIT_R;
        const sz = z + Math.sin(ang) * ORBIT_R;
        const sy = ORBIT_Y + Math.sin(t * 2.0 + i) * 0.12; // 상하 보빙
        const tw = 0.74 + 0.26 * Math.sin(t * 6.0 + i * 1.7); // 트윙클
        const scl = 0.95 * (0.85 + 0.15 * Math.sin(t * 5.0 + i));
        const rot = t * 2.0 + i;
        w = this.writeInstance(w, sx, sy, sz, scl, rot, this.vis * tw, 0);
      }
    }
    // 트윙클 파편(수명 기반)
    for (let i = ORBIT_N; i < STAR_CAP; i++) {
      if (this.tlife[i] <= 0) continue;
      this.tlife[i] -= dt;
      if (this.tlife[i] <= 0) continue;
      this.tvx[i] *= 0.9;
      this.tvy[i] = this.tvy[i] * 0.9 - 0.6 * dt; // 살짝 부양 감쇠
      this.tvz[i] *= 0.9;
      this.tx[i] += this.tvx[i] * dt;
      this.ty[i] += this.tvy[i] * dt;
      this.tz[i] += this.tvz[i] * dt;
      this.trot[i] += this.tspin[i] * dt;
      const lf = this.tlife[i] / this.tmax[i]; // 1→0
      const fade = Math.sin(Math.min(1, lf) * Math.PI); // 등장·소멸 부드럽게
      w = this.writeInstance(w, this.tx[i], this.ty[i], this.tz[i], 0.5 * (0.6 + 0.4 * lf), this.trot[i], fade * 0.95, 1);
    }
    this.mesh.count = w;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.fadeAttr.needsUpdate = true;
    this.whiteAttr.needsUpdate = true;
    this.rotAttr.needsUpdate = true;
    this.scaleAttr.needsUpdate = true;
  }

  // 스파클 인스턴스 하나를 슬롯 w에 기록. instanceMatrix엔 중심 위치만(단위 회전),
  // 스핀·크기·밝기는 어트리뷰트로 넘겨 뷰공간 빌보드에서 적용. 반환 w+1.
  private writeInstance(
    w: number, x: number, y: number, z: number, s: number, rot: number, fade: number, white: number,
  ): number {
    const m = w * 16;
    this.matArr[m] = 1; this.matArr[m + 1] = 0; this.matArr[m + 2] = 0; this.matArr[m + 3] = 0;
    this.matArr[m + 4] = 0; this.matArr[m + 5] = 1; this.matArr[m + 6] = 0; this.matArr[m + 7] = 0;
    this.matArr[m + 8] = 0; this.matArr[m + 9] = 0; this.matArr[m + 10] = 1; this.matArr[m + 11] = 0;
    this.matArr[m + 12] = x; this.matArr[m + 13] = y; this.matArr[m + 14] = z; this.matArr[m + 15] = 1;
    this.aFade[w] = fade;
    this.aWhite[w] = white;
    this.aRot[w] = rot;
    this.aScale[w] = s;
    return w + 1;
  }

  private spawnTwinkle(): void {
    const i = this.twCursor;
    this.twCursor = this.twCursor + 1 >= STAR_CAP ? ORBIT_N : this.twCursor + 1;
    const ang = Math.random() * Math.PI * 2;
    const rr = 0.6 + Math.random() * 1.1;
    this.tx[i] = this.px + Math.cos(ang) * rr;
    this.ty[i] = 0.7 + Math.random() * 1.4;
    this.tz[i] = this.pz + Math.sin(ang) * rr;
    this.tvx[i] = Math.cos(ang) * 0.5 + (Math.random() - 0.5) * 0.4;
    this.tvy[i] = 0.6 + Math.random() * 0.8; // 살짝 떠오름
    this.tvz[i] = Math.sin(ang) * 0.5 + (Math.random() - 0.5) * 0.4;
    this.trot[i] = Math.random() * 6.28;
    this.tspin[i] = (Math.random() - 0.5) * 8;
    this.tmax[i] = 0.5 + Math.random() * 0.35;
    this.tlife[i] = this.tmax[i];
  }
}
