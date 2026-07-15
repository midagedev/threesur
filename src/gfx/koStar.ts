import {
  Scene,
  PlaneGeometry,
  InstancedMesh,
  InstancedBufferAttribute,
  ShaderMaterial,
  AdditiveBlending,
  DynamicDrawUsage,
} from 'three';

// KO 홈런 별 (#45 19.2 · 대난투 문법). 강타/무쌍/대넉백 처치 시 별이 포물선으로 튀어올라
// 회전·축소하며 반짝 사라진다. 동시 2개 상한. SDF 5각별(텍스처 없음), 애디티브 골드.
const CAP = 6;
const GRAV = 12; // 낮은 중력 — 수평 사출 위주로 화면 밖까지 떠서 사라짐(오너 피드백)

export class KOStarBatch {
  private readonly x = new Float32Array(CAP);
  private readonly y = new Float32Array(CAP);
  private readonly z = new Float32Array(CAP);
  private readonly vx = new Float32Array(CAP);
  private readonly vy = new Float32Array(CAP);
  private readonly vz = new Float32Array(CAP);
  private readonly rot = new Float32Array(CAP);
  private readonly spin = new Float32Array(CAP);
  private readonly life = new Float32Array(CAP);
  private readonly maxLife = new Float32Array(CAP);
  private readonly alive = new Uint8Array(CAP);
  private cursor = 0;

  private readonly mesh: InstancedMesh;
  private readonly matArr: Float32Array;
  private readonly aFade: Float32Array;
  private readonly fadeAttr: InstancedBufferAttribute;

  constructor(scene: Scene) {
    const geo = new PlaneGeometry(1, 1); // 카메라 각도에서 위로 튀는 별(눕히지 않음 — Y로 상승)
    this.aFade = new Float32Array(CAP);
    this.fadeAttr = new InstancedBufferAttribute(this.aFade, 1);
    this.fadeAttr.setUsage(DynamicDrawUsage);
    geo.setAttribute('aFade', this.fadeAttr);
    const mat = new ShaderMaterial({
      vertexShader: /* glsl */ `
        attribute float aFade; varying vec2 vUv; varying float vFade;
        void main() { vUv = uv; vFade = aFade; gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0); }
      `,
      fragmentShader: /* glsl */ `
        varying vec2 vUv; varying float vFade;
        void main() {
          vec2 p = (vUv - 0.5) * 2.0;
          float r = length(p);
          float a = atan(p.y, p.x);
          // 5각별 SDF: 각도별 반경 경계
          float star = 0.5 + 0.42 * cos(floor(0.5 + a * 5.0 / 3.14159265 * 1.5) * 3.14159265 * 2.0 / 5.0 - a);
          // 채운 별 + 얇은 밝은 테두리 + 아주 옅은 중앙 광택 → 블롭이 아니라 '별 실루엣'으로 읽히게.
          float fill = smoothstep(star + 0.05, star - 0.03, r) * 0.82;
          float rim = smoothstep(0.09, 0.0, abs(r - star)) * 0.55;
          float core = smoothstep(0.30, 0.0, r) * 0.13;
          float b = (fill + rim + core) * vFade;
          if (b < 0.01) discard;
          // 옅은 상아빛(금색 강조 X, 오너 피드백). 블룸에 안 타는 낮은 명도 — 존재만 하고 눈에 안 튐.
          vec3 col = vec3(0.85, 0.82, 0.66);
          gl_FragColor = vec4(col * b, b);
        }
      `,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
      depthTest: false,
    });
    this.mesh = new InstancedMesh(geo, mat, CAP);
    this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.count = 0;
    this.mesh.renderOrder = 20; // 스프라이트 위(튀는 별)
    this.matArr = this.mesh.instanceMatrix.array as Float32Array;
    scene.add(this.mesh);
  }

  reset(): void {
    this.alive.fill(0);
    this.mesh.count = 0;
  }

  private activeCount(): number {
    let n = 0;
    for (let i = 0; i < CAP; i++) n += this.alive[i];
    return n;
  }

  // dirX/dirZ: 넉백/타격 방향(별이 그쪽으로 날아감). 동시 2개 상한.
  spawn(x: number, z: number, dirX: number, dirZ: number): void {
    if (this.activeCount() >= 2) return;
    const i = this.cursor;
    this.cursor = (this.cursor + 1) % CAP;
    this.x[i] = x; this.y[i] = 1.0; this.z[i] = z;
    // 타격 방향으로 강하게 사출 → 화면 밖까지 시원하게 날아감(포물선 아치백 최소, 오너 피드백).
    this.vx[i] = dirX * 22 + (Math.random() - 0.5) * 2;
    this.vy[i] = 6 + Math.random() * 2; // 살짝만 뜸(주로 수평 이탈)
    this.vz[i] = dirZ * 22 + (Math.random() - 0.5) * 2;
    this.rot[i] = Math.random() * 6.28;
    this.spin[i] = 7 + Math.random() * 5;
    this.life[i] = 1.1;
    this.maxLife[i] = 1.1;
    this.alive[i] = 1;
  }

  update(dt: number): void {
    let w = 0;
    for (let i = 0; i < CAP; i++) {
      if (this.alive[i] === 0) continue;
      this.life[i] -= dt;
      if (this.life[i] <= 0) { this.alive[i] = 0; continue; }
      this.vy[i] -= GRAV * dt;
      this.x[i] += this.vx[i] * dt;
      this.y[i] += this.vy[i] * dt;
      this.z[i] += this.vz[i] * dt;
      this.rot[i] += this.spin[i] * dt;
      const f = this.life[i] / this.maxLife[i]; // 1 → 0
      const age = this.maxLife[i] - this.life[i];
      // 크기: 타격과 동시에 즉시 풀사이즈로 등장(팝인 거의 없음), 끝 28%만 완만히 0.8까지(급축소 제거).
      const popScale = 0.88 + 0.12 * Math.min(1, age / 0.05);
      const taper = 0.8 + 0.2 * Math.min(1, f / 0.28);
      const s = 1.25 * popScale * taper;
      const c = Math.cos(this.rot[i]) * s;
      const sn = Math.sin(this.rot[i]) * s;
      const m = w * 16;
      // XY 평면 회전(화면상 회전) + 위치. 카메라 각도에서 상승·회전이 읽힘.
      this.matArr[m] = c; this.matArr[m + 1] = sn; this.matArr[m + 2] = 0; this.matArr[m + 3] = 0;
      this.matArr[m + 4] = -sn; this.matArr[m + 5] = c; this.matArr[m + 6] = 0; this.matArr[m + 7] = 0;
      this.matArr[m + 8] = 0; this.matArr[m + 9] = 0; this.matArr[m + 10] = s; this.matArr[m + 11] = 0;
      this.matArr[m + 12] = this.x[i]; this.matArr[m + 13] = this.y[i]; this.matArr[m + 14] = this.z[i]; this.matArr[m + 15] = 1;
      // 등장 즉시 밝게(타격 순간 ding, 0.08s 감쇠) → 사는 동안은 절제된 골드 → 끝 22% 페이드아웃.
      const fadeOut = Math.min(1, f / 0.22);
      const ding = 1 + 0.3 * Math.max(0, 1 - age / 0.08); // 타격 순간 옅은 팝(금색 강조 X)
      this.aFade[w] = Math.min(1.1, fadeOut * ding);
      w++;
    }
    this.mesh.count = w;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.fadeAttr.needsUpdate = true;
  }
}
