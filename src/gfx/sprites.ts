import {
  PlaneGeometry,
  CircleGeometry,
  InstancedMesh,
  InstancedBufferAttribute,
  Mesh,
  ShaderMaterial,
  MeshBasicMaterial,
  CanvasTexture,
  DynamicDrawUsage,
  DoubleSide,
  Vector2,
  Vector3,
  Color,
} from 'three';
import type { SheetInfo } from './atlas';
import { LIGHT_PARS_FRAG, LIGHT_PARS_VERT, type LightUniforms } from './lightField';

import { ELEVATION } from './camera';

// 스프라이트 월드 기본 높이(셀 64px 기준). 세워진 빌보드.
export const SPRITE_WORLD_H = 2.4;
// 카메라 내려보기 각도만큼 뒤로 눕혀 쿼드가 뷰 방향과 수직이 되게 한다
// (수직 축소 없이 원본 픽셀 비율 그대로 보이는 VS 스타일 빌보드).
export const SPRITE_TILT = -ELEVATION;

const QUAD_W_RATIO = 48 / 64; // 셀 가로/세로 비

// 지면 안개 파라미터 (ground.ts의 FogExp2와 동기화). 오프스크린 선형 버퍼에서
// 직접 계산해 원거리 스프라이트가 밤의 어둠으로 페이드 → 팝인 방지.
const FOG_COLOR = new Vector3(0.00018, 0.00026, 0.0008); // 0x05060a 선형
const FOG_DENSITY = 0.019;
// 앰비언트 리프트: 라이팅 없는 스프라이트가 어두워 보여 전체 밝기를 올림.
const AMBIENT_LIFT = 1.15;

// 발이 y=0에 오도록 아래 정렬 후 X축으로 기울인 유닛 쿼드(높이 1).
function makeUnitSpriteGeometry(): PlaneGeometry {
  const geo = new PlaneGeometry(QUAD_W_RATIO, 1, 1, 1);
  geo.translate(0, 0.5, 0); // 하단(발) = 원점
  geo.rotateX(SPRITE_TILT); // 발을 축으로 상단이 카메라 반대쪽으로 기울어짐
  return geo;
}

// 공용 fog GLSL (vertex: vFogDepth 계산 / fragment: exp2 페이드)
const FOG_PARS_V = 'varying float vFogDepth;';
const FOG_PARS_F = `
  varying float vFogDepth;
  uniform vec3 uFogColor;
  uniform float uFogDensity;
`;

const VERT_INSTANCED = /* glsl */ `
  attribute vec2 aUvOffset;
  attribute float aFlash;
  attribute vec3 aTint;
  uniform vec2 uCellUv;
  varying vec2 vUv;
  varying vec2 vCellLo;
  varying float vFlash;
  varying vec3 vTint;
  ${LIGHT_PARS_VERT}
  ${FOG_PARS_V}
  void main() {
    vUv = aUvOffset + uv * uCellUv;
    vCellLo = aUvOffset;
    vFlash = aFlash;
    vTint = aTint;
    vWorldXZ = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xz;
    vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
    vFogDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`;

// 셀 내부 4-이웃 알파를 샘플해 실루엣 가장자리 픽셀을 감지(디매팅 프린지 정리용).
// 셀 경계 밖은 투명으로 간주 → 콘텐츠 외곽선이 정확히 잡힘.
const EDGE_GLSL = /* glsl */ `
  uniform vec2 uTexel;   // (1/texW, 1/texH)
  uniform vec2 uCellUv;  // 셀 UV 크기
  float nbTrans(vec2 uv, vec2 lo, vec2 hi) {
    if (uv.x < lo.x || uv.y < lo.y || uv.x > hi.x || uv.y > hi.y) return 1.0;
    return texture2D(uMap, uv).a < 0.5 ? 1.0 : 0.0;
  }
  float edgeFactor(vec2 uv, vec2 cellLo) {
    vec2 hi = cellLo + uCellUv;
    float e = nbTrans(uv + vec2(uTexel.x, 0.0), cellLo, hi);
    e = max(e, nbTrans(uv - vec2(uTexel.x, 0.0), cellLo, hi));
    e = max(e, nbTrans(uv + vec2(0.0, uTexel.y), cellLo, hi));
    e = max(e, nbTrans(uv - vec2(0.0, uTexel.y), cellLo, hi));
    return e;
  }
`;

