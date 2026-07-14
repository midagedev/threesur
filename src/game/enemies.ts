import { cellUvOffset } from '../gfx/atlas';
import type { Atlas } from '../gfx/atlas';
import type { InstancedSpriteRenderer, ShadowRenderer } from '../gfx/sprites';
import { dirFromVelocity, SPRITE_WORLD_H } from '../gfx/sprites';
import { SpatialHash } from './collision';
import { EK_ARROW, EK_STRATEGIST, type EnemyProjectilePool } from './enemyProjectiles';
import type { EffectsSystem } from '../gfx/effects';
import type { BattlefieldMap } from './battlefieldMap';
import { rng } from '../core/rng';

export const ENEMY_CAP = 1024;
const ANIM_FPS = 8;
const SEP_STRENGTH = 7;
const FLASH_DECAY = 7;
const KB_DECAY = 8; // 넉백 속도 감쇠
const MAX_CONCURRENT_PATTERNS = 3;

export const BEHAVIOR_NONE = 0;
export const BEHAVIOR_CHARGE = 1;
export const BEHAVIOR_VOLLEY = 2;
export const BEHAVIOR_CASTER = 3;
export const BEHAVIOR_SHIELD = 4;

const PATTERN_IDLE = 0;
const PATTERN_WINDUP = 1;
const PATTERN_ACTION = 2;
const PATTERN_RECOVERY = 3;

// 시트 ID
export const SHEET_SOLDIERS = 0;
export const SHEET_VARIANTS = 1;
export const SHEET_SGRADE = 2;
export const SHEET_APRIORITY = 3;

// 적 풀 (Struct-of-Arrays + freelist). 프레임당 할당 0 목표.
export class EnemyPool {
  readonly x = new Float32Array(ENEMY_CAP);
  readonly z = new Float32Array(ENEMY_CAP);
  readonly hp = new Float32Array(ENEMY_CAP);
  readonly maxHp = new Float32Array(ENEMY_CAP);
  readonly speed = new Float32Array(ENEMY_CAP);
  readonly radius = new Float32Array(ENEMY_CAP);
  readonly damage = new Float32Array(ENEMY_CAP); // 접촉 대미지(초당)
  readonly gemValue = new Float32Array(ENEMY_CAP);
  readonly scale = new Float32Array(ENEMY_CAP); // 스프라이트 월드 높이
  readonly sheetId = new Uint8Array(ENEMY_CAP);
  readonly blockPx = new Float32Array(ENEMY_CAP);
  readonly blockPy = new Float32Array(ENEMY_CAP);
  readonly dir = new Uint8Array(ENEMY_CAP);
  readonly frame = new Uint8Array(ENEMY_CAP);
  readonly animTime = new Float32Array(ENEMY_CAP);
  readonly flash = new Float32Array(ENEMY_CAP);
  readonly hitPunch = new Float32Array(ENEMY_CAP); // 피격 스케일 펀치(1→0, 순간 팽창)
  readonly alive = new Uint8Array(ENEMY_CAP);
  // 틴트 (엘리트/보스/분팔레트 강조)
  readonly tr = new Float32Array(ENEMY_CAP);
  readonly tg = new Float32Array(ENEMY_CAP);
  readonly tb = new Float32Array(ENEMY_CAP);
  // 넉백 속도 + 저항(0=밀림, 0.5 엘리트, 0.9 보스)
  readonly kbx = new Float32Array(ENEMY_CAP);
  readonly kbz = new Float32Array(ENEMY_CAP);
  readonly kbResist = new Float32Array(ENEMY_CAP);
  // 원거리 AI
  readonly ranged = new Uint8Array(ENEMY_CAP);
  readonly range = new Float32Array(ENEMY_CAP);
  readonly atkCd = new Float32Array(ENEMY_CAP);
  readonly atkTimer = new Float32Array(ENEMY_CAP);
  readonly projDamage = new Float32Array(ENEMY_CAP);
  readonly projSpeed = new Float32Array(ENEMY_CAP);
  readonly projHoming = new Uint8Array(ENEMY_CAP);
  // 읽기 쉬운 전투 패턴 FSM: 대기 → 예고 → 공격 → 빈틈.
  readonly behavior = new Uint8Array(ENEMY_CAP);
  readonly patternState = new Uint8Array(ENEMY_CAP);
  readonly patternT = new Float32Array(ENEMY_CAP);
  readonly aimX = new Float32Array(ENEMY_CAP);
  readonly aimZ = new Float32Array(ENEMY_CAP);
  readonly shieldHits = new Uint8Array(ENEMY_CAP);
  // 특수 개체
  readonly elite = new Uint8Array(ENEMY_CAP);
  readonly boss = new Uint8Array(ENEMY_CAP);
  readonly groggy = new Uint8Array(ENEMY_CAP); // 보스 그로기(틈) 상태 — 피해 증폭(#40 14.5)
  readonly controlled = new Uint8Array(ENEMY_CAP); // 보스: 외부에서 위치 제어
  readonly stun = new Float32Array(ENEMY_CAP); // 스턴 잔여 시간(장비 무쌍) — 이동/발사 정지
  readonly flee = new Uint8Array(ENEMY_CAP); // 1이면 플레이어 반대로 도주(보급 마차)
  readonly cart = new Uint8Array(ENEMY_CAP); // 1이면 보급 마차(처치 시 골드 대량+보물)
  readonly labels: (string | null)[] = new Array(ENEMY_CAP).fill(null);
  chargeStarts = 0;
  volleyStarts = 0;
  casterStarts = 0;

