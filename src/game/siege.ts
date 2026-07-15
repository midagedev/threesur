// 낙양 공방전(DESIGN 20) 상태머신 — 공성→점령→수성 풀 아크.
// 완전 선택형 사이드 오브젝트: 성에 접근하지 않는 런에는 어떤 영향도 없다(수비대·판정은 근접 게이트 안에서만 구동).
// 이벤트 계약(onLordSpawn/onCapture/onCounterattack/onVolley/onDefended/onLost)은 gfx 레인·리드와 공유.
// siege는 상태·스폰 지시·판정을 소유하고, 시각화·보상·성주 스폰은 run 배선 콜백으로 위임한다.
import { CASTLE, castleRenderData } from './battlefieldMap';
import type { BattlefieldMap } from './battlefieldMap';
import type { Spawner } from './spawner';
import type { EnemyPool } from './enemies';
import { ENEMY_CAP } from './enemies';
import type { Rng } from '../core/rng';

export type SiegeState =
  | 'enemy_held' // 적 점령(런 시작 상태) — 외성 3성문 + 내성문 봉쇄
  | 'breached' // 외성문 ≥1 파성
  | 'lord' // 성주(화웅) 출진, 교전 중
  | 'captured' // 성주 처치 → 거점화, 수성 개전 대기
  | 'counterattack' // 수성(탈환군 내습) 진행 중
  | 'held' // 사수 성공(종결)
  | 'fallen'; // 함락(종결)

// 불화살 착탄 예약(t=착탄까지 초). gfx 레인이 동일 payload로 화살비를 그린다.
export interface VolleyShot {
  x: number;
  z: number;
  t: number;
}

export interface SiegeDeps {
  map: BattlefieldMap;
  spawner: Spawner;
  enemies: EnemyPool;
  rng: Rng;
  bossActive: () => boolean; // 보스전 중이면 성주 출진·수성 개전 연기
  hulaoActive: () => boolean; // 호로관 세트피스 중이면 수성 개전 연기
  requestLord: (x: number, z: number) => void; // run이 boss.spawn('huaxiong', …) 배선
  hitPlayer: (dmg: number) => void; // 불화살 착탄 피해(run.onPlayerHit 경로)
  placeSupply: (kind: 'dumpling' | 'gong', x: number, z: number) => void; // 거점화 보급 배치
}

const GARRISON_ENGAGE_R = 40; // 이 반경 내 플레이어일 때만 수비대 트리클(선택형 보장)
const GARRISON_RATE = 1.2; // 초당 수비대 스폰
const GARRISON_CAP = 40; // 성내 생존 로컬 캡
const COUNTER_DELAY = 100; // 점령 후 수성 개전까지(초)
const COUNTER_DURATION = 75; // 수성 지속(초)
const FALL_THRESHOLD = 12; // 내성 침입 누적 → 함락
const ABANDON_R = 55; // 성 중심 이탈 시 함락
const VOLLEY_MIN = 8;
const VOLLEY_MAX = 11;
const VOLLEY_LEAD = 0.9; // 착탄 예고(초)
const VOLLEY_HIT_R = 1.7; // 착탄 판정 반경
const VOLLEY_DMG = 10;
const KEEP_AURA_R = 6; // 거점화 회복 오라 반경
const SUPPLY_RESPAWN = 90; // 만두 리스폰 주기(초)
const BOSS_SLOTS = [180, 360, 540]; // 이 시각 25s 전 이내면 수성 개전 연기

export class SiegeSystem {
  // 이벤트 계약(spawner.onWave 패턴 — run이 주입).
  onLordSpawn: ((x: number, z: number) => void) | null = null;
  onCapture: ((x: number, z: number) => void) | null = null;
  onCounterattack: (() => void) | null = null;
  onVolley: ((shots: VolleyShot[]) => void) | null = null;
  onDefended: (() => void) | null = null;
  onLost: (() => void) | null = null;
  onApproach: (() => void) | null = null; // 퀘스트 훅(계약 외 부가 — 최초 접근 대사)

  private readonly d: SiegeDeps;
  private state: SiegeState = 'enemy_held';
  private approached = false;
  private sentriesSpawned = false;
  private garrisonAcc = 0;
  private captureTimer = 0;
  private counterTimer = 0;
  private waveIdx = 0;
  private trickleAcc = 0;
  private volleyTimer = 0;
  private fallGauge = 0;
  private gaugeThrottle = 0;
  private supplyTimer = 0;
  private lordX = 0;
  private lordZ = 0;
  private gameTime = 0;
  private readonly volleys: VolleyShot[] = [];
  private readonly keepCounted = new Uint8Array(ENEMY_CAP); // 내성 침입 1회 카운트(개체당)
  private readonly _pt = { x: 0, z: 0 };

