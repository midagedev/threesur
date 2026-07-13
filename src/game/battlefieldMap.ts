export const MAP_CHUNK = 30;
export const MAP_GATE_WIDTH = 7;
const WALL_THICKNESS = 1.25;
const ACTIVE_RADIUS = 2;
const RENDER_RADIUS = 1;
const FLOW_CELL = 1.5;
const FLOW_SIZE = 64;
const FLOW_INF = 0xffff;

export interface MapWall {
  x: number;
  z: number;
  hx: number;
  hz: number;
  horizontal: boolean;
  visible: boolean;
}

export interface MapRoad {
  x: number;
  z: number;
  width: number;
  depth: number;
}

export interface MapProp {
  x: number;
  z: number;
  kind: number;
  width: number;
  height: number;
}

// 오픈필드에 흩어 놓는 전술 랜드마크(충돌 없음 — 미로가 아니라 시각 지표).
export interface MapLandmark {
  x: number;
  z: number;
  kind: number;
  width: number;
  height: number;
  name: string;
  glow: number; // 상시 글로우 반경(0이면 없음)
  gr: number;
  gg: number;
  gb: number;
}

interface LandmarkType {
  kind: number;
  width: number;
  height: number;
  name: string;
  glow: number;
  gr: number;
  gg: number;
  gb: number;
}

// WORLD_ASSETS: tower=2, palisade=3, siegeWreck=4, camp=5, warDrum=6, beacon=11
const LANDMARK_TYPES: LandmarkType[] = [
  { kind: 11, width: 3.2, height: 5.4, name: '봉화대 烽火', glow: 2.8, gr: 1.7, gg: 0.85, gb: 0.32 },
  { kind: 5, width: 5.4, height: 4.0, name: '군영 軍營', glow: 0, gr: 0, gg: 0, gb: 0 },
  { kind: 6, width: 3.0, height: 3.4, name: '전고 戰鼓', glow: 1.7, gr: 1.0, gg: 0.38, gb: 0.26 },
  { kind: 2, width: 3.4, height: 5.6, name: '망루 望樓', glow: 0, gr: 0, gg: 0, gb: 0 },
  { kind: 4, width: 4.8, height: 3.6, name: '공성 잔해 殘骸', glow: 0, gr: 0, gg: 0, gb: 0 },
];
const LANDMARK_COUNT = 12;
const GOLDEN_ANGLE = 2.399963229728653;

export interface GateBarrier {
  key: string;
  x: number;
  z: number;
  horizontal: boolean;
  visible: boolean;
}

interface Collider {
  x: number;
  z: number;
  hx: number;
  hz: number;
  gateKey: string | null;
}

function hash2(x: number, z: number): number {
  let h = Math.imul(x ^ 0x9e3779b9, 0x85ebca6b) ^ Math.imul(z ^ 0xc2b2ae35, 0x27d4eb2f);
  h ^= h >>> 16;
  return h >>> 0;
}

function parentOf(cx: number, cz: number, out: { x: number; z: number }): void {
  out.x = cx;
  out.z = cz;
  if (cx === 0 && cz === 0) return;
  if (cx === 0) out.z -= Math.sign(cz);
  else if (cz === 0) out.x -= Math.sign(cx);
  else if ((hash2(cx, cz) & 1) === 0) out.x -= Math.sign(cx);
  else out.z -= Math.sign(cz);
}

const parentA = { x: 0, z: 0 };
const parentB = { x: 0, z: 0 };

// 모든 청크가 원점으로 이어지는 spanning tree에 일부 loop를 추가한다.
function edgeOpen(cx: number, cz: number, nx: number, nz: number): boolean {
  parentOf(cx, cz, parentA);
  if (parentA.x === nx && parentA.z === nz) return true;
  parentOf(nx, nz, parentB);
  if (parentB.x === cx && parentB.z === cz) return true;
  const ax = Math.min(cx, nx);
  const az = Math.min(cz, nz);
  const orientation = cx !== nx ? 17 : 43;
  return hash2(ax * 2 + orientation, az * 2 - orientation) % 100 < 22;
}

// 렌더·충돌·스폰·적 길찾기가 함께 소비하는 결정론적 청크 맵.
export class BattlefieldMap {
  readonly walls: MapWall[] = [];
  readonly roads: MapRoad[] = [];
  readonly props: MapProp[] = [];
  readonly landmarks: MapLandmark[] = [];
  readonly gates: GateBarrier[] = [];
  revision = 0;
  collisionCount = 0;
  breachCount = 0;
  gateKills = 0;

