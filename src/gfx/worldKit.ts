import {
  ClampToEdgeWrapping,
  BoxGeometry,
  CanvasTexture,
  DynamicDrawUsage,
  InstancedBufferAttribute,
  InstancedMesh,
  SRGBColorSpace,
  NearestFilter,
  NearestMipmapNearestFilter,
  PlaneGeometry,
  MeshBasicMaterial,
  Mesh,
  DoubleSide,
  RepeatWrapping,
  Scene,
  ShaderMaterial,
  Texture,
  TextureLoader,
  Vector2,
  Vector3,
} from 'three';
import { ELEVATION } from './camera';
import type { BattlefieldMap } from '../game/battlefieldMap';

export const WORLD_ASSETS = {
  wall: 0,
  gate: 1,
  tower: 2,
  palisade: 3,
  siegeWreck: 4,
  camp: 5,
  warDrum: 6,
  breach: 7,
  powderCart: 8,
  dumplingCart: 9,
  shrine: 10,
  beacon: 11,
} as const;

export type WorldAsset = (typeof WORLD_ASSETS)[keyof typeof WORLD_ASSETS];

const ATLAS_COLS = 4;
const ATLAS_ROWS = 4;
const FOG_COLOR = new Vector3(0.00018, 0.00026, 0.0008);
const FOG_DENSITY = 0.019;
let sharedTexture: Texture | null = null;
let sharedFortressTexture: Texture | null = null;

function worldTexture(): Texture {
  if (sharedTexture) return sharedTexture;
  const texture = new TextureLoader().load(`${import.meta.env.BASE_URL}assets/world/world-kit-atlas.png`);
  texture.colorSpace = SRGBColorSpace;
  texture.magFilter = NearestFilter;
  texture.minFilter = NearestMipmapNearestFilter;
  texture.generateMipmaps = true;
  texture.wrapS = ClampToEdgeWrapping;
  texture.wrapT = ClampToEdgeWrapping;
  sharedTexture = texture;
  return texture;
}

function fortressTexture(): Texture {
  if (sharedFortressTexture) return sharedFortressTexture;
  const texture = new TextureLoader().load(`${import.meta.env.BASE_URL}assets/world/fortress-modules.png`);
  texture.colorSpace = SRGBColorSpace;
  texture.magFilter = NearestFilter;
  texture.minFilter = NearestMipmapNearestFilter;
  texture.generateMipmaps = true;
  texture.wrapS = ClampToEdgeWrapping;
  texture.wrapT = ClampToEdgeWrapping;
  sharedFortressTexture = texture;
  return texture;
}

// 불투명 컷아웃 + 깊이 기록을 사용하는 공용 2.5D 월드 스프라이트 배치.
// 투명 정렬을 피하면서 발 지점을 월드 좌표에 고정한다.
export class WorldSpriteBatch {
  readonly mesh: InstancedMesh;
  private readonly matrices: Float32Array;
  private readonly uvOffsets: Float32Array;
  private readonly tints: Float32Array;
  private readonly uvAttr: InstancedBufferAttribute;
  private readonly tintAttr: InstancedBufferAttribute;
  private readonly cols: number;
  private readonly rows: number;
  private w = 0;

