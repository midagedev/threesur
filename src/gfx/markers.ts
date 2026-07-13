import {
  Scene,
  Sprite,
  SpriteMaterial,
  CanvasTexture,
  PlaneGeometry,
  ShaderMaterial,
  AdditiveBlending,
  InstancedMesh,
  InstancedBufferAttribute,
  DynamicDrawUsage,
} from 'three';

// 맵 오브젝트/랜드마크용 표식 레이어.
// (1) 지면 발광 원반(상시 글로우), (2) 이름표, (3) 근접 상호작용 힌트를 한데 묶어
// begin → glow/name/hint* → end 패턴으로 프레임마다 재사용한다(할당 0).

const CV_W = 288;
const CV_H = 72;

interface TextStyle {
  font: string;
  fill: string;
  stroke: string;
  strokeW: number;
  scale: number;
}

const NAME_STYLE: TextStyle = {
  font: 'bold 30px "Nanum Myeongjo","Times New Roman",serif',
  fill: '#f0e0a0',
  stroke: 'rgba(0,0,0,0.92)',
  strokeW: 6,
  scale: 1.35,
};

const HINT_STYLE: TextStyle = {
  font: 'bold 27px "Nanum Myeongjo","Times New Roman",serif',
  fill: '#c8ecff',
  stroke: 'rgba(0,0,0,0.88)',
  strokeW: 6,
  scale: 1.18,
};

interface TextSlot {
  sprite: Sprite;
  mat: SpriteMaterial;
  tex: CanvasTexture;
  ctx: CanvasRenderingContext2D;
  text: string;
}

// 텍스트 스프라이트 풀. 텍스트가 바뀔 때만 캔버스를 다시 그린다.
class TextSprites {
  private readonly slots: TextSlot[] = [];
  private readonly cap: number;
  private readonly style: TextStyle;
  private cursor = 0;

  constructor(scene: Scene, cap: number, style: TextStyle, renderOrder: number) {
    this.cap = cap;
    this.style = style;
    for (let i = 0; i < cap; i++) {
      const cv = document.createElement('canvas');
      cv.width = CV_W;
      cv.height = CV_H;
      const ctx = cv.getContext('2d')!;
      const tex = new CanvasTexture(cv);
      const mat = new SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false, toneMapped: false });
      const sprite = new Sprite(mat);
      sprite.visible = false;
      sprite.renderOrder = renderOrder;
      sprite.scale.set(style.scale * (CV_W / CV_H), style.scale, 1);
      scene.add(sprite);
      this.slots.push({ sprite, mat, tex, ctx, text: '' });
    }
  }

  begin(): void {
    this.cursor = 0;
  }

  place(text: string, x: number, y: number, z: number, alpha: number): void {
    if (this.cursor >= this.cap) return;
    const s = this.slots[this.cursor++];
    if (s.text !== text) {
      s.text = text;
      const ctx = s.ctx;
      const st = this.style;
      ctx.clearRect(0, 0, CV_W, CV_H);
      ctx.font = st.font;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.lineWidth = st.strokeW;
      ctx.lineJoin = 'round';
      ctx.strokeStyle = st.stroke;
      ctx.strokeText(text, CV_W / 2, CV_H / 2);
      ctx.fillStyle = st.fill;
      ctx.fillText(text, CV_W / 2, CV_H / 2);
      s.tex.needsUpdate = true;
    }
    s.mat.opacity = alpha;
    s.sprite.position.set(x, y, z);
    s.sprite.visible = true;
  }

  end(): void {
    for (let i = this.cursor; i < this.cap; i++) this.slots[i].sprite.visible = false;
  }

  reset(): void {
    for (const s of this.slots) s.sprite.visible = false;
    this.cursor = 0;
  }
}

// 지면 발광 원반 풀(애디티브). 부드러운 방사형 감쇠 + 완만한 맥동.
class GlowBatch {
  private readonly mat: ShaderMaterial;
  private readonly matrices: Float32Array;
  private readonly colors: Float32Array;
  private readonly seeds: Float32Array;
  private readonly colAttr: InstancedBufferAttribute;
  private readonly seedAttr: InstancedBufferAttribute;
  private readonly mesh: InstancedMesh;
  private readonly cap: number;
  private w = 0;