  private readonly colliders: Collider[] = [];
  private readonly breached = new Set<string>();
  // 오픈필드가 기본. 성벽/게이트는 호로관 세트피스 동안만 존재.
  private hulaoActive = false;
  private hulaoTimer = 0;
  private hulaoX = 0;
  private hulaoZ = 0;
  private playerX = 0;
  private playerZ = 0;
  private flowOriginX = 0;
  private flowOriginZ = 0;
  private flowTargetCell = -1;
  private flowTimer = 0;
  private readonly blocked = new Uint8Array(FLOW_SIZE * FLOW_SIZE);
  private readonly distance = new Uint16Array(FLOW_SIZE * FLOW_SIZE);
  private readonly queue = new Int32Array(FLOW_SIZE * FLOW_SIZE);

  update(playerX: number, playerZ: number, dt: number): void {
    this.playerX = playerX;
    this.playerZ = playerZ;
    // 오픈필드: 성벽 없음. 호로관 세트피스 동안만 성벽/게이트 + flow-field 유지.
    if (!this.hulaoActive) return;
    this.hulaoTimer -= dt;
    if (this.hulaoTimer <= 0 || this.breached.has('hulao')) {
      this.endHulao();
      return;
    }
    this.flowTimer -= dt;
    const tx = Math.floor(playerX / FLOW_CELL);
    const tz = Math.floor(playerZ / FLOW_CELL);
    const packed = ((tx & 0xffff) << 16) ^ (tz & 0xffff);
    if (this.flowTimer <= 0 || packed !== this.flowTargetCell) {
      this.flowTargetCell = packed;
      this.flowTimer = 0.22;
      this.rebuildFlow();
    }
  }

  reset(): void {
    this.breached.clear();
    this.breachCount = 0;
    this.gateKills = 0;
    this.hulaoActive = false;
    this.hulaoTimer = 0;
    this.rebuild(); // 오픈필드로 초기화(모든 지형 배열 비움)
  }

  // 호로관 세트피스 시작: 플레이어 북쪽에 성문 벽을 세운다(제한 시간 또는 파성 시 소멸).
  triggerHulao(px: number, pz: number, durationSec = 45): void {
    this.hulaoActive = true;
    this.hulaoX = px;
    this.hulaoZ = pz - 14;
    this.hulaoTimer = durationSec;
    this.gateKills = 0;
    this.breached.delete('hulao');
    this.rebuild();
    this.rebuildFlow();
  }

  private endHulao(): void {
    this.hulaoActive = false;
    this.rebuild();
    this.revision++;
  }

  get hulaoOn(): boolean {
    return this.hulaoActive;
  }

  private rebuild(): void {
    this.walls.length = 0;
    this.roads.length = 0;
    this.props.length = 0;
    this.landmarks.length = 0;
    this.gates.length = 0;
    this.colliders.length = 0;
    this.buildLandmarks(); // 오픈필드 전술 랜드마크(항상, 충돌 없음)
    if (this.hulaoActive) this.buildHulao();
    this.revision++;
  }

  // 원점 주변에 나선형으로 랜드마크를 흩어 놓는다. 충돌체를 만들지 않아
  // 포위·휩쓸기 오픈필드 감각을 해치지 않으면서 전장에 지표와 스펙터클을 준다.
  private buildLandmarks(): void {
    for (let i = 0; i < LANDMARK_COUNT; i++) {
      const t = LANDMARK_TYPES[i % LANDMARK_TYPES.length];
      const radius = 18 + i * 5.8;
      const a = i * GOLDEN_ANGLE;
      const x = Math.cos(a) * radius;
      const z = Math.sin(a) * radius;
      this.props.push({ x, z, kind: t.kind, width: t.width, height: t.height });
      this.landmarks.push({
        x, z, kind: t.kind, width: t.width, height: t.height,
        name: t.name, glow: t.glow, gr: t.gr, gg: t.gg, gb: t.gb,
      });
    }
  }