  constructor(
    scene: Scene,
    capacity: number,
    dynamic = true,
    texture: Texture = worldTexture(),
    cols = ATLAS_COLS,
    rows = ATLAS_ROWS,
  ) {
    this.cols = cols;
    this.rows = rows;
    const geo = new PlaneGeometry(1, 1, 1, 1);
    geo.translate(0, 0.5, 0);
    geo.rotateX(-ELEVATION);
    this.uvOffsets = new Float32Array(capacity * 2);
    this.tints = new Float32Array(capacity * 3);
    this.uvAttr = new InstancedBufferAttribute(this.uvOffsets, 2);
    this.tintAttr = new InstancedBufferAttribute(this.tints, 3);
    if (dynamic) {
      this.uvAttr.setUsage(DynamicDrawUsage);
      this.tintAttr.setUsage(DynamicDrawUsage);
    }
    geo.setAttribute('aUvOffset', this.uvAttr);
    geo.setAttribute('aTint', this.tintAttr);

    const mat = new ShaderMaterial({
      uniforms: {
        uMap: { value: texture },
        uCellUv: { value: new Vector2(1 / cols, 1 / rows) },
        uFogColor: { value: FOG_COLOR.clone() },
        uFogDensity: { value: FOG_DENSITY },
      },
      vertexShader: /* glsl */ `
        attribute vec2 aUvOffset;
        attribute vec3 aTint;
        uniform vec2 uCellUv;
        varying vec2 vUv;
        varying vec3 vTint;
        varying float vFogDepth;
        void main() {
          vUv = aUvOffset + uv * uCellUv;
          vTint = aTint;
          vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
          vFogDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform sampler2D uMap;
        uniform vec3 uFogColor;
        uniform float uFogDensity;
        varying vec2 vUv;
        varying vec3 vTint;
        varying float vFogDepth;
        void main() {
          vec4 tex = texture2D(uMap, vUv);
          if (tex.a < 0.48) discard;
          // Texture.colorSpace가 sRGB 디코딩을 담당하므로 생성 에셋의 어두운 팔레트에
          // 감마를 중복 적용하지 않는다. 약한 리프트만 주어 캐릭터 도트와 명도를 맞춘다.
          vec3 col = tex.rgb * vTint * 1.32;
          float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
          col = mix(col, uFogColor, clamp(fog, 0.0, 1.0));
          gl_FragColor = vec4(col, 1.0);
        }
      `,
      transparent: false,
      depthWrite: true,
      depthTest: true,
    });
    this.mesh = new InstancedMesh(geo, mat, capacity);
    if (dynamic) this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.mesh.count = 0;
    this.mesh.renderOrder = 1;
    this.mesh.frustumCulled = false;
    this.matrices = this.mesh.instanceMatrix.array as Float32Array;
    scene.add(this.mesh);
  }

  begin(): void {
    this.w = 0;
  }

  push(asset: number, x: number, z: number, width: number, height: number, tint = 1): void {
    const i = this.w++;
    const m = i * 16;
    this.matrices[m] = width;
    this.matrices[m + 5] = height;
    this.matrices[m + 10] = height;
    this.matrices[m + 12] = x;
    this.matrices[m + 13] = 0;
    this.matrices[m + 14] = z;
    this.matrices[m + 15] = 1;
    const uv = i * 2;
    const col = asset % this.cols;
    const row = Math.floor(asset / this.cols);
    this.uvOffsets[uv] = col / this.cols;
    this.uvOffsets[uv + 1] = 1 - (row + 1) / this.rows;
    const c = i * 3;
    this.tints[c] = tint;
    this.tints[c + 1] = tint;
    this.tints[c + 2] = tint;
  }

  end(): void {
    this.mesh.count = this.w;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.uvAttr.needsUpdate = true;
    this.tintAttr.needsUpdate = true;
  }

  get count(): number {
    return this.w;
  }
}

class RoadBatch {
  readonly mesh: InstancedMesh;
  private readonly matrices: Float32Array;
  private w = 0;

  constructor(scene: Scene, capacity: number) {
    const geo = new PlaneGeometry(1, 1);
    geo.rotateX(-Math.PI / 2);
    const texture = makeRoadTexture();
    const mat = new MeshBasicMaterial({ map: texture, transparent: true, opacity: 0.54, depthWrite: false });
    this.mesh = new InstancedMesh(geo, mat, capacity);
    this.mesh.count = 0;
    this.mesh.renderOrder = 0;
    this.mesh.frustumCulled = false;
    this.matrices = this.mesh.instanceMatrix.array as Float32Array;
    scene.add(this.mesh);
  }

