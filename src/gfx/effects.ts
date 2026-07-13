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
  CanvasTexture,
  Texture,
  SRGBColorSpace,
} from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import {
  ATTACK_GUANDAO,
  ATTACK_HALBERD,
  ATTACK_SPEAR,
  ATTACK_ZHANGBA,
  RetroAttackSpriteFx,
  type AttackSpriteKind,
} from './attackSprites';

interface Slot {
  mesh: Mesh;
  mat: ShaderMaterial;
  age: number;
  dur: number;
  active: boolean;
  data: number; // 슬롯별 보조값(링 최대반경 등)
}

// 텍스처 지면 데칼(문장/팔괘진): 회전 + 페이드.
interface DecalSlot {
  mesh: Mesh;
  mat: ShaderMaterial;
  age: number;
  dur: number;
  active: boolean;
  rot: number; // 초당 회전(rad)
}

// 유성 화살: 상공에서 목표로 포물선 낙하 후 착탄.
interface MeteorSlot {
  mesh: Mesh;
  mat: ShaderMaterial;
  age: number;
  dur: number;
  active: boolean;
  tx: number;
  tz: number;
  h0: number; // 시작 높이
  r: number;
  g: number;
  b: number;
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
  private readonly flashes: Slot[] = [];
  private fCur = 0;
  private flashThisFrame = 0; // #40 프레임당 flash 상한 카운터
  private readonly attackSprites: RetroAttackSpriteFx;

  // #18 무쌍 스펙터클 프리미티브
  private readonly decals: DecalSlot[] = []; // 장수 문장/팔괘진 지면 데칼
  private dCur = 0;
  private readonly fireWalls: Slot[] = []; // 잔류 화염 벽(여포)
  private fwCur = 0;
  private readonly meteors: MeteorSlot[] = []; // 유성 화살(황충)
  private mCur = 0;
  // 시차 3중 충격파 예약 링
  private readonly ringQT = new Float32Array(8);
  private readonly ringQX = new Float32Array(8);
  private readonly ringQZ = new Float32Array(8);
  private readonly ringQR = new Float32Array(8);
  private readonly ringQCr = new Float32Array(8);
  private readonly ringQCg = new Float32Array(8);
  private readonly ringQCb = new Float32Array(8);
  private readonly ringQActive = new Uint8Array(8);
  private rqCur = 0;
  private readonly crestTexCache = new Map<string, Texture>();
  private baguaTexCache: Texture | null = null;

  // 낙뢰 시 화면 미세 플래시 (run이 주입)
  screenFlash: ((intensity: number) => void) | null = null;
  // 동적 광원 방출 (run이 LightField로 주입). 폭발/낙뢰/킬 순간 지면·적을 실제로 비춘다.
  spawnLight: ((x: number, z: number, r: number, g: number, b: number, radius: number, life: number) => void) | null = null;
  // 지면 균열 데칼 방출 (run이 DecalPool로 주입). 폭발/낙뢰 지점에 달아오른 균열.
  spawnDecal: ((x: number, z: number, radius: number, r: number, g: number, b: number) => void) | null = null;
  // 무쌍 우선순위 광원 (run이 LightField.spawn(prio=true)로 주입). 전투 광원에 밀리지 않음.
  spawnMusouLight: ((x: number, z: number, r: number, g: number, b: number, radius: number, life: number) => void) | null = null;

