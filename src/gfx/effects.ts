import {
  Scene,
  Mesh,
  PlaneGeometry,
  RingGeometry,
  BufferGeometry,
  BufferAttribute,
  ShaderMaterial,
  AdditiveBlending,
  Color,
} from 'three';

interface Slot {
  mesh: Mesh;
  mat: ShaderMaterial;
  age: number;
  dur: number;
  active: boolean;
  data: number; // 슬롯별 보조값(링 최대반경 등)
}

// 무기/보스/무쌍 시각 이펙트 풀. 전부 HDR emissive(애디티브)로 블룸을 태운다.
// 지면에 눕는 것(찌르기/아크/링)과 세워진 것(낙뢰)을 구분해 배치.
export class EffectsSystem {
  private readonly scene: Scene;
  private readonly thrusts: Slot[] = [];
  private readonly arcs: Slot[] = [];
  private readonly rings: Slot[] = [];
  private readonly bolts: Slot[] = [];
  private readonly chains: Slot[] = [];
  private tCur = 0;
  private aCur = 0;
  private rCur = 0;
  private bCur = 0;
  private cCur = 0;

  // 낙뢰 시 화면 미세 플래시 (run이 주입)
  screenFlash: ((intensity: number) => void) | null = null;

  constructor(scene: Scene) {
    this.scene = scene;
    // 지면 평행 유닛 쿼드 (+X로 뻗음): 찌르기
    const thrustGeo = new PlaneGeometry(1, 1, 1, 1);
    thrustGeo.rotateX(-Math.PI / 2);
    thrustGeo.translate(0.5, 0, 0);
    for (let i = 0; i < 24; i++) {
      this.thrusts.push(this.makeSlot(thrustGeo, THRUST_FRAG, 1.0));
    }

    // 부채꼴 아크 (지면 평행, 로컬 +X 중심으로 열림)
    const arcGeo = makeArcGeometry(56);
    for (let i = 0; i < 20; i++) {
      this.arcs.push(this.makeSlot(arcGeo, ARC_FRAG, 1.0, ARC_VERT));
    }

    // 충격파 링 (지면 평행, 확장)
    const ringGeo = new RingGeometry(0.8, 1.0, 48);
    ringGeo.rotateX(-Math.PI / 2);
    for (let i = 0; i < 24; i++) {
      this.rings.push(this.makeSlot(ringGeo, RING_FRAG, 0.05));
    }

    // 낙뢰 볼트 (세워진 쿼드, 카메라 향함)
    const boltGeo = new PlaneGeometry(1, 1, 1, 1);
    boltGeo.translate(0, 0.5, 0);
    for (let i = 0; i < 16; i++) {
      this.bolts.push(this.makeSlot(boltGeo, BOLT_FRAG, 0.16));
    }

    // 연쇄 번개 (지면 평행 유닛 쿼드, +X로 뻗음)
    const chainGeo = new PlaneGeometry(1, 1, 1, 1);
    chainGeo.rotateX(-Math.PI / 2);
    chainGeo.translate(0.5, 0, 0);
    for (let i = 0; i < 40; i++) {
      this.chains.push(this.makeSlot(chainGeo, CHAIN_FRAG, 0.12));
    }
  }

  private makeSlot(geo: BufferGeometry, frag: string, dur: number, vert = BASIC_VERT): Slot {
    const mat = new ShaderMaterial({
      uniforms: {
        uT: { value: 0 },
        uAlpha: { value: 0 },
        uColor: { value: new Color(1, 1, 1) },
        uHalf: { value: Math.PI },
        uSeed: { value: 0 },
      },
      vertexShader: vert,
      fragmentShader: frag,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
      depthTest: true,
    });
    const mesh = new Mesh(geo, mat);
    mesh.visible = false;
    mesh.frustumCulled = false;
    mesh.renderOrder = 4;
    this.scene.add(mesh);
    return { mesh, mat, age: 0, dur, active: false, data: 0 };
  }

