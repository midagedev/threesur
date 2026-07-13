// 웨이브(세력) 전환 배너 — DESIGN 14.4 쇼케이스.
// 버텍스 셰이더로 펄럭이는 천(cloth)을 카메라 정면 상단에 잠깐 펼쳐 새 세력의 도래를 알린다.
// 메인 씬에 있으므로 블룸을 타 은은히 빛나되, 색·수명을 절제해 화이트아웃/산만함을 피한다.
import {
  Mesh,
  PlaneGeometry,
  ShaderMaterial,
  CanvasTexture,
  SRGBColorSpace,
  Color,
  Texture,
  DoubleSide,
} from 'three';
import type { PerspectiveCamera, Scene } from 'three';

const VERT = /* glsl */ `
  uniform float uTime;
  uniform float uReveal;
  varying vec2 vUv;
  varying float vFold;
  void main() {
    vUv = uv;
    vec3 p = position;
    // 결(가로) 방향으로 진행하는 두 개의 사인파 → 천이 펄럭이는 주름.
    float w = sin(p.x * 7.0 + uTime * 3.4) * 0.5 + sin(p.x * 13.0 - uTime * 2.1) * 0.22;
    // 세로 가장자리로 갈수록 진폭↑ (매달린 천 느낌). 펼쳐지는 앞단에서 진폭 가중.
    float edge = 0.35 + abs(p.y) * 1.3;
    float amp = 0.05 * edge * smoothstep(0.0, 0.3, uReveal);
    p.z += w * amp;
    vFold = w; // 주름 음영용
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

const FRAG = /* glsl */ `
  precision highp float;
  uniform vec3 uColor;
  uniform float uReveal;
  uniform float uAlpha;
  uniform float uTime;
  uniform sampler2D uTex;
  varying vec2 vUv;
  varying float vFold;
  void main() {
    // 좌→우 펼침: uReveal 경계 밖은 버림 + 앞단 밝은 띠.
    float lead = uReveal;
    if (vUv.x > lead) discard;
    float leadGlow = smoothstep(0.05, 0.0, lead - vUv.x) * 0.6;

    // 부드러운 라운드 사각형 천 알파(가장자리 페더).
    vec2 d = abs(vUv - 0.5) * 2.0;
    float shape = (1.0 - smoothstep(0.86, 1.0, d.x)) * (1.0 - smoothstep(0.72, 1.0, d.y));

    // 짙은 천 바탕 + 주름 음영 + 상하 그라데이션 → 파스텔 워시가 아닌 묵직한 군기.
    float shade = 0.5 + vFold * 0.26 + 0.14 * (1.0 - vUv.y);
    vec3 cloth = uColor * shade;

    // 문양(한자) — 세력색을 머금은 밝은 엠블럼(캔버스 그림자로 대비 확보).
    vec4 g = texture2D(uTex, vUv);
    vec3 emblem = mix(vec3(1.0), uColor * 2.2, 0.18);
    vec3 col = mix(cloth, emblem, g.a);
    col += leadGlow * uColor * 1.0;

    // 위·아래 얇은 금색 테두리 선.
    float bar = smoothstep(0.9, 0.97, d.y) * (1.0 - smoothstep(0.97, 1.02, d.y));
    col = mix(col, vec3(0.95, 0.8, 0.45), bar * 0.8);

    float a = shape * uAlpha;
    if (a < 0.01) discard;
    gl_FragColor = vec4(col, a);
  }
`;

export class WaveBanner {
  private readonly mesh: Mesh;
  private readonly mat: ShaderMaterial;
  private readonly texCache = new Map<string, Texture>();
  private life = 0;
  private readonly dur = 3.0;

  constructor(scene: Scene) {
    const geo = new PlaneGeometry(1, 1, 48, 10);
    this.mat = new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uReveal: { value: 0 },
        uAlpha: { value: 0 },
        uColor: { value: new Color(0.6, 0.6, 0.6) },
        uTex: { value: this.glyphTexture('群雄', '군웅') },
      },
      vertexShader: VERT,
      fragmentShader: FRAG,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      side: DoubleSide,
    });
    this.mesh = new Mesh(geo, this.mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 998; // 씬 위, 블룸 전
    this.mesh.visible = false;
    this.mesh.scale.set(18, 4.4, 1);
    scene.add(this.mesh);
  }

  trigger(hanja: string, ko: string, color: [number, number, number]): void {
    this.mat.uniforms.uColor.value = new Color(color[0], color[1], color[2]);
    this.mat.uniforms.uTex.value = this.glyphTexture(hanja, ko);
    this.life = this.dur;
    this.mesh.visible = true;
  }

  update(dt: number, camera: PerspectiveCamera): void {
    if (this.life <= 0) {
      if (this.mesh.visible) this.mesh.visible = false;
      return;
    }
    this.life -= dt;
    const t = 1 - this.life / this.dur; // 0→1 진행
    this.mat.uniforms.uTime.value += dt;
    // 펼침(0~0.35) → 유지 → 페이드(마지막 0.6s)
    this.mat.uniforms.uReveal.value = Math.min(1, t / 0.12);
    const fadeIn = Math.min(1, t / 0.1);
    const fadeOut = Math.min(1, this.life / 0.6);
    this.mat.uniforms.uAlpha.value = Math.min(fadeIn, fadeOut) * 0.96;

    // 카메라 정면 상단(HUD 아래 여백)에 고정(빌보드).
    this.mesh.position.copy(camera.position);
    this.mesh.quaternion.copy(camera.quaternion);
    this.mesh.translateZ(-24);
    this.mesh.translateY(2.6);
  }

  reset(): void {
    this.life = 0;
    this.mesh.visible = false;
  }

  private glyphTexture(hanja: string, ko: string): Texture {
    const key = hanja + ko;
    const cached = this.texCache.get(key);
    if (cached) return cached;
    const W = 1024;
    const H = 256;
    const cv = document.createElement('canvas');
    cv.width = W;
    cv.height = H;
    const ctx = cv.getContext('2d')!;
    ctx.clearRect(0, 0, W, H);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    // 큰 한자(중앙) + 한글(아래). 흰빛 + 짙은 그림자로 어떤 천 색 위에서도 대비 확보.
    ctx.shadowColor = 'rgba(0,0,0,0.85)';
    ctx.shadowBlur = 10;
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 150px "Nanum Myeongjo","SimSun",serif';
    ctx.fillText(hanja, W / 2, H * 0.42);
    ctx.font = 'bold 52px "Nanum Gothic","Malgun Gothic",sans-serif';
    ctx.fillText(ko, W / 2, H * 0.82);
    const tex = new CanvasTexture(cv);
    tex.colorSpace = SRGBColorSpace;
    tex.needsUpdate = true;
    this.texCache.set(key, tex);
    return tex;
  }
}
