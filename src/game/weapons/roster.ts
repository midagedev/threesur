import type { Weapon, WeaponContext } from './types';
import { distToSegmentSq } from '../collision';
import {
  PK_ARROW,
  PK_TALISMAN,
  PK_SLASHWAVE,
  PK_CAVALRY,
  PK_FIRE_ARROW,
} from '../projectiles';
import { ATTACK_HALBERD } from '../../gfx/attackSprites';

// 무기 공용 헬퍼 -----------------------------------------------------------

// 선분(캡슐) 판정 + 대미지 + 선택적 넉백(플레이어 기준 바깥 방향).
function capsuleHit(
  ctx: WeaponContext,
  ax: number,
  az: number,
  bx: number,
  bz: number,
  width: number,
  damage: number,
  knockback: number,
): void {
  const en = ctx.enemies;
  const mx = (ax + bx) * 0.5;
  const mz = (az + bz) * 0.5;
  const qr = Math.hypot(bx - ax, bz - az) * 0.5 + width + 1.2;
  const n = ctx.hash.query(mx, mz, qr, ctx.scratch);
  for (let c = 0; c < n; c++) {
    const j = ctx.scratch[c];
    if (en.alive[j] === 0) continue;
    const hitR = width + en.radius[j];
    if (distToSegmentSq(en.x[j], en.z[j], ax, az, bx, bz) > hitR * hitR) continue;
    const died = en.damageAt(j, damage);
    ctx.damageText.spawn(damage, en.x[j], en.scale[j] * 0.7, en.z[j], false);
    if (knockback > 0) {
      const dx = en.x[j] - ctx.px;
      const dz = en.z[j] - ctx.pz;
      const d = Math.hypot(dx, dz) || 1;
      en.push(j, dx / d, dz / d, knockback);
      if (knockback >= 5 && !died && ctx.rng.next() < 0.4) ctx.particles.dust(en.x[j], en.z[j]);
    }
    if (died) ctx.onKill(j);
  }
}

// 부채꼴(원뿔) 판정 + 대미지 + 넉백. halfAngle 반각(라디안), PI면 360°.
function arcHit(
  ctx: WeaponContext,
  cx: number,
  cz: number,
  dirX: number,
  dirZ: number,
  radius: number,
  halfAngle: number,
  damage: number,
  knockback: number,
): void {
  const en = ctx.enemies;
  const cosHalf = Math.cos(halfAngle);
  const n = ctx.hash.query(cx, cz, radius + 1.0, ctx.scratch);
  for (let c = 0; c < n; c++) {
    const j = ctx.scratch[c];
    if (en.alive[j] === 0) continue;
    const dx = en.x[j] - cx;
    const dz = en.z[j] - cz;
    const d2 = dx * dx + dz * dz;
    const rr = radius + en.radius[j];
    if (d2 > rr * rr) continue;
    const d = Math.sqrt(d2) || 1;
    if (halfAngle < 3.13) {
      const dot = (dx / d) * dirX + (dz / d) * dirZ;
      if (dot < cosHalf) continue;
    }
    const died = en.damageAt(j, damage);
    ctx.damageText.spawn(damage, en.x[j], en.scale[j] * 0.7, en.z[j], false);
    if (knockback > 0) {
      en.push(j, dx / d, dz / d, knockback);
      if (knockback >= 5 && !died && ctx.rng.next() < 0.35) ctx.particles.dust(en.x[j], en.z[j]);
    }
    if (died) ctx.onKill(j);
  }
}

// 반경 내 전체 판정(연쇄/AoE용). 콜백에 인덱스 전달.
function forEachInRadius(ctx: WeaponContext, cx: number, cz: number, radius: number, fn: (j: number) => void): void {
  const en = ctx.enemies;
  const n = ctx.hash.query(cx, cz, radius, ctx.scratch);
  for (let c = 0; c < n; c++) {
    const j = ctx.scratch[c];
    if (en.alive[j] === 0) continue;
    const dx = en.x[j] - cx;
    const dz = en.z[j] - cz;
    const rr = radius + en.radius[j];
    if (dx * dx + dz * dz <= rr * rr) fn(j);
  }
}

function dmg(ctx: WeaponContext, base: number, level: number, per: number): number {
  return base * ctx.stats.damageMul * (1 + (level - 1) * per);
}