  // 찌르기 (용담창/장팔사모). 색상 지정.
  spawnThrust(
    px: number,
    pz: number,
    dirX: number,
    dirZ: number,
    length: number,
    width: number,
    r = 0.7,
    g = 0.95,
    b = 1.7,
    dur = 0.15,
  ): void {
    const s = this.thrusts[this.tCur];
    this.tCur = (this.tCur + 1) % this.thrusts.length;
    s.age = 0;
    s.dur = dur;
    s.active = true;
    s.mesh.visible = true;
    s.mesh.position.set(px, 1.0, pz);
    s.mesh.rotation.y = Math.atan2(-dirZ, dirX);
    s.mesh.scale.set(length, 1, width);
    (s.mat.uniforms.uColor.value as Color).setRGB(r, g, b);
    s.mat.uniforms.uAlpha.value = 1;
  }

  // 부채꼴 슬래시 아크 (언월도/방천화극/참마검). halfAngle=반각(라디안).
  spawnSlashArc(
    px: number,
    pz: number,
    dirX: number,
    dirZ: number,
    radius: number,
    halfAngle: number,
    r = 1.6,
    g = 0.9,
    b = 0.5,
    dur = 0.22,
  ): void {
    const s = this.arcs[this.aCur];
    this.aCur = (this.aCur + 1) % this.arcs.length;
    s.age = 0;
    s.dur = dur;
    s.active = true;
    s.mesh.visible = true;
    s.mesh.position.set(px, 0.6, pz);
    s.mesh.rotation.y = Math.atan2(-dirZ, dirX);
    s.mesh.scale.setScalar(radius);
    (s.mat.uniforms.uColor.value as Color).setRGB(r, g, b);
    s.mat.uniforms.uHalf.value = halfAngle;
    s.mat.uniforms.uT.value = 0;
  }

  // 확장 충격파 링.
  spawnRing(x: number, z: number, maxRadius: number, r = 1.4, g = 1.2, b = 0.7, dur = 0.5): void {
    const s = this.rings[this.rCur];
    this.rCur = (this.rCur + 1) % this.rings.length;
    s.age = 0;
    s.dur = dur;
    s.active = true;
    s.data = maxRadius;
    s.mesh.visible = true;
    s.mesh.position.set(x, 0.5, z);
    s.mesh.scale.setScalar(maxRadius * 0.15);
    (s.mat.uniforms.uColor.value as Color).setRGB(r, g, b);
    s.mat.uniforms.uT.value = 0;
  }

  // 낙뢰 볼트 (세로) + 착지 링 + 화면 미세 플래시.
  spawnLightning(x: number, z: number, r = 1.4, g = 1.8, b = 2.6, height = 7): void {
    const s = this.bolts[this.bCur];
    this.bCur = (this.bCur + 1) % this.bolts.length;
    s.age = 0;
    s.dur = 0.16;
    s.active = true;
    s.mesh.visible = true;
    s.mesh.position.set(x, 0, z);
    s.mesh.scale.set(2.2, height, 1);
    (s.mat.uniforms.uColor.value as Color).setRGB(r, g, b);
    s.mat.uniforms.uSeed.value = Math.random();
    s.mat.uniforms.uT.value = 0;
    this.spawnRing(x, z, 2.2, r * 0.8, g * 0.8, b, 0.4);
    if (this.screenFlash) this.screenFlash(0.16);
  }

