// 전술 랜드마크 기능화(#50 21.3) — 장식뿐이던 망루·봉화대에 실기능 부여.
// 계약: 상태·판정만 소유하고, 실제 stats 반영·이펙트·어포던스 링은 run 배선으로 위임한다.
//   (player.stats를 직접 만지지 않아 player.ts/run 편집 없이 계약으로 붙는다 — 버프는 run이
//    weapons.update 루프를 snapshot-restore로 감싸 흘려 drift 없이 적용.)
// 성 미접근 런 무영향: 모든 오라·질의는 근접 시에만 참을 반환한다(#46 원칙).
import type { BattlefieldMap } from './battlefieldMap';

// EnemyPool의 필요 최소 뷰(값 결합 회피 — QA에서 목 객체로도 구동 가능).
export interface EnemyView {
  x: Float32Array | number[];
  z: Float32Array | number[];
  alive: Uint8Array | number[];
  controlled?: Uint8Array | number[];
}

// === 망루 望樓 ===
export const WATCHTOWER_R = 11; // "멀리 보고 멀리 친다" 오라 반경(근접)
export const WATCHTOWER_RANGE_MUL = 1.25; // 사거리 +25%
const THREAT_SCAN_R = 46; // 위협 방향 감지 반경(망루 셰브론용)
const THREAT_MIN = 6; // 이보다 가까운 적은 방향 노이즈 — 감지 제외

// === 봉화대 烽火 ===
export const BEACON_IGNITE_R = 4.5; // 점화 상호작용 반경
export const BEACON_DURATION = 12; // 봉화 랠리 지속(초)
export const BEACON_ATTACK_MUL = 1.2; // 랠리 중 공격 +20%
export const BEACON_PULSE_R = 9; // 점화 순간 스태거/넉백 펄스 반경(run이 FX·판정)

// 봉화 점화 상태: run이 소비하는 어포던스 링 색 힌트.
export const BEACON_ARMED = 0;
export const BEACON_IGNITED = 1;
export const BEACON_SPENT = 2;

export interface Vec2 {
  x: number;
  z: number;
}

// 봉화 점화 통지(run이 스태거/넉백 펄스 + 화염 FX 재생).
export interface BeaconIgnition {
  x: number;
  z: number;
  radius: number;
}

export class LandmarkSystem {
  private readonly map: BattlefieldMap;
  // 망루·봉화 위치(map.landmarks에서 이름으로 선별 — 성곽 '본성/성문' 랜드마크는 제외).
  private readonly towerX: number[] = [];
  private readonly towerZ: number[] = [];
  private readonly beaconX: number[] = [];
  private readonly beaconZ: number[] = [];
  private readonly beaconState: number[] = []; // BEACON_ARMED/IGNITED/SPENT
  private readonly beaconTimer: number[] = [];
  private syncedRevision = -1;
  private readonly _dir: Vec2 = { x: 0, z: 0 };
  private readonly _pos: Vec2 = { x: 0, z: 0 };

  constructor(map: BattlefieldMap) {
    this.map = map;
  }

  reset(): void {
    // 봉화 상태 전량 초기화 → 다음 sync가 armed로 다시 채운다.
    this.beaconX.length = 0;
    this.beaconZ.length = 0;
    this.beaconState.length = 0;
    this.beaconTimer.length = 0;
    this.towerX.length = 0;
    this.towerZ.length = 0;
    this.syncedRevision = -1;
    this.sync();
  }

  // map.landmarks에서 망루/봉화 위치를 재수집. 봉화 상태는 위치 근접 매칭으로 이월
  // (rebuild가 랜드마크 배열을 재생성해도 점화 상태가 초기화되지 않게).
  private sync(): void {
    if (this.map.revision === this.syncedRevision) return;
    this.syncedRevision = this.map.revision;
    const oldX = this.beaconX.slice();
    const oldZ = this.beaconZ.slice();
    const oldState = this.beaconState.slice();
    const oldTimer = this.beaconTimer.slice();
    this.towerX.length = 0;
    this.towerZ.length = 0;
    this.beaconX.length = 0;
    this.beaconZ.length = 0;
    this.beaconState.length = 0;
    this.beaconTimer.length = 0;
    for (const lm of this.map.landmarks) {
      if (lm.name.includes('望樓')) {
        this.towerX.push(lm.x);
        this.towerZ.push(lm.z);
      } else if (lm.name.includes('烽火')) {
        this.beaconX.push(lm.x);
        this.beaconZ.push(lm.z);
        let st = BEACON_ARMED;
        let tm = 0;
        for (let k = 0; k < oldX.length; k++) {
          const dx = oldX[k] - lm.x;
          const dz = oldZ[k] - lm.z;
          if (dx * dx + dz * dz < 0.25) {
            st = oldState[k];
            tm = oldTimer[k];
            break;
          }
        }
        this.beaconState.push(st);
        this.beaconTimer.push(tm);
      }
    }
  }

