import {
  Scene,
  PlaneGeometry,
  InstancedMesh,
  InstancedBufferAttribute,
  ShaderMaterial,
  NormalBlending,
  DynamicDrawUsage,
} from 'three';

// 보스 패턴 지면 텔레그래프 (#40 14.6). 단일 셰이더에 shape 유니폼(0=원/1=콘/2=사각) + progress(채움 스윕)로
// 세 형상을 통합. SDF로 fragment에서 형상 판정 — 지오메트리는 공용 지면 쿼드. 진홍 채움 + 테두리 펄스, 광원 없음.
// "표시된 범위 = 실제 피격 범위"라, 이 데칼은 각 패턴 히트박스와 형상·치수를 일치시켜 스폰된다.

const CAP = 12;
export const TG_CIRCLE = 0;
export const TG_CONE = 1;
export const TG_RECT = 2;

export class TelegraphBatch {
  private readonly x = new Float32Array(CAP);
  private readonly z = new Float32Array(CAP);
  private readonly ang = new Float32Array(CAP);
  private readonly sx = new Float32Array(CAP);
  private readonly sz = new Float32Array(CAP);
  private readonly shape = new Float32Array(CAP);
  private readonly param = new Float32Array(CAP);
  private readonly life = new Float32Array(CAP);
  private readonly maxLife = new Float32Array(CAP);
  private readonly cr = new Float32Array(CAP);
  private readonly cg = new Float32Array(CAP);
  private readonly cb = new Float32Array(CAP);
  private readonly alive = new Uint8Array(CAP);
  private cursor = 0;

  private readonly mesh: InstancedMesh;
  private readonly matArr: Float32Array;
  private readonly aShape: Float32Array;
  private readonly aProg: Float32Array;
  private readonly aParam: Float32Array;
  private readonly aCol: Float32Array;
  private readonly aAlpha: Float32Array;
  private readonly shapeAttr: InstancedBufferAttribute;
  private readonly progAttr: InstancedBufferAttribute;
  private readonly paramAttr: InstancedBufferAttribute;
  private readonly colAttr: InstancedBufferAttribute;
  private readonly alphaAttr: InstancedBufferAttribute;

  constructor(scene: Scene) {
    const geo = new PlaneGeometry(1, 1);
    geo.rotateX(-Math.PI / 2); // 지면에 눕힘(법선 +Y)
    this.aShape = new Float32Array(CAP);
    this.aProg = new Float32Array(CAP);
    this.aParam = new Float32Array(CAP);
    this.aCol = new Float32Array(CAP * 3);
    this.aAlpha = new Float32Array(CAP);
    this.shapeAttr = new InstancedBufferAttribute(this.aShape, 1);
    this.progAttr = new InstancedBufferAttribute(this.aProg, 1);
    this.paramAttr = new InstancedBufferAttribute(this.aParam, 1);
    this.colAttr = new InstancedBufferAttribute(this.aCol, 3);
    this.alphaAttr = new InstancedBufferAttribute(this.aAlpha, 1);
    for (const a of [this.shapeAttr, this.progAttr, this.paramAttr, this.colAttr, this.alphaAttr]) {
      a.setUsage(DynamicDrawUsage);
    }
    geo.setAttribute('aShape', this.shapeAttr);
    geo.setAttribute('aProg', this.progAttr);
    geo.setAttribute('aParam', this.paramAttr);
    geo.setAttribute('aCol', this.colAttr);
    geo.setAttribute('aAlpha', this.alphaAttr);

    const mat = new ShaderMaterial({
      vertexShader: /* glsl */ `
        attribute float aShape; attribute float aProg; attribute float aParam;
        attribute vec3 aCol; attribute float aAlpha;
        varying vec2 vUv; varying float vShape; varying float vProg; varying float vParam;
        varying vec3 vCol; varying float vAlpha;
        void main() {
          vUv = uv; vShape = aShape; vProg = aProg; vParam = aParam; vCol = aCol; vAlpha = aAlpha;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec2 vUv; varying float vShape; varying float vProg; varying float vParam;
        varying vec3 vCol; varying float vAlpha;
        void main() {
          vec2 p = (vUv - 0.5) * 2.0; // [-1,1]
          float len = length(p);
          float m; float border;
          if (vShape < 0.5) {                 // 원
            m = 1.0 - step(1.0, len);
            border = smoothstep(0.82, 1.0, len);
          } else if (vShape < 1.5) {          // 콘: 중심 apex, +x 방향, 반각 vParam
            float ang = atan(p.y, p.x);
            m = (1.0 - step(1.0, len)) * (1.0 - step(vParam, abs(ang)));
            float radB = smoothstep(0.82, 1.0, len);
            float angB = smoothstep(vParam * 0.8, vParam, abs(ang));
            border = min(1.0, radB + angB);
          } else {                            // 사각: 쿼드 전체
            m = 1.0;
            vec2 d = abs(p);
            border = max(smoothstep(0.8, 1.0, d.x), smoothstep(0.8, 1.0, d.y));
          }
          if (m < 0.5) discard;
          // 채움 스윕: 원은 반경, 콘/사각은 진행 축(uv.x) 따라 진홍이 차오름 = 남은 시간.
          float fill = (vShape < 0.5) ? step(len, vProg) : step(vUv.x, vProg);
          float a = (0.14 + 0.14 * fill + 0.32 * border) * vAlpha;
          if (a < 0.01) discard;
          vec3 col = vCol * (0.75 + 0.5 * fill) + border * vCol * 0.7;
          gl_FragColor = vec4(col, a);
        }
      `,
      transparent: true,
      blending: NormalBlending,
      depthWrite: false,
      depthTest: true,
    });

    this.mesh = new InstancedMesh(geo, mat, CAP);
    this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.count = 0;
    this.mesh.renderOrder = 2; // 지면 데칼 위, 스프라이트 아래
    this.matArr = this.mesh.instanceMatrix.array as Float32Array;
    scene.add(this.mesh);
  }