  constructor(scene: Scene, cap: number) {
    this.cap = cap;
    const geo = new PlaneGeometry(1, 1);
    geo.rotateX(-Math.PI / 2);
    this.colors = new Float32Array(cap * 3);
    this.seeds = new Float32Array(cap);
    this.colAttr = new InstancedBufferAttribute(this.colors, 3);
    this.seedAttr = new InstancedBufferAttribute(this.seeds, 1);
    this.colAttr.setUsage(DynamicDrawUsage);
    this.seedAttr.setUsage(DynamicDrawUsage);
    geo.setAttribute('aColor', this.colAttr);
    geo.setAttribute('aSeed', this.seedAttr);
    this.mat = new ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: /* glsl */ `
        attribute vec3 aColor;
        attribute float aSeed;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vSeed;
        void main() {
          vUv = uv;
          vColor = aColor;
          vSeed = aSeed;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vSeed;
        void main() {
          float r = length(vUv - 0.5) * 2.0;
          float soft = smoothstep(1.0, 0.12, r);
          if (soft <= 0.002) discard;
          float pulse = 0.8 + 0.2 * sin(uTime * 2.3 + vSeed * 6.283);
          float b = soft * soft * pulse;
          gl_FragColor = vec4(vColor * b, b * 0.55);
        }
      `,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
      depthTest: true,
    });
    this.mesh = new InstancedMesh(geo, this.mat, cap);
    this.mesh.count = 0;
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 2;
    this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.matrices = this.mesh.instanceMatrix.array as Float32Array;
    scene.add(this.mesh);
  }

  begin(): void {
    this.w = 0;
  }

  push(x: number, z: number, radius: number, r: number, g: number, b: number): void {
    if (this.w >= this.cap) return;
    const i = this.w++;
    const m = i * 16;
    const d = radius * 2;
    this.matrices[m] = d;
    this.matrices[m + 5] = 1;
    this.matrices[m + 10] = d;
    this.matrices[m + 12] = x;
    this.matrices[m + 13] = 0.06;
    this.matrices[m + 14] = z;
    this.matrices[m + 15] = 1;
    const c = i * 3;
    this.colors[c] = r;
    this.colors[c + 1] = g;
    this.colors[c + 2] = b;
    this.seeds[i] = (Math.floor(x * 3.1 + z * 7.7) & 63) / 64;
  }

  end(time: number): void {
    this.mat.uniforms.uTime.value = time;
    this.mesh.count = this.w;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.colAttr.needsUpdate = true;
    this.seedAttr.needsUpdate = true;
  }

  reset(): void {
    this.w = 0;
    this.mesh.count = 0;
  }
}

// 지면 글로우 + 이름표 + 근접 힌트를 묶은 표식 레이어.
export class MarkerLayer {
  private readonly glow: GlowBatch;
  private readonly names: TextSprites;
  private readonly hints: TextSprites;
  private time = 0;

  constructor(scene: Scene, glowCap = 24, nameCap = 18, hintCap = 6) {
    this.glow = new GlowBatch(scene, glowCap);
    this.names = new TextSprites(scene, nameCap, NAME_STYLE, 11);
    this.hints = new TextSprites(scene, hintCap, HINT_STYLE, 12);
  }

  begin(time: number): void {
    this.time = time;
    this.glow.begin();
    this.names.begin();
    this.hints.begin();
  }

  glowAt(x: number, z: number, radius: number, r: number, g: number, b: number): void {
    this.glow.push(x, z, radius, r, g, b);
  }

  name(text: string, x: number, y: number, z: number): void {
    this.names.place(text, x, y, z, 1);
  }

  // 근접 힌트: 맥동 알파로 눈에 띄게.
  hint(text: string, x: number, y: number, z: number): void {
    const a = 0.62 + 0.38 * Math.sin(this.time * 5.2);
    this.hints.place(text, x, y, z, a);
  }

  end(): void {
    this.glow.end(this.time);
    this.names.end();
    this.hints.end();
  }

  reset(): void {
    this.glow.reset();
    this.names.reset();
    this.hints.reset();
  }
}
