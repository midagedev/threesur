import { cellUvOffset } from '../gfx/atlas';
import type { Atlas } from '../gfx/atlas';
import type { InstancedSpriteRenderer, ShadowRenderer } from '../gfx/sprites';
import { dirFromVelocity, SPRITE_WORLD_H } from '../gfx/sprites';
import { SpatialHash } from './collision';
import type { EnemyProjectilePool } from './enemyProjectiles';
import { rng } from '../core/rng';

export const ENEMY_CAP = 1024;
const ANIM_FPS = 8;
const SEP_STRENGTH = 7;
const FLASH_DECAY = 7;
const KB_DECAY = 8; // 넉백 속도 감쇠

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
  readonly alive = new Uint8Array(ENEMY_CAP);
  // 틴트 (엘리트/보스/분팔레트 강조)
  readonly tr = new Float32Array(ENEMY_CAP);
  readonly tg = new Float32Array(ENEMY_CAP);
  readonly tb = new Float32Array(ENEMY_CAP);
  // 넉백 속도
  readonly kbx = new Float32Array(ENEMY_CAP);
  readonly kbz = new Float32Array(ENEMY_CAP);
  // 원거리 AI
  readonly ranged = new Uint8Array(ENEMY_CAP);
  readonly range = new Float32Array(ENEMY_CAP);
  readonly atkCd = new Float32Array(ENEMY_CAP);
  readonly atkTimer = new Float32Array(ENEMY_CAP);
  readonly projDamage = new Float32Array(ENEMY_CAP);
  readonly projSpeed = new Float32Array(ENEMY_CAP);
  readonly projHoming = new Uint8Array(ENEMY_CAP);
  // 특수 개체
  readonly elite = new Uint8Array(ENEMY_CAP);
  readonly boss = new Uint8Array(ENEMY_CAP);
  readonly controlled = new Uint8Array(ENEMY_CAP); // 보스: 외부에서 위치 제어
  readonly stun = new Float32Array(ENEMY_CAP); // 스턴 잔여 시간(장비 무쌍) — 이동/발사 정지
  readonly flee = new Uint8Array(ENEMY_CAP); // 1이면 플레이어 반대로 도주(보급 마차)
  readonly cart = new Uint8Array(ENEMY_CAP); // 1이면 보급 마차(처치 시 골드 대량+보물)
  readonly labels: (string | null)[] = new Array(ENEMY_CAP).fill(null);

  // 엘리트/보스 인덱스(이름표/특수 처리용). 죽은 항목은 지연 제거.
  readonly specials: number[] = [];

  private readonly free = new Int32Array(ENEMY_CAP);
  private freeTop = 0;
  aliveCount = 0;

  private readonly cand: number[] = [];
  private readonly uv = { u: 0, v: 0 };

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
    this.tr[i] = 1;
    this.tg[i] = 1;
    this.tb[i] = 1;
    this.kbx[i] = 0;
    this.kbz[i] = 0;
    this.ranged[i] = 0;
    this.atkTimer[i] = 0.5 + Math.random();
    this.elite[i] = 0;
    this.boss[i] = 0;
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
  }

  // 대미지 적용. 사망 시 true.
  damageAt(i: number, dmg: number): boolean {
    this.hp[i] -= dmg;
    this.flash[i] = 1;
    return this.hp[i] <= 0;
  }

  // 넉백 임펄스 (무기 판정에서 호출).
  push(i: number, dirX: number, dirZ: number, strength: number): void {
    this.kbx[i] += dirX * strength;
    this.kbz[i] += dirZ * strength;
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
  ): void {
    const cand = this.cand;
    for (let i = 0; i < ENEMY_CAP; i++) {
      if (this.alive[i] === 0) continue;

      // 플래시 감쇠 (항상)
      if (this.flash[i] > 0) {
        this.flash[i] -= dt * FLASH_DECAY;
        if (this.flash[i] < 0) this.flash[i] = 0;
      }

      const xi = this.x[i];
      const zi = this.z[i];
      let dx = px - xi;
      let dz = pz - zi;
      const dist = Math.hypot(dx, dz) || 1;
      dx /= dist;
      dz /= dist;

      // 보스: 위치는 외부 제어. 애니만 갱신.
      if (this.controlled[i] === 1) {
        this.dir[i] = dirFromVelocity(dx, dz, this.dir[i]);
        this.animTime[i] += dt;
        this.frame[i] = (((this.animTime[i] * ANIM_FPS) | 0) % 4) as number;
        continue;
      }

      // 스턴(장비 무쌍): 이동/발사 정지, 넉백만 감쇠 적용.
      if (this.stun[i] > 0) {
        this.stun[i] -= dt;
        this.x[i] = xi + this.kbx[i] * dt;
        this.z[i] = zi + this.kbz[i] * dt;
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
        this.x[i] = xi - dx * sp * dt;
        this.z[i] = zi - dz * sp * dt;
        this.dir[i] = dirFromVelocity(-dx, -dz, this.dir[i]);
        this.animTime[i] += dt;
        this.frame[i] = (((this.animTime[i] * ANIM_FPS) | 0) % 4) as number;
        continue;
      }

      // 원거리: 사거리 유지 + 발사
      if (this.ranged[i] === 1) {
        const r = this.range[i];
        if (dist < r * 0.6) {
          vx = -dx * sp; // 너무 가까우면 후퇴
          vz = -dz * sp;
        } else if (dist < r) {
          vx *= 0.15; // 사거리 안이면 거의 정지
          vz *= 0.15;
        }
        this.atkTimer[i] -= dt;
        if (this.atkTimer[i] <= 0 && dist <= r * 1.15) {
          this.atkTimer[i] = this.atkCd[i];
          const homing = this.projHoming[i] === 1;
          enemyProj.spawn(
            xi,
            zi,
            dx,
            dz,
            this.projSpeed[i],
            this.projDamage[i],
            homing,
            homing ? 1 : 0,
          );
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

      this.x[i] = xi + vx * dt;
      this.z[i] = zi + vz * dt;

      this.dir[i] = dirFromVelocity(vx, vz, this.dir[i]);
      this.animTime[i] += dt;
      this.frame[i] = (((this.animTime[i] * ANIM_FPS) | 0) % 4) as number;
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
        this.scale[i],
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
