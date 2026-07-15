import {
  Scene,
  Sprite,
  SpriteMaterial,
  CanvasTexture,
  PlaneGeometry,
  BoxGeometry,
  MeshBasicMaterial,
  Object3D,
  DoubleSide,
  Vector3,
  ShaderMaterial,
  AdditiveBlending,
  InstancedMesh,
  InstancedBufferAttribute,
  DynamicDrawUsage,
  PerspectiveCamera,
} from 'three';
import { castleRenderData, CASTLE } from '../game/battlefieldMap';
import type { CastleBanner } from '../game/battlefieldMap';

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

// 구역 진입 이름표(크고 금빛, 페이드 인). 성곽 구역 상단에 배너처럼 뜬다.
const TITLE_STYLE: TextStyle = {
  font: 'bold 32px "Nanum Myeongjo","Times New Roman",serif',
  fill: '#ffe6a2',
  stroke: 'rgba(0,0,0,0.94)',
  strokeW: 7,
  scale: 2.35,
};

const BANNER_FOG_COLOR = new Vector3(0.00018, 0.00026, 0.0008);
const BANNER_FOG_DENSITY = 0.019;

// 낙양 공방전 점령 웨이브 색(동료 청록 림과 톤 통일). 최댓값 0.46 < 블룸 임계 0.6 → 천이 광원처럼 타지 않음.
const ALLIED_CYAN: readonly [number, number, number] = [0.14, 0.46, 0.44];
const FLIP_DELAY_PER_M = 0.055; // 원점에서 먼 깃발일수록 늦게 물듦(웨이브 전파 속도)
const FLIP_LERP_SEC = 0.8; // 개별 깃발 색 전환 소요
const FLIP_FLUTTER_PEAK = 0.15; // 전환 중 펄럭임 진폭 가산(1.0→1.15→1.0, 바람이 훑는 느낌)

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

// 성곽 성문·군영 깃발. 버텍스 셰이더 사인파로 펄럭이는 천 + 어두운 깃대.
// 정적 배치(성곽은 상시 지형) — 데이터 버전이 바뀔 때만 인스턴스를 다시 굽고, 매 프레임 uTime만 갱신.
class BannerBatch {
  private readonly cloth: InstancedMesh;
  private readonly poles: InstancedMesh;
  private readonly clothMat: ShaderMaterial;
  private readonly seeds: Float32Array;
  private readonly cols: Float32Array;
  private readonly seedAttr: InstancedBufferAttribute;
  private readonly colAttr: InstancedBufferAttribute;
  private readonly flut: Float32Array; // per-instance 펄럭임 진폭 배수(기본 1.0)
  private readonly flutAttr: InstancedBufferAttribute;
  private readonly dummy = new Object3D();
  private readonly cap: number;
  private version = -1;

  // 점령/함락 색 전환 웨이브 상태(낙양 공방전). castleRenderData.flipVersion 변화로 무장(arm).
  private flipVersion = -1;
  private lastTime = -1;
  private count = 0;
  private anyFlip = false;
  private readonly bx: Float32Array; // 깃발 월드 위치(웨이브 딜레이 계산용)
  private readonly bz: Float32Array;
  private readonly baseCol: Float32Array; // 정의 원색(복귀 대상 + 색 판별)
  private readonly isRed: Uint8Array; // 붉은 군기만 전환, 금기(gold)는 유지
  private readonly trPhase: Uint8Array; // 0=대기, 1=딜레이, 2=lerp
  private readonly trDelay: Float32Array; // 남은 딜레이(phase 1)
  private readonly trProg: Float32Array; // lerp 진행 0..1(phase 2)
  private readonly trFrom: Float32Array; // 전환 시작색 스냅샷
  private readonly trTo: Float32Array; // 전환 목표색