// 무기 base -----------------------------------------------------------------

abstract class TimedWeapon implements Weapon {
  abstract readonly id: string;
  level = 1;
  protected timer = 0;
  protected abstract baseCooldown: number;
  protected cooldownPerLevel = 0; // 레벨당 쿨다운 감소 비율

  update(ctx: WeaponContext): void {
    this.timer -= ctx.dt;
    if (this.timer > 0) return;
    const cd = this.baseCooldown * ctx.stats.cooldownMul * (1 - (this.level - 1) * this.cooldownPerLevel);
    this.timer += Math.max(0.05, cd);
    if (this.timer < 0) this.timer = 0;
    ctx.onAttack(this.id, ctx.aimX, ctx.aimZ);
    this.fire(ctx);
  }

  protected abstract fire(ctx: WeaponContext): void;
}

// 1. 용담창 — 전방 관통 찌르기
export class SpearWeapon extends TimedWeapon {
  readonly id = 'spear';
  protected baseCooldown = 1.1;
  protected fire(ctx: WeaponContext): void {
    const length = (5.0 + (this.level - 1) * 0.6) * ctx.stats.rangeMul;
    const width = 0.72;
    const d = dmg(ctx, 8, this.level, 0.15);
    const bx = ctx.px + ctx.aimX * length;
    const bz = ctx.pz + ctx.aimZ * length;
    capsuleHit(ctx, ctx.px, ctx.pz, bx, bz, width, d, 3);
    ctx.effects.spawnThrust(ctx.px, ctx.pz, ctx.aimX, ctx.aimZ, length, width * 2.2, 0.7, 0.95, 1.9);
  }
}

// 2. 청룡언월도 — 전방 120° 부채꼴 슬래시
export class GuandaoWeapon extends TimedWeapon {
  readonly id = 'guandao';
  protected baseCooldown = 1.45;
  protected fire(ctx: WeaponContext): void {
    const radius = (4.4 + (this.level - 1) * 0.35) * ctx.stats.areaMul;
    const half = 1.05 + (this.level - 1) * 0.02; // ~120°
    const d = dmg(ctx, 15, this.level, 0.18);
    arcHit(ctx, ctx.px, ctx.pz, ctx.aimX, ctx.aimZ, radius, half, d, 5);
    ctx.effects.spawnSlashArc(ctx.px, ctx.pz, ctx.aimX, ctx.aimZ, radius, half, 0.6, 2.2, 1.1);
  }
}

// 3. 장팔사모 — 전+후 동시 찌르기, 강한 넉백
export class ZhangbaWeapon extends TimedWeapon {
  readonly id = 'zhangba';
  protected baseCooldown = 1.15;
  protected fire(ctx: WeaponContext): void {
    const length = (4.6 + (this.level - 1) * 0.4) * ctx.stats.rangeMul;
    const width = 0.85;
    const d = dmg(ctx, 10, this.level, 0.15);
    const fx = ctx.aimX;
    const fz = ctx.aimZ;
    capsuleHit(ctx, ctx.px, ctx.pz, ctx.px + fx * length, ctx.pz + fz * length, width, d, 9);
    capsuleHit(ctx, ctx.px, ctx.pz, ctx.px - fx * length, ctx.pz - fz * length, width, d, 9);
    ctx.effects.spawnDoubleThrust(ctx.px, ctx.pz, fx, fz, length, width * 2.2, 1.2, 1.0, 0.7);
  }
}

// 4. 백우선 — 호밍 부적
export class BaiyuWeapon extends TimedWeapon {
  readonly id = 'baiyu';
  protected baseCooldown = 1.6;
  protected fire(ctx: WeaponContext): void {
    const count = 2 + Math.floor((this.level - 1) / 2) + ctx.stats.projectileBonus;
    const d = dmg(ctx, 9, this.level, 0.14);
    const speed = 8.5 * ctx.stats.rangeMul;
    const pierce = 1 + Math.floor(this.level / 3);
    const base = Math.atan2(ctx.aimZ, ctx.aimX);
    for (let k = 0; k < count; k++) {
      const a = base + (k - (count - 1) * 0.5) * 0.24;
      ctx.projectiles.spawn(
        ctx.px, ctx.pz, Math.cos(a), Math.sin(a), speed, d, 0.5, pierce, 2.6,
        PK_TALISMAN, 1.7, 1.7, 2.1, 1.1, 0.9, true, 7,
      );
    }
  }
}