  reset(): void {
    this.alive.fill(0);
    this.mesh.count = 0;
  }

  // shape: TG_*; angle: 월드 XZ 진행 방향(rad); sizeX/sizeZ: 쿼드 월드 치수; param: 콘 반각.
  spawn(
    shape: number, x: number, z: number, angle: number,
    sizeX: number, sizeZ: number, param: number, life: number,
    r: number, g: number, b: number,
  ): void {
    const i = this.cursor;
    this.cursor = (this.cursor + 1) % CAP;
    this.x[i] = x; this.z[i] = z; this.ang[i] = angle;
    this.sx[i] = sizeX; this.sz[i] = sizeZ; this.shape[i] = shape; this.param[i] = param;
    this.life[i] = life; this.maxLife[i] = life;
    this.cr[i] = r; this.cg[i] = g; this.cb[i] = b;
    this.alive[i] = 1;
  }

  update(dt: number): void {
    let w = 0;
    for (let i = 0; i < CAP; i++) {
      if (this.alive[i] === 0) continue;
      this.life[i] -= dt;
      if (this.life[i] <= 0) { this.alive[i] = 0; continue; }
      const c = Math.cos(this.ang[i]);
      const s = Math.sin(this.ang[i]);
      const sx = this.sx[i];
      const sz = this.sz[i];
      const m = w * 16;
      // instanceMatrix = T * RotY * Scale(sx,1,sz)
      this.matArr[m] = c * sx; this.matArr[m + 1] = 0; this.matArr[m + 2] = -s * sx; this.matArr[m + 3] = 0;
      this.matArr[m + 4] = 0; this.matArr[m + 5] = 1; this.matArr[m + 6] = 0; this.matArr[m + 7] = 0;
      this.matArr[m + 8] = s * sz; this.matArr[m + 9] = 0; this.matArr[m + 10] = c * sz; this.matArr[m + 11] = 0;
      this.matArr[m + 12] = this.x[i]; this.matArr[m + 13] = 0.05; this.matArr[m + 14] = this.z[i]; this.matArr[m + 15] = 1;
      this.aShape[w] = this.shape[i];
      this.aProg[w] = 1 - this.life[i] / this.maxLife[i]; // 0→1 채움
      this.aParam[w] = this.param[i];
      this.aCol[w * 3] = this.cr[i]; this.aCol[w * 3 + 1] = this.cg[i]; this.aCol[w * 3 + 2] = this.cb[i];
      // 등장 페이드인(짧게) — 남은 수명이 충분하면 1
      this.aAlpha[w] = Math.min(1, (this.maxLife[i] - this.life[i]) / 0.12);
      w++;
    }
    this.mesh.count = w;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.shapeAttr.needsUpdate = true;
    this.progAttr.needsUpdate = true;
    this.paramAttr.needsUpdate = true;
    this.colAttr.needsUpdate = true;
    this.alphaAttr.needsUpdate = true;
  }
}