  constructor(scene: Scene, cap = 24) {
    this.cap = cap;
    const clothGeo = new PlaneGeometry(1, 1, 14, 3);
    clothGeo.translate(0.5, 0.5, 0); // 로컬 원점 = 깃대쪽 하단, +X로 자유단, +Y로 위
    this.seeds = new Float32Array(cap);
    this.cols = new Float32Array(cap * 3);
    this.flut = new Float32Array(cap).fill(1);
    this.seedAttr = new InstancedBufferAttribute(this.seeds, 1);
    this.colAttr = new InstancedBufferAttribute(this.cols, 3);
    this.flutAttr = new InstancedBufferAttribute(this.flut, 1);
    this.seedAttr.setUsage(DynamicDrawUsage);
    this.colAttr.setUsage(DynamicDrawUsage);
    this.flutAttr.setUsage(DynamicDrawUsage);
    clothGeo.setAttribute('aSeed', this.seedAttr);
    clothGeo.setAttribute('aColor', this.colAttr);
    clothGeo.setAttribute('aFlutter', this.flutAttr);
    // 전환 웨이브 상태(정적 성곽이라 cap 고정 확보).
    this.bx = new Float32Array(cap);
    this.bz = new Float32Array(cap);
    this.baseCol = new Float32Array(cap * 3);
    this.isRed = new Uint8Array(cap);
    this.trPhase = new Uint8Array(cap);
    this.trDelay = new Float32Array(cap);
    this.trProg = new Float32Array(cap);
    this.trFrom = new Float32Array(cap * 3);
    this.trTo = new Float32Array(cap * 3);
    this.clothMat = new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uFogColor: { value: BANNER_FOG_COLOR.clone() },
        uFogDensity: { value: BANNER_FOG_DENSITY },
      },
      vertexShader: /* glsl */ `
        attribute float aSeed;
        attribute vec3 aColor;
        attribute float aFlutter;
        uniform float uTime;
        varying vec3 vColor;
        varying float vShade;
        varying float vFogDepth;
        void main() {
          vColor = aColor;
          vec3 p = position;
          float t = uTime + aSeed * 6.2831;
          float amp = p.x * aFlutter; // 깃대(0)→자유단(1) 진폭 증가 × 전환 웨이브 순간 가산
          float w = sin(p.x * 6.5 - t * 5.5) * 0.17 * amp
                  + sin(p.x * 3.0 - t * 3.2 + 1.3) * 0.09 * amp;
          p.z += w;
          p.y += sin(p.x * 4.5 - t * 4.8) * 0.05 * amp;
          vShade = 0.66 + 0.28 * cos(p.x * 6.5 - t * 5.5); // 사인 기울기로 가짜 음영
          vec4 mv = modelViewMatrix * instanceMatrix * vec4(p, 1.0);
          vFogDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uFogColor;
        uniform float uFogDensity;
        varying vec3 vColor;
        varying float vShade;
        varying float vFogDepth;
        void main() {
          vec3 col = vColor * vShade;
          float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
          col = mix(col, uFogColor, clamp(fog, 0.0, 1.0));
          gl_FragColor = vec4(col, 1.0);
        }
      `,
      side: DoubleSide,
      transparent: false,
      depthWrite: true,
      depthTest: true,
    });
    this.cloth = new InstancedMesh(clothGeo, this.clothMat, cap);
    this.cloth.count = 0;
    this.cloth.frustumCulled = false;
    this.cloth.renderOrder = 1;
    this.cloth.instanceMatrix.setUsage(DynamicDrawUsage);

    const poleGeo = new BoxGeometry(1, 1, 1);
    poleGeo.translate(0, 0.5, 0); // 바닥 피벗
    const poleMat = new MeshBasicMaterial({ color: 0x241d19, toneMapped: true });
    this.poles = new InstancedMesh(poleGeo, poleMat, cap);
    this.poles.count = 0;
    this.poles.frustumCulled = false;
    this.poles.instanceMatrix.setUsage(DynamicDrawUsage);

    scene.add(this.cloth);
    scene.add(this.poles);
  }

  private rebuild(defs: CastleBanner[]): void {
    const n = Math.min(defs.length, this.cap);
    for (let i = 0; i < n; i++) {
      const d = defs[i];
      // 깃대
      this.dummy.position.set(d.x, 0, d.z);
      this.dummy.rotation.set(0, 0, 0);
      this.dummy.scale.set(0.16, d.poleH, 0.16);
      this.dummy.updateMatrix();
      this.poles.setMatrixAt(i, this.dummy.matrix);
      // 천(깃대 상단에 부착)
      this.dummy.position.set(d.x, d.poleH - d.h - 0.15, d.z);
      this.dummy.rotation.set(0, d.ry, 0);
      this.dummy.scale.set(d.w, d.h, 1);
      this.dummy.updateMatrix();
      this.cloth.setMatrixAt(i, this.dummy.matrix);
      this.seeds[i] = (i * 0.37) % 1;
      this.cols[i * 3] = d.r;
      this.cols[i * 3 + 1] = d.g;
      this.cols[i * 3 + 2] = d.b;
      // 전환 웨이브 소스 데이터: 위치, 원색, 붉은 군기 여부. 구조가 바뀔 때만(정적) 재계산.
      this.bx[i] = d.x;
      this.bz[i] = d.z;
      this.baseCol[i * 3] = d.r;
      this.baseCol[i * 3 + 1] = d.g;
      this.baseCol[i * 3 + 2] = d.b;
      // r 지배 + g가 낮음 → 붉은 군기(전환 대상). 금기(gold, g/r≈0.75)는 제외.
      this.isRed[i] = d.r > d.g && d.r > d.b && d.g < d.r * 0.5 ? 1 : 0;
      this.trPhase[i] = 0;
      this.flut[i] = 1;
    }
    this.count = n;
    this.cloth.count = n;
    this.poles.count = n;
    this.anyFlip = false;
    this.cloth.instanceMatrix.needsUpdate = true;
    this.poles.instanceMatrix.needsUpdate = true;
    this.seedAttr.needsUpdate = true;
    this.colAttr.needsUpdate = true;
    this.flutAttr.needsUpdate = true;
  }

  update(time: number): void {
    if (castleRenderData.bannerVersion !== this.version) {
      this.version = castleRenderData.bannerVersion;
      this.rebuild(castleRenderData.banners);
    }
    this.clothMat.uniforms.uTime.value = time;

    // 점령/함락 웨이브: flipVersion 변화 감지 → 각 붉은 군기에 거리비례 딜레이 후 색 lerp.
    const dt = this.lastTime < 0 ? 0 : Math.min(0.05, Math.max(0, time - this.lastTime));
    this.lastTime = time;
    if (castleRenderData.flipVersion !== this.flipVersion) {
      this.flipVersion = castleRenderData.flipVersion;
      if (this.flipVersion > 0) this.armFlip();
    }
    if (this.anyFlip) this.advanceFlip(dt);
  }

  // 웨이브 무장: 원점(flipX,flipZ)에서 각 붉은 군기까지 거리로 딜레이를 주고,
  // allied면 청록으로, 아니면 원색으로 복귀시키도록 목표색을 잡는다.
  private armFlip(): void {
    const ox = castleRenderData.flipX;
    const oz = castleRenderData.flipZ;
    const allied = castleRenderData.allied;
    let any = false;
    for (let i = 0; i < this.count; i++) {
      if (this.isRed[i] === 0) continue; // 금기(gold)는 황실 상징으로 유지
      // 성곽(외성) 안 깃발만 전환 — 오픈필드 군영(kind 5)도 붉은색이라 색 판별만으론 휩쓸림.
      if (Math.abs(this.bx[i] - CASTLE.cx) > CASTLE.ohx + 2.5 || Math.abs(this.bz[i] - CASTLE.cz) > CASTLE.ohz + 2.5) continue;
      const dx = this.bx[i] - ox;
      const dz = this.bz[i] - oz;
      const dist = Math.hypot(dx, dz);
      this.trDelay[i] = dist * FLIP_DELAY_PER_M;
      this.trProg[i] = 0;
      this.trPhase[i] = 1;
      const c = i * 3;
      // 시작색 = 현재 표시색 스냅샷(전환 도중 재트리거해도 이어짐).
      this.trFrom[c] = this.cols[c];
      this.trFrom[c + 1] = this.cols[c + 1];
      this.trFrom[c + 2] = this.cols[c + 2];
      if (allied) {
        this.trTo[c] = ALLIED_CYAN[0];
        this.trTo[c + 1] = ALLIED_CYAN[1];
        this.trTo[c + 2] = ALLIED_CYAN[2];
      } else {
        this.trTo[c] = this.baseCol[c];
        this.trTo[c + 1] = this.baseCol[c + 1];
        this.trTo[c + 2] = this.baseCol[c + 2];
      }
      any = true;
    }
    this.anyFlip = any;
  }

  private advanceFlip(dt: number): void {
    let active = false;
    for (let i = 0; i < this.count; i++) {
      const phase = this.trPhase[i];
      if (phase === 0) continue;
      active = true;
      if (phase === 1) {
        this.trDelay[i] -= dt;
        if (this.trDelay[i] > 0) {
          this.flut[i] = 1; // 딜레이 중엔 원색·정상 펄럭임 유지
          continue;
        }
        this.trPhase[i] = 2;
        this.trProg[i] = 0;
      }
      // phase 2: 0.8s 색 lerp + 진행 중 펄럭임 진폭 1.0→1.15→1.0.
      this.trProg[i] += dt / FLIP_LERP_SEC;
      const p = this.trProg[i] >= 1 ? 1 : this.trProg[i];
      const e = p * p * (3 - 2 * p); // smoothstep
      const c = i * 3;
      this.cols[c] = this.trFrom[c] + (this.trTo[c] - this.trFrom[c]) * e;
      this.cols[c + 1] = this.trFrom[c + 1] + (this.trTo[c + 1] - this.trFrom[c + 1]) * e;
      this.cols[c + 2] = this.trFrom[c + 2] + (this.trTo[c + 2] - this.trFrom[c + 2]) * e;
      this.flut[i] = 1 + FLIP_FLUTTER_PEAK * Math.sin(p * Math.PI);
      if (p >= 1) {
        this.trPhase[i] = 0;
        this.flut[i] = 1;
      }
    }
    this.anyFlip = active;
    this.colAttr.needsUpdate = true;
    this.flutAttr.needsUpdate = true;
  }

  // 런 리셋 재동기화: 전 런에서 물든 색을 원색으로 즉시 복원(웨이브 없이). 지오메트리는 유지(정적 성곽).
  // battlefieldMap.reset()은 buildBanners를 1회만 굽어 bannerVersion이 안 오르므로, 색 복원은 여기서 담당.
  resetOwnership(): void {
    for (let i = 0; i < this.count; i++) {
      const c = i * 3;
      this.cols[c] = this.baseCol[c];
      this.cols[c + 1] = this.baseCol[c + 1];
      this.cols[c + 2] = this.baseCol[c + 2];
      this.trPhase[i] = 0;
      this.flut[i] = 1;
    }
    this.anyFlip = false;
    this.flipVersion = castleRenderData.flipVersion; // 스테일 버전 재트리거 방지
    this.colAttr.needsUpdate = true;
    this.flutAttr.needsUpdate = true;
  }
}