  constructor(deps: SiegeDeps) {
    this.d = deps;
  }

  reset(): void {
    this.state = 'enemy_held';
    this.approached = false;
    this.sentriesSpawned = false;
    this.garrisonAcc = 0;
    this.captureTimer = 0;
    this.counterTimer = 0;
    this.waveIdx = 0;
    this.trickleAcc = 0;
    this.volleyTimer = 0;
    this.fallGauge = 0;
    this.gaugeThrottle = 0;
    this.supplyTimer = 0;
    this.volleys.length = 0;
    this.keepCounted.fill(0);
  }

  update(dt: number, gameTime: number, px: number, pz: number): void {
    this.gameTime = gameTime;
    const minute = Math.max(1, gameTime / 60);
    const dcx = px - CASTLE.cx;
    const dcz = pz - CASTLE.cz;
    const distCenter = Math.hypot(dcx, dcz);

    switch (this.state) {
      case 'enemy_held':
      case 'breached':
        this.updateSiegePhase(dt, minute, px, pz, distCenter);
        break;
      case 'lord':
        // 성주 처치는 run이 captureNow로 통지. 이 단계는 수비대 정지 + 대기.
        break;
      case 'captured':
        this.updateCaptured(dt, gameTime);
        break;
      case 'counterattack':
        this.updateCounterattack(dt, minute, px, pz, distCenter);
        break;
      // held / fallen: 종결 — no-op
    }
  }

  // === 1막: 공성/점령 ===
  private updateSiegePhase(dt: number, minute: number, px: number, pz: number, distCenter: number): void {
    if (distCenter > GARRISON_ENGAGE_R) return; // 성 근처 아니면 완전 무영향

    if (!this.approached) {
      this.approached = true;
      this.onApproach?.();
    }
    if (!this.sentriesSpawned) {
      this.sentriesSpawned = true;
      this.d.spawner.spawnGateWatch(this.courtyardCorners(), minute);
    }

    // 수비대 트리클(안뜰 랜덤, 로컬 캡)
    this.garrisonAcc += GARRISON_RATE * dt;
    while (this.garrisonAcc >= 1) {
      this.garrisonAcc -= 1;
      if (this.d.spawner.garrisonCount() >= GARRISON_CAP) {
        this.garrisonAcc = 0;
        break;
      }
      const p = this.courtyardPoint();
      this.d.spawner.spawnSiegeAttacker(p.x, p.z, minute, false);
    }

    // 성주 출진: 외성문 ≥1 파성 + 플레이어 외성 내부 진입 + 보스 비활성.
    if (
      this.state === 'breached' &&
      this.d.map.insideCastleBounds(px, pz, -1) &&
      !this.d.map.insideKeepBounds(px, pz, 0) &&
      !this.d.bossActive()
    ) {
      this.spawnLord();
    }
  }

  private spawnLord(): void {
    this.state = 'lord';
    // 안뜰 내성문 앞(내성문에서 남쪽 4m — 안뜰 쪽).
    this.lordX = CASTLE.keepGate.x;
    this.lordZ = CASTLE.keepGate.z + 4;
    this.d.map.openKeepGate();
    this.d.requestLord(this.lordX, this.lordZ);
    this.onLordSpawn?.(this.lordX, this.lordZ);
  }

  // 외성문 파성 통지(run.onGateBreached가 castle-* 키에 대해 호출).
  notifyGateBreach(key: string): void {
    if (this.state === 'enemy_held' && (key === 'castle-s' || key === 'castle-e' || key === 'castle-w')) {
      this.state = 'breached';
    }
  }

  // 성주 처치 → 점령(run.handleKill의 성주 분기가 호출).
  captureNow(x: number, z: number): void {
    if (this.state !== 'lord') return;
    this.state = 'captured';
    this.captureTimer = 0;
    this.d.map.setCastleBreachable(false); // 점령 후 잔여 봉쇄문이 킬로 열리지 않게
    // 소유권 전환(markers gfx가 flipVersion으로 색 전환 웨이브 소비).
    castleRenderData.allied = true;
    castleRenderData.flipX = x;
    castleRenderData.flipZ = z;
    castleRenderData.flipVersion++;
    // 거점화 보급: 만두 2 + 동라 1(내성 안뜰).
    this.dropDumplings(2);
    this.d.placeSupply('gong', CASTLE.cx, CASTLE.cz + 2);
    this.supplyTimer = SUPPLY_RESPAWN;
    this.onCapture?.(x, z);
  }

  // === 거점화(수성 개전 대기) ===
  private updateCaptured(dt: number, gameTime: number): void {
    this.captureTimer += dt;
    this.tickSupplyRespawn(dt);
    if (this.captureTimer >= COUNTER_DELAY && this.canStartCounter(gameTime)) {
      this.startCounterattack();
    }
  }