  // 엘리트/보스 인덱스(이름표/특수 처리용). 죽은 항목은 지연 제거.
  readonly specials: number[] = [];

  private readonly free = new Int32Array(ENEMY_CAP);
  private freeTop = 0;
  aliveCount = 0;

  private readonly cand: number[] = [];
  private readonly uv = { u: 0, v: 0 };
  private readonly nav = { x: 0, z: 0 };
  private readonly moved = { x: 0, z: 0 };

  constructor() {
    for (let i = 0; i < ENEMY_CAP; i++) this.free[i] = ENEMY_CAP - 1 - i;
    this.freeTop = ENEMY_CAP;
  }

  spawn(
    x: number,
    z: number,
    hp: number,
    speed: number,
    radius: number,
    damage: number,
    gemValue: number,
    worldScale: number,
    sheetId: number,
    blockPx: number,
    blockPy: number,
  ): number {
    if (this.freeTop === 0) return -1;
    const i = this.free[--this.freeTop];
    this.x[i] = x;
    this.z[i] = z;
    this.hp[i] = hp;
    this.maxHp[i] = hp;
    this.speed[i] = speed;
    this.radius[i] = radius;
    this.damage[i] = damage;
    this.gemValue[i] = gemValue;
    this.scale[i] = SPRITE_WORLD_H * worldScale;
    this.sheetId[i] = sheetId;
    this.blockPx[i] = blockPx;
    this.blockPy[i] = blockPy;
    this.dir[i] = 0;
    this.frame[i] = 0;
    this.animTime[i] = Math.random() * 0.5;
    this.flash[i] = 0;
    this.hitPunch[i] = 0;
    this.tr[i] = 1;
    this.tg[i] = 1;
    this.tb[i] = 1;
    this.kbx[i] = 0;
    this.kbz[i] = 0;
    this.kbResist[i] = 0;
    this.ranged[i] = 0;
    this.atkTimer[i] = 0.5 + Math.random();
    this.behavior[i] = BEHAVIOR_NONE;
    this.patternState[i] = PATTERN_IDLE;
    this.patternT[i] = 0.8 + Math.random() * 1.8;
    this.aimX[i] = 0;
    this.aimZ[i] = 1;
    this.shieldHits[i] = 0;
    this.elite[i] = 0;
    this.boss[i] = 0;
    this.groggy[i] = 0;
    this.controlled[i] = 0;
    this.stun[i] = 0;
    this.flee[i] = 0;
    this.cart[i] = 0;
    this.labels[i] = null;
    this.alive[i] = 1;
    this.aliveCount++;
    return i;
  }