  // 연쇄 번개 (적→적).
  spawnChainArc(x1: number, z1: number, x2: number, z2: number, r = 1.2, g = 1.8, b = 2.6): void {
    const s = this.chains[this.cCur];
    this.cCur = (this.cCur + 1) % this.chains.length;
    const dx = x2 - x1;
    const dz = z2 - z1;
    const len = Math.hypot(dx, dz) || 0.001;
    s.age = 0;
    s.dur = 0.13;
    s.active = true;
    s.mesh.visible = true;
    s.mesh.position.set(x1, 0.8, z1);
    s.mesh.rotation.y = Math.atan2(-dz, dx);
    s.mesh.scale.set(len, 1, 0.9);
    (s.mat.uniforms.uColor.value as Color).setRGB(r, g, b);
    s.mat.uniforms.uSeed.value = Math.random();
    s.mat.uniforms.uT.value = 0;
  }

  update(dt: number): void {
    this.tickThrust(dt);
    this.tickArc(dt);
    this.tickRing(dt);
    this.tickSimple(this.bolts, dt);
    this.tickSimple(this.chains, dt);
  }

  private tickThrust(dt: number): void {
    for (const s of this.thrusts) {
      if (!s.active) continue;
      s.age += dt;
      const t = s.age / s.dur;
      if (t >= 1) {
        this.retire(s);
        continue;
      }
      s.mat.uniforms.uAlpha.value = 1 - t;
    }
  }

  private tickArc(dt: number): void {
    for (const s of this.arcs) {
      if (!s.active) continue;
      s.age += dt;
      const t = s.age / s.dur;
      if (t >= 1) {
        this.retire(s);
        continue;
      }
      s.mat.uniforms.uT.value = t;
    }
  }

  private tickRing(dt: number): void {
    for (const s of this.rings) {
      if (!s.active) continue;
      s.age += dt;
      const t = s.age / s.dur;
      if (t >= 1) {
        this.retire(s);
        continue;
      }
      const sc = s.data * (0.15 + 0.85 * (1 - (1 - t) * (1 - t)));
      s.mesh.scale.setScalar(sc);
      s.mat.uniforms.uT.value = t;
    }
  }

  private tickSimple(pool: Slot[], dt: number): void {
    for (const s of pool) {
      if (!s.active) continue;
      s.age += dt;
      const t = s.age / s.dur;
      if (t >= 1) {
        this.retire(s);
        continue;
      }
      s.mat.uniforms.uT.value = t;
    }
  }

  private retire(s: Slot): void {
    s.active = false;
    s.mesh.visible = false;
  }
}

// 부채꼴 지오메트리: 로컬 XZ 평면, +X(각0) 중심. aAng(-1..1), aRad(0..1) 속성.
function makeArcGeometry(segments: number): BufferGeometry {
  const ri = 0.16;
  const ro = 1.0;
  const verts = (segments + 1) * 2;
  const pos = new Float32Array(verts * 3);
  const ang = new Float32Array(verts);
  const rad = new Float32Array(verts);
  for (let s = 0; s <= segments; s++) {
    const a = -Math.PI + (s / segments) * Math.PI * 2;
    const ca = Math.cos(a);
    const sa = Math.sin(a);
    const io = s * 2;
    pos[io * 3] = ri * ca;
    pos[io * 3 + 1] = 0;
    pos[io * 3 + 2] = ri * sa;
    ang[io] = a / Math.PI;
    rad[io] = 0;
    const oo = s * 2 + 1;
    pos[oo * 3] = ro * ca;
    pos[oo * 3 + 1] = 0;
    pos[oo * 3 + 2] = ro * sa;
    ang[oo] = a / Math.PI;
    rad[oo] = 1;
  }
  const idx: number[] = [];
  for (let s = 0; s < segments; s++) {
    const a0 = s * 2;
    const b0 = s * 2 + 1;
    const a1 = (s + 1) * 2;
    const b1 = (s + 1) * 2 + 1;
    idx.push(a0, b0, a1, b0, b1, a1);
  }
  const geo = new BufferGeometry();
  geo.setAttribute('position', new BufferAttribute(pos, 3));
  geo.setAttribute('aAng', new BufferAttribute(ang, 1));
  geo.setAttribute('aRad', new BufferAttribute(rad, 1));
  geo.setIndex(idx);
  return geo;
}

