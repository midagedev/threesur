// 동적 광원 필드. 씬에 실제 Three.js 광원이 없으므로(전부 언릿),
// 폭발/낙뢰/화염/무쌍이 남기는 점광원을 유니폼 배열로 셰이더에 주입해
// 지면·적·플레이어가 "실제로 빛을 받는" 것처럼 색을 가산한다.
//
// 유니폼 홀더 객체({value})를 여러 머티리얼이 참조로 공유한다 → update 한 번으로 전부 갱신.
// 매 프레임 살아있는 광원을 배열 앞쪽으로 압축하고 uLightCount만 갱신(셰이더 루프 조기 종료).

export const MAX_LIGHTS = 12;

// 표면 셰이더(스프라이트/지면 onBeforeCompile)가 공유하는 GLSL.
export const LIGHT_PARS_FRAG = /* glsl */ `
  #define MAX_LIGHTS ${MAX_LIGHTS}
  uniform vec3 uLightPos[MAX_LIGHTS];
  uniform vec3 uLightColor[MAX_LIGHTS];
  uniform float uLightRadius[MAX_LIGHTS];
  uniform int uLightCount;
  varying vec2 vWorldXZ;
  vec3 sampleLights() {
    vec3 s = vec3(0.0);
    for (int i = 0; i < MAX_LIGHTS; i++) {
      if (i >= uLightCount) break;
      vec2 d = vWorldXZ - uLightPos[i].xz;
      float dist = length(d);
      float a = clamp(1.0 - dist / uLightRadius[i], 0.0, 1.0);
      s += uLightColor[i] * a * a;
    }
    return s;
  }
`;

export const LIGHT_PARS_VERT = /* glsl */ `varying vec2 vWorldXZ;`;

export interface LightUniforms {
  uLightPos: { value: Float32Array };
  uLightColor: { value: Float32Array };
  uLightRadius: { value: Float32Array };
  uLightCount: { value: number };
}

export class LightField {
  private readonly px = new Float32Array(MAX_LIGHTS);
  private readonly py = new Float32Array(MAX_LIGHTS);
  private readonly pz = new Float32Array(MAX_LIGHTS);
  private readonly cr = new Float32Array(MAX_LIGHTS);
  private readonly cg = new Float32Array(MAX_LIGHTS);
  private readonly cb = new Float32Array(MAX_LIGHTS);
  private readonly rad = new Float32Array(MAX_LIGHTS);
  private readonly life = new Float32Array(MAX_LIGHTS);
  private readonly maxLife = new Float32Array(MAX_LIGHTS);

  readonly uLightPos = { value: new Float32Array(MAX_LIGHTS * 3) };
  readonly uLightColor = { value: new Float32Array(MAX_LIGHTS * 3) };
  readonly uLightRadius = { value: new Float32Array(MAX_LIGHTS) };
  readonly uLightCount = { value: 0 };

  private readonly capActive: number;

  constructor(mobile = false) {
    this.capActive = mobile ? 6 : MAX_LIGHTS;
  }

  // 새 광원 방출. life가 짧을수록 순간 섬광, 길수록 잔광. 죽은 슬롯 우선, 없으면 잔여수명 최소 슬롯 교체.
  spawn(x: number, y: number, z: number, r: number, g: number, b: number, radius: number, life: number): void {
    let slot = -1;
    let min = Infinity;
    for (let i = 0; i < MAX_LIGHTS; i++) {
      if (this.life[i] <= 0) { slot = i; break; }
      if (this.life[i] < min) { min = this.life[i]; slot = i; }
    }
    this.px[slot] = x;
    this.py[slot] = y;
    this.pz[slot] = z;
    this.cr[slot] = r;
    this.cg[slot] = g;
    this.cb[slot] = b;
    this.rad[slot] = radius;
    this.life[slot] = life;
    this.maxLife[slot] = life;
  }

  update(dt: number): void {
    const pos = this.uLightPos.value;
    const col = this.uLightColor.value;
    const rd = this.uLightRadius.value;
    let n = 0;
    for (let i = 0; i < MAX_LIGHTS; i++) {
      if (this.life[i] <= 0) continue;
      this.life[i] -= dt;
      if (this.life[i] <= 0 || n >= this.capActive) continue;
      // 잔광 감쇠(제곱으로 스냅감). 짧은 섬광일수록 확 꺼진다.
      const f = this.life[i] / this.maxLife[i];
      const k = f * f;
      const o3 = n * 3;
      pos[o3] = this.px[i];
      pos[o3 + 1] = this.py[i];
      pos[o3 + 2] = this.pz[i];
      col[o3] = this.cr[i] * k;
      col[o3 + 1] = this.cg[i] * k;
      col[o3 + 2] = this.cb[i] * k;
      rd[n] = this.rad[i];
      n++;
    }
    this.uLightCount.value = n;
  }

  uniforms(): LightUniforms {
    return {
      uLightPos: this.uLightPos,
      uLightColor: this.uLightColor,
      uLightRadius: this.uLightRadius,
      uLightCount: this.uLightCount,
    };
  }

  reset(): void {
    this.life.fill(0);
    this.uLightCount.value = 0;
  }

  get activeCount(): number {
    return this.uLightCount.value;
  }
}