  private canStartCounter(gameTime: number): boolean {
    if (this.d.bossActive()) return false;
    if (this.d.hulaoActive()) return false;
    for (const t of BOSS_SLOTS) if (gameTime >= t - 25 && gameTime < t) return false;
    return true;
  }

  private tickSupplyRespawn(dt: number): void {
    this.supplyTimer -= dt;
    if (this.supplyTimer <= 0) {
      this.supplyTimer = SUPPLY_RESPAWN;
      // 리스폰은 1개만(과다 회복 방지 — objects 슬롯 상한도 자연 제한).
      this.d.placeSupply(
        'dumpling',
        CASTLE.cx + (this.d.rng.next() - 0.5) * 5,
        CASTLE.cz + (this.d.rng.next() - 0.5) * 4,
      );
    }
  }

  // === 2막: 수성 ===
  private startCounterattack(): void {
    this.state = 'counterattack';
    this.counterTimer = 0;
    this.waveIdx = 0;
    this.trickleAcc = 0;
    this.fallGauge = 0;
    this.gaugeThrottle = 0;
    this.volleyTimer = this.d.rng.range(2, 4); // 개전 직후 첫 일제사
    this.keepCounted.fill(0);
    this.volleys.length = 0;
    this.d.spawner.setSiegeActive(true);
    this.onCounterattack?.();
    this.spawnWave(); // t=0
    this.waveIdx = 1;
  }

  private updateCounterattack(dt: number, minute: number, px: number, pz: number, distCenter: number): void {
    this.counterTimer += dt;
    this.tickSupplyRespawn(dt);

    // 웨이브 t=0(개전)/25/50
    while (this.waveIdx < 3 && this.counterTimer >= this.waveIdx * 25) {
      this.spawnWave();
      this.waveIdx++;
    }

    // 지속 트리클(파성된 성문 방향)
    this.trickleAcc += 1.2 * dt;
    while (this.trickleAcc >= 1) {
      this.trickleAcc -= 1;
      this.spawnTrickle(minute);
    }

    // 불화살 일제사(플레이어가 성내일 때만)
    this.volleyTimer -= dt;
    if (this.volleyTimer <= 0) {
      if (this.d.map.insideCastleBounds(px, pz, 0)) this.fireVolley(px, pz);
      this.volleyTimer = this.d.rng.range(VOLLEY_MIN, VOLLEY_MAX);
    }
    this.updateVolleys(dt, px, pz);

    // 함락 게이지(스로틀 0.25s)
    this.gaugeThrottle -= dt;
    if (this.gaugeThrottle <= 0) {
      this.gaugeThrottle = 0.25;
      this.scanKeepIntruders();
      if (this.fallGauge >= FALL_THRESHOLD) {
        this.fall();
        return;
      }
    }

    // 성 이탈 → 함락
    if (distCenter > ABANDON_R) {
      this.fall();
      return;
    }

    // 사수 성공
    if (this.counterTimer >= COUNTER_DURATION) this.defend();
  }

  private spawnWave(): void {
    const minute = Math.max(1, this.gameTime / 60);
    for (const g of CASTLE.outerGates) {
      const out = this.gateOutward(g.x, g.z);
      this.d.spawner.spawnSiegeRush(out.x, out.z, minute);
    }
  }

  private spawnTrickle(minute: number): void {
    const gates = CASTLE.outerGates.filter((g) => this.d.map.isGateBreached(g.key));
    if (gates.length === 0) return;
    const g = gates[this.d.rng.int(gates.length)];
    const out = this.gateOutward(g.x, g.z);
    this.d.spawner.spawnSiegeAttacker(
      out.x + (this.d.rng.next() - 0.5) * 3,
      out.z + (this.d.rng.next() - 0.5) * 3,
      minute,
      this.d.rng.next() < 0.15,
    );
  }

  // 성문 밖으로 5m 밀어낸 지점(성 중심에서 성문을 향하는 방향).
  private gateOutward(gx: number, gz: number): { x: number; z: number } {
    let ox = gx - CASTLE.cx;
    let oz = gz - CASTLE.cz;
    const d = Math.hypot(ox, oz) || 1;
    ox /= d;
    oz /= d;
    return { x: gx + ox * 5, z: gz + oz * 5 };
  }

  private fireVolley(px: number, pz: number): void {
    const n = 5 + this.d.rng.int(3); // 5..7발
    const shots: VolleyShot[] = [];
    for (let k = 0; k < n; k++) {
      const a = this.d.rng.next() * Math.PI * 2;
      const r = this.d.rng.range(0, 5.5);
      shots.push({ x: px + Math.cos(a) * r, z: pz + Math.sin(a) * r, t: VOLLEY_LEAD });
    }
    // 판정용은 별도 복사본(gfx로 넘긴 payload의 t를 건드리지 않음).
    for (const s of shots) this.volleys.push({ x: s.x, z: s.z, t: s.t });
    this.onVolley?.(shots);
  }