const BASIC_VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const ARC_VERT = /* glsl */ `
  attribute float aAng;
  attribute float aRad;
  varying float vAng;
  varying float vRad;
  void main() {
    vAng = aAng;
    vRad = aRad;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const THRUST_FRAG = /* glsl */ `
  uniform float uAlpha;
  uniform vec3 uColor;
  varying vec2 vUv;
  void main() {
    float across = 1.0 - abs(vUv.y - 0.5) * 2.0;
    float along = smoothstep(0.0, 0.12, vUv.x) * (1.0 - smoothstep(0.55, 1.0, vUv.x));
    float b = pow(max(across, 0.0), 1.6) * along;
    gl_FragColor = vec4(uColor * b * 1.7, b * uAlpha);
  }
`;

const ARC_FRAG = /* glsl */ `
  uniform float uT;
  uniform float uHalf;
  uniform vec3 uColor;
  varying float vAng;
  varying float vRad;
  void main() {
    float ang = vAng * 3.14159265;
    float amask = mix(1.0 - smoothstep(uHalf * 0.8, uHalf, abs(ang)), 1.0, step(3.13, uHalf));
    if (amask <= 0.001) discard;
    float redge = smoothstep(0.12, 0.4, vRad) * (1.0 - smoothstep(0.82, 1.0, vRad));
    // 선두 크레스트가 아크를 가로질러 스윕
    float crestA = mix(-uHalf, uHalf, uT);
    float near = 1.0 - clamp(abs(ang - crestA) / (uHalf * 0.5 + 0.15), 0.0, 1.0);
    float crest = pow(near, 2.0);
    float b = amask * (redge * 0.55 + crest * 1.1);
    float fade = 1.0 - uT * uT;
    gl_FragColor = vec4(uColor * b * 1.9, b * fade);
  }
`;

const RING_FRAG = /* glsl */ `
  uniform float uT;
  uniform vec3 uColor;
  varying vec2 vUv;
  void main() {
    float fade = 1.0 - uT;
    float b = fade * 1.4;
    gl_FragColor = vec4(uColor * b * 1.3, fade);
  }
`;

const BOLT_FRAG = /* glsl */ `
  uniform float uT;
  uniform float uSeed;
  uniform vec3 uColor;
  varying vec2 vUv;
  void main() {
    float y = vUv.y;
    float cx = 0.5
      + 0.14 * sin(y * 17.0 + uSeed * 6.283)
      + 0.07 * sin(y * 41.0 + uSeed * 11.0)
      + 0.03 * sin(y * 90.0 + uSeed * 3.0);
    float dist = abs(vUv.x - cx);
    float core = smoothstep(0.05, 0.0, dist);
    float glow = smoothstep(0.3, 0.0, dist);
    float taper = smoothstep(0.0, 0.06, y) * smoothstep(1.0, 0.85, y);
    float env = pow(1.0 - uT, 1.4);
    float b = (glow * 0.4 + core) * taper;
    vec3 col = (vec3(0.5, 0.7, 1.0) * glow * 0.5 + uColor * core) * taper * env;
    gl_FragColor = vec4(col * 2.2, b * env);
  }
`;

const CHAIN_FRAG = /* glsl */ `
  uniform float uT;
  uniform float uSeed;
  uniform vec3 uColor;
  varying vec2 vUv;
  void main() {
    float x = vUv.x;
    float cy = 0.5
      + 0.16 * sin(x * 22.0 + uSeed * 6.283)
      + 0.08 * sin(x * 47.0 + uSeed * 9.0);
    float dist = abs(vUv.y - cy);
    float core = smoothstep(0.14, 0.0, dist);
    float glow = smoothstep(0.4, 0.0, dist);
    float env = 1.0 - uT;
    float b = (glow * 0.4 + core);
    gl_FragColor = vec4(uColor * b * 2.4 * env, b * env);
  }
`;
