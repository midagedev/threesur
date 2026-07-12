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

export class RenderPipeline {
  readonly composer: EffectComposer;
  readonly bloom: UnrealBloomPass;
  readonly musouPass: ShaderPass;
  private readonly renderer: WebGLRenderer;
  private readonly bloomScale: number;

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
    this.bloom = new UnrealBloomPass(
      new Vector2(window.innerWidth * this.bloomScale, window.innerHeight * this.bloomScale),
      0.42, // strength
      0.5, // radius
      0.9, // threshold
    );
    this.composer.addPass(this.bloom);

    this.musouPass = new ShaderPass(MusouShader);
    this.composer.addPass(this.musouPass);

    this.composer.addPass(new OutputPass());
  }

  // 무쌍 연출 세기(0..1) + 시간.
  setMusou(strength: number, time: number): void {
    this.musouPass.uniforms.uStrength.value = strength;
    this.musouPass.uniforms.uTime.value = time;
  }

  setSize(w: number, h: number): void {
    const dpr = maxDpr();
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(w, h);
    this.composer.setPixelRatio(dpr);
    this.composer.setSize(w, h);
    this.bloom.setSize(w * this.bloomScale, h * this.bloomScale);
  }

  render(): void {
    this.composer.render();
  }
}
