import {
  BoxGeometry,
  BufferGeometry,
  CanvasTexture,
  Color,
  DynamicDrawUsage,
  InstancedMesh,
  Material,
  Matrix4,
  MeshBasicMaterial,
  NearestFilter,
  NearestMipmapNearestFilter,
  Object3D,
  PlaneGeometry,
  RepeatWrapping,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  SRGBColorSpace,
  Texture,
  Vector3,
} from 'three';
import type { GateBarrier, MapWall } from '../game/battlefieldMap';

const FOG_COLOR = new Vector3(0.00018, 0.00026, 0.0008);
const FOG_DENSITY = 0.019;

// #52 성벽/성문루 컷어웨이: 카메라와 플레이어를 잇는 얇은 광선 실린더 안의 성 구조물
// 프래그먼트를 IGN 오더드 디더로 discard → 플레이어가 구조물 뒤/아래로 가도 비쳐 보인다.
// foot-depth(플레이어 자신의 기운 머리)로는 못 잡는 '카메라측 오버헤드 가림'을 해소.
// 모든 fortressMaterial이 같은 유니폼 객체를 공유 → 한 번 갱신하면 전부 반영.
const cutUniforms = {
  uCutFrom: { value: new Vector3(0, 40, 60) }, // 카메라 월드 위치
  uCutTo: { value: new Vector3(0, 1.2, 0) }, // 플레이어 상반신(발+1.2) 목표
  uCutR: { value: 2.0 }, // 실린더 반경(월드) — 빌보드 폭·높이 + 여유
  uCutOn: { value: 0 }, // 성 근접 시에만 1
};

// 매프레임 호출(run.ts). 카메라 확정 이후여야 한다.
export function updateFortressCutaway(
  camX: number,
  camY: number,
  camZ: number,
  px: number,
  py: number,
  pz: number,
  on: boolean,
): void {
  cutUniforms.uCutFrom.value.set(camX, camY, camZ);
  cutUniforms.uCutTo.value.set(px, py, pz);
  cutUniforms.uCutOn.value = on ? 1 : 0;
}

interface FortressPalette {
  base: number;
  dark: number;
  surface: 'stone' | 'darkStone' | 'roof' | 'wood' | 'gold';
  textureScale: number;
}

const surfaceTextures = new Map<string, Texture>();

function pixelSurfaceTexture(kind: FortressPalette['surface']): Texture {
  const cached = surfaceTextures.get(kind);
  if (cached) return cached;
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;
  const colors = kind === 'stone'
    ? ['#b7b2aa', '#948f89', '#716e6d', '#4e4d52']
    : kind === 'darkStone'
      ? ['#8b8988', '#69686b', '#4c4c52', '#303138']
      : kind === 'roof'
        ? ['#a5a9a8', '#797f82', '#545c62', '#303943']
        : kind === 'wood'
          ? ['#b7ada4', '#8f857f', '#655d5c', '#403a3d']
          : ['#d8d1be', '#afa68e', '#817965', '#514b42'];
  ctx.fillStyle = colors[1];
  ctx.fillRect(0, 0, 64, 64);

  if (kind === 'stone' || kind === 'darkStone') {
    for (let y = 0; y < 64; y += 8) {
      const shift = ((y / 8) & 1) * 6;
      ctx.fillStyle = colors[3];
      ctx.fillRect(0, y, 64, 1);
      for (let x = -shift; x < 64; x += 12) {
        ctx.fillRect(x, y, 1, 8);
        const shade = ((x * 7 + y * 11) >>> 2) & 1;
        ctx.fillStyle = colors[shade];
        ctx.fillRect(x + 2, y + 2, 7, 1);
        ctx.fillStyle = colors[3];
      }
    }
  } else if (kind === 'roof') {
    ctx.fillStyle = colors[3];
    for (let y = 0; y < 64; y += 8) ctx.fillRect(0, y, 64, 1);
    for (let y = 0; y < 64; y += 8) {
      const shift = ((y / 8) & 1) * 4;
      for (let x = -shift; x < 64; x += 8) {
        ctx.fillStyle = colors[2];
        ctx.fillRect(x, y + 1, 1, 7);
        ctx.fillStyle = colors[0];
        ctx.fillRect(x + 2, y + 2, 4, 1);
      }
    }
  } else if (kind === 'wood') {
    for (let x = 0; x < 64; x += 8) {
      ctx.fillStyle = colors[3];
      ctx.fillRect(x, 0, 1, 64);
      ctx.fillStyle = colors[0];
      ctx.fillRect(x + 2, 0, 1, 64);
    }
    for (let y = 7; y < 64; y += 17) {
      ctx.fillStyle = colors[2];
      ctx.fillRect((y * 5) % 56 + 2, y, 4, 2);
    }
  } else {
    for (let y = 0; y < 64; y += 6) {
      ctx.fillStyle = (y / 6) & 1 ? colors[0] : colors[2];
      ctx.fillRect(0, y, 64, 2);
    }
  }

  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.magFilter = NearestFilter;
  texture.minFilter = NearestMipmapNearestFilter;
  texture.generateMipmaps = true;
  surfaceTextures.set(kind, texture);
  return texture;
}