  markSpecial(i: number): void {
    this.specials.push(i);
  }

  kill(i: number): void {
    if (this.alive[i] === 0) return;
    this.alive[i] = 0;
    this.labels[i] = null;
    this.free[this.freeTop++] = i;
    this.aliveCount--;
  }

  reset(): void {
    this.alive.fill(0);
    for (let i = 0; i < ENEMY_CAP; i++) {
      this.free[i] = ENEMY_CAP - 1 - i;
      this.labels[i] = null;
    }
    this.freeTop = ENEMY_CAP;
    this.aliveCount = 0;
    this.specials.length = 0;
    this.chargeStarts = 0;
    this.volleyStarts = 0;
    this.casterStarts = 0;
  }

  // 대미지 적용. 사망 시 true.
  damageAt(i: number, dmg: number): boolean {
    if (this.behavior[i] === BEHAVIOR_SHIELD && this.patternState[i] === PATTERN_IDLE) {
      dmg *= 0.55;
      this.shieldHits[i]++;
      if (this.shieldHits[i] >= 3) {
        this.shieldHits[i] = 0;
        this.patternState[i] = PATTERN_RECOVERY;
        this.patternT[i] = 2.4;
      }
    }
    this.hp[i] -= dmg;
    this.flash[i] = 1;
    this.hitPunch[i] = 1; // 타격감: 순간 스케일 팽창
    return this.hp[i] <= 0;
  }

  // 넉백 임펄스 (무기 판정에서 호출).
  // 넉백 임펄스(기술 판정에서 호출). 저항 반영, 강타는 짧은 스턴으로 무게감.
  push(i: number, dirX: number, dirZ: number, strength: number): void {
    if (this.controlled[i] === 1) return; // 보스: 위치 외부 제어 → 완전 저항
    const s = strength * (1 - this.kbResist[i]);
    if (s <= 0) return;
    this.kbx[i] += dirX * s;
    this.kbz[i] += dirZ * s;
    if (s > 4 && this.stun[i] < 0.14) this.stun[i] = 0.14; // 강한 밀침 → 0.14s 스턴
  }

  // 랜덤 살아있는 적 인덱스 (천뢰 타게팅). 없으면 -1.
  randomAlive(): number {
    if (this.aliveCount === 0) return -1;
    let idx = (rng.next() * ENEMY_CAP) | 0;
    for (let k = 0; k < ENEMY_CAP; k++) {
      if (this.alive[idx] === 1 && this.controlled[idx] === 0) return idx;
      idx = (idx + 1) % ENEMY_CAP;
    }
    return -1;
  }

  countInsideWalls(map: BattlefieldMap): number {
    let count = 0;
    for (let i = 0; i < ENEMY_CAP; i++) {
      if (this.alive[i] && map.circleBlocked(this.x[i], this.z[i], this.radius[i] * 0.9)) count++;
    }
    return count;
  }

  insertAll(hash: SpatialHash): void {
    const alive = this.alive;
    for (let i = 0; i < ENEMY_CAP; i++) {
      if (alive[i]) hash.insert(i, this.x[i], this.z[i]);
    }
  }