const VERT_SINGLE = /* glsl */ `
  uniform vec2 uCellUv;
  uniform vec2 uUvOffset;
  varying vec2 vUv;
  ${LIGHT_PARS_VERT}
  ${FOG_PARS_V}
  void main() {
    vUv = uUvOffset + uv * uCellUv;
    vWorldXZ = (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xz;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vFogDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`;

// sRGB 텍스처를 선형으로 변환(오프스크린 렌더 → 블룸/OutputPass가 최종 톤매핑).
const FRAG_INSTANCED = /* glsl */ `
  uniform sampler2D uMap;
  varying vec2 vUv;
  varying vec2 vCellLo;
  varying float vFlash;
  varying vec3 vTint;
  ${EDGE_GLSL}
  ${LIGHT_PARS_FRAG}
  ${FOG_PARS_F}
  void main() {
    vec4 tex = texture2D(uMap, vUv);
    if (tex.a < 0.5) discard;
    vec3 col = pow(tex.rgb, vec3(2.2)) * vTint * ${AMBIENT_LIFT.toFixed(3)};
    // 디매팅 프린지 → 어두운 아웃라인으로 눌러 밝은 테두리 제거
    col *= mix(1.0, 0.32, edgeFactor(vUv, vCellLo));
    col += sampleLights() * 0.75; // 폭발/낙뢰가 적을 실제로 비춤
    col = mix(col, vec3(2.0), vFlash); // 피격 화이트 플래시(HDR로 블룸)
    float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
    col = mix(col, uFogColor, clamp(fog, 0.0, 1.0));
    gl_FragColor = vec4(col, 1.0);
  }
`;

const FRAG_SINGLE = /* glsl */ `
  uniform sampler2D uMap;
  uniform vec2 uUvOffset;
  uniform float uFlash;
  uniform vec3 uTint;
  uniform float uPlayer; // 1이면 플레이어(림 글로우) / 0이면 다크 아웃라인
  uniform float uRim; // 플레이어 림 강도(모바일 저해상도 블룸 대응으로 낮춤)
  varying vec2 vUv;
  ${EDGE_GLSL}
  ${LIGHT_PARS_FRAG}
  ${FOG_PARS_F}
  void main() {
    vec4 tex = texture2D(uMap, vUv);
    if (tex.a < 0.5) discard;
    float lift = ${AMBIENT_LIFT.toFixed(3)} * mix(1.0, 1.18, uPlayer);
    vec3 col = pow(tex.rgb, vec3(2.2)) * uTint * lift;
    float edge = edgeFactor(vUv, uUvOffset);
    // 플레이어: 금색 림(군중 속 구분) / 그 외(보스): 다크 아웃라인
    vec3 rim = mix(col * 0.32, vec3(1.9, 1.35, 0.55) * uRim, 0.8);
    col = mix(col, mix(col * 0.32, rim, uPlayer), edge);
    col += sampleLights() * 0.6;
    col = mix(col, vec3(2.0), uFlash);
    float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
    col = mix(col, uFogColor, clamp(fog, 0.0, 1.0));
    gl_FragColor = vec4(col, 1.0);
  }
`;

function fogUniforms() {
  return {
    uFogColor: { value: FOG_COLOR.clone() },
    uFogDensity: { value: FOG_DENSITY },
  };
}

// 시트별 인스턴스드 스프라이트 렌더러. 프레임마다 begin→push*→end.
export class InstancedSpriteRenderer {
  readonly mesh: InstancedMesh;
  private readonly matArr: Float32Array;
  private readonly uvArr: Float32Array;
  private readonly flashArr: Float32Array;
  private readonly tintArr: Float32Array;
  private readonly uvAttr: InstancedBufferAttribute;
  private readonly flashAttr: InstancedBufferAttribute;
  private readonly tintAttr: InstancedBufferAttribute;
  private w = 0;