function fortressMaterial(palette: FortressPalette): ShaderMaterial {
  return new ShaderMaterial({
    uniforms: {
      uBase: { value: new Color(palette.base) },
      uDark: { value: new Color(palette.dark) },
      uMap: { value: pixelSurfaceTexture(palette.surface) },
      uTextureScale: { value: palette.textureScale },
      uFogColor: { value: FOG_COLOR.clone() },
      uFogDensity: { value: FOG_DENSITY },
      uCutFrom: cutUniforms.uCutFrom, // 공유 참조 — updateFortressCutaway가 일괄 갱신
      uCutTo: cutUniforms.uCutTo,
      uCutR: cutUniforms.uCutR,
      uCutOn: cutUniforms.uCutOn,
    },
    vertexShader: /* glsl */ `
      varying vec3 vWorld;
      varying vec3 vNormalWorld;
      varying float vFogDepth;
      void main() {
        mat4 worldMatrix = modelMatrix * instanceMatrix;
        vec4 world = worldMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        vNormalWorld = normalize(mat3(worldMatrix) * normal);
        vec4 mv = viewMatrix * world;
        vFogDepth = -mv.z;
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uBase;
      uniform vec3 uDark;
      uniform sampler2D uMap;
      uniform float uTextureScale;
      uniform vec3 uFogColor;
      uniform float uFogDensity;
      uniform vec3 uCutFrom;
      uniform vec3 uCutTo;
      uniform float uCutR;
      uniform float uCutOn;
      varying vec3 vWorld;
      varying vec3 vNormalWorld;
      varying float vFogDepth;
      void main() {
        // #52 컷어웨이: 카메라→플레이어 광선 실린더 안이고 플레이어보다 카메라 쪽에 있는
        // 조각을 오더드 디더(IGN)로 제거 → 성문루/성벽 뒤 플레이어가 비쳐 보인다.
        if (uCutOn > 0.5) {
          vec3 axis = uCutTo - uCutFrom;
          float pl = length(axis);
          vec3 dir = axis / max(pl, 0.001);
          vec3 rel = vWorld - uCutFrom;
          float along = dot(rel, dir);
          if (along > 0.4 && along < pl - 0.5) {
            float perp = length(rel - dir * along);
            float hole = 1.0 - smoothstep(uCutR * 0.6, uCutR, perp);
            if (hole > 0.001) {
              float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
              if (hole > ign) discard;
            }
          }
        }
        vec3 n = normalize(vNormalWorld);
        vec2 surfaceUv = abs(n.y) > 0.72
          ? vWorld.xz
          : (abs(n.x) > abs(n.z) ? vWorld.zy : vWorld.xy);
        float texel = texture2D(uMap, surfaceUv * uTextureScale).r;
        vec3 albedo = mix(uDark, uBase, clamp(texel * 1.32, 0.0, 1.0));

        // 장면에 실제 광원이 없어도 형태가 뜨지 않도록 반구광, 지면 반사광, 기단 AO를 합성한다.
        vec3 keyDir = normalize(vec3(-0.48, 0.84, 0.28));
        vec3 fillDir = normalize(vec3(0.62, 0.24, -0.52));
        float key = max(0.0, dot(n, keyDir));
        float fill = max(0.0, dot(n, fillDir));
        float hemi = mix(0.76, 1.04, n.y * 0.5 + 0.5);
        float baseAo = mix(0.74, 1.0, smoothstep(0.0, 1.35, vWorld.y));
        float undersideAo = mix(0.82, 1.0, smoothstep(-0.35, 0.35, n.y));
        vec3 ambientTint = mix(vec3(0.72, 0.66, 0.64), vec3(0.84, 0.9, 1.0), n.y * 0.5 + 0.5);
        vec3 illumination = ambientTint * hemi + vec3(1.0, 0.78, 0.56) * key * 0.34 + vec3(0.38, 0.45, 0.62) * fill * 0.14;
        vec3 col = albedo * illumination * baseAo * undersideAo;

        // 조명을 계단식으로 양자화해 기존 캐릭터 도트와 어울리는 면 분할을 만든다.
        col = floor(col * 18.0 + 0.5) / 18.0;
        float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
        gl_FragColor = vec4(mix(col, uFogColor, clamp(fog, 0.0, 1.0)), 1.0);
      }
    `,
    depthWrite: true,
    depthTest: true,
  });
}

