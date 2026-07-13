import {
  Scene,
  PlaneGeometry,
  InstancedMesh,
  InstancedBufferAttribute,
  ShaderMaterial,
  AdditiveBlending,
  DynamicDrawUsage,
} from 'three';

// 지면 데칼 풀: 폭발/낙뢰 지점에 달아오른 균열이 방사로 번쩍였다가 식어 사라진다.
// 지면에 눕힌 애디티브 쿼드 + 절차 균열 셰이더. CPU가 나이(fade)를 인스턴스 속성으로 갱신.

const CAP = 40;

export class DecalPool {
  private readonly x = new Float32Array(CAP);
  private readonly z = new Float32Array(CAP);
  private readonly rad = new Float32Array(CAP);
  private readonly life = new Float32Array(CAP);
  private readonly maxLife = new Float32Array(CAP);
  private readonly seed = new Float32Array(CAP);
  private readonly cr = new Float32Array(CAP);
  private readonly cg = new Float32Array(CAP);
  private readonly cb = new Float32Array(CAP);
  private readonly alive = new Uint8Array(CAP);
  private cursor = 0;

  private readonly mesh: InstancedMesh;
  private readonly matArr: Float32Array;
  private readonly colArr: Float32Array;
  private readonly fadeArr: Float32Array;
  private readonly seedArr: Float32Array;
  private readonly colAttr: InstancedBufferAttribute;
  private readonly fadeAttr: InstancedBufferAttribute;
  private readonly seedAttr: InstancedBufferAttribute;

  constructor(scene: Scene) {
    const geo = new PlaneGeometry(1, 1);
    geo.rotateX(-Math.PI / 2);
    this.colArr = new Float32Array(CAP * 3);
    this.fadeArr = new Float32Array(CAP);
    this.seedArr = new Float32Array(CAP);
    this.colAttr = new InstancedBufferAttribute(this.colArr, 3);
    this.fadeAttr = new InstancedBufferAttribute(this.fadeArr, 1);
    this.seedAttr = new InstancedBufferAttribute(this.seedArr, 1);
    this.colAttr.setUsage(DynamicDrawUsage);
    this.fadeAttr.setUsage(DynamicDrawUsage);
    this.seedAttr.setUsage(DynamicDrawUsage);
    geo.setAttribute('aColor', this.colAttr);
    geo.setAttribute('aFade', this.fadeAttr);
    geo.setAttribute('aSeed', this.seedAttr);

    const mat = new ShaderMaterial({
      vertexShader: /* glsl */ `
        attribute vec3 aColor;
        attribute float aFade;
        attribute float aSeed;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vFade;
        varying float vSeed;
        void main() {
          vUv = uv;
          vColor = aColor;
          vFade = aFade;
          vSeed = aSeed;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vFade;
        varying float vSeed;
        void main() {
          vec2 p = vUv - 0.5;
          float r = length(p) * 2.0;
          if (r > 1.0) discard;
          float ang = atan(p.y, p.x);
          // 방사형 균열: 각도 별로 갈라진 밝은 선 + 중심에서 바깥으로 감쇠
          float cracks = pow(abs(sin(ang * 5.0 + vSeed * 12.566)), 10.0)
                       + 0.6 * pow(abs(sin(ang * 8.0 - vSeed * 7.0)), 12.0);
          float radial = smoothstep(1.0, 0.15, r);
          float ember = smoothstep(0.5, 0.0, r) * 0.35; // 중심 잔불
          float b = (cracks * radial + ember) * vFade;
          if (b <= 0.004) discard;
          gl_FragColor = vec4(vColor * b * 1.4, b * 0.9);
        }
      `,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
      depthTest: true,
    });

    this.mesh = new InstancedMesh(geo, mat, CAP);
    this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.count = 0;
    this.mesh.renderOrder = 1; // 지면 바로 위, 스프라이트 아래
    this.matArr = this.mesh.instanceMatrix.array as Float32Array;
    scene.add(this.mesh);
  }

  reset(): void {
    this.alive.fill(0);
    this.mesh.count = 0;
  }

  spawn(x: number, z: number, radius: number, r: number, g: number, b: number, life = 1.6): void {
    const i = this.cursor;
    this.cursor = (this.cursor + 1) % CAP;
    this.x[i] = x;
    this.z[i] = z;
    this.rad[i] = radius;
    this.life[i] = life;
    this.maxLife[i] = life;
    this.seed[i] = Math.random();
    this.cr[i] = r;
    this.cg[i] = g;
    this.cb[i] = b;
    this.alive[i] = 1;
  }

  update(dt: number): void {
    for (let i = 0; i < CAP; i++) {
      if (this.alive[i] === 0) continue;
      this.life[i] -= dt;
      if (this.life[i] <= 0) this.alive[i] = 0;
    }
  }

  render(): void {
    let w = 0;
    for (let i = 0; i < CAP; i++) {
      if (this.alive[i] === 0) continue;
      const m = w * 16;
      const d = this.rad[i] * 2;
      this.matArr[m] = d;
      this.matArr[m + 5] = 1;
      this.matArr[m + 10] = d;
      this.matArr[m + 12] = this.x[i];
      this.matArr[m + 13] = 0.04;
      this.matArr[m + 14] = this.z[i];
      this.matArr[m + 15] = 1;
      const c = w * 3;
      this.colArr[c] = this.cr[i];
      this.colArr[c + 1] = this.cg[i];
      this.colArr[c + 2] = this.cb[i];
      // 초반 확 달아올랐다가 서서히 식음
      const lt = this.life[i] / this.maxLife[i];
      this.fadeArr[w] = Math.min(1, lt * 3.5) * lt;
      this.seedArr[w] = this.seed[i];
      w++;
    }
    this.mesh.count = w;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.colAttr.needsUpdate = true;
    this.fadeAttr.needsUpdate = true;
    this.seedAttr.needsUpdate = true;
  }
}