  // 호로관 성문: 가로 성벽 한 줄 + 중앙 게이트(파성 전까지 콜라이더). 세트피스 전용.
  private buildHulao(): void {
    const gx = this.hulaoX;
    const gz = this.hulaoZ;
    const span = 20; // 성벽 반폭
    const gateHalf = MAP_GATE_WIDTH * 0.5;
    const segLen = span - gateHalf;
    this.addWall(gx - gateHalf - segLen * 0.5, gz, segLen, WALL_THICKNESS, true, true);
    this.addWall(gx + gateHalf + segLen * 0.5, gz, segLen, WALL_THICKNESS, true, true);
    this.gates.push({ key: 'hulao', x: gx, z: gz, horizontal: true, visible: true });
    if (!this.breached.has('hulao')) {
      this.colliders.push({ x: gx, z: gz, hx: gateHalf, hz: WALL_THICKNESS * 0.5, gateKey: 'hulao' });
    }
    // 성문 양옆 망루
    this.props.push({ x: gx - span, z: gz, kind: 10, width: 5, height: 5 });
    this.props.push({ x: gx + span, z: gz, kind: 10, width: 5, height: 5 });
  }

  private buildChunk(cx: number, cz: number, visible: boolean): void {
    const x = cx * MAP_CHUNK;
    const z = cz * MAP_CHUNK;
    const n = edgeOpen(cx, cz, cx, cz - 1);
    const e = edgeOpen(cx, cz, cx + 1, cz);
    const s = edgeOpen(cx, cz, cx, cz + 1);
    const w = edgeOpen(cx, cz, cx - 1, cz);
    if (visible) {
      this.roads.push({ x, z, width: 9, depth: 9 });
      if (n) this.roads.push({ x, z: z - 9.75, width: MAP_GATE_WIDTH, depth: 19.5 });
      if (s) this.roads.push({ x, z: z + 9.75, width: MAP_GATE_WIDTH, depth: 19.5 });
      if (w) this.roads.push({ x: x - 9.75, z, width: 19.5, depth: MAP_GATE_WIDTH });
      if (e) this.roads.push({ x: x + 9.75, z, width: 19.5, depth: MAP_GATE_WIDTH });
      const ports = Number(n) + Number(e) + Number(s) + Number(w);
      const h = hash2(cx, cz);
      const cornerX = x + ((h & 1) ? 10 : -10);
      const cornerZ = z + ((h & 2) ? 9 : -9);
      this.props.push({
        x: cornerX,
        z: cornerZ,
        kind: ports <= 1 ? 5 : ports === 2 ? 6 : ports === 3 ? 11 : 10,
        width: ports <= 1 ? 5.5 : 3.4,
        height: ports <= 1 ? 4.2 : 4.6,
      });
    }

    // 각 shared edge는 남/동쪽 청크가 N/W 경계로 한 번만 소유한다.
    const northKey = cx === 0 && cz === 0 ? 'origin-north' : `${cx},${cz}:n`;
    this.addBoundary(x, z - MAP_CHUNK * 0.5, true, n, visible, cx === 0 && cz === 0, northKey);
    this.addBoundary(x - MAP_CHUNK * 0.5, z, false, w, visible, false, `${cx},${cz}:w`);
  }

  private addBoundary(
    x: number,
    z: number,
    horizontal: boolean,
    open: boolean,
    visible: boolean,
    sealed: boolean,
    gateKey: string,
  ): void {
    if (!open) {
      this.addWall(x, z, horizontal ? MAP_CHUNK : WALL_THICKNESS, horizontal ? WALL_THICKNESS : MAP_CHUNK, horizontal, visible);
      return;
    }
    const halfSegment = (MAP_CHUNK - MAP_GATE_WIDTH) * 0.25;
    const offset = MAP_GATE_WIDTH * 0.5 + halfSegment;
    if (horizontal) {
      this.addWall(x - offset, z, halfSegment * 2, WALL_THICKNESS, true, visible);
      this.addWall(x + offset, z, halfSegment * 2, WALL_THICKNESS, true, visible);
    } else {
      this.addWall(x, z - offset, WALL_THICKNESS, halfSegment * 2, false, visible);
      this.addWall(x, z + offset, WALL_THICKNESS, halfSegment * 2, false, visible);
    }
    if (visible) this.gates.push({ key: gateKey, x, z, horizontal, visible });
    if (sealed && !this.breached.has(gateKey)) {
      this.colliders.push({
        x,
        z,
        hx: horizontal ? MAP_GATE_WIDTH * 0.5 : WALL_THICKNESS * 0.5,
        hz: horizontal ? WALL_THICKNESS * 0.5 : MAP_GATE_WIDTH * 0.5,
        gateKey,
      });
    }
  }