// 5. 제갈연노 — 최근접 적 자동 연사 화살
export class CrossbowWeapon extends TimedWeapon {
  readonly id = 'crossbow';
  protected baseCooldown = 0.55;
  protected cooldownPerLevel = 0.04;
  protected fire(ctx: WeaponContext): void {
    const dirX = ctx.aimX;
    const dirZ = ctx.aimZ;
    const shots = 1 + ctx.stats.projectileBonus;
    const d = dmg(ctx, 7, this.level, 0.12);
    const speed = 15 * ctx.stats.rangeMul;
    const pierce = Math.floor((this.level - 1) / 2);
    for (let k = 0; k < shots; k++) {
      const spread = (k - (shots - 1) / 2) * 0.12;
      const a = Math.atan2(dirZ, dirX) + spread;
      ctx.projectiles.spawn(
        ctx.px, ctx.pz, Math.cos(a), Math.sin(a), speed, d, 0.45, pierce, 1.6,
        PK_ARROW, 2.0, 1.5, 0.7, 1.5, 0.55,
      );
    }
  }
}

// 6. 화계 — 발밑 화염 장판
export class FireWeapon extends TimedWeapon {
  readonly id = 'fire';
  protected baseCooldown = 3.0;
  protected fire(ctx: WeaponContext): void {
    const radius = (2.2 + (this.level - 1) * 0.28) * ctx.stats.areaMul;
    const life = 3 + (this.level - 1) * 0.3;
    const dps = 10 * ctx.stats.damageMul * (1 + (this.level - 1) * 0.15);
    ctx.zones.spawn(ctx.px, ctx.pz, radius, life, dps, 2.4, 0.9, 0.25);
  }
}

// 7. 천뢰 — 랜덤 적 머리 위 낙뢰
export class ThunderWeapon extends TimedWeapon {
  readonly id = 'thunder';
  protected baseCooldown = 2.6;
  protected cooldownPerLevel = 0.03;
  protected fire(ctx: WeaponContext): void {
    const count = 2 + this.level + ctx.stats.projectileBonus;
    const d = dmg(ctx, 20, this.level, 0.15);
    for (let k = 0; k < count; k++) {
      const t = ctx.enemies.randomAlive();
      if (t < 0) break;
      const x = ctx.enemies.x[t];
      const z = ctx.enemies.z[t];
      ctx.effects.spawnLightning(x, z);
      forEachInRadius(ctx, x, z, 2.0, (j) => {
        const died = ctx.enemies.damageAt(j, d);
        ctx.damageText.spawn(d, ctx.enemies.x[j], ctx.enemies.scale[j] * 0.7, ctx.enemies.z[j], true);
        if (died) ctx.onKill(j);
      });
    }
  }
}

// 8. 팔진도 — 주위 회전 태극 오브
export class OrbitWeapon implements Weapon {
  readonly id = 'orbit';
  level = 1;
  private built = -1;

  private count(): number {
    return 2 + Math.floor((this.level - 1) / 2);
  }

  update(ctx: WeaponContext): void {
    const want = this.count() + ctx.stats.projectileBonus;
    const radius = 3.2;
    const angVel = 2.2 + (this.level - 1) * 0.15;
    const d = 8 * ctx.stats.damageMul * (1 + (this.level - 1) * 0.16);
    if (want !== this.built) {
      ctx.projectiles.clearOrbits();
      for (let k = 0; k < want; k++) {
        const a = (k / want) * Math.PI * 2;
        ctx.projectiles.spawnOrbit(a, radius, angVel, d, 1.6, 1.8, 2.3, 1.0);
      }
      this.built = want;
    }
    ctx.projectiles.refreshOrbits(d, radius, angVel);
  }
}