  constructor(scene: Scene) {
    this.scene = scene;
    this.attackSprites = new RetroAttackSpriteFx(scene);
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

    // 낙뢰 볼트: 교차한 세로 쿼드 2장으로 볼류메트릭 3D 지그재그(어느 각도서든 부피감).
    const boltA = new PlaneGeometry(1, 1, 1, 1);
    boltA.translate(0, 0.5, 0);
    const boltB = new PlaneGeometry(1, 1, 1, 1);
    boltB.rotateY(Math.PI / 2);
    boltB.translate(0, 0.5, 0);
    const boltGeo = mergeGeometries([boltA, boltB]);
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

    // 킬 플래시(발광 원반) — 불 켜지는 듯한 순간 광점. 풀 크기가 동시 상한.
    const flashGeo = new RingGeometry(0, 1, 28);
    flashGeo.rotateX(-Math.PI / 2);
    for (let i = 0; i < 24; i++) {
      this.flashes.push(this.makeSlot(flashGeo, FLASH_FRAG, 0.2));
    }

    // #18: 텍스처 지면 데칼(문장/팔괘진) — 개별 머티리얼로 텍스처 교체 가능하게.
    const decalGeo = new PlaneGeometry(1, 1);
    decalGeo.rotateX(-Math.PI / 2);
    for (let i = 0; i < 6; i++) {
      const mat = new ShaderMaterial({
        uniforms: { uMap: { value: null }, uAlpha: { value: 0 }, uColor: { value: new Color(1, 1, 1) } },
        vertexShader: BASIC_VERT,
        fragmentShader: DECAL_FRAG,
        transparent: true,
        blending: AdditiveBlending,
        depthWrite: false,
        depthTest: true,
      });
      const mesh = new Mesh(decalGeo, mat);
      mesh.visible = false;
      mesh.frustumCulled = false;
      mesh.renderOrder = 1;
      this.scene.add(mesh);
      this.decals.push({ mesh, mat, age: 0, dur: 1, active: false, rot: 0 });
    }

    // #18: 잔류 화염 벽(지면 화염 스트립, +X로 뻗음)
    const fwGeo = new PlaneGeometry(1, 1, 1, 1);
    fwGeo.rotateX(-Math.PI / 2);
    fwGeo.translate(0.5, 0, 0);
    for (let i = 0; i < 16; i++) {
      this.fireWalls.push(this.makeSlot(fwGeo, FIREWALL_FRAG, 1.0));
    }

    // #18: 유성 화살(세워진 스트릭, 낙하)
    const metGeo = new PlaneGeometry(1, 1, 1, 1);
    metGeo.translate(0, 0.5, 0);
    for (let i = 0; i < 20; i++) {
      const mat = new ShaderMaterial({
        uniforms: { uColor: { value: new Color(1, 1, 1) }, uT: { value: 0 } },
        vertexShader: BASIC_VERT,
        fragmentShader: METEOR_FRAG,
        transparent: true,
        blending: AdditiveBlending,
        depthWrite: false,
        depthTest: true,
      });
      const mesh = new Mesh(metGeo, mat);
      mesh.visible = false;
      mesh.frustumCulled = false;
      mesh.renderOrder = 4;
      this.scene.add(mesh);
      this.meteors.push({ mesh, mat, age: 0, dur: 1, active: false, tx: 0, tz: 0, h0: 14, r: 1, g: 1, b: 1 });
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
    showArt = true,
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
    if (showArt) this.attackSprites.spawn(ATTACK_SPEAR, px, pz, dirX, dirZ, length, width * 0.82, dur * 1.22);
  }

  spawnDoubleThrust(
    px: number,
    pz: number,
    dirX: number,
    dirZ: number,
    length: number,
    width: number,
    r = 1.2,
    g = 1.0,
    b = 0.7,
    dur = 0.16,
  ): void {
    this.spawnThrust(px, pz, dirX, dirZ, length, width, r, g, b, dur, false);
    this.spawnThrust(px, pz, -dirX, -dirZ, length, width, r, g, b, dur, false);
    this.attackSprites.spawn(ATTACK_ZHANGBA, px, pz, dirX, dirZ, length * 2.15, width * 0.9, dur * 1.2);
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
    artKind: AttackSpriteKind = ATTACK_GUANDAO,
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
    const artScale = artKind === ATTACK_HALBERD ? 2.05 : 1.45;
    this.attackSprites.spawn(
      artKind === ATTACK_HALBERD ? ATTACK_HALBERD : ATTACK_GUANDAO,
      px, pz, dirX, dirZ, radius * artScale, radius * artScale, dur * 1.1,
    );
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
    // 큰 충격파/폭발만 지면을 밝히고 균열을 남긴다(작은 타격 링은 제외).
    if (maxRadius >= 3) {
      if (this.spawnLight) this.spawnLight(x, z, r, g, b, maxRadius * 1.8, dur * 0.7);
      if (this.spawnDecal) this.spawnDecal(x, z, maxRadius * 1.15, r, g, b);
    }
  }

  // 킬/대시 순간 광점(발광 원반). 짧게 확장하며 페이드.
  spawnFlash(x: number, z: number, r: number, g: number, b: number, radius: number): void {
    // #40: 한 프레임에 flash 3장 초과 스폰 금지 — 대량 동시 처치 시 킬플래시가 중앙에 누적돼
    // 화이트아웃(hotFrac↑)되던 것을 상한으로 차단(정상 플레이는 프레임당 <3이라 무영향).
    if (this.flashThisFrame >= 3) return;
    this.flashThisFrame++;
    const s = this.flashes[this.fCur];
    this.fCur = (this.fCur + 1) % this.flashes.length;
    s.age = 0;
    s.dur = 0.2;
    s.active = true;
    s.data = radius;
    s.mesh.visible = true;
    s.mesh.position.set(x, 0.45, z);
    s.mesh.scale.setScalar(radius * 0.6);
    (s.mat.uniforms.uColor.value as Color).setRGB(r, g, b);
    s.mat.uniforms.uT.value = 0;
    if (this.spawnLight) this.spawnLight(x, z, r, g, b, radius * 1.6, 0.12 + radius * 0.02);
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
    if (this.spawnLight) this.spawnLight(x, z, r, g, b, 9, 0.3);
    if (this.spawnDecal) this.spawnDecal(x, z, 3.2, r, g, b);
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

  // ── #18 무쌍 스펙터클 프리미티브 ─────────────────────────────

  // 장수 문장 지면 데칼(龍/義/蛇/卦/弓/戟). 발동 지점에 새겨지며 회전·발광.
  spawnCrest(x: number, z: number, char: string, r: number, g: number, b: number, dur = 5): void {
    this.placeDecal(this.crestTexture(char), x, z, 6.4, dur, 0.4, r, g, b);
  }

  // 팔괘진 회전 문양(제갈량).
  spawnBaguaSigil(x: number, z: number, dur = 5): void {
    this.placeDecal(this.baguaTexture(), x, z, 8.4, dur, 0.9, 0.6, 1.5, 2.4);
  }

  private placeDecal(tex: Texture, x: number, z: number, size: number, dur: number, rot: number, r: number, g: number, b: number): void {
    const s = this.decals[this.dCur];
    this.dCur = (this.dCur + 1) % this.decals.length;
    s.mat.uniforms.uMap.value = tex;
    (s.mat.uniforms.uColor.value as Color).setRGB(r, g, b);
    s.mesh.position.set(x, 0.07, z);
    s.mesh.scale.set(size, 1, size);
    s.mesh.rotation.y = 0;
    s.age = 0;
    s.dur = dur;
    s.rot = rot;
    s.active = true;
    s.mesh.visible = true;
  }

  // 시차 3중 충격파(장비 포효 등). 0 / 0.11 / 0.22s 간격.
  spawnTripleShock(x: number, z: number, maxRadius: number, r = 1.6, g = 1.0, b = 0.4): void {
    this.spawnRing(x, z, maxRadius, r, g, b, 0.55);
    for (let k = 1; k <= 2; k++) {
      const i = this.rqCur;
      this.rqCur = (this.rqCur + 1) % 8;
      this.ringQT[i] = k * 0.11;
      this.ringQX[i] = x;
      this.ringQZ[i] = z;
      this.ringQR[i] = maxRadius * (1 + k * 0.35);
      this.ringQCr[i] = r;
      this.ringQCg[i] = g;
      this.ringQCb[i] = b;
      this.ringQActive[i] = 1;
    }
  }

  // 잔류 화염 벽(여포 돌진 궤적). +X로 length만큼 뻗는 지면 화염 스트립.
  spawnFireWall(x: number, z: number, dirX: number, dirZ: number, length: number, width = 1.8, dur = 2.2): void {
    const s = this.fireWalls[this.fwCur];
    this.fwCur = (this.fwCur + 1) % this.fireWalls.length;
    s.age = 0;
    s.dur = dur;
    s.active = true;
    s.mesh.visible = true;
    s.mesh.position.set(x, 0.15, z);
    s.mesh.rotation.y = Math.atan2(-dirZ, dirX);
    s.mesh.scale.set(length, 1, width);
    (s.mat.uniforms.uColor.value as Color).setRGB(2.4, 0.7, 0.2);
    s.mat.uniforms.uAlpha.value = 1;
  }

  // 유성 화살(황충): 상공 targetX/Z 위에서 낙하 → 착탄 링. 광원은 run이 착탄 시 연결.
  spawnMeteorArrow(targetX: number, targetZ: number, r = 1.7, g = 1.4, b = 0.6, fall = 0.5): void {
    const s = this.meteors[this.mCur];
    this.mCur = (this.mCur + 1) % this.meteors.length;
    s.age = 0;
    s.dur = fall;
    s.active = true;
    s.tx = targetX;
    s.tz = targetZ;
    s.h0 = 16;
    s.r = r;
    s.g = g;
    s.b = b;
    (s.mat.uniforms.uColor.value as Color).setRGB(r, g, b);
    s.mesh.visible = true;
  }

  // 청록 화염 트레일 퍼프(관우 청룡). 경로를 따라 반복 호출.
  spawnFlameTrail(x: number, z: number, r = 0.4, g = 1.9, b = 1.1): void {
    this.spawnFlash(x, z, r, g, b, 1.5);
  }

  update(dt: number): void {
    this.flashThisFrame = 0; // #40: 프레임당 flash 스폰 카운터 리셋(대량 처치 킬플래시 누적 상한)
    this.attackSprites.update(dt);
    this.tickThrust(dt);
    this.tickArc(dt);
    this.tickRing(dt);
    this.tickFlash(dt);
    this.tickDecals(dt);
    this.tickFireWalls(dt);
    this.tickMeteors(dt);
    this.tickRingQueue(dt);
    this.tickSimple(this.bolts, dt);
    this.tickSimple(this.chains, dt);
  }

  private tickDecals(dt: number): void {
    for (const s of this.decals) {
      if (!s.active) continue;
      s.age += dt;
      if (s.age >= s.dur) {
        s.active = false;
        s.mesh.visible = false;
        continue;
      }
      s.mesh.rotation.y += s.rot * dt;
      const t = s.age / s.dur;
      // 빠른 등장 + 후반 페이드아웃 + 은은한 맥동
      const a = Math.min(1, t * 6) * Math.min(1, (1 - t) * 3) * (0.85 + 0.15 * Math.sin(s.age * 6));
      s.mat.uniforms.uAlpha.value = a;
    }
  }

  private tickFireWalls(dt: number): void {
    for (const s of this.fireWalls) {
      if (!s.active) continue;
      s.age += dt;
      const t = s.age / s.dur;
      if (t >= 1) {
        this.retire(s);
        continue;
      }
      s.mat.uniforms.uAlpha.value = Math.min(1, (1 - t) * 2.5);
      s.mat.uniforms.uT.value = s.age;
    }
  }

  private tickMeteors(dt: number): void {
    for (const s of this.meteors) {
      if (!s.active) continue;
      s.age += dt;
      const t = s.age / s.dur;
      if (t >= 1) {
        s.active = false;
        s.mesh.visible = false;
        this.spawnRing(s.tx, s.tz, 2.6, s.r, s.g, s.b, 0.4);
        continue;
      }
      // 포물선 낙하(가속): y = h0 * (1-t)^2
      const y = s.h0 * (1 - t) * (1 - t);
      s.mesh.position.set(s.tx, y, s.tz);
      s.mesh.scale.set(0.5, 2.4, 1);
      s.mat.uniforms.uT.value = t;
    }
  }

  private tickRingQueue(dt: number): void {
    for (let i = 0; i < 8; i++) {
      if (this.ringQActive[i] === 0) continue;
      this.ringQT[i] -= dt;
      if (this.ringQT[i] <= 0) {
        this.ringQActive[i] = 0;
        this.spawnRing(this.ringQX[i], this.ringQZ[i], this.ringQR[i], this.ringQCr[i], this.ringQCg[i], this.ringQCb[i], 0.55);
      }
    }
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

  private tickFlash(dt: number): void {
    for (const s of this.flashes) {
      if (!s.active) continue;
      s.age += dt;
      const t = s.age / s.dur;
      if (t >= 1) {
        this.retire(s);
        continue;
      }
      s.mesh.scale.setScalar(s.data * (0.6 + 0.6 * t)); // 순간 확장
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

  // 장수 문장 텍스처(캔버스에 한자 1자, 흰색). 색은 셰이더 uColor로 입힌다. 캐시.
  private crestTexture(char: string): Texture {
    const cached = this.crestTexCache.get(char);
    if (cached) return cached;
    const S = 256;
    const cv = document.createElement('canvas');
    cv.width = S;
    cv.height = S;
    const ctx = cv.getContext('2d')!;
    ctx.clearRect(0, 0, S, S);
    // 외곽 이중 링
    ctx.strokeStyle = 'rgba(255,255,255,0.85)';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(S / 2, S / 2, S * 0.44, 0, Math.PI * 2);
    ctx.stroke();
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(S / 2, S / 2, S * 0.38, 0, Math.PI * 2);
    ctx.stroke();
    // 중앙 한자
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 150px "Nanum Myeongjo","SimSun",serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(char, S / 2, S / 2 + 6);
    const tex = new CanvasTexture(cv);
    tex.colorSpace = SRGBColorSpace;
    tex.needsUpdate = true;
    this.crestTexCache.set(char, tex);
    return tex;
  }

  // 팔괘진 텍스처(8괘 방사 배치 + 이중 링). 흰색, 색은 uColor.
  private baguaTexture(): Texture {
    if (this.baguaTexCache) return this.baguaTexCache;
    const S = 256;
    const cv = document.createElement('canvas');
    cv.width = S;
    cv.height = S;
    const ctx = cv.getContext('2d')!;
    const c = S / 2;
    ctx.clearRect(0, 0, S, S);
    ctx.strokeStyle = 'rgba(255,255,255,0.9)';
    ctx.lineWidth = 3;
    for (const rr of [S * 0.46, S * 0.32, S * 0.2]) {
      ctx.beginPath();
      ctx.arc(c, c, rr, 0, Math.PI * 2);
      ctx.stroke();
    }
    // 8괘: 각 방향에 3줄 효(막대), 일부는 끊어 음효 표현
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * Math.PI * 2;
      ctx.save();
      ctx.translate(c + Math.cos(a) * S * 0.39, c + Math.sin(a) * S * 0.39);
      ctx.rotate(a + Math.PI / 2);
      ctx.fillStyle = '#ffffff';
      for (let line = 0; line < 3; line++) {
        const y = (line - 1) * 9;
        if ((k >> line) & 1) {
          ctx.fillRect(-16, y - 2, 32, 4); // 양효(연속)
        } else {
          ctx.fillRect(-16, y - 2, 12, 4); // 음효(끊김)
          ctx.fillRect(4, y - 2, 12, 4);
        }
      }
      ctx.restore();
    }
    const tex = new CanvasTexture(cv);
    tex.colorSpace = SRGBColorSpace;
    tex.needsUpdate = true;
    this.baguaTexCache = tex;
    return tex;
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

// 킬/대시 광점: 중심 밝고 가장자리 부드러운 발광 원반.
const FLASH_FRAG = /* glsl */ `
  uniform float uT;
  uniform vec3 uColor;
  varying vec2 vUv;
  void main() {
    float r = length(vUv - 0.5) * 2.0;
    float core = smoothstep(1.0, 0.0, r);
    float fade = 1.0 - uT;
    float b = core * fade;
    if (b <= 0.001) discard;
    gl_FragColor = vec4(uColor * b * 1.6, b);
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

// #18 장수 문장/팔괘진 데칼: 텍스처(흰 문양) × 색 × 알파. 애디티브.
const DECAL_FRAG = /* glsl */ `
  uniform sampler2D uMap;
  uniform float uAlpha;
  uniform vec3 uColor;
  varying vec2 vUv;
  void main() {
    vec4 tex = texture2D(uMap, vUv);
    float m = tex.a * max(tex.r, max(tex.g, tex.b));
    if (m <= 0.01) discard;
    gl_FragColor = vec4(uColor * m * 1.6, m * uAlpha);
  }
`;

// #18 잔류 화염 벽: +X로 뻗는 지면 스트립, 노이즈 불꽃 + 진행에 따른 페이드.
const FIREWALL_FRAG = /* glsl */ `
  uniform float uAlpha;
  uniform float uT;
  uniform vec3 uColor;
  varying vec2 vUv;
  float h(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453); }
  void main() {
    float across = 1.0 - abs(vUv.y - 0.5) * 2.0;
    float flick = 0.6 + 0.4 * sin(uT * 14.0 + vUv.x * 30.0) * h(floor(vUv * vec2(24.0, 4.0)));
    float b = pow(max(across, 0.0), 1.4) * flick;
    if (b <= 0.01) discard;
    gl_FragColor = vec4(uColor * b * 0.35, b * uAlpha * 0.8); // #23: additive 누적 백색폭발 방지로 강도 하향
  }
`;

// #18 유성 화살: 세로 스트릭(밝은 코어 + 꼬리), 낙하 중 진하게.
const METEOR_FRAG = /* glsl */ `
  uniform vec3 uColor;
  uniform float uT;
  varying vec2 vUv;
  void main() {
    float across = 1.0 - abs(vUv.x - 0.5) * 2.0;
    float tail = smoothstep(0.0, 0.5, vUv.y); // 위(꼬리) → 아래(촉)
    float core = pow(max(across, 0.0), 2.0);
    float b = core * (0.35 + tail);
    if (b <= 0.01) discard;
    gl_FragColor = vec4(uColor * b * 2.0, b);
  }
`;