  private addWall(x: number, z: number, width: number, depth: number, horizontal: boolean, visible: boolean): void {
    this.colliders.push({ x, z, hx: width * 0.5, hz: depth * 0.5, gateKey: null });
    if (visible) this.walls.push({ x, z, hx: width * 0.5, hz: depth * 0.5, horizontal, visible });
  }

  circleBlocked(x: number, z: number, radius: number): boolean {
    for (const c of this.colliders) {
      const qx = Math.max(c.x - c.hx, Math.min(x, c.x + c.hx));
      const qz = Math.max(c.z - c.hz, Math.min(z, c.z + c.hz));
      const dx = x - qx;
      const dz = z - qz;
      if (dx * dx + dz * dz < radius * radius) return true;
    }
    return false;
  }

  resolveMovement(
    fromX: number,
    fromZ: number,
    toX: number,
    toZ: number,
    radius: number,
    out: { x: number; z: number },
  ): boolean {
    let x = toX;
    let z = fromZ;
    let hit = false;
    for (let pass = 0; pass < 2; pass++) {
      for (const c of this.colliders) {
        if (z <= c.z - c.hz - radius || z >= c.z + c.hz + radius) continue;
        if (x <= c.x - c.hx - radius || x >= c.x + c.hx + radius) continue;
        x = toX >= fromX ? c.x - c.hx - radius : c.x + c.hx + radius;
        hit = true;
      }
    }
    z = toZ;
    for (let pass = 0; pass < 2; pass++) {
      for (const c of this.colliders) {
        if (x <= c.x - c.hx - radius || x >= c.x + c.hx + radius) continue;
        if (z <= c.z - c.hz - radius || z >= c.z + c.hz + radius) continue;
        z = toZ >= fromZ ? c.z - c.hz - radius : c.z + c.hz + radius;
        hit = true;
      }
    }
    out.x = x;
    out.z = z;
    if (hit) this.collisionCount++;
    return hit;
  }

  projectWalkable(x: number, z: number, radius: number, out: { x: number; z: number }): boolean {
    if (!this.circleBlocked(x, z, radius)) {
      out.x = x;
      out.z = z;
      return false;
    }
    for (let ring = 1; ring <= 5; ring++) {
      const d = ring * 1.1;
      for (let k = 0; k < 16; k++) {
        const a = (k / 16) * Math.PI * 2;
        const px = x + Math.cos(a) * d;
        const pz = z + Math.sin(a) * d;
        if (!this.circleBlocked(px, pz, radius)) {
          out.x = px;
          out.z = pz;
          return true;
        }
      }
    }
    out.x = this.playerX;
    out.z = this.playerZ;
    return true;
  }

  breachNear(x: number, z: number, reach: number): GateBarrier | null {
    for (const gate of this.gates) {
      if (this.breached.has(gate.key)) continue;
      const dx = x - gate.x;
      const dz = z - gate.z;
      if (dx * dx + dz * dz > reach * reach) continue;
      this.breached.add(gate.key);
      this.breachCount++;
      const result = { ...gate };
      this.rebuild();
      this.rebuildFlow();
      return result;
    }
    return null;
  }

  recordKillAt(x: number, z: number): GateBarrier | null {
    if (!this.hulaoActive || this.breached.has('hulao')) return null;
    const gate = this.gates.find((candidate) => candidate.key === 'hulao');
    if (!gate) return null;
    const dx = x - gate.x;
    const dz = z - gate.z;
    if (dx * dx + dz * dz > 10 * 10) return null;
    this.gateKills++;
    if (this.gateKills < 12) return null;
    return this.breachNear(gate.x, gate.z, 0.5);
  }

  primeGate(): void {
    if (!this.breached.has('hulao')) this.gateKills = 11;
  }

  isGateBreached(key = 'hulao'): boolean {
    return this.breached.has(key);
  }