// 9. 방천화극 — 360° 회전 휩쓸기
export class HalberdWeapon extends TimedWeapon {
  readonly id = 'halberd';
  protected baseCooldown = 1.5;
  protected fire(ctx: WeaponContext): void {
    const radius = (3.4 + (this.level - 1) * 0.3) * ctx.stats.areaMul;
    const d = dmg(ctx, 12, this.level, 0.16);
    arcHit(ctx, ctx.px, ctx.pz, ctx.aimX, ctx.aimZ, radius, Math.PI, d, 6);
    ctx.effects.spawnSlashArc(
      ctx.px, ctx.pz, ctx.aimX, ctx.aimZ, radius, Math.PI, 2.2, 0.7, 0.5, 0.28, ATTACK_HALBERD,
    );
  }
}

// 10. 서량철기 — 화면 가로지르는 기마 돌격
export class CavalryWeapon extends TimedWeapon {
  readonly id = 'cavalry';
  protected baseCooldown = 4.0;
  protected fire(ctx: WeaponContext): void {
    const count = 1 + Math.floor(this.level / 2) + ctx.stats.projectileBonus;
    const d = dmg(ctx, 18, this.level, 0.15);
    const speed = 16;
    for (let k = 0; k < count; k++) {
      const a = ctx.rng.next() * Math.PI * 2;
      const dirX = Math.cos(a);
      const dirZ = Math.sin(a);
      // 화면 밖(플레이어 반대쪽 뒤편)에서 시작해 관통하며 가로지름
      const sx = ctx.px - dirX * 22;
      const sz = ctx.pz - dirZ * 22;
      ctx.projectiles.spawn(
        sx, sz, dirX, dirZ, speed, d, 1.3, 9999, 3.0,
        PK_CAVALRY, 2.0, 1.4, 0.9, 4.5, 1.7, false, 0, true,
      );
    }
  }
}

// 진화 무기 -----------------------------------------------------------------

// 참마검 (언월도 진화) — 회전 참격파 발사 + 강화 부채꼴
export class ZhanmaWeapon extends TimedWeapon {
  readonly id = 'zhanma';
  level = 8;
  protected baseCooldown = 1.0;
  protected fire(ctx: WeaponContext): void {
    const radius = 5.5 * ctx.stats.areaMul;
    arcHit(ctx, ctx.px, ctx.pz, ctx.aimX, ctx.aimZ, radius, 1.2, dmg(ctx, 26, 8, 0.16), 4);
    ctx.effects.spawnSlashArc(ctx.px, ctx.pz, ctx.aimX, ctx.aimZ, radius, 1.2, 0.6, 2.4, 1.2);
    // 전방으로 참격파 3발
    const d = dmg(ctx, 22, 8, 0.16);
    const base = Math.atan2(ctx.aimZ, ctx.aimX);
    for (let k = -1; k <= 1; k++) {
      const a = base + k * 0.28;
      ctx.projectiles.spawn(
        ctx.px, ctx.pz, Math.cos(a), Math.sin(a), 12, d, 1.4, 6, 1.4,
        PK_SLASHWAVE, 0.7, 2.4, 1.2, 3.0, 2.2,
      );
    }
  }
}

// 팔문금쇄진 (백우선 진화) — 관통 부적 폭풍
export class BamenWeapon extends TimedWeapon {
  readonly id = 'bamen';
  level = 8;
  protected baseCooldown = 1.3;
  protected fire(ctx: WeaponContext): void {
    const count = 8 + ctx.stats.projectileBonus;
    const d = dmg(ctx, 12, 8, 0.14);
    const speed = 9 * ctx.stats.rangeMul;
    const base = ctx.rng.next() * Math.PI * 2;
    for (let k = 0; k < count; k++) {
      const a = base + (k / count) * Math.PI * 2;
      ctx.projectiles.spawn(
        ctx.px, ctx.pz, Math.cos(a), Math.sin(a), speed, d, 0.55, 6, 3.0,
        PK_TALISMAN, 1.6, 1.9, 2.4, 1.2, 1.0, true, 5, // 아군 청백 규약(#15)
      );
    }
  }
}

// 적벽업화 (화계 진화) — 전진하는 화염 해일
export class ChibiWeapon extends TimedWeapon {
  readonly id = 'chibi';
  level = 8;
  protected baseCooldown = 2.4;
  protected fire(ctx: WeaponContext): void {
    const dps = 18 * ctx.stats.damageMul;
    const fx = ctx.aimX;
    const fz = ctx.aimZ;
    // 전방으로 마칭하는 화염 존 3연
    for (let k = 0; k < 3; k++) {
      const off = 1.5 + k * 2.2;
      ctx.zones.spawn(
        ctx.px + fx * off, ctx.pz + fz * off,
        (2.6 + k * 0.4) * ctx.stats.areaMul, 2.6, dps,
        2.6, 0.7, 0.2, fx * 4.5, fz * 4.5,
      );
    }
  }
}