  begin(): void { this.w = 0; }
  push(x: number, z: number, width: number, depth: number): void {
    const m = this.w++ * 16;
    this.matrices[m] = width;
    this.matrices[m + 5] = 1;
    this.matrices[m + 10] = depth;
    this.matrices[m + 12] = x;
    this.matrices[m + 13] = 0.025;
    this.matrices[m + 14] = z;
    this.matrices[m + 15] = 1;
  }
  end(): void {
    this.mesh.count = this.w;
    this.mesh.instanceMatrix.needsUpdate = true;
  }
  get count(): number { return this.w; }
}

class WallVolumeBatch {
  readonly mesh: InstancedMesh;
  private readonly matrices: Float32Array;
  private w = 0;

  constructor(scene: Scene, capacity: number) {
    const geo = new BoxGeometry(1, 1, 1);
    geo.translate(0, 0.5, 0);
    const mat = new ShaderMaterial({
      uniforms: {
        uFogColor: { value: FOG_COLOR.clone() },
        uFogDensity: { value: FOG_DENSITY },
      },
      vertexShader: /* glsl */ `
        varying vec3 vWorld;
        varying float vFogDepth;
        void main() {
          vec4 world = modelMatrix * instanceMatrix * vec4(position, 1.0);
          vWorld = world.xyz;
          vec4 mv = viewMatrix * world;
          vFogDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uFogColor;
        uniform float uFogDensity;
        varying vec3 vWorld;
        varying float vFogDepth;
        void main() {
          float row = floor(vWorld.y * 3.4);
          float brick = mod(floor((vWorld.x + vWorld.z) * 0.72 + mod(row, 2.0) * 0.5) + row, 2.0);
          float mortar = step(0.12, fract(vWorld.y * 3.4));
          vec3 darkStone = vec3(0.018, 0.012, 0.010);
          vec3 lightStone = vec3(0.11, 0.072, 0.052);
          vec3 col = mix(darkStone, lightStone, 0.58 + brick * 0.18) * mix(0.58, 1.0, mortar);
          float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
          gl_FragColor = vec4(mix(col, uFogColor, clamp(fog, 0.0, 1.0)), 1.0);
        }
      `,
      transparent: false,
      depthWrite: true,
      depthTest: true,
    });
    this.mesh = new InstancedMesh(geo, mat, capacity);
    this.mesh.count = 0;
    this.mesh.renderOrder = 0;
    this.mesh.frustumCulled = false;
    this.matrices = this.mesh.instanceMatrix.array as Float32Array;
    scene.add(this.mesh);
  }

  begin(): void { this.w = 0; }
  push(x: number, z: number, width: number, depth: number): void {
    const m = this.w++ * 16;
    this.matrices[m] = width;
    this.matrices[m + 5] = 0.48;
    this.matrices[m + 10] = depth;
    this.matrices[m + 12] = x;
    this.matrices[m + 13] = 0;
    this.matrices[m + 14] = z;
    this.matrices[m + 15] = 1;
  }
  end(): void {
    this.mesh.count = this.w;
    this.mesh.instanceMatrix.needsUpdate = true;
  }
  get count(): number { return this.w; }
}

function makeRoadTexture(): CanvasTexture {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  ctx.clearRect(0, 0, size, size);
  ctx.fillStyle = 'rgba(72,55,39,0.74)';
  ctx.fillRect(2, 2, size - 4, size - 4);
  for (let y = 4; y < size - 4; y += 6) {
    for (let x = 3 + ((y / 6) % 2) * 4; x < size - 3; x += 9) {
      const shade = 66 + ((x * 13 + y * 7) % 22);
      ctx.fillStyle = `rgba(${shade},${shade - 10},${shade - 21},0.48)`;
      ctx.fillRect(x, y, 6, 3);
    }
  }
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.magFilter = NearestFilter;
  texture.minFilter = NearestMipmapNearestFilter;
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.generateMipmaps = true;
  return texture;
}

class LandmarkSprite {
  readonly mesh: Mesh;