  private rebuildFlow(): void {
    this.flowOriginX = Math.floor(this.playerX / FLOW_CELL) * FLOW_CELL - (FLOW_SIZE * FLOW_CELL) / 2;
    this.flowOriginZ = Math.floor(this.playerZ / FLOW_CELL) * FLOW_CELL - (FLOW_SIZE * FLOW_CELL) / 2;
    const n = FLOW_SIZE * FLOW_SIZE;
    this.distance.fill(FLOW_INF);
    for (let gz = 0; gz < FLOW_SIZE; gz++) {
      for (let gx = 0; gx < FLOW_SIZE; gx++) {
        const wx = this.flowOriginX + (gx + 0.5) * FLOW_CELL;
        const wz = this.flowOriginZ + (gz + 0.5) * FLOW_CELL;
        this.blocked[gz * FLOW_SIZE + gx] = this.circleBlocked(wx, wz, 0.58) ? 1 : 0;
      }
    }
    const tx = Math.max(0, Math.min(FLOW_SIZE - 1, Math.floor((this.playerX - this.flowOriginX) / FLOW_CELL)));
    const tz = Math.max(0, Math.min(FLOW_SIZE - 1, Math.floor((this.playerZ - this.flowOriginZ) / FLOW_CELL)));
    let start = tz * FLOW_SIZE + tx;
    if (this.blocked[start]) {
      for (let i = 0; i < n; i++) if (!this.blocked[i]) { start = i; break; }
    }
    let head = 0;
    let tail = 0;
    this.queue[tail++] = start;
    this.distance[start] = 0;
    while (head < tail) {
      const cur = this.queue[head++];
      const x = cur % FLOW_SIZE;
      const z = (cur / FLOW_SIZE) | 0;
      const nextD = this.distance[cur] + 1;
      if (x > 0) tail = this.visitFlow(cur - 1, nextD, tail);
      if (x + 1 < FLOW_SIZE) tail = this.visitFlow(cur + 1, nextD, tail);
      if (z > 0) tail = this.visitFlow(cur - FLOW_SIZE, nextD, tail);
      if (z + 1 < FLOW_SIZE) tail = this.visitFlow(cur + FLOW_SIZE, nextD, tail);
    }
  }

  private visitFlow(index: number, distance: number, tail: number): number {
    if (this.blocked[index] || this.distance[index] !== FLOW_INF) return tail;
    this.distance[index] = distance;
    this.queue[tail] = index;
    return tail + 1;
  }

  flowDirection(x: number, z: number, targetX: number, targetZ: number, out: { x: number; z: number }): void {
    if (!this.hulaoActive) {
      // 오픈필드: 곧장 플레이어로 추적(flow-field 불필요).
      this.directDirection(x, z, targetX, targetZ, out);
      return;
    }
    const gx = Math.floor((x - this.flowOriginX) / FLOW_CELL);
    const gz = Math.floor((z - this.flowOriginZ) / FLOW_CELL);
    if (gx < 1 || gz < 1 || gx >= FLOW_SIZE - 1 || gz >= FLOW_SIZE - 1) {
      this.directDirection(x, z, targetX, targetZ, out);
      return;
    }
    const cur = gz * FLOW_SIZE + gx;
    let best = this.distance[cur];
    let bestX = gx;
    let bestZ = gz;
    for (let oz = -1; oz <= 1; oz++) {
      for (let ox = -1; ox <= 1; ox++) {
        if (ox === 0 && oz === 0) continue;
        const ni = (gz + oz) * FLOW_SIZE + gx + ox;
        if (this.blocked[ni] || this.distance[ni] >= best) continue;
        if (ox !== 0 && oz !== 0) {
          if (this.blocked[gz * FLOW_SIZE + gx + ox] || this.blocked[(gz + oz) * FLOW_SIZE + gx]) continue;
        }
        best = this.distance[ni];
        bestX = gx + ox;
        bestZ = gz + oz;
      }
    }
    if (best === FLOW_INF || (bestX === gx && bestZ === gz)) {
      this.directDirection(x, z, targetX, targetZ, out);
      return;
    }
    const tx = this.flowOriginX + (bestX + 0.5) * FLOW_CELL;
    const tz = this.flowOriginZ + (bestZ + 0.5) * FLOW_CELL;
    this.directDirection(x, z, tx, tz, out);
  }

  private directDirection(x: number, z: number, tx: number, tz: number, out: { x: number; z: number }): void {
    const dx = tx - x;
    const dz = tz - z;
    const d = Math.hypot(dx, dz) || 1;
    out.x = dx / d;
    out.z = dz / d;
  }

  get activeColliderCount(): number {
    return this.colliders.length;
  }
}

export function _mapEdgeOpenForTest(cx: number, cz: number, nx: number, nz: number): boolean {
  return edgeOpen(cx, cz, nx, nz);
}