// 단색 텍스처 1장(작은 캔버스). 게이트 HP 바 배경/링 등 색만 필요한 스프라이트에 재사용.
function solidTexture(r: number, g: number, b: number): CanvasTexture {
  const cv = document.createElement('canvas');
  cv.width = 4;
  cv.height = 4;
  const ctx = cv.getContext('2d')!;
  ctx.fillStyle = `rgb(${r},${g},${b})`;
  ctx.fillRect(0, 0, 4, 4);
  const tex = new CanvasTexture(cv);
  tex.needsUpdate = true;
  return tex;
}

// 가로 그라디언트 텍스처(게이트 HP 채움: 금→주황). 값은 블룸 임계 근처에서 절제(광원처럼 타지 않게).
function gateFillTexture(): CanvasTexture {
  const cv = document.createElement('canvas');
  cv.width = 64;
  cv.height = 8;
  const ctx = cv.getContext('2d')!;
  const grad = ctx.createLinearGradient(0, 0, 64, 0);
  grad.addColorStop(0, 'rgb(224,180,90)');
  grad.addColorStop(1, 'rgb(200,96,36)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 8);
  const tex = new CanvasTexture(cv);
  tex.needsUpdate = true;
  return tex;
}

const GATE_BAR_W = 3.0; // 바 전체 폭(월드)
const GATE_BAR_H = 0.34; // 바 높이(월드)
const GATE_BAR_Y = 3.2; // 성문 위 표시 높이

// 성문 위 3D 빌보드 HP 바 풀(#50). 좌측 정렬 배경(어두운 적) + 좌측에서 자라는 채움(금→주황).
// 스프라이트라 항상 카메라를 향한다. center.x=0 으로 좌측 앵커 고정 → hp01은 채움 scale.x만 바꾼다(캔버스 재드로 없음).
class GateBarBatch {
  private readonly bg: Sprite[] = [];
  private readonly fill: Sprite[] = [];
  private readonly cap: number;
  private w = 0;

  constructor(scene: Scene, cap: number) {
    this.cap = cap;
    const bgTex = solidTexture(58, 12, 10);
    const fillTex = gateFillTexture();
    for (let i = 0; i < cap; i++) {
      const bgMat = new SpriteMaterial({ map: bgTex, transparent: true, depthTest: false, depthWrite: false, toneMapped: false, opacity: 0.9 });
      const b = new Sprite(bgMat);
      b.center.set(0, 0.5);
      b.scale.set(GATE_BAR_W, GATE_BAR_H, 1);
      b.renderOrder = 13;
      b.visible = false;
      scene.add(b);
      this.bg.push(b);
      const fillMat = new SpriteMaterial({ map: fillTex, transparent: true, depthTest: false, depthWrite: false, toneMapped: false });
      const f = new Sprite(fillMat);
      f.center.set(0, 0.5);
      f.scale.set(GATE_BAR_W, GATE_BAR_H, 1);
      f.renderOrder = 14;
      f.visible = false;
      scene.add(f);
      this.fill.push(f);
    }
  }

  begin(): void {
    this.w = 0;
  }

  // hp01 0..1. 음수면 미표시(파성됨/HP 없음).
  push(x: number, z: number, hp01: number): void {
    if (this.w >= this.cap || hp01 < 0) return;
    const i = this.w++;
    const lx = x - GATE_BAR_W * 0.5; // 좌측 앵커(성문 위 중앙 정렬)
    const b = this.bg[i];
    b.position.set(lx, GATE_BAR_Y, z);
    b.visible = true;
    const clamped = hp01 > 1 ? 1 : hp01;
    const f = this.fill[i];
    f.position.set(lx, GATE_BAR_Y, z);
    f.scale.set(GATE_BAR_W * clamped, GATE_BAR_H, 1);
    f.visible = clamped > 0.001;
  }

  end(): void {
    for (let i = this.w; i < this.cap; i++) {
      this.bg[i].visible = false;
      this.fill[i].visible = false;
    }
  }

  reset(): void {
    for (let i = 0; i < this.cap; i++) {
      this.bg[i].visible = false;
      this.fill[i].visible = false;
    }
    this.w = 0;
  }
}

// 랜드마크 상호작용 링 풀(#50). 지면 애디티브 고리. active면 채워진 맥동, 비활성이면 흐린 저채도 링.
// 절제: 링 1겹, 알파 상한 낮게, 블룸 임계 아래.
class RingBatch {
  private readonly mat: ShaderMaterial;
  private readonly matrices: Float32Array;
  private readonly colors: Float32Array;
  private readonly actives: Float32Array;
  private readonly colAttr: InstancedBufferAttribute;
  private readonly actAttr: InstancedBufferAttribute;
  private readonly mesh: InstancedMesh;
  private readonly cap: number;
  private w = 0;

  constructor(scene: Scene, cap: number) {
    this.cap = cap;
    const geo = new PlaneGeometry(1, 1);
    geo.rotateX(-Math.PI / 2);
    this.colors = new Float32Array(cap * 3);
    this.actives = new Float32Array(cap);
    this.colAttr = new InstancedBufferAttribute(this.colors, 3);
    this.actAttr = new InstancedBufferAttribute(this.actives, 1);
    this.colAttr.setUsage(DynamicDrawUsage);
    this.actAttr.setUsage(DynamicDrawUsage);
    geo.setAttribute('aColor', this.colAttr);
    geo.setAttribute('aActive', this.actAttr);
    this.mat = new ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: /* glsl */ `
        attribute vec3 aColor;
        attribute float aActive;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vActive;
        void main() {
          vUv = uv;
          vColor = aColor;
          vActive = aActive;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vActive;
        void main() {
          float r = length(vUv - 0.5) * 2.0;
          // 고리 밴드: 안쪽 0.72 상승 ~ 바깥 0.98 하강.
          float band = smoothstep(0.72, 0.84, r) * smoothstep(1.0, 0.9, r);
          if (band <= 0.002 && vActive < 0.5) discard;
          float pulse = 0.72 + 0.28 * sin(uTime * 3.0);
          // active: 맥동하는 고리 + 아주 옅은 안쪽 채움. 비활성: 정적 흐린 고리만.
          float ringA = band * (vActive > 0.5 ? 0.5 * pulse : 0.2);
          float innerA = vActive > 0.5 ? smoothstep(0.86, 0.0, r) * 0.1 : 0.0;
          float a = ringA + innerA;
          if (a <= 0.003) discard;
          gl_FragColor = vec4(vColor * a, a);
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

  push(x: number, z: number, radius: number, r: number, g: number, b: number, active: boolean): void {
    if (this.w >= this.cap) return;
    const i = this.w++;
    const m = i * 16;
    const d = radius * 2;
    this.matrices[m] = d;
    this.matrices[m + 5] = 1;
    this.matrices[m + 10] = d;
    this.matrices[m + 12] = x;
    this.matrices[m + 13] = 0.05;
    this.matrices[m + 14] = z;
    this.matrices[m + 15] = 1;
    const c = i * 3;
    this.colors[c] = r;
    this.colors[c + 1] = g;
    this.colors[c + 2] = b;
    this.actives[i] = active ? 1 : 0;
  }

  end(time: number): void {
    this.mat.uniforms.uTime.value = time;
    this.mesh.count = this.w;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.colAttr.needsUpdate = true;
    this.actAttr.needsUpdate = true;
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
  private readonly titles: TextSprites;
  private readonly banners: BannerBatch;
  private readonly gateBars: GateBarBatch;
  private readonly rings: RingBatch;
  private time = 0;
  // 방향 셰브론(#50): 화면 밖 목표를 화면 가장자리에서 가리키는 2D 오버레이. 에지 인디케이터는
  // DOM이 가장 정확·경량(투영→NDC→가장자리 클램프). 목표 1개만, 반투명 금색, 깜빡임 없음.
  private readonly guideEl: HTMLDivElement;
  private readonly guideArrow: HTMLDivElement;
  private readonly guideDist: HTMLDivElement;
  private readonly gv = new Vector3(); // 투영 재사용(할당 0)

  constructor(scene: Scene, glowCap = 24, nameCap = 18, hintCap = 6) {
    this.glow = new GlowBatch(scene, glowCap);
    this.names = new TextSprites(scene, nameCap, NAME_STYLE, 11);
    this.hints = new TextSprites(scene, hintCap, HINT_STYLE, 12);
    this.titles = new TextSprites(scene, 2, TITLE_STYLE, 13);
    this.banners = new BannerBatch(scene);
    this.gateBars = new GateBarBatch(scene, 4); // 외성 3문 + 여유 1
    this.rings = new RingBatch(scene, 12);

    this.guideEl = document.createElement('div');
    this.guideEl.style.cssText = [
      'position:fixed',
      'left:0',
      'top:0',
      'display:none',
      'flex-direction:column',
      'align-items:center',
      'gap:2px',
      'pointer-events:none',
      'z-index:19', // 상단 HUD(z20) 아래 — 목표 지시가 HUD를 가리지 않게
      'font-family:"Nanum Myeongjo","Times New Roman",serif',
      'will-change:transform,left,top',
    ].join(';');
    this.guideArrow = document.createElement('div');
    this.guideArrow.style.cssText = [
      'width:0',
      'height:0',
      // 밑변 좁고(7px×2) 길이 긴(26px) 뾰족한 화살촉 — 방향이 한눈에 읽히게(오너 피드백).
      'border-top:7px solid transparent',
      'border-bottom:7px solid transparent',
      'border-left:26px solid rgba(244,222,150,0.9)', // 우향 화살촉(0deg), guide()가 회전
      'filter:drop-shadow(0 0 4px rgba(0,0,0,0.7))',
    ].join(';');
    this.guideDist = document.createElement('div');
    this.guideDist.style.cssText =
      'color:rgba(240,224,170,0.85);font-size:12px;letter-spacing:1px;text-shadow:0 1px 3px rgba(0,0,0,0.9);font-variant-numeric:tabular-nums;';
    this.guideEl.appendChild(this.guideArrow);
    this.guideEl.appendChild(this.guideDist);
    document.body.appendChild(this.guideEl);
  }

  begin(time: number): void {
    this.time = time;
    this.glow.begin();
    this.names.begin();
    this.hints.begin();
    this.gateBars.begin();
    this.rings.begin();
    // 성곽 깃발(정적) 애니 + 구역 이름표(페이드). run.ts 수정 없이 castleRenderData로 구동.
    this.banners.update(time);
    this.titles.begin();
    const t = castleRenderData.title;
    if (t.alpha > 0.02) this.titles.place(t.text, t.x, t.y, t.z, Math.min(1, t.alpha));
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

  // 성문 위 3D HP 바(#50). begin~end 사이에 매 프레임 emit. hp01<0이면 미표시.
  gateBar(x: number, z: number, hp01: number): void {
    this.gateBars.push(x, z, hp01);
  }

  // 랜드마크 상호작용 링(#50). begin~end 사이에 매 프레임 emit. active면 맥동, 아니면 흐린 링.
  interactRing(x: number, z: number, r: number, g: number, b: number, active: boolean): void {
    this.rings.push(x, z, 1.6, r, g, b, active);
  }

  // 방향 셰브론(#50): 목표 지점이 화면 밖이면 가장자리에 방향+거리(m)를 표시, 화면 안이면 숨김.
  // camera로 월드→NDC 투영. 거리는 player 위치 기준(run이 매 프레임 넘김). run 미배선 시 호출 안 되면 no-op.
  guide(targetX: number, targetZ: number, playerX: number, playerZ: number, camera: PerspectiveCamera, color = 'rgba(244,222,150,0.9)'): void {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.gv.set(targetX, 2.2, targetZ);
    this.gv.project(camera);
    const behind = this.gv.z > 1;
    const onScreen = !behind && this.gv.x >= -1 && this.gv.x <= 1 && this.gv.y >= -1 && this.gv.y <= 1;
    if (onScreen) {
      // 화면 안: 성문 글로우·이름표가 이미 위치를 표시하므로 셰브론은 숨김(절제).
      if (this.guideEl.style.display !== 'none') this.guideEl.style.display = 'none';
      return;
    }
    let nx = this.gv.x;
    let ny = this.gv.y;
    if (behind) {
      nx = -nx;
      ny = -ny;
    }
    // 화면 중심에서의 방향(NDC y는 위가 +1 → 스크린 y는 반전).
    let dx = nx;
    let dy = -ny;
    const len = Math.hypot(dx, dy) || 1;
    dx /= len;
    dy /= len;
    const cx = w * 0.5;
    const cy = h * 0.5;
    const margin = 46;
    const halfW = Math.max(10, cx - margin);
    const halfH = Math.max(10, cy - margin);
    const sX = Math.abs(dx) < 1e-3 ? Infinity : halfW / Math.abs(dx);
    const sY = Math.abs(dy) < 1e-3 ? Infinity : halfH / Math.abs(dy);
    const s = Math.min(sX, sY);
    const ex = cx + dx * s;
    const ey = cy + dy * s;
    const angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI;
    const dist = Math.round(Math.hypot(targetX - playerX, targetZ - playerZ));
    this.guideEl.style.display = 'flex';
    this.guideEl.style.left = `${ex}px`;
    this.guideEl.style.top = `${ey}px`;
    this.guideEl.style.transform = 'translate(-50%,-50%)';
    this.guideArrow.style.transform = `rotate(${angleDeg}deg)`;
    this.guideArrow.style.borderLeftColor = color; // 타겟 성격별 색(마차 금·보스 적·성목표 청)
    this.guideDist.style.color = color;
    this.guideDist.textContent = `${dist}m`;
  }

  guideOff(): void {
    if (this.guideEl.style.display !== 'none') this.guideEl.style.display = 'none';
  }

  end(): void {
    this.glow.end(this.time);
    this.names.end();
    this.hints.end();
    this.titles.end();
    this.gateBars.end();
    this.rings.end(this.time);
  }

  reset(): void {
    this.glow.reset();
    this.names.reset();
    this.hints.reset();
    this.titles.reset();
    this.gateBars.reset();
    this.rings.reset();
    this.guideOff();
    // 깃발 지오메트리는 정적 성곽이라 유지하되, 점령으로 물든 색은 런마다 원색으로 재동기화.
    this.banners.resetOwnership();
  }
}
