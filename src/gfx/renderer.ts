import {
  WebGLRenderer,
  ACESFilmicToneMapping,
  SRGBColorSpace,
  Vector2,
  Scene,
  Camera,
} from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

// 모바일은 DPR 1.5로 하향(성능), 데스크톱은 2까지 허용.
function isMobile(): boolean {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}
function maxDpr(): number {
  return Math.min(window.devicePixelRatio, isMobile() ? 1.5 : 2);
}

export function createRenderer(canvasParent: HTMLElement): WebGLRenderer {
  const renderer = new WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(maxDpr());
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.setClearColor(0x05060a, 1);
  canvasParent.appendChild(renderer.domElement);
  return renderer;
}

// 무쌍 연출 패스: 비네트 + 채도 시프트 + 방사형 스피드라인. uStrength 0이면 사실상 무해.
const MusouShader = {
  uniforms: {
    tDiffuse: { value: null },
    uStrength: { value: 0 },
    uTime: { value: 0 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uStrength;
    uniform float uTime;
    varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      if (uStrength <= 0.001) { gl_FragColor = c; return; }
      vec2 d = vUv - 0.5;
      float dist = length(d);
      float ang = atan(d.y, d.x);
      // 채도 부스트 + 살짝 붉은 기운
      float luma = dot(c.rgb, vec3(0.299, 0.587, 0.114));
      vec3 sat = mix(vec3(luma), c.rgb, 1.0 + 0.6 * uStrength);
      sat.r *= 1.0 + 0.06 * uStrength;
      // 방사형 스피드라인 (가장자리에서 강함)
      float lines = sin(ang * 60.0 + uTime * 4.0) * 0.5 + 0.5;
      lines = pow(lines, 6.0) * smoothstep(0.15, 0.5, dist);
      sat += lines * uStrength * 0.5;
      // 비네트
      float vig = 1.0 - smoothstep(0.35, 0.85, dist) * uStrength * 0.8;
      gl_FragColor = vec4(sat * vig, c.a);
    }
  `,
};

// PostFX 팩 (#21): 단일 풀스크린 패스.
//  - 이벤트: 방향성/라디얼 모션 블러(대시/무쌍/킬캠), 색수차 펄스(폭발/피격)
//  - 상시: 필름 그레인, 비네트 브리딩, 은은한 톤 그레이딩
// OutputPass 전(선형 HDR)에서 동작 — MusouShader와 동일 위치. 모바일은 블러 생략.
const PostFxShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uBlur: { value: 0 },
    uBlurDir: { value: new Vector2(0, 0) },
    uAberr: { value: 0 },
    uMobile: { value: 0 },
    uRes: { value: new Vector2(1, 1) },
    uGrain: { value: 0.05 },
    uVig: { value: 0.26 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uBlur;
    uniform vec2 uBlurDir;
    uniform float uAberr;
    uniform float uMobile;
    uniform vec2 uRes;
    uniform float uGrain;
    uniform float uVig;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec2 uv = vUv;
      vec2 c = uv - 0.5;
      vec3 col;
      // 방향성/라디얼 모션 블러 (이벤트 시, 데스크톱만)
      if (uBlur > 0.002 && uMobile < 0.5) {
        vec2 dir = (c * 0.9 + uBlurDir * 1.5) * uBlur * 0.055;
        vec3 acc = vec3(0.0);
        for (int i = 0; i < 6; i++) {
          acc += texture2D(tDiffuse, uv - dir * (float(i) / 5.0)).rgb;
        }
        col = acc / 6.0;
      } else {
        col = texture2D(tDiffuse, uv).rgb;
      }
      // 색수차 펄스 (이벤트): R/B 반경 오프셋
      if (uAberr > 0.002) {
        vec2 off = c * uAberr * 0.02;
        col.r = texture2D(tDiffuse, uv + off).r;
        col.b = texture2D(tDiffuse, uv - off).b;
      }
      // 톤 그레이딩: 아주 미세한 온기(HDR 안전한 곱 연산만)
      col *= vec3(1.025, 1.0, 0.985);
      // 비네트 브리딩 (상시, 느린 맥동)
      float breathe = uVig + 0.05 * sin(uTime * 0.7);
      float vig = 1.0 - smoothstep(0.45, 0.98, length(c)) * breathe;
      col *= vig;
      // 필름 그레인 (상시, 애니메이션)
      float g = hash(uv * uRes + fract(uTime) * 91.7);
      col += (g - 0.5) * uGrain;
      gl_FragColor = vec4(col, 1.0);
    }
  `,
};

// PiP 슬로모 리플레이 (실험 #14): 저해상도 프레임 링버퍼 → 보스 처치 후 우하단 재생.
// 캔버스→캔버스 blit로 GPU에 유지(CPU 리드백 없음). 데스크톱에서만 활성.
const PIP_W = 320; // 캡처 해상도
const PIP_H = 180;
const PIP_CAPTURE_EVERY = 2; // n프레임당 1회 캡처(부하 절반)
const PIP_HISTORY = 90; // 링버퍼 프레임 수 (~3s @ 60fps, 2프레임당 1회)
const PIP_PLAY_DUR = 4; // 재생 시간(초) → 3s footage를 4s에 재생 = 슬로모

export class RenderPipeline {
  readonly composer: EffectComposer;
  readonly bloom: UnrealBloomPass;
  readonly musouPass: ShaderPass;
  readonly postPass: ShaderPass;
  private readonly renderer: WebGLRenderer;
  private readonly bloomScale: number;

  // PiP 리플레이 상태
  private pipEnabled: boolean;
  private readonly ring: HTMLCanvasElement[] = [];
  private readonly ringCtx: CanvasRenderingContext2D[] = [];
  private ringFilled = 0;
  private ringHead = 0;
  private capCounter = 0;
  private replayT = -1; // -1=비활성, ≥0=재생 경과(초)
  private replayStart = 0;
  private readonly replayFrames: HTMLCanvasElement[] = [];
  private pipWrap: HTMLDivElement | null = null;
  private pipCanvas: HTMLCanvasElement | null = null;
  private pipCtx: CanvasRenderingContext2D | null = null;

  constructor(renderer: WebGLRenderer, scene: Scene, camera: Camera) {
    this.renderer = renderer;
    this.composer = new EffectComposer(renderer);
    this.composer.setPixelRatio(maxDpr());
    this.composer.setSize(window.innerWidth, window.innerHeight);

    this.composer.addPass(new RenderPass(scene, camera));

    // 다수의 애디티브 이펙트가 겹쳐 화면이 날아가지 않도록 임계값을 높이고 강도를 낮춤.
    // (밝은 코어만 블룸을 태워 가독성 유지 — technical-art: 블룸은 디테일의 주원천이 아님)
    // 모바일은 블룸 해상도 절반으로 낮춰 성능 확보.
    this.bloomScale = isMobile() ? 0.5 : 1;
    // P0 투사체 가독성: 블룸이 본체를 태우지 않도록 반경/세기를 더 조인다.
    // 밝은 후광만 은은히 번지고, 불투명 본체는 또렷하게 남는다.
    this.bloom = new UnrealBloomPass(
      new Vector2(window.innerWidth * this.bloomScale, window.innerHeight * this.bloomScale),
      0.34, // strength
      0.4, // radius
      0.88, // threshold
    );
    this.composer.addPass(this.bloom);

    this.musouPass = new ShaderPass(MusouShader);
    this.composer.addPass(this.musouPass);

    // PostFX 팩(#21): 모션 블러/색수차/그레인/비네트/그레이딩. 모바일 감쇠.
    this.postPass = new ShaderPass(PostFxShader);
    const mob = isMobile();
    this.postPass.uniforms.uMobile.value = mob ? 1 : 0;
    this.postPass.uniforms.uGrain.value = mob ? 0.02 : 0.035;
    (this.postPass.uniforms.uRes.value as Vector2).set(window.innerWidth, window.innerHeight);
    this.composer.addPass(this.postPass);

    this.composer.addPass(new OutputPass());

    // PiP 리플레이는 데스크톱에서만 (모바일은 캡처 부하/메모리 회피).
    this.pipEnabled = !isMobile();
    if (this.pipEnabled) this.initPip();
  }

  private initPip(): void {
    for (let i = 0; i < PIP_HISTORY; i++) {
      const c = document.createElement('canvas');
      c.width = PIP_W;
      c.height = PIP_H;
      const ctx = c.getContext('2d');
      if (!ctx) {
        // 2D 컨텍스트 실패 → PiP 비활성(치명적이지 않음).
        this.pipEnabled = false;
        return;
      }
      this.ring.push(c);
      this.ringCtx.push(ctx);
    }
    const wrap = document.createElement('div');
    wrap.style.cssText = [
      'position:fixed',
      'right:18px',
      'bottom:18px',
      'width:26vw',
      'max-width:360px',
      'aspect-ratio:16/9',
      'z-index:28',
      'pointer-events:none',
      'display:none',
      'border:2px solid rgba(232,201,103,0.85)',
      'border-radius:6px',
      'overflow:hidden',
      'box-shadow:0 6px 24px rgba(0,0,0,0.6)',
    ].join(';');
    const cap = document.createElement('div');
    cap.textContent = '討伐 · 슬로 리플레이';
    cap.style.cssText = [
      'position:absolute',
      'left:0',
      'top:0',
      'padding:2px 8px',
      'font:600 12px/1.4 system-ui,sans-serif',
      'color:#ffe9a8',
      'background:linear-gradient(90deg,rgba(0,0,0,0.7),rgba(0,0,0,0))',
      'letter-spacing:0.04em',
    ].join(';');
    const canvas = document.createElement('canvas');
    canvas.width = PIP_W;
    canvas.height = PIP_H;
    canvas.style.cssText = 'width:100%;height:100%;display:block;';
    const pctx = canvas.getContext('2d');
    if (!pctx) {
      this.pipEnabled = false;
      return;
    }
    wrap.appendChild(canvas);
    wrap.appendChild(cap);
    document.body.appendChild(wrap);
    this.pipWrap = wrap;
    this.pipCanvas = canvas;
    this.pipCtx = pctx;
  }

  // 보스 처치 등 특별 순간 → 최근 링버퍼를 우하단 PiP에 슬로모 재생.
  playReplay(): void {
    if (!this.pipEnabled || this.replayT >= 0 || this.ringFilled < 8) return;
    this.replayFrames.length = 0;
    const start = this.ringFilled < PIP_HISTORY ? 0 : this.ringHead;
    for (let k = 0; k < this.ringFilled; k++) {
      this.replayFrames.push(this.ring[(start + k) % PIP_HISTORY]);
    }
    this.replayT = 0;
    this.replayStart = performance.now();
    if (this.pipWrap) {
      this.pipWrap.style.display = 'block';
      this.pipWrap.animate(
        [{ opacity: 0, transform: 'translateY(12px) scale(0.94)' }, { opacity: 1, transform: 'none' }],
        { duration: 260, easing: 'ease-out' },
      );
    }
  }

  // 무쌍 연출 세기(0..1) + 시간.
  setMusou(strength: number, time: number): void {
    this.musouPass.uniforms.uStrength.value = strength;
    this.musouPass.uniforms.uTime.value = time;
  }

  // PostFX(#21): 모션 블러 강도/방향 + 색수차 강도 + 시간(상시 그레인·비네트 구동).
  setPostFx(blur: number, blurX: number, blurZ: number, aberr: number, time: number): void {
    const u = this.postPass.uniforms;
    u.uBlur.value = blur;
    (u.uBlurDir.value as Vector2).set(blurX, blurZ);
    u.uAberr.value = aberr;
    u.uTime.value = time;
  }

  setSize(w: number, h: number): void {
    const dpr = maxDpr();
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(w, h);
    this.composer.setPixelRatio(dpr);
    this.composer.setSize(w, h);
    this.bloom.setSize(w * this.bloomScale, h * this.bloomScale);
    (this.postPass.uniforms.uRes.value as Vector2).set(w, h);
  }

  render(): void {
    this.composer.render();
    if (this.pipEnabled) this.pipTick();
  }

  // 캡처/재생. composer.render() 직후 같은 프레임에서 호출 → 드로잉버퍼 보존 불필요.
  private pipTick(): void {
    if (this.replayT >= 0) {
      this.advanceReplay();
      return;
    }
    // 링버퍼 캡처(간헐). 렌더러 캔버스를 저해상도로 다운샘플 blit.
    if (++this.capCounter < PIP_CAPTURE_EVERY) return;
    this.capCounter = 0;
    this.ringCtx[this.ringHead].drawImage(this.renderer.domElement, 0, 0, PIP_W, PIP_H);
    this.ringHead = (this.ringHead + 1) % PIP_HISTORY;
    if (this.ringFilled < PIP_HISTORY) this.ringFilled++;
  }

  private advanceReplay(): void {
    const t = (performance.now() - this.replayStart) / 1000;
    this.replayT = t;
    if (t >= PIP_PLAY_DUR || !this.pipCtx || this.replayFrames.length === 0) {
      this.endReplay();
      return;
    }
    const idx = Math.min(this.replayFrames.length - 1, Math.floor((t / PIP_PLAY_DUR) * this.replayFrames.length));
    this.pipCtx.drawImage(this.replayFrames[idx], 0, 0, PIP_W, PIP_H);
  }

  private endReplay(): void {
    this.replayT = -1;
    this.replayFrames.length = 0;
    this.capCounter = 0;
    if (this.pipWrap) {
      const wrap = this.pipWrap;
      wrap.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 260, easing: 'ease-in' }).onfinish = () => {
        wrap.style.display = 'none';
      };
    }
  }
}