  private updateVolleys(dt: number, px: number, pz: number): void {
    for (let i = this.volleys.length - 1; i >= 0; i--) {
      const v = this.volleys[i];
      v.t -= dt;
      if (v.t <= 0) {
        const dx = px - v.x;
        const dz = pz - v.z;
        if (dx * dx + dz * dz <= VOLLEY_HIT_R * VOLLEY_HIT_R) this.d.hitPlayer(VOLLEY_DMG);
        this.volleys.splice(i, 1);
      }
    }
  }

  private scanKeepIntruders(): void {
    const en = this.d.enemies;
    for (let i = 0; i < ENEMY_CAP; i++) {
      if (en.alive[i] === 0 || en.controlled[i] === 1 || this.keepCounted[i] === 1) continue;
      if (this.d.map.insideKeepBounds(en.x[i], en.z[i], 0)) {
        this.keepCounted[i] = 1;
        this.fallGauge++;
      }
    }
  }

  private defend(): void {
    this.state = 'held';
    this.d.spawner.setSiegeActive(false);
    this.volleys.length = 0;
    this.onDefended?.();
  }

  private fall(): void {
    this.state = 'fallen';
    this.d.spawner.setSiegeActive(false);
    this.volleys.length = 0;
    castleRenderData.allied = false;
    castleRenderData.flipX = CASTLE.cx;
    castleRenderData.flipZ = CASTLE.cz;
    castleRenderData.flipVersion++;
    this.onLost?.();
  }

  // 내성 안뜰 랜덤 지점(외성 내부·내성 밖, 벽 여유 2m).
  private courtyardPoint(): { x: number; z: number } {
    for (let tries = 0; tries < 8; tries++) {
      const x = CASTLE.cx + this.d.rng.range(-(CASTLE.ohx - 2), CASTLE.ohx - 2);
      const z = CASTLE.cz + this.d.rng.range(-(CASTLE.ohz - 2), CASTLE.ohz - 2);
      if (this.d.map.insideKeepBounds(x, z, 1)) continue; // 내성 안뜰 회피
      this.d.map.projectWalkable(x, z, 0.75, this._pt);
      return this._pt;
    }
    this._pt.x = CASTLE.cx;
    this._pt.z = CASTLE.cz + CASTLE.ohz - 4; // 폴백: 남문 안쪽
    return this._pt;
  }

  private courtyardCorners(): { x: number; z: number }[] {
    const m = 3;
    return [
      { x: CASTLE.cx - CASTLE.ohx + m, z: CASTLE.cz - CASTLE.ohz + m },
      { x: CASTLE.cx + CASTLE.ohx - m, z: CASTLE.cz - CASTLE.ohz + m },
      { x: CASTLE.cx - CASTLE.ohx + m, z: CASTLE.cz + CASTLE.ohz - m },
      { x: CASTLE.cx + CASTLE.ohx - m, z: CASTLE.cz + CASTLE.ohz - m },
    ];
  }

  private dropDumplings(n: number): void {
    for (let k = 0; k < n; k++) {
      const a = (k / Math.max(1, n)) * Math.PI * 2 + 0.5;
      this.d.placeSupply('dumpling', CASTLE.cx + Math.cos(a) * 3, CASTLE.cz + Math.sin(a) * 3);
    }
  }

  // === 거점화 오라 조회(run이 kind===5 회복 루프에 얹어 소비) ===
  get keepAuraActive(): boolean {
    return this.state === 'captured' || this.state === 'counterattack' || this.state === 'held';
  }
  get keepCenterX(): number {
    return CASTLE.cx;
  }
  get keepCenterZ(): number {
    return CASTLE.cz;
  }
  get keepAuraRadius(): number {
    return KEEP_AURA_R;
  }

  // === 조회(HUD/QA/stats) ===
  get siegeState(): SiegeState {
    return this.state;
  }
  get fallGaugeValue(): number {
    return this.fallGauge;
  }
  get lordActive(): boolean {
    return this.state === 'lord';
  }

  // === QA 훅(run 테스트 메서드가 호출 — 조건 무시 강제 진행) ===
  testForceLord(): void {
    if (this.state === 'enemy_held') this.state = 'breached';
    if (this.state === 'breached') this.spawnLord();
  }
  testForceCounter(): void {
    if (this.state === 'captured') this.startCounterattack();
  }
  testAddFall(n: number): void {
    this.fallGauge += n;
    if (this.state === 'counterattack' && this.fallGauge >= FALL_THRESHOLD) this.fall();
  }
  testForceDefend(): void {
    if (this.state === 'counterattack') {
      this.counterTimer = COUNTER_DURATION;
      this.defend();
    }
  }
}