  // 플레이어 추적 + 적끼리 soft 분리 + 원거리 발사 + 애니메이션/플래시.
  update(
    dt: number,
    px: number,
    pz: number,
    hash: SpatialHash,
    enemyProj: EnemyProjectilePool,
    effects: EffectsSystem,
    map: BattlefieldMap,
  ): void {
    const cand = this.cand;
    let activePatterns = 0;
    for (let i = 0; i < ENEMY_CAP; i++) {
      if (this.alive[i] && (this.patternState[i] === PATTERN_WINDUP || this.patternState[i] === PATTERN_ACTION)) {
        activePatterns++;
      }
    }
    for (let i = 0; i < ENEMY_CAP; i++) {
      if (this.alive[i] === 0) continue;

      // 플래시 감쇠 (항상)
      if (this.flash[i] > 0) {
        this.flash[i] -= dt * FLASH_DECAY;
        if (this.flash[i] < 0) this.flash[i] = 0;
      }
      // 피격 스케일 펀치 감쇠 (~0.11s)
      if (this.hitPunch[i] > 0) {
        this.hitPunch[i] -= dt * 9;
        if (this.hitPunch[i] < 0) this.hitPunch[i] = 0;
      }

      const xi = this.x[i];
      const zi = this.z[i];
      const targetDx = px - xi;
      const targetDz = pz - zi;
      const dist = Math.hypot(targetDx, targetDz) || 1;
      const aimDx = targetDx / dist;
      const aimDz = targetDz / dist;
      map.flowDirection(xi, zi, px, pz, this.nav);
      let dx = this.nav.x;
      let dz = this.nav.z;

      // 보스: 위치는 외부 제어. 애니만 갱신.
      if (this.controlled[i] === 1) {
        this.dir[i] = dirFromVelocity(aimDx, aimDz, this.dir[i]);
        this.animTime[i] += dt;
        this.frame[i] = (((this.animTime[i] * ANIM_FPS) | 0) % 4) as number;
        continue;
      }

      // 스턴(장비 무쌍): 이동/발사 정지, 넉백만 감쇠 적용.
      if (this.stun[i] > 0) {
        this.stun[i] -= dt;
        map.resolveMovement(xi, zi, xi + this.kbx[i] * dt, zi + this.kbz[i] * dt, this.radius[i], this.moved);
        this.x[i] = this.moved.x;
        this.z[i] = this.moved.z;
        const kds = Math.max(0, 1 - KB_DECAY * dt);
        this.kbx[i] *= kds;
        this.kbz[i] *= kds;
        continue;
      }

      const sp = this.speed[i];
      let vx = dx * sp;
      let vz = dz * sp;
      // 도주(보급 마차): 플레이어 반대로 빠르게. 추적/발사 로직 스킵.
      if (this.flee[i] === 1) {
        map.resolveMovement(xi, zi, xi - dx * sp * dt, zi - dz * sp * dt, this.radius[i], this.moved);
        this.x[i] = this.moved.x;
        this.z[i] = this.moved.z;
        this.dir[i] = dirFromVelocity(-dx, -dz, this.dir[i]);
        this.animTime[i] += dt;
        this.frame[i] = (((this.animTime[i] * ANIM_FPS) | 0) % 4) as number;
        continue;
      }

      const behavior = this.behavior[i];
      const state = this.patternState[i];

      // 창병/돌격병: 위치를 고정해 예고한 뒤 직선으로 돌진하고 확실한 빈틈을 남긴다.
      if (behavior === BEHAVIOR_CHARGE) {
        this.patternT[i] -= dt;
        if (state === PATTERN_IDLE) {
          if (this.patternT[i] <= 0 && dist >= 4 && dist <= 12 && activePatterns < MAX_CONCURRENT_PATTERNS) {
            this.patternState[i] = PATTERN_WINDUP;
            this.patternT[i] = 0.68;
            this.aimX[i] = aimDx;
            this.aimZ[i] = aimDz;
            effects.spawnRing(xi, zi, 2.8, 2.5, 0.35, 0.18, 0.55);
            effects.spawnThrust(xi, zi, aimDx, aimDz, 8.5, 0.24, 2.5, 0.28, 0.14, 0.68);
            this.flash[i] = 0.28;
            this.chargeStarts++;
            activePatterns++;
          }
        } else if (state === PATTERN_WINDUP) {
          vx = 0;
          vz = 0;
          this.flash[i] = Math.max(this.flash[i], 0.16);
          if (this.patternT[i] <= 0) {
            this.patternState[i] = PATTERN_ACTION;
            this.patternT[i] = 0.42;
          }
        } else if (state === PATTERN_ACTION) {
          vx = this.aimX[i] * 10.5;
          vz = this.aimZ[i] * 10.5;
          if (this.patternT[i] <= 0) {
            this.patternState[i] = PATTERN_RECOVERY;
            this.patternT[i] = 0.95;
          }
        } else {
          vx *= 0.12;
          vz *= 0.12;
          if (this.patternT[i] <= 0) {
            this.patternState[i] = PATTERN_IDLE;
            this.patternT[i] = 2.8 + rng.next() * 1.8;
          }
        }
      }

      // 방패병: 정면 개념을 과하게 만들지 않고, 3타로 깨지는 짧은 방어/그로기 리듬만 제공한다.
      if (behavior === BEHAVIOR_SHIELD && state === PATTERN_RECOVERY) {
        this.patternT[i] -= dt;
        vx *= 0.35;
        vz *= 0.35;
        if (this.patternT[i] <= 0) this.patternState[i] = PATTERN_IDLE;
      }

      // 원거리: 사거리 유지 + 예고 후 부채꼴 일제사격/책사 마탄.
      if (this.ranged[i] === 1) {
        const r = this.range[i];
        if (dist < r * 0.6) {
          vx = -dx * sp; // 너무 가까우면 후퇴
          vz = -dz * sp;
        } else if (dist < r) {
          vx *= 0.15; // 사거리 안이면 거의 정지
          vz *= 0.15;
        }
        if (state === PATTERN_IDLE) {
          this.atkTimer[i] -= dt;
          if (this.atkTimer[i] <= 0 && dist <= r * 1.15 && activePatterns < MAX_CONCURRENT_PATTERNS) {
            this.patternState[i] = PATTERN_WINDUP;
            this.patternT[i] = behavior === BEHAVIOR_CASTER ? 0.92 : 0.72;
            this.aimX[i] = aimDx;
            this.aimZ[i] = aimDz;
            if (behavior === BEHAVIOR_CASTER) {
              effects.spawnRing(xi, zi, 3.4, 1.5, 0.45, 2.5, 0.75);
              this.casterStarts++;
            } else {
              // 발사 예고(#18.1): 마젠타 차지 링 + 조준 방향 thrust (아군 텔레그래프와 색 구분)
              effects.spawnRing(xi, zi, 2.8, 1.9, 0.4, 2.3, 0.55);
              effects.spawnThrust(xi, zi, aimDx, aimDz, 10.5, 0.14, 1.9, 0.4, 2.3, 0.72);
              this.volleyStarts++;
            }
            activePatterns++;
          }
        } else if (state === PATTERN_WINDUP) {
          this.patternT[i] -= dt;
          vx *= 0.05;
          vz *= 0.05;
          // 차지 점증(#18.1): 발사가 가까울수록 스프라이트 플래시 강해짐 + 조준선 알파 점증.
          const wd = behavior === BEHAVIOR_CASTER ? 0.92 : 0.72;
          const charge = Math.min(1, Math.max(0, 1 - this.patternT[i] / wd));
          this.flash[i] = Math.max(this.flash[i], 0.1 + charge * 0.5);
          // 궁수(직선탄)만 조준선 — 회피 판단 창. 책사(유도)는 링 예고로 충분.
          if (behavior !== BEHAVIOR_CASTER) enemyProj.aimLine(xi, zi, px, pz, charge);
          if (this.patternT[i] <= 0) {
            this.fireFan(i, xi, zi, enemyProj, behavior === BEHAVIOR_CASTER);
            this.patternState[i] = PATTERN_RECOVERY;
            this.patternT[i] = behavior === BEHAVIOR_CASTER ? 0.85 : 0.6;
          }
        } else if (state === PATTERN_RECOVERY) {
          this.patternT[i] -= dt;
          vx *= 0.2;
          vz *= 0.2;
          if (this.patternT[i] <= 0) {
            this.patternState[i] = PATTERN_IDLE;
            this.atkTimer[i] = this.atkCd[i];
          }
        }
      }

      // 분리: 근처 적을 밀어냄
      const ri = this.radius[i];
      const sepR = ri + 0.9;
      const n = hash.query(xi, zi, sepR, cand);
      let sxx = 0;
      let szz = 0;
      for (let c = 0; c < n; c++) {
        const j = cand[c];
        if (j === i) continue;
        const ox = xi - this.x[j];
        const oz = zi - this.z[j];
        const dd = ox * ox + oz * oz;
        const minD = ri + this.radius[j];
        if (dd > 0 && dd < minD * minD) {
          const d2 = Math.sqrt(dd);
          const push = (minD - d2) / minD;
          sxx += (ox / d2) * push;
          szz += (oz / d2) * push;
        }
      }
      vx += sxx * SEP_STRENGTH;
      vz += szz * SEP_STRENGTH;

      // 넉백 적용 + 감쇠
      vx += this.kbx[i];
      vz += this.kbz[i];
      const kd = Math.max(0, 1 - KB_DECAY * dt);
      this.kbx[i] *= kd;
      this.kbz[i] *= kd;

      const hitWall = map.resolveMovement(xi, zi, xi + vx * dt, zi + vz * dt, ri, this.moved);
      this.x[i] = this.moved.x;
      this.z[i] = this.moved.z;
      if (hitWall && behavior === BEHAVIOR_CHARGE && this.patternState[i] === PATTERN_ACTION) {
        this.patternState[i] = PATTERN_RECOVERY;
        this.patternT[i] = 0.95;
        effects.spawnRing(this.x[i], this.z[i], 1.8, 2.0, 0.45, 0.18, 0.25);
      }

      this.dir[i] = dirFromVelocity(vx, vz, this.dir[i]);
      this.animTime[i] += dt;
      this.frame[i] = (((this.animTime[i] * ANIM_FPS) | 0) % 4) as number;
    }
  }