class PartBatch {
  readonly mesh: InstancedMesh;
  private readonly dummy = new Object3D();
  private readonly scratch = new Matrix4();
  private w = 0;

  constructor(scene: Scene, geometry: BufferGeometry, material: Material, capacity: number) {
    this.mesh = new InstancedMesh(geometry, material, capacity);
    this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.mesh.count = 0;
    this.mesh.frustumCulled = false;
    scene.add(this.mesh);
  }

  begin(): void { this.w = 0; }

  push(
    x: number,
    y: number,
    z: number,
    sx: number,
    sy: number,
    sz: number,
    ry = 0,
    rz = 0,
    rx = 0,
  ): void {
    if (this.w >= this.mesh.instanceMatrix.count) return;
    this.dummy.position.set(x, y, z);
    this.dummy.rotation.set(rx, ry, rz, 'YXZ');
    this.dummy.scale.set(sx, sy, sz);
    this.dummy.updateMatrix();
    this.scratch.copy(this.dummy.matrix);
    this.mesh.setMatrixAt(this.w++, this.scratch);
  }

  end(): void {
    this.mesh.count = this.w;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.mesh.computeBoundingSphere();
  }

  get count(): number { return this.w; }
}

const stoneMaterial = fortressMaterial({
  base: 0xa28a70,
  dark: 0x473a34,
  surface: 'stone',
  textureScale: 0.46,
});
const darkStoneMaterial = fortressMaterial({
  base: 0x635b56,
  dark: 0x29262a,
  surface: 'darkStone',
  textureScale: 0.52,
});
const roofMaterial = fortressMaterial({
  base: 0x52777d,
  dark: 0x223d47,
  surface: 'roof',
  textureScale: 0.62,
});
const woodMaterial = fortressMaterial({
  base: 0xd96848,
  dark: 0x6a2523,
  surface: 'wood',
  textureScale: 0.72,
});
const goldMaterial = fortressMaterial({
  base: 0xe1b65d,
  dark: 0x714521,
  surface: 'gold',
  textureScale: 0.8,
});

// 모든 박스는 바닥 피벗을 사용한다. 높이만 바꿔도 지면에서 뜨지 않는다.
function bottomPivotBox(): BoxGeometry {
  const geometry = new BoxGeometry(1, 1, 1);
  geometry.translate(0, 0.5, 0);
  return geometry;
}

function contactShadowTexture(): CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d')!;
  const gradient = ctx.createRadialGradient(16, 16, 2, 16, 16, 16);
  gradient.addColorStop(0, 'rgba(255,255,255,0.78)');
  gradient.addColorStop(0.58, 'rgba(255,255,255,0.48)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 32, 32);
  const texture = new CanvasTexture(canvas);
  texture.magFilter = NearestFilter;
  texture.minFilter = NearestFilter;
  texture.generateMipmaps = false;
  return texture;
}

/**
 * 맵 충돌 footprint를 그대로 시각화하는 방향성 3D 성곽 키트.
 * 한 장짜리 성벽 그림을 회전시키지 않고, 같은 저폴리 부품을 축에 맞춰 조립한다.
 */
