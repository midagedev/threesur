import {
  Scene,
  Points,
  BufferGeometry,
  BufferAttribute,
  ShaderMaterial,
  AdditiveBlending,
  DynamicDrawUsage,
} from 'three';

// GPU 파티클 풀. 롤링 커서로 슬롯 재사용, 프레임당 할당 0.
// 사망 버스트 / 화염 상승 / 먼지 / 젬 스파클 / 트레일을 공용 emit로 처리.
export class ParticleSystem {
  private readonly points: Points;
  private readonly pos: Float32Array;
  private readonly col: Float32Array;
  private readonly life: Float32Array; // 정규화 수명 0..1 (attribute)
  private readonly size: Float32Array; // 픽셀 크기 계수 (attribute)
  private readonly vel: Float32Array; // CPU 전용
  private readonly invDur: Float32Array; // 1/지속시간 (CPU)
  private readonly grav: Float32Array; // 중력 가속 (CPU, +아래로/-위로)
  private readonly drag: Float32Array; // 감쇠 계수 (CPU)
  private readonly posAttr: BufferAttribute;
  private readonly colAttr: BufferAttribute;
  private readonly lifeAttr: BufferAttribute;
  private readonly sizeAttr: BufferAttribute;
  private readonly n: number;
  private cursor = 0;