  private fireFan(i: number, x: number, z: number, enemyProj: EnemyProjectilePool, homing: boolean): void {
    const base = Math.atan2(this.aimZ[i], this.aimX[i]);
    const spread = homing ? 0.23 : 0.16;
    // 탄속 -12%(#18.1): 예고를 보고 움직이면 피해지는 수준으로 완화(밀도 불변).
    const speed = this.projSpeed[i] * 0.88;
    for (let k = -1; k <= 1; k++) {
      const a = base + spread * k;
      enemyProj.spawn(
        x, z, Math.cos(a), Math.sin(a), speed, this.projDamage[i], homing,
        homing ? EK_STRATEGIST : EK_ARROW,
      );
    }
  }

  // 시트별 렌더러 + 그림자에 인스턴스 데이터 기록.
  render(
    atlas: Atlas,
    soldiersR: InstancedSpriteRenderer,
    variantsR: InstancedSpriteRenderer,
    sgradeR: InstancedSpriteRenderer,
    apriorityR: InstancedSpriteRenderer,
    shadowR: ShadowRenderer,
  ): void {
    soldiersR.begin();
    variantsR.begin();
    sgradeR.begin();
    apriorityR.begin();
    const uv = this.uv;
    for (let i = 0; i < ENEMY_CAP; i++) {
      if (this.alive[i] === 0) continue;
      const sid = this.sheetId[i];
      let sheet;
      let r;
      if (sid === SHEET_VARIANTS) {
        sheet = atlas.variants;
        r = variantsR;
      } else if (sid === SHEET_SGRADE) {
        sheet = atlas.sgrade;
        r = sgradeR;
      } else if (sid === SHEET_APRIORITY) {
        sheet = atlas.apriority;
        r = apriorityR;
      } else {
        sheet = atlas.soldiers;
        r = soldiersR;
      }
      cellUvOffset(sheet, this.blockPx[i], this.blockPy[i], this.dir[i], this.frame[i], uv);
      r.push(
        this.x[i],
        this.z[i],
        this.scale[i] * (1 + 0.18 * this.hitPunch[i]),
        uv.u,
        uv.v,
        this.flash[i],
        this.tr[i],
        this.tg[i],
        this.tb[i],
      );
      shadowR.push(this.x[i], this.z[i], this.radius[i] * 1.5);
    }
    soldiersR.end();
    variantsR.end();
    sgradeR.end();
    apriorityR.end();
  }
}