export class FortressGeometryKit {
  private readonly stone: PartBatch;
  private readonly darkStone: PartBatch;
  private readonly roof: PartBatch;
  private readonly wood: PartBatch;
  private readonly goldTrim: PartBatch;
  private readonly gold: PartBatch;
  private readonly shadows: PartBatch;

  constructor(scene: Scene) {
    this.stone = new PartBatch(scene, bottomPivotBox(), stoneMaterial, 1400);
    this.darkStone = new PartBatch(scene, bottomPivotBox(), darkStoneMaterial, 720);
    this.roof = new PartBatch(scene, new BoxGeometry(1, 1, 1), roofMaterial, 160);
    this.wood = new PartBatch(scene, bottomPivotBox(), woodMaterial, 320);
    this.goldTrim = new PartBatch(scene, bottomPivotBox(), goldMaterial, 160);
    this.gold = new PartBatch(scene, new SphereGeometry(1, 6, 4), goldMaterial, 320);
    const shadowGeo = new PlaneGeometry(1, 1);
    shadowGeo.rotateX(-Math.PI * 0.5);
    const shadowMat = new MeshBasicMaterial({
      map: contactShadowTexture(),
      color: 0x05060a,
      transparent: true,
      opacity: 0.62,
      depthWrite: false,
      depthTest: true,
      toneMapped: false,
    });
    this.shadows = new PartBatch(scene, shadowGeo, shadowMat, 192);
    this.shadows.mesh.renderOrder = 0;
  }

  begin(): void {
    this.stone.begin();
    this.darkStone.begin();
    this.roof.begin();
    this.wood.begin();
    this.goldTrim.begin();
    this.gold.begin();
    this.shadows.begin();
  }

  addWall(wall: MapWall): void {
    const width = wall.hx * 2;
    const depth = wall.hz * 2;
    const length = wall.horizontal ? width : depth;
    const bodyHeight = 2.25;
    const bodyDepth = 1.35;
    const bodyW = wall.horizontal ? length : bodyDepth;
    const bodyD = wall.horizontal ? bodyDepth : length;

    this.shadows.push(wall.x, 0.035, wall.z, bodyW + 2.1, 1, bodyD + 2.1);

    this.darkStone.push(wall.x, 0, wall.z, bodyW + (wall.horizontal ? 0.18 : 0.42), 0.42, bodyD + (wall.horizontal ? 0.42 : 0.18));
    this.stone.push(wall.x, 0.32, wall.z, bodyW, bodyHeight - 0.32, bodyD);
    this.darkStone.push(wall.x, bodyHeight - 0.08, wall.z, wall.horizontal ? length + 0.2 : 1.72, 0.22, wall.horizontal ? 1.72 : length + 0.2);

    const merlonCount = Math.max(2, Math.floor(length / 1.85));
    const spacing = length / merlonCount;
    for (let i = 0; i < merlonCount; i++) {
      if ((i & 1) !== 0) continue;
      const along = -length * 0.5 + spacing * (i + 0.5);
      for (const side of [-1, 1]) {
        const x = wall.x + (wall.horizontal ? along : side * 0.54);
        const z = wall.z + (wall.horizontal ? side * 0.54 : along);
        this.stone.push(x, bodyHeight + 0.12, z, wall.horizontal ? spacing * 0.82 : 0.44, 0.62, wall.horizontal ? 0.44 : spacing * 0.82);
      }
    }

    // 부벽과 이음 기둥이 긴 박스 실루엣을 끊어 성벽의 축과 깊이를 읽게 한다.
    const pierCount = Math.max(2, Math.ceil(length / 5.5));
    for (let i = 0; i <= pierCount; i++) {
      const along = -length * 0.5 + (length * i) / pierCount;
      const x = wall.x + (wall.horizontal ? along : 0);
      const z = wall.z + (wall.horizontal ? 0 : along);
      this.darkStone.push(x, 0, z, wall.horizontal ? 0.42 : 1.72, 1.5, wall.horizontal ? 1.72 : 0.42);
      this.stone.push(x, 1.48, z, wall.horizontal ? 0.56 : 1.62, 0.28, wall.horizontal ? 1.62 : 0.56);
    }
  }