  constructor(scene: Scene, capacity = 4000) {
    this.n = capacity;
    this.pos = new Float32Array(capacity * 3);
    this.col = new Float32Array(capacity * 3);
    this.life = new Float32Array(capacity);
    this.size = new Float32Array(capacity);
    this.vel = new Float32Array(capacity * 3);
    this.invDur = new Float32Array(capacity);
    this.grav = new Float32Array(capacity);
    this.drag = new Float32Array(capacity);

    const g = new BufferGeometry();
    this.posAttr = new BufferAttribute(this.pos, 3);
    this.colAttr = new BufferAttribute(this.col, 3);
    this.lifeAttr = new BufferAttribute(this.life, 1);
    this.sizeAttr = new BufferAttribute(this.size, 1);
    this.posAttr.setUsage(DynamicDrawUsage);
    this.lifeAttr.setUsage(DynamicDrawUsage);
    this.sizeAttr.setUsage(DynamicDrawUsage);
    this.colAttr.setUsage(DynamicDrawUsage);
    g.setAttribute('position', this.posAttr);
    g.setAttribute('aColor', this.colAttr);
    g.setAttribute('aLife', this.lifeAttr);
    g.setAttribute('aSize', this.sizeAttr);

    const mat = new ShaderMaterial({
      uniforms: { uPix: { value: 320 } },
      vertexShader: /* glsl */ `
        attribute float aLife;
        attribute float aSize;
        attribute vec3 aColor;
        uniform float uPix;
        varying float vLife;
        varying vec3 vColor;
        void main() {
          vLife = aLife;
          vColor = aColor;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = (aLife > 0.0) ? uPix * aSize * aLife / max(0.1, -mv.z) : 0.0;
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        varying float vLife;
        varying vec3 vColor;
        void main() {
          if (vLife <= 0.0) discard;
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.0, d);
          gl_FragColor = vec4(vColor * vLife * a, 1.0);
        }
      `,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
      depthTest: true,
    });

    this.points = new Points(g, mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 3;
    scene.add(this.points);
  }

  // 단일 파티클 방출(완전 제어). 다른 헬퍼가 이걸 호출.
  emit(
    x: number,
    y: number,
    z: number,
    vx: number,
    vy: number,
    vz: number,
    r: number,
    g: number,
    b: number,
    size: number,
    dur: number,
    grav: number,
    drag: number,
  ): void {
    const i = this.cursor;
    this.cursor = (this.cursor + 1) % this.n;
    const p3 = i * 3;
    this.pos[p3] = x;
    this.pos[p3 + 1] = y;
    this.pos[p3 + 2] = z;
    this.vel[p3] = vx;
    this.vel[p3 + 1] = vy;
    this.vel[p3 + 2] = vz;
    this.col[p3] = r;
    this.col[p3 + 1] = g;
    this.col[p3 + 2] = b;
    this.size[i] = size;
    this.life[i] = 1;
    this.invDur[i] = 1 / dur;
    this.grav[i] = grav;
    this.drag[i] = drag;
  }

  // 지면 위 한 지점에서 방사형 버스트 (사망/타격). 색은 적 틴트로.
  burst(
    x: number,
    z: number,
    r: number,
    g: number,
    b: number,
    count: number,
    speed: number,
  ): void {
    for (let k = 0; k < count; k++) {
      const ang = Math.random() * Math.PI * 2;
      const sp = speed * (0.3 + Math.random() * 0.9);
      this.emit(
        x,
        0.7 + Math.random() * 0.8,
        z,
        Math.cos(ang) * sp,
        1.5 + Math.random() * 3.0,
        Math.sin(ang) * sp,
        r,
        g,
        b,
        1,
        0.3 + Math.random() * 0.35,
        6,
        0.92,
      );
    }
  }

  // 상승 화염/불티 (화계 장판). 위로 뜨며 서서히 사라짐.
  fireEmber(x: number, z: number, radius: number): void {
    const ang = Math.random() * Math.PI * 2;
    const rr = Math.sqrt(Math.random()) * radius;
    this.emit(
      x + Math.cos(ang) * rr,
      0.2,
      z + Math.sin(ang) * rr,
      (Math.random() - 0.5) * 0.6,
      1.6 + Math.random() * 1.8,
      (Math.random() - 0.5) * 0.6,
      1.7,
      0.8 + Math.random() * 0.3,
      0.2,
      0.6 + Math.random() * 0.4,
      0.5 + Math.random() * 0.4,
      -1.2, // 위로 살짝 가속(열기)
      0.9,
    );
  }

  // 먼지 퍼프 (기마 돌격 궤적).
  dust(x: number, z: number): void {
    const ang = Math.random() * Math.PI * 2;
    this.emit(
      x,
      0.3 + Math.random() * 0.5,
      z,
      Math.cos(ang) * 1.4,
      0.6 + Math.random() * 1.0,
      Math.sin(ang) * 1.4,
      1.1,
      1.0,
      0.85,
      1.3 + Math.random(),
      0.4 + Math.random() * 0.3,
      3,
      0.9,
    );
  }

  // 생성 스프라이트 뒤에 붙는 짧은 잔광. 본체를 가리지 않도록 작고 성기게 방출한다.
  projectileTrail(
    x: number,
    z: number,
    vx: number,
    vz: number,
    r: number,
    g: number,
    b: number,
    kind: number,
  ): void {
    const speed = Math.hypot(vx, vz) || 1;
    const nx = vx / speed;
    const nz = vz / speed;
    const count = kind === 4 ? 2 : 1;
    const size = kind === 2 || kind === 4 ? 0.75 : kind === 3 ? 0.58 : 0.38;
    for (let k = 0; k < count; k++) {
      const side = (Math.random() - 0.5) * (kind === 4 ? 1.2 : 0.35);
      const back = Math.random() * (kind === 4 ? 1.4 : 0.45);
      this.emit(
        x - nx * back - nz * side,
        0.75 + Math.random() * 0.35,
        z - nz * back + nx * side,
        -nx * (0.8 + Math.random() * 1.6) - nz * side,
        0.25 + Math.random() * 0.6,
        -nz * (0.8 + Math.random() * 1.6) + nx * side,
        r * 0.7,
        g * 0.7,
        b * 0.7,
        size * (0.7 + Math.random() * 0.6),
        0.16 + Math.random() * 0.14,
        1.0,
        0.88,
      );
    }
  }

  // 명중 순간에는 도트 파편이 바깥으로 터져 투사체 종류와 충돌 위치를 동시에 읽힌다.
  projectileImpact(
    x: number,
    z: number,
    r: number,
    g: number,
    b: number,
    kind: number,
  ): void {
    const count = kind === 2 || kind === 4 ? 9 : kind === 3 ? 6 : 4;
    const force = kind === 4 ? 5.2 : kind === 2 ? 4.0 : 2.8;
    for (let k = 0; k < count; k++) {
      const angle = (k / count) * Math.PI * 2 + Math.random() * 0.45;
      const speed = force * (0.45 + Math.random() * 0.7);
      this.emit(
        x,
        0.75 + Math.random() * 0.45,
        z,
        Math.cos(angle) * speed,
        0.9 + Math.random() * 1.8,
        Math.sin(angle) * speed,
        r,
        g,
        b,
        (kind === 2 || kind === 4 ? 0.72 : 0.48) * (0.75 + Math.random() * 0.5),
        0.18 + Math.random() * 0.18,
        4.2,
        0.9,
      );
    }
  }

  update(dt: number): void {
    const pos = this.pos;
    const vel = this.vel;
    const life = this.life;
    const invDur = this.invDur;
    const grav = this.grav;
    const drag = this.drag;
    for (let i = 0; i < this.n; i++) {
      const l = life[i];
      if (l <= 0) continue;
      const nl = l - dt * invDur[i];
      life[i] = nl > 0 ? nl : 0;
      const p3 = i * 3;
      pos[p3] += vel[p3] * dt;
      pos[p3 + 1] += vel[p3 + 1] * dt;
      pos[p3 + 2] += vel[p3 + 2] * dt;
      const dg = drag[i];
      vel[p3] *= dg;
      vel[p3 + 1] = vel[p3 + 1] * dg - grav[i] * dt;
      vel[p3 + 2] *= dg;
    }
    this.posAttr.needsUpdate = true;
    this.lifeAttr.needsUpdate = true;
    this.colAttr.needsUpdate = true;
    this.sizeAttr.needsUpdate = true;
  }
}