// 천벌뇌정 (천뢰 진화) — 적간 연쇄 번개
export class TianfaWeapon extends TimedWeapon {
  readonly id = 'tianfa';
  level = 8;
  protected baseCooldown = 2.0;
  private readonly hitBuf = new Int32Array(8); // 방문 적(연쇄 중복 방지), 재사용
  protected fire(ctx: WeaponContext): void {
    const d = dmg(ctx, 24, 8, 0.15);
    const strikes = 3 + ctx.stats.projectileBonus;
    const hit = this.hitBuf;
    for (let s = 0; s < strikes; s++) {
      let t = ctx.enemies.randomAlive();
      if (t < 0) break;
      ctx.effects.spawnLightning(ctx.enemies.x[t], ctx.enemies.z[t]);
      // 연쇄: 가장 가까운 다음 적으로 최대 6회
      let px = ctx.enemies.x[t];
      let pz = ctx.enemies.z[t];
      hit[0] = t;
      let hitN = 1;
      for (let c = 0; c < 6; c++) {
        const en = ctx.enemies;
        const died = en.damageAt(t, d);
        ctx.damageText.spawn(d, en.x[t], en.scale[t] * 0.7, en.z[t], true);
        if (died) ctx.onKill(t);
        // 다음 대상: 반경 6 이내 미방문 최근접 (scratch를 쿼리 버퍼로 재사용)
        let next = -1;
        let bestD = 36;
        const n = ctx.hash.query(px, pz, 6, ctx.scratch);
        for (let q = 0; q < n; q++) {
          const j = ctx.scratch[q];
          if (en.alive[j] === 0) continue;
          let visited = false;
          for (let h = 0; h < hitN; h++) if (hit[h] === j) visited = true;
          if (visited) continue;
          const dx = en.x[j] - px;
          const dz = en.z[j] - pz;
          const dd = dx * dx + dz * dz;
          if (dd < bestD) {
            bestD = dd;
            next = j;
          }
        }
        if (next < 0) break;
        ctx.effects.spawnChainArc(px, pz, ctx.enemies.x[next], ctx.enemies.z[next]);
        px = ctx.enemies.x[next];
        pz = ctx.enemies.z[next];
        t = next;
        if (hitN < hit.length) hit[hitN++] = next;
      }
    }
  }
}

// 원융노 (제갈연노 진화) — 전방위 연사
export class YuanrongWeapon extends TimedWeapon {
  readonly id = 'yuanrong';
  level = 8;
  protected baseCooldown = 0.5;
  protected fire(ctx: WeaponContext): void {
    const dirs = 12;
    const d = dmg(ctx, 9, 8, 0.12);
    const speed = 16 * ctx.stats.rangeMul;
    for (let k = 0; k < dirs; k++) {
      const a = (k / dirs) * Math.PI * 2;
      ctx.projectiles.spawn(
        ctx.px, ctx.pz, Math.cos(a), Math.sin(a), speed, d, 0.45, 2, 1.5,
        PK_FIRE_ARROW, 2.6, 1.4, 0.5, 1.5, 0.55,
      );
    }
  }
}

export type WeaponCtor = new () => Weapon;

export const WEAPON_CTORS: Record<string, WeaponCtor> = {
  spear: SpearWeapon,
  guandao: GuandaoWeapon,
  zhangba: ZhangbaWeapon,
  baiyu: BaiyuWeapon,
  crossbow: CrossbowWeapon,
  fire: FireWeapon,
  thunder: ThunderWeapon,
  orbit: OrbitWeapon,
  halberd: HalberdWeapon,
  cavalry: CavalryWeapon,
  zhanma: ZhanmaWeapon,
  bamen: BamenWeapon,
  chibi: ChibiWeapon,
  tianfa: TianfaWeapon,
  yuanrong: YuanrongWeapon,
};

export function createWeapon(id: string): Weapon {
  const ctor = WEAPON_CTORS[id];
  return new ctor();
}