  addGate(gate: GateBarrier, breached: boolean, hero: boolean): void {
    const horizontal = gate.horizontal;
    const axis = (offset: number): { x: number; z: number } => ({
      x: gate.x + (horizontal ? offset : 0),
      z: gate.z + (horizontal ? 0 : offset),
    });
    const box = (
      batch: PartBatch,
      offset: number,
      y: number,
      along: number,
      height: number,
      across: number,
      ry = 0,
    ): void => {
      const p = axis(offset);
      batch.push(p.x, y, p.z, horizontal ? along : across, height, horizontal ? across : along, ry);
    };
    const roof = (offset: number, baseY: number, length: number, depth: number): void => {
      const p = axis(offset);
      const slope = 0.18;
      const panelDepth = depth * 0.56;
      if (horizontal) {
        this.roof.push(p.x, baseY + 0.18, p.z + depth * 0.24, length, 0.13, panelDepth, 0, 0, slope);
        this.roof.push(p.x, baseY + 0.18, p.z - depth * 0.24, length, 0.13, panelDepth, 0, 0, -slope);
        this.wood.push(p.x, baseY + 0.02, p.z + depth * 0.55, length + 0.28, 0.14, 0.12);
        this.wood.push(p.x, baseY + 0.02, p.z - depth * 0.55, length + 0.28, 0.14, 0.12);
        this.goldTrim.push(p.x, baseY + 0.39, p.z, length * 0.78, 0.09, 0.11);
      } else {
        this.roof.push(p.x + depth * 0.24, baseY + 0.18, p.z, panelDepth, 0.13, length, 0, -slope);
        this.roof.push(p.x - depth * 0.24, baseY + 0.18, p.z, panelDepth, 0.13, length, 0, slope);
        this.wood.push(p.x + depth * 0.55, baseY + 0.02, p.z, 0.12, 0.14, length + 0.28);
        this.wood.push(p.x - depth * 0.55, baseY + 0.02, p.z, 0.12, 0.14, length + 0.28);
        this.goldTrim.push(p.x, baseY + 0.39, p.z, 0.11, 0.09, length * 0.78);
      }
    };

    if (!hero) {
      // 일반 통로는 시야와 이동을 열어 둔다. 거대한 누각을 반복하지 않고 문표 기둥만 둔다.
      for (const side of [-1, 1]) {
        box(this.darkStone, side * 3.85, 0, 0.84, 0.34, 1.38);
        box(this.stone, side * 3.85, 0.28, 0.66, 2.25, 1.16);
        box(this.darkStone, side * 3.85, 2.48, 0.92, 0.18, 1.42);
        const p = axis(side * 3.85);
        this.gold.push(p.x, 2.86, p.z, 0.12, 0.22, 0.12);
      }
      return;
    }

    this.shadows.push(
      gate.x,
      0.038,
      gate.z,
      horizontal ? 12.2 : 6.2,
      1,
      horizontal ? 6.2 : 12.2,
    );

    const towerOffset = 4.2;
    const towerWidth = 2.65;
    const towerDepth = 3.15;
    const towerHeight = 3.55;
    const opening = 5.0;

    for (const side of [-1, 1]) {
      box(this.darkStone, side * towerOffset, 0, towerWidth + 0.35, 0.45, towerDepth + 0.4);
      box(this.stone, side * towerOffset, 0.36, towerWidth, towerHeight - 0.36, towerDepth);
      box(this.darkStone, side * towerOffset, towerHeight - 0.12, towerWidth + 0.45, 0.22, towerDepth + 0.45);

      const p = axis(side * towerOffset);
      roof(side * towerOffset, towerHeight + 0.1, 2.78, 2.7);
      this.gold.push(p.x, towerHeight + 0.58, p.z, 0.12, 0.18, 0.12);

      // 붉은 기둥과 짧은 난간이 중국식 누각 실루엣을 만든다.
      for (const railSide of [-0.62, 0.62]) {
        const railOffset = side * towerOffset + railSide * (towerWidth * 0.5);
        box(this.wood, railOffset, towerHeight - 0.85, 0.13, 0.78, towerDepth + 0.18);
      }
    }

    // 문루 상부와 처마. 중앙을 비워 실제 통행구가 유지된다.
    box(this.stone, 0, 2.36, opening + 0.72, 1.02, towerDepth + 0.12);
    box(this.darkStone, 0, 3.34, opening + 1.15, 0.2, towerDepth + 0.42);
    // 카메라 쪽 정면에 붉은 도리와 현판을 두어 성문이 성벽과 다른 위계를 갖게 한다.
    const frontAcross = horizontal ? towerDepth * 0.5 + 0.1 : towerDepth * 0.5 + 0.1;
    if (horizontal) {
      this.wood.push(gate.x, 2.72, gate.z + frontAcross, opening + 0.32, 0.46, 0.16);
      this.goldTrim.push(gate.x, 2.82, gate.z + frontAcross + 0.09, 1.58, 0.25, 0.08);
    } else {
      this.wood.push(gate.x + frontAcross, 2.72, gate.z, 0.16, 0.46, opening + 0.32);
      this.goldTrim.push(gate.x + frontAcross + 0.09, 2.82, gate.z, 0.08, 0.25, 1.58);
    }
    roof(0, 3.46, 5.58, 3.0);

    if (!breached) {
      // 닫힌 문은 얇은 3D 목재판과 금속 띠로 표현한다. 파성 시 모두 사라진다.
      const doorAcross = 0.34;
      const doorNormal = towerDepth * 0.5 - 0.12;
      if (horizontal) this.wood.push(gate.x, 0, gate.z + doorNormal, opening, 2.62, doorAcross);
      else this.wood.push(gate.x + doorNormal, 0, gate.z, doorAcross, 2.62, opening);
      for (let i = -2; i <= 2; i++) {
        const p = axis((opening / 5) * i);
        if (horizontal) this.darkStone.push(p.x, 0.12, p.z + doorNormal + 0.03, 0.09, 2.34, doorAcross + 0.08);
        else this.darkStone.push(p.x + doorNormal + 0.03, 0.12, p.z, doorAcross + 0.08, 2.34, 0.09);
      }
      if (horizontal) {
        this.goldTrim.push(gate.x, 0.72, gate.z + doorNormal + 0.08, opening + 0.1, 0.12, doorAcross + 0.14);
        this.goldTrim.push(gate.x, 1.76, gate.z + doorNormal + 0.08, opening + 0.1, 0.12, doorAcross + 0.14);
      } else {
        this.goldTrim.push(gate.x + doorNormal + 0.08, 0.72, gate.z, doorAcross + 0.14, 0.12, opening + 0.1);
        this.goldTrim.push(gate.x + doorNormal + 0.08, 1.76, gate.z, doorAcross + 0.14, 0.12, opening + 0.1);
      }
      for (const side of [-1, 1]) {
        const p = axis(side * 0.58);
        const normal = horizontal ? { x: 0, z: 0.23 } : { x: 0.23, z: 0 };
        this.gold.push(p.x + normal.x, 1.27, p.z + normal.z, 0.14, 0.14, 0.14);
      }
    } else {
      // 문짝 대신 방향성이 분명한 낮은 잔해를 통로 양옆에 쌓는다.
      for (let i = 0; i < 12; i++) {
        const side = i < 6 ? -1 : 1;
        const local = (i % 6) / 5;
        const offset = side * (opening * (0.26 + local * 0.21));
        const p = axis(offset);
        const across = ((i * 17) % 7 - 3) * 0.16;
        const x = p.x + (horizontal ? 0 : across);
        const z = p.z + (horizontal ? across : 0);
        this.stone.push(x, 0, z, 0.45 + (i % 3) * 0.14, 0.24 + (i % 2) * 0.15, 0.4 + ((i + 1) % 3) * 0.12, i * 0.37);
      }
    }
  }

  end(): void {
    this.stone.end();
    this.darkStone.end();
    this.roof.end();
    this.wood.end();
    this.goldTrim.end();
    this.gold.end();
    this.shadows.end();
  }

  get count(): number {
    return this.stone.count + this.darkStone.count + this.roof.count + this.wood.count + this.goldTrim.count + this.gold.count + this.shadows.count;
  }
}
