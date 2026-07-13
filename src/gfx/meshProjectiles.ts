import {
  Scene,
  InstancedMesh,
  InstancedBufferAttribute,
  ShaderMaterial,
  CylinderGeometry,
  ConeGeometry,
  DynamicDrawUsage,
  Vector3,
  BufferGeometry,
} from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { LIGHT_PARS_FRAG, LIGHT_PARS_VERT, type LightUniforms } from './lightField';

// 진짜 3D 화살 메시(샤프트 실린더 + 콘 촉)를 인스턴스드로 그린다.
// 평평한 스프라이트 대신 부피 있는 본체가 카메라 각도에서 3D로 읽히고, 동적 광원을 받는다.
// 로컬 +X = 진행 방향, +Y = 위. 인스턴스 행렬로 yaw 회전 + 길이/굵기 스케일.

const FOG_COLOR = new Vector3(0.00018, 0.00026, 0.0008);
const FOG_DENSITY = 0.019;

function makeArrowGeometry(): BufferGeometry {
  const shaft = new CylinderGeometry(0.055, 0.055, 0.78, 6);
  shaft.rotateZ(-Math.PI / 2); // Y축 → X축 정렬
  shaft.translate(-0.06, 0, 0);
  const head = new ConeGeometry(0.15, 0.32, 8);
  head.rotateZ(-Math.PI / 2); // 촉이 +X를 향함
  head.translate(0.49, 0, 0);
  const merged = mergeGeometries([shaft, head], false);
  return merged;
}

export class ArrowMeshBatch {
  private readonly mesh: InstancedMesh;
  private readonly matArr: Float32Array;
  private readonly colArr: Float32Array;
  private readonly fadeArr: Float32Array;
  private readonly colAttr: InstancedBufferAttribute;
  private readonly fadeAttr: InstancedBufferAttribute;
  private readonly cap: number;
  private w = 0;

  constructor(scene: Scene, cap: number, light: LightUniforms) {
    this.cap = cap;
    const geo = makeArrowGeometry();
    this.colArr = new Float32Array(cap * 3);
    this.fadeArr = new Float32Array(cap);
    this.colAttr = new InstancedBufferAttribute(this.colArr, 3);
    this.fadeAttr = new InstancedBufferAttribute(this.fadeArr, 1);
    this.colAttr.setUsage(DynamicDrawUsage);
    this.fadeAttr.setUsage(DynamicDrawUsage);
    geo.setAttribute('aColor', this.colAttr);
    geo.setAttribute('aFade', this.fadeAttr);

    const mat = new ShaderMaterial({
      uniforms: {
        uFogColor: { value: FOG_COLOR.clone() },
        uFogDensity: { value: FOG_DENSITY },
        ...light,
      },
      vertexShader: /* glsl */ `
        attribute vec3 aColor;
        attribute float aFade;
        varying vec3 vColor;
        varying float vFade;
        varying float vShade;
        varying float vFogDepth;
        ${LIGHT_PARS_VERT}
        void main() {
          vColor = aColor;
          vFade = aFade;
          // 고정 방향광 기반 가짜 셰이딩(부피감). 인스턴스 회전만 반영.
          vec3 n = normalize(mat3(instanceMatrix) * normal);
          vShade = 0.55 + 0.45 * clamp(dot(n, normalize(vec3(0.4, 0.8, 0.35))), 0.0, 1.0);
          vWorldXZ = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xz;
          vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
          vFogDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uFogColor;
        uniform float uFogDensity;
        varying vec3 vColor;
        varying float vFade;
        varying float vShade;
        varying float vFogDepth;
        ${LIGHT_PARS_FRAG}
        void main() {
          vec3 col = vColor * vShade;
          col += sampleLights() * 0.9;
          float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
          col = mix(col, uFogColor, clamp(fog, 0.0, 1.0));
          gl_FragColor = vec4(col, vFade);
        }
      `,
      transparent: true,
      depthWrite: true,
      depthTest: true,
    });
    this.mesh = new InstancedMesh(geo, mat, cap);
    this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.count = 0;
    this.mesh.renderOrder = 4;
    this.matArr = this.mesh.instanceMatrix.array as Float32Array;
    scene.add(this.mesh);
  }

  begin(): void {
    this.w = 0;
  }

  // theta = atan2(-vz, vx) (기존 투사체 규약). sx=길이, sr=굵기.
  push(x: number, y: number, z: number, theta: number, sx: number, sr: number, r: number, g: number, b: number, fade: number): void {
    if (this.w >= this.cap) return;
    const i = this.w++;
    const m = i * 16;
    const ct = Math.cos(theta);
    const st = Math.sin(theta);
    // 로컬 X → (ct,0,-st)*sx, 로컬 Y → (0,1,0)*sr, 로컬 Z → (st,0,ct)*sr
    this.matArr[m] = ct * sx;
    this.matArr[m + 1] = 0;
    this.matArr[m + 2] = -st * sx;
    this.matArr[m + 3] = 0;
    this.matArr[m + 4] = 0;
    this.matArr[m + 5] = sr;
    this.matArr[m + 6] = 0;
    this.matArr[m + 7] = 0;
    this.matArr[m + 8] = st * sr;
    this.matArr[m + 9] = 0;
    this.matArr[m + 10] = ct * sr;
    this.matArr[m + 11] = 0;
    this.matArr[m + 12] = x;
    this.matArr[m + 13] = y;
    this.matArr[m + 14] = z;
    this.matArr[m + 15] = 1;
    const c = i * 3;
    this.colArr[c] = r;
    this.colArr[c + 1] = g;
    this.colArr[c + 2] = b;
    this.fadeArr[i] = fade;
  }

  end(): void {
    this.mesh.count = this.w;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.colAttr.needsUpdate = true;
    this.fadeAttr.needsUpdate = true;
  }
}