  constructor(sheet: SheetInfo, max: number, light: LightUniforms) {
    const geo = makeUnitSpriteGeometry();
    this.uvArr = new Float32Array(max * 2);
    this.flashArr = new Float32Array(max);
    this.tintArr = new Float32Array(max * 3);
    this.uvAttr = new InstancedBufferAttribute(this.uvArr, 2);
    this.flashAttr = new InstancedBufferAttribute(this.flashArr, 1);
    this.tintAttr = new InstancedBufferAttribute(this.tintArr, 3);
    this.uvAttr.setUsage(DynamicDrawUsage);
    this.flashAttr.setUsage(DynamicDrawUsage);
    this.tintAttr.setUsage(DynamicDrawUsage);
    geo.setAttribute('aUvOffset', this.uvAttr);
    geo.setAttribute('aFlash', this.flashAttr);
    geo.setAttribute('aTint', this.tintAttr);

    const mat = new ShaderMaterial({
      uniforms: {
        uMap: { value: sheet.texture },
        uCellUv: { value: new Vector2(sheet.cellUvW, sheet.cellUvH) },
        uTexel: { value: new Vector2(1 / sheet.texW, 1 / sheet.texH) },
        ...light,
        ...fogUniforms(),
      },
      vertexShader: VERT_INSTANCED,
      fragmentShader: FRAG_INSTANCED,
      transparent: false,
      depthWrite: true,
      depthTest: true,
    });

    this.mesh = new InstancedMesh(geo, mat, max);
    this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.count = 0;
    this.mesh.renderOrder = 2;
    this.matArr = this.mesh.instanceMatrix.array as Float32Array;
  }

  begin(): void {
    this.w = 0;
  }

  push(
    x: number,
    z: number,
    scale: number,
    u: number,
    v: number,
    flash: number,
    tr: number,
    tg: number,
    tb: number,
  ): void {
    const i = this.w;
    const m = i * 16;
    // scale + translation (회전은 지오메트리에 베이크됨)
    this.matArr[m] = scale;
    this.matArr[m + 5] = scale;
    this.matArr[m + 10] = scale;
    this.matArr[m + 12] = x;
    this.matArr[m + 13] = 0;
    this.matArr[m + 14] = z;
    this.matArr[m + 15] = 1;
    const u2 = i * 2;
    this.uvArr[u2] = u;
    this.uvArr[u2 + 1] = v;
    this.flashArr[i] = flash;
    const t3 = i * 3;
    this.tintArr[t3] = tr;
    this.tintArr[t3 + 1] = tg;
    this.tintArr[t3 + 2] = tb;
    this.w++;
  }

  end(): void {
    this.mesh.count = this.w;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.uvAttr.needsUpdate = true;
    this.flashAttr.needsUpdate = true;
    this.tintAttr.needsUpdate = true;
  }
}

// 단일 스프라이트(플레이어/보스). 인스턴싱과 동일한 UV 수학 재사용.
export class SpriteQuad {
  readonly mesh: Mesh;
  private readonly mat: ShaderMaterial;
  private readonly worldH: number;

  constructor(sheet: SheetInfo, light: LightUniforms, worldH = SPRITE_WORLD_H) {
    this.worldH = worldH;
    this.mat = new ShaderMaterial({
      uniforms: {
        uMap: { value: sheet.texture },
        uCellUv: { value: new Vector2(sheet.cellUvW, sheet.cellUvH) },
        uTexel: { value: new Vector2(1 / sheet.texW, 1 / sheet.texH) },
        uUvOffset: { value: new Vector2(0, 0) },
        uFlash: { value: 0 },
        uTint: { value: new Color(1, 1, 1) },
        uPlayer: { value: 0 },
        uRim: { value: 1 },
        ...light,
        ...fogUniforms(),
      },
      vertexShader: VERT_SINGLE,
      fragmentShader: FRAG_SINGLE,
      transparent: false,
      depthWrite: true,
      depthTest: true,
    });
    this.mesh = new Mesh(makeUnitSpriteGeometry(), this.mat);
    this.mesh.frustumCulled = false;
    this.mesh.scale.setScalar(worldH);
    this.mesh.renderOrder = 2;
  }

