import {
  BoxGeometry,
  DynamicDrawUsage,
  InstancedBufferAttribute,
  InstancedMesh,
  Scene,
  ShaderMaterial,
} from 'three';

const CAP = 72;

// 2D 성문 카드가 실제 3D 픽셀 파편으로 전환되는 파성 전용 연출.
export class GateBreachFx {
  private readonly x = new Float32Array(CAP);
  private readonly y = new Float32Array(CAP);
  private readonly z = new Float32Array(CAP);
  private readonly vx = new Float32Array(CAP);
  private readonly vy = new Float32Array(CAP);
  private readonly vz = new Float32Array(CAP);
  private readonly life = new Float32Array(CAP);
  private readonly ttl = new Float32Array(CAP);
  private readonly sx = new Float32Array(CAP);
  private readonly sy = new Float32Array(CAP);
  private readonly sz = new Float32Array(CAP);
  private readonly cr = new Float32Array(CAP);
  private readonly cg = new Float32Array(CAP);
  private readonly cb = new Float32Array(CAP);
  private cursor = 0;

  private readonly mesh: InstancedMesh;
  private readonly matrices: Float32Array;
  private readonly colors: Float32Array;
  private readonly fades: Float32Array;
  private readonly colorAttr: InstancedBufferAttribute;
  private readonly fadeAttr: InstancedBufferAttribute;

  constructor(scene: Scene) {
    const geo = new BoxGeometry(1, 1, 1);
    this.colors = new Float32Array(CAP * 3);
    this.fades = new Float32Array(CAP);
    this.colorAttr = new InstancedBufferAttribute(this.colors, 3);
    this.fadeAttr = new InstancedBufferAttribute(this.fades, 1);
    this.colorAttr.setUsage(DynamicDrawUsage);
    this.fadeAttr.setUsage(DynamicDrawUsage);
    geo.setAttribute('aColor', this.colorAttr);
    geo.setAttribute('aFade', this.fadeAttr);
    const mat = new ShaderMaterial({
      vertexShader: /* glsl */ `
        attribute vec3 aColor;
        attribute float aFade;
        varying vec3 vColor;
        varying float vFade;
        void main() {
          vColor = aColor;
          vFade = aFade;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec3 vColor;
        varying float vFade;
        void main() {
          float bayer = mod(gl_FragCoord.x + gl_FragCoord.y * 2.0, 4.0) / 4.0;
          if (vFade < bayer * 0.72) discard;
          vec3 stepped = floor(vColor * 5.0 + 0.5) / 5.0;
          gl_FragColor = vec4(stepped * (1.0 + vFade * 0.55), 1.0);
        }
      `,
      transparent: false,
      depthWrite: true,
      depthTest: true,
    });
    this.mesh = new InstancedMesh(geo, mat, CAP);
    this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.mesh.count = 0;
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 3;
    this.matrices = this.mesh.instanceMatrix.array as Float32Array;
    scene.add(this.mesh);
  }

  reset(): void {
    this.life.fill(0);
    this.mesh.count = 0;
  }

  burst(x: number, z: number): void {
    const count = 'ontouchstart' in window ? 28 : 48;
    for (let n = 0; n < count; n++) {
      const i = this.cursor++ % CAP;
      const a = Math.random() * Math.PI * 2;
      const radial = 2.4 + Math.random() * 5.2;
      this.x[i] = x + (Math.random() - 0.5) * 3.4;
      this.y[i] = 0.8 + Math.random() * 3.8;
      this.z[i] = z + (Math.random() - 0.5) * 1.2;
      this.vx[i] = Math.cos(a) * radial;
      this.vz[i] = Math.sin(a) * radial;
      this.vy[i] = 3.8 + Math.random() * 6.5;
      this.ttl[i] = 0.75 + Math.random() * 0.75;
      this.life[i] = this.ttl[i];
      this.sx[i] = 0.16 + Math.random() * 0.42;
      this.sy[i] = 0.12 + Math.random() * 0.5;
      this.sz[i] = 0.14 + Math.random() * 0.4;
      if (n % 4 === 0) {
        this.cr[i] = 1.08; this.cg[i] = 0.3; this.cb[i] = 0.13;
      } else {
        const shade = 0.34 + Math.random() * 0.28;
        this.cr[i] = shade * 1.1; this.cg[i] = shade * 0.78; this.cb[i] = shade * 0.58;
      }
    }
  }

  update(dt: number): void {
    let w = 0;
    for (let i = 0; i < CAP; i++) {
      if (this.life[i] <= 0) continue;
      this.life[i] -= dt;
      if (this.life[i] <= 0) continue;
      this.vy[i] -= 12 * dt;
      this.x[i] += this.vx[i] * dt;
      this.y[i] += this.vy[i] * dt;
      this.z[i] += this.vz[i] * dt;
      this.vx[i] *= Math.max(0, 1 - dt * 1.5);
      this.vz[i] *= Math.max(0, 1 - dt * 1.5);
      if (this.y[i] < 0.12) {
        this.y[i] = 0.12;
        this.vy[i] *= -0.28;
      }
      const m = w * 16;
      this.matrices[m] = this.sx[i];
      this.matrices[m + 5] = this.sy[i];
      this.matrices[m + 10] = this.sz[i];
      this.matrices[m + 12] = this.x[i];
      this.matrices[m + 13] = this.y[i];
      this.matrices[m + 14] = this.z[i];
      this.matrices[m + 15] = 1;
      const c = w * 3;
      this.colors[c] = this.cr[i];
      this.colors[c + 1] = this.cg[i];
      this.colors[c + 2] = this.cb[i];
      this.fades[w] = this.life[i] / this.ttl[i];
      w++;
    }
    this.mesh.count = w;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.colorAttr.needsUpdate = true;
    this.fadeAttr.needsUpdate = true;
  }

  get activeCount(): number {
    return this.mesh.count;
  }
}