  constructor(scene: Scene) {
    const geo = new PlaneGeometry(1, 1);
    geo.translate(0, 0.5, 0);
    geo.rotateX(-ELEVATION);
    const texture = new TextureLoader().load(`${import.meta.env.BASE_URL}assets/world/hulao-fortress.png`);
    texture.colorSpace = SRGBColorSpace;
    texture.magFilter = NearestFilter;
    texture.minFilter = NearestMipmapNearestFilter;
    texture.generateMipmaps = true;
    const mat = new MeshBasicMaterial({
      map: texture,
      alphaTest: 0.08,
      transparent: true,
      depthWrite: true,
      depthTest: true,
      toneMapped: false,
      side: DoubleSide,
    });
    this.mesh = new Mesh(geo, mat);
    this.mesh.visible = false;
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 2;
    scene.add(this.mesh);
  }

  place(x: number, z: number): void {
    this.mesh.visible = true;
    // 3D 성벽 체적보다 살짝 카메라 쪽/위에 두어 파사드가 깊이 버퍼에 묻히지 않게 한다.
    this.mesh.position.set(x, 0.9, z + 0.9);
    this.mesh.scale.set(27, 13.5, 13.5);
  }
}

// 실제 맵 데이터의 도로·벽 footprint와 정확히 같은 위치를 렌더한다.
export class BattlefieldWorld {
  private readonly map: BattlefieldMap;
  private readonly sprites: WorldSpriteBatch;
  private readonly fortress: WorldSpriteBatch;
  private readonly roads: RoadBatch;
  private readonly volumes: WallVolumeBatch;
  private readonly landmark: LandmarkSprite;
  private revision = -1;

  constructor(scene: Scene, map: BattlefieldMap) {
    this.map = map;
    this.sprites = new WorldSpriteBatch(scene, 320, false);
    this.fortress = new WorldSpriteBatch(scene, 320, false, fortressTexture(), 4, 2);
    this.roads = new RoadBatch(scene, 160);
    this.volumes = new WallVolumeBatch(scene, 160);
    this.landmark = new LandmarkSprite(scene);
  }

  update(): void {
    if (this.revision === this.map.revision) return;
    this.revision = this.map.revision;
    this.sprites.begin();
    this.fortress.begin();
    this.roads.begin();
    this.volumes.begin();
    this.landmark.mesh.visible = false;
    for (const road of this.map.roads) this.roads.push(road.x, road.z, road.width, road.depth);
    for (const wall of this.map.walls) {
      const width = wall.hx * 2;
      const depth = wall.hz * 2;
      this.volumes.push(wall.x, wall.z, width, depth);
      if (wall.horizontal) {
        const count = Math.max(1, Math.ceil(width / 6.2));
        const moduleWidth = width / count + 0.18;
        for (let i = 0; i < count; i++) {
          this.fortress.push(0, wall.x - width * 0.5 + moduleWidth * (i + 0.5), wall.z, moduleWidth, 3.8, 0.92);
        }
      } else {
        const count = Math.max(1, Math.ceil(depth / 5.0));
        for (let i = 0; i < count; i++) {
          const t = count === 1 ? 0.5 : i / (count - 1);
          this.fortress.push(1, wall.x, wall.z - wall.hz + t * depth, 5.6, 3.6, 0.88);
        }
      }
    }
    for (const gate of this.map.gates) {
      const breached = this.map.isGateBreached(gate.key);
      if (gate.key === 'origin-north' && !breached) {
        this.landmark.place(gate.x, gate.z);
        continue;
      }
      this.fortress.push(breached ? 5 : 3, gate.x, gate.z, breached ? 8.8 : 7.5, breached ? 4.2 : 5.7, 1.0);
    }
    for (const prop of this.map.props) {
      this.sprites.push(prop.kind as WorldAsset, prop.x, prop.z, prop.width, prop.height, 0.96);
    }
    this.roads.end();
    this.volumes.end();
    this.fortress.end();
    this.sprites.end();
  }

  get visibleProps(): number {
    return this.sprites.count + this.fortress.count + this.roads.count + this.volumes.count;
  }

  get landmarkVisible(): boolean {
    return this.landmark.mesh.visible;
  }
}