  // 플레이어 강조: 셰이더 내 금색 림 아웃라인 + 미세 밝기 강화(군중 속 구분).
  setPlayer(on: boolean): void {
    this.mat.uniforms.uPlayer.value = on ? 1 : 0;
  }

  // 림 강도(모바일 저해상도 블룸에서 캐릭터가 묻히지 않게 낮춤).
  setRimScale(s: number): void {
    this.mat.uniforms.uRim.value = s;
  }

  // 스쿼시&스트레치: 폭/높이 비대칭 스케일(부피 보존). sy>1이면 세로로 늘어남.
  setSquash(sx: number, sy: number): void {
    this.mesh.scale.set(this.worldH * sx, this.worldH * sy, this.worldH * sx);
  }

  setUv(u: number, v: number): void {
    (this.mat.uniforms.uUvOffset.value as Vector2).set(u, v);
  }

  setFlash(f: number): void {
    this.mat.uniforms.uFlash.value = f;
  }

  setTint(r: number, g: number, b: number): void {
    (this.mat.uniforms.uTint.value as Color).setRGB(r, g, b);
  }

  setPosition(x: number, y: number, z: number): void {
    this.mesh.position.set(x, y, z);
  }

  setScale(s: number): void {
    this.mesh.scale.setScalar(s);
  }
}

// 발밑 타원 블롭 그림자 (인스턴스드). 카메라 기울임 덕에 원이 타원으로 보인다.
export class ShadowRenderer {
  readonly mesh: InstancedMesh;
  private readonly matArr: Float32Array;
  private w = 0;

  constructor(max: number) {
    const geo = new CircleGeometry(1, 20);
    geo.rotateX(-Math.PI / 2); // XZ 평면에 눕힘
    const tex = makeRadialTexture();
    const mat = new MeshBasicMaterial({
      map: tex,
      color: 0x000000,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
      depthTest: true,
      side: DoubleSide,
      toneMapped: false,
    });
    this.mesh = new InstancedMesh(geo, mat, max);
    this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.count = 0;
    this.mesh.renderOrder = 0;
    this.matArr = this.mesh.instanceMatrix.array as Float32Array;
  }

  begin(): void {
    this.w = 0;
  }

  push(x: number, z: number, radius: number): void {
    const m = this.w * 16;
    this.matArr[m] = radius;
    this.matArr[m + 5] = 1;
    this.matArr[m + 10] = radius;
    this.matArr[m + 12] = x;
    this.matArr[m + 13] = 0.02;
    this.matArr[m + 14] = z;
    this.matArr[m + 15] = 1;
    this.w++;
  }

  end(): void {
    this.mesh.count = this.w;
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}

function makeRadialTexture(): CanvasTexture {
  const size = 64;
  const cv = document.createElement('canvas');
  cv.width = size;
  cv.height = size;
  const ctx = cv.getContext('2d')!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.6, 'rgba(255,255,255,0.7)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new CanvasTexture(cv);
  tex.needsUpdate = true;
  return tex;
}

// 방향 인덱스: (vx,vz) → 0 south / 1 west / 2 east / 3 north
export function dirFromVelocity(vx: number, vz: number, fallback: number): number {
  if (vx === 0 && vz === 0) return fallback;
  if (Math.abs(vx) > Math.abs(vz)) {
    return vx > 0 ? 2 : 1; // east : west
  }
  return vz > 0 ? 0 : 3; // south : north
}

// 재사용 임시 벡터 (모듈 공용, 할당 회피)
export const _tmpVec3 = new Vector3();