  // 점화된 봉화 타이머 진행 → 소진(run이 매 프레임 호출).
  update(dt: number): void {
    this.sync();
    for (let i = 0; i < this.beaconState.length; i++) {
      if (this.beaconState[i] !== BEACON_IGNITED) continue;
      this.beaconTimer[i] -= dt;
      if (this.beaconTimer[i] <= 0) {
        this.beaconTimer[i] = 0;
        this.beaconState[i] = BEACON_SPENT;
      }
    }
  }

  // 망루 오라 안(사거리 버프 활성)인지.
  watchtowerActive(px: number, pz: number): boolean {
    this.sync();
    const r2 = WATCHTOWER_R * WATCHTOWER_R;
    for (let i = 0; i < this.towerX.length; i++) {
      const dx = px - this.towerX[i];
      const dz = pz - this.towerZ[i];
      if (dx * dx + dz * dz <= r2) return true;
    }
    return false;
  }

  // 주변 위협이 몰린 방향(가중 중심). 셰브론/링 표시용. 감지 적 없으면 null.
  // 단일 최근접이 아니라 근접 가중 합이라 방향이 튀지 않는다.
  nearestThreatDir(px: number, pz: number, enemies: EnemyView): Vec2 | null {
    const n = enemies.alive.length;
    const R = THREAT_SCAN_R;
    const R2 = R * R;
    const MIN2 = THREAT_MIN * THREAT_MIN;
    const ctrl = enemies.controlled;
    let sx = 0;
    let sz = 0;
    let any = false;
    for (let i = 0; i < n; i++) {
      if (enemies.alive[i] === 0) continue;
      if (ctrl && ctrl[i] === 1) continue; // 보스 등 제어 개체 제외
      const dx = enemies.x[i] - px;
      const dz = enemies.z[i] - pz;
      const d2 = dx * dx + dz * dz;
      if (d2 > R2 || d2 < MIN2) continue;
      const d = Math.sqrt(d2);
      const w = 1 - d / R; // 가까울수록 가중
      sx += (dx / d) * w;
      sz += (dz / d) * w;
      any = true;
    }
    if (!any) return null;
    const m = Math.hypot(sx, sz);
    if (m < 1e-4) return null;
    this._dir.x = sx / m;
    this._dir.z = sz / m;
    return this._dir;
  }

  // 근접한 armed 봉화 점화 시도 → 성공 시 12초 랠리 시작 + 펄스 통지 반환.
  tryIgniteBeacon(px: number, pz: number): BeaconIgnition | null {
    this.sync();
    const r2 = BEACON_IGNITE_R * BEACON_IGNITE_R;
    for (let i = 0; i < this.beaconX.length; i++) {
      if (this.beaconState[i] !== BEACON_ARMED) continue;
      const dx = px - this.beaconX[i];
      const dz = pz - this.beaconZ[i];
      if (dx * dx + dz * dz <= r2) {
        this.beaconState[i] = BEACON_IGNITED;
        this.beaconTimer[i] = BEACON_DURATION;
        return { x: this.beaconX[i], z: this.beaconZ[i], radius: BEACON_PULSE_R };
      }
    }
    return null;
  }

  // 봉화 랠리 버프 활성(어느 봉화든 점화 중)인지.
  beaconBuffActive(): boolean {
    for (let i = 0; i < this.beaconState.length; i++) {
      if (this.beaconState[i] === BEACON_IGNITED) return true;
    }
    return false;
  }

  // 어포던스 힌트: reach 내 armed 봉화 위치(있으면 "점화 가능" 링/프롬프트).
  nearestArmedBeacon(px: number, pz: number, reach: number): Vec2 | null {
    this.sync();
    let best: Vec2 | null = null;
    let bestD = reach * reach;
    for (let i = 0; i < this.beaconX.length; i++) {
      if (this.beaconState[i] !== BEACON_ARMED) continue;
      const dx = px - this.beaconX[i];
      const dz = pz - this.beaconZ[i];
      const d = dx * dx + dz * dz;
      if (d < bestD) {
        bestD = d;
        this._pos.x = this.beaconX[i];
        this._pos.z = this.beaconZ[i];
        best = this._pos;
      }
    }
    return best;
  }

  // 랜드마크 좌표의 봉화 상태(어포던스 링 색). 봉화 아니면 -1.
  beaconStateNear(x: number, z: number): number {
    this.sync();
    for (let i = 0; i < this.beaconX.length; i++) {
      const dx = this.beaconX[i] - x;
      const dz = this.beaconZ[i] - z;
      if (dx * dx + dz * dz < 0.25) return this.beaconState[i];
    }
    return -1;
  }

  // === QA/디버그 조회 ===
  get watchtowerCount(): number {
    this.sync();
    return this.towerX.length;
  }
  get beaconCount(): number {
    this.sync();
    return this.beaconX.length;
  }
}
