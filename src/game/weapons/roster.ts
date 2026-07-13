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
import { NEW_WEAPONS } from '../../data/weaponUnlocks';
import { WEAPON_DEFS } from '../../data/weapons';
import { WEAPON_DESC_EN } from '../../core/i18n';

// 신규 무기 메타 자체 등록: 카드/도감/공유카드가 참조하는 WEAPON_DEFS와 영문 설명 WEAPON_DESC_EN에
// 병합한다(둘 다 export된 가변 객체). i18n 소스 무접촉 + 크로스레인 편집 없이 무기가 완전 동작.
// (영문 무기명 NAME_EN은 비공개라 리드가 2줄 수동 추가 — 배선 스니펫 참조)
for (const id in NEW_WEAPONS) {
  WEAPON_DEFS[id] = NEW_WEAPONS[id].def;
  WEAPON_DESC_EN[id] = NEW_WEAPONS[id].descEn;
}

// 무기 공용 헬퍼 -----------------------------------------------------------

// 보스 데미지 스펀지 해소(#40): 보스에 실제로 닿는 유효 딜이 매우 낮다(투사체는 잡몹 군체에 몸빵당해
// 보스까지 못 감 → 플레이어 중심 근접 광역만 도달, 그것도 사거리 안일 때만). 실측 집중 딜 ~55/s.
// 30~60s TTK를 위해 보스 피격에 한해 배수를 준다(잡몹 밸런스·표기 HP·명기 페이싱 불변).
const BOSS_DMG_MULT = 4.5;

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
    const dealt = en.boss[j] === 1 ? damage * BOSS_DMG_MULT : damage;
    const died = en.damageAt(j, dealt);
    ctx.damageText.spawn(dealt, en.x[j], en.scale[j] * 0.7, en.z[j], false);
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
  const n = ctx.hash.query(cx, cz, radius + 21, ctx.scratch); // +21: 보스 확장 사거리(#40) 후보 포함
  for (let c = 0; c < n; c++) {
    const j = ctx.scratch[c];
    if (en.alive[j] === 0) continue;
    const dx = en.x[j] - cx;
    const dz = en.z[j] - cz;
    const d2 = dx * dx + dz * dz;
    const isBoss = en.boss[j] === 1;
    // 보스 데미지 스펀지 해소(#40): 보스는 사거리 +20 확장 + 부채꼴 각도 무시.
    // 이동/원거리형 보스가 카이팅해도 스윕이 닿게 하여 패턴 무관 일정한 딜 유입(잡몹 판정은 불변).
    const rr = (isBoss ? radius + 20 : radius) + en.radius[j];
    if (d2 > rr * rr) continue;
    const d = Math.sqrt(d2) || 1;
    if (halfAngle < 3.13 && !isBoss) {
      const dot = (dx / d) * dirX + (dz / d) * dirZ;
      if (dot < cosHalf) continue;
    }
    const dealt = en.boss[j] === 1 ? damage * BOSS_DMG_MULT : damage;
    const died = en.damageAt(j, dealt);
    ctx.damageText.spawn(dealt, en.x[j], en.scale[j] * 0.7, en.z[j], false);
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

// 11. 철질려 蒺藜 — 설치형 지뢰. 이동 경로에 마름쇠를 깔고, 적 접촉 시 폭발(소반경 AoE)+둔화.
//   자체 SoA 풀(고정 상한). 마름쇠 표식은 철색 반짝임(적탄 붉은 링과 색 구분). 신규 셰이더 없음.
export class CaltropWeapon implements Weapon {
  readonly id = 'caltrop';
  level = 1;
  private static readonly CAP = 32; // 물리 풀 상한(동시 존재 상한은 maxActive로 제어)
  private static readonly PLACE_INTERVAL = 0.9; // 설치 주기(초)
  private static readonly MAX_AGE = 14; // 미격발 마름쇠 수명(초)
  private static readonly TRIGGER_R = 0.95; // 접촉 감지 반경(+적 반경)
  private readonly cx = new Float32Array(CaltropWeapon.CAP);
  private readonly cz = new Float32Array(CaltropWeapon.CAP);
  private readonly age = new Float32Array(CaltropWeapon.CAP);
  private readonly glintT = new Float32Array(CaltropWeapon.CAP); // 반짝임 타이머
  private readonly armed = new Uint8Array(CaltropWeapon.CAP);
  private placeT = 0;

  // 동시 존재 상한: Lv1 3 → Lv8 10 (레벨당 +1, CAP 클램프)
  private maxActive(): number {
    return Math.min(CaltropWeapon.CAP, 3 + (this.level - 1));
  }

  update(ctx: WeaponContext): void {
    const CAP = CaltropWeapon.CAP;
    // 설치: 주기적으로 발밑(진행 반대쪽 약간 뒤)에 1개
    this.placeT -= ctx.dt;
    if (this.placeT <= 0) {
      this.placeT += CaltropWeapon.PLACE_INTERVAL * ctx.stats.cooldownMul;
      if (this.placeT < 0) this.placeT = 0;
      this.place(ctx);
    }
    const en = ctx.enemies;
    const triggerR = CaltropWeapon.TRIGGER_R;
    const blastR = (2.2 + (this.level - 1) * 0.13) * ctx.stats.areaMul;
    const d = dmg(ctx, 20, this.level, 0.13);
    const slowDur = 0.5 + (this.level - 1) * 0.03; // 둔화(짧은 속박)
    for (let i = 0; i < CAP; i++) {
      if (this.armed[i] === 0) continue;
      this.age[i] += ctx.dt;
      if (this.age[i] >= CaltropWeapon.MAX_AGE) {
        this.armed[i] = 0;
        continue;
      }
      const px = this.cx[i];
      const pz = this.cz[i];
      // 은은한 철색 반짝임(지면 표식). 파티클만 사용 → 데칼 풀 부담 없음.
      this.glintT[i] -= ctx.dt;
      if (this.glintT[i] <= 0) {
        this.glintT[i] = 0.7 + ctx.rng.next() * 0.8;
        for (let g = 0; g < 3; g++) {
          ctx.particles.emit(
            px + (ctx.rng.next() - 0.5) * 0.5, 0.12, pz + (ctx.rng.next() - 0.5) * 0.5,
            (ctx.rng.next() - 0.5) * 0.3, 0.5 + ctx.rng.next() * 0.5, (ctx.rng.next() - 0.5) * 0.3,
            0.55, 0.68, 0.95, 0.5, 0.55, -0.4, 0.9,
          );
        }
      }
      // 접촉 감지: 반경 내 생존 적 존재 시 폭발
      let hit = false;
      const n = ctx.hash.query(px, pz, triggerR + 1.0, ctx.scratch);
      for (let c = 0; c < n; c++) {
        const j = ctx.scratch[c];
        if (en.alive[j] === 0) continue;
        const dx = en.x[j] - px;
        const dz = en.z[j] - pz;
        const rr = triggerR + en.radius[j];
        if (dx * dx + dz * dz <= rr * rr) {
          hit = true;
          break;
        }
      }
      if (hit) this.explode(ctx, i, px, pz, blastR, d, slowDur);
    }
  }

  // 설치: 여유 슬롯이 있고 상한 미만이면 새로, 아니면 가장 오래된 마름쇠를 덮어쓴다.
  private place(ctx: WeaponContext): void {
    const CAP = CaltropWeapon.CAP;
    const max = this.maxActive();
    let free = -1;
    let armedCount = 0;
    let oldest = -1;
    let oldestAge = -1;
    for (let i = 0; i < CAP; i++) {
      if (this.armed[i] === 0) {
        if (free < 0) free = i;
        continue;
      }
      armedCount++;
      if (this.age[i] > oldestAge) {
        oldestAge = this.age[i];
        oldest = i;
      }
    }
    let slot: number;
    if (armedCount < max && free >= 0) slot = free;
    else if (oldest >= 0) slot = oldest;
    else if (free >= 0) slot = free;
    else return;
    const bx = ctx.px - ctx.faceX * 0.5;
    const bz = ctx.pz - ctx.faceZ * 0.5;
    this.cx[slot] = bx;
    this.cz[slot] = bz;
    this.age[slot] = 0;
    this.glintT[slot] = 0;
    this.armed[slot] = 1;
    // 설치 순간 표식(철색 데칼 + 잔불티)
    ctx.effects.spawnDecal?.(bx, bz, 0.55, 0.5, 0.62, 0.9);
  }

  private explode(
    ctx: WeaponContext,
    i: number,
    x: number,
    z: number,
    blastR: number,
    d: number,
    slowDur: number,
  ): void {
    this.armed[i] = 0;
    const en = ctx.enemies;
    const n = ctx.hash.query(x, z, blastR, ctx.scratch);
    for (let c = 0; c < n; c++) {
      const j = ctx.scratch[c];
      if (en.alive[j] === 0) continue;
      const dx = en.x[j] - x;
      const dz = en.z[j] - z;
      const rr = blastR + en.radius[j];
      if (dx * dx + dz * dz > rr * rr) continue;
      const died = en.damageAt(j, d);
      ctx.damageText.spawn(d, en.x[j], en.scale[j] * 0.7, en.z[j], false);
      const dist = Math.sqrt(dx * dx + dz * dz) || 1;
      en.push(j, dx / dist, dz / dist, 4);
      // 둔화: EnemyPool에 슬로우 배수 필드가 없어 짧은 속박(stun)으로 대체(자가 감쇠).
      if (!died) en.stun[j] = Math.max(en.stun[j], slowDur);
      if (died) ctx.onKill(j);
    }
    // 철색 폭발 연출(충격파 링 + 섬광 + 파편 + 스코치 + 순간 광원)
    ctx.effects.spawnRing(x, z, blastR + 0.6, 0.6, 0.75, 1.1, 0.4);
    ctx.effects.spawnFlash(x, z, 0.7, 0.85, 1.2, blastR * 0.8);
    ctx.particles.burst(x, z, 0.6, 0.72, 1.0, 12, 6);
    ctx.effects.spawnDecal?.(x, z, blastR * 0.7, 0.55, 0.68, 1.0);
    ctx.effects.spawnLight?.(x, z, 0.5, 0.65, 1.0, blastR * 2.2, 0.18);
  }
}

// 12. 독천 毒泉 — 장판 DoT. 주기적으로 최다 밀집 지점에 독 웅덩이(수명 수 초, 틱 피해).
//   ZonePool 재사용(녹색 → 화계 주황·적탄 붉은색과 색 구분). 레벨업 시 크기/틱/수명↑.
export class PoisonWeapon extends TimedWeapon {
  readonly id = 'poison';
  protected baseCooldown = 2.8;
  protected fire(ctx: WeaponContext): void {
    const radius = (2.4 + (this.level - 1) * 0.3) * ctx.stats.areaMul;
    const life = 4.0 + (this.level - 1) * 0.35;
    const dps = 9 * ctx.stats.damageMul * (1 + (this.level - 1) * 0.15);
    // 최다 밀집 지점 탐색: 무작위 생존 적 몇을 후보로, 반경 내 적 수가 최대인 곳 선택.
    const en = ctx.enemies;
    let bestX = ctx.px;
    let bestZ = ctx.pz;
    let bestCount = -1;
    const r2 = radius * radius;
    for (let s = 0; s < 6; s++) {
      const t = en.randomAlive();
      if (t < 0) break;
      const qx = en.x[t];
      const qz = en.z[t];
      const n = ctx.hash.query(qx, qz, radius, ctx.scratch);
      let count = 0;
      for (let c = 0; c < n; c++) {
        const j = ctx.scratch[c];
        if (en.alive[j] === 0) continue;
        const dx = en.x[j] - qx;
        const dz = en.z[j] - qz;
        if (dx * dx + dz * dz <= r2) count++;
      }
      if (count > bestCount) {
        bestCount = count;
        bestX = qx;
        bestZ = qz;
      }
    }
    if (bestCount < 0) return; // 생존 적 없음 → 생성 스킵(풀 절약)
    // 녹색 계열(화계 주황·적탄 붉은색과 구분). 블룸 절제 위해 강도는 은은하게.
    ctx.zones.spawn(bestX, bestZ, radius, life, dps, 0.3, 1.3, 0.5);
  }
}

// 13. 쌍륜 雙輪 — 부메랑 왕복 투사체(손상향 시작 무기). 전방 투척 → 최대거리에서 귀환,
//   왕복 각 1회 관통 타격. ProjectilePool에 왕복 모드가 없어 자체 SoA 시뮬 + 파티클 렌더.
//   진홍/금 회전 쌍륜(적탄 붉은 링과 달리 금색 우세·이동체·회전 발광으로 구분).
export class TwinringWeapon extends TimedWeapon {
  readonly id = 'twinring';
  protected baseCooldown = 1.6;
  private static readonly CAP = 12;
  private static readonly HITSET = 16; // 패스당 관통 중복 방지 목록
  private static readonly OUT_SPEED = 13;
  private static readonly RET_SPEED = 15;
  private static readonly MAX_LIFE = 4.0; // 안전 수명(플레이어 이탈 대비)
  private readonly bx = new Float32Array(TwinringWeapon.CAP);
  private readonly bz = new Float32Array(TwinringWeapon.CAP);
  private readonly dirX = new Float32Array(TwinringWeapon.CAP);
  private readonly dirZ = new Float32Array(TwinringWeapon.CAP);
  private readonly dist = new Float32Array(TwinringWeapon.CAP); // outbound 이동 거리
  private readonly maxD = new Float32Array(TwinringWeapon.CAP);
  private readonly dmgv = new Float32Array(TwinringWeapon.CAP);
  private readonly rad = new Float32Array(TwinringWeapon.CAP);
  private readonly life = new Float32Array(TwinringWeapon.CAP);
  private readonly spin = new Float32Array(TwinringWeapon.CAP);
  private readonly phase = new Uint8Array(TwinringWeapon.CAP); // 0 outbound / 1 return
  private readonly active = new Uint8Array(TwinringWeapon.CAP);
  private readonly hitset = new Int32Array(TwinringWeapon.CAP * TwinringWeapon.HITSET);
  private readonly hitN = new Uint8Array(TwinringWeapon.CAP);

  update(ctx: WeaponContext): void {
    super.update(ctx); // 쿨다운 타이머 → fire()로 투척
    this.simulate(ctx);
  }

  protected fire(ctx: WeaponContext): void {
    const count = 1 + Math.floor((this.level - 1) / 2) + ctx.stats.projectileBonus;
    const d = dmg(ctx, 12, this.level, 0.13);
    const maxDist = (6 + (this.level - 1) * 0.5) * ctx.stats.rangeMul;
    const base = Math.atan2(ctx.aimZ, ctx.aimX);
    for (let k = 0; k < count; k++) {
      const a = base + (k - (count - 1) * 0.5) * 0.2;
      this.throwRing(ctx, Math.cos(a), Math.sin(a), d, maxDist);
    }
  }

  private throwRing(ctx: WeaponContext, dirX: number, dirZ: number, d: number, maxDist: number): void {
    let slot = -1;
    for (let i = 0; i < TwinringWeapon.CAP; i++) if (this.active[i] === 0) { slot = i; break; }
    if (slot < 0) return; // 풀 만석 → 스킵
    this.bx[slot] = ctx.px;
    this.bz[slot] = ctx.pz;
    this.dirX[slot] = dirX;
    this.dirZ[slot] = dirZ;
    this.dist[slot] = 0;
    this.maxD[slot] = maxDist;
    this.dmgv[slot] = d;
    this.rad[slot] = 0.9;
    this.life[slot] = TwinringWeapon.MAX_LIFE;
    this.spin[slot] = 0;
    this.phase[slot] = 0;
    this.hitN[slot] = 0;
    this.active[slot] = 1;
  }

  private simulate(ctx: WeaponContext): void {
    const CAP = TwinringWeapon.CAP;
    for (let i = 0; i < CAP; i++) {
      if (this.active[i] === 0) continue;
      this.life[i] -= ctx.dt;
      this.spin[i] += ctx.dt * 16;
      if (this.phase[i] === 0) {
        const step = TwinringWeapon.OUT_SPEED * ctx.dt;
        this.bx[i] += this.dirX[i] * step;
        this.bz[i] += this.dirZ[i] * step;
        this.dist[i] += step;
        if (this.dist[i] >= this.maxD[i]) {
          this.phase[i] = 1;
          this.hitN[i] = 0; // 귀환 패스 재타격 허용 → 왕복 각 1회
        }
      } else {
        // 귀환: 플레이어로 홈잉 + 수직 성분으로 곡선 아치(부메랑 손맛). 남은 거리에 비례해
        // 휘었다가 근접 시 펴져 손으로 빨려든다.
        const tx = ctx.px - this.bx[i];
        const tz = ctx.pz - this.bz[i];
        const dd = Math.hypot(tx, tz) || 1;
        const nx = tx / dd;
        const nz = tz / dd;
        const step = TwinringWeapon.RET_SPEED * ctx.dt;
        const curve = Math.min(1, dd / this.maxD[i]) * 3.4; // 멀수록 크게 휨, 근접 시 0
        this.bx[i] += nx * step + -nz * curve * ctx.dt;
        this.bz[i] += nz * step + nx * curve * ctx.dt;
        if (dd <= 0.9) { this.active[i] = 0; continue; }
      }
      if (this.life[i] <= 0) { this.active[i] = 0; continue; }
      this.hitScan(ctx, i);
      this.renderBody(ctx, i);
    }
  }

  private hitScan(ctx: WeaponContext, i: number): void {
    const en = ctx.enemies;
    const px = this.bx[i];
    const pz = this.bz[i];
    const r = this.rad[i];
    const base = i * TwinringWeapon.HITSET;
    const n = ctx.hash.query(px, pz, r + 1.0, ctx.scratch);
    for (let c = 0; c < n; c++) {
      const j = ctx.scratch[c];
      if (en.alive[j] === 0) continue;
      const dx = en.x[j] - px;
      const dz = en.z[j] - pz;
      const rr = r + en.radius[j];
      if (dx * dx + dz * dz > rr * rr) continue;
      let dup = false;
      const cnt = this.hitN[i];
      for (let h = 0; h < cnt; h++) if (this.hitset[base + h] === j) { dup = true; break; }
      if (dup) continue;
      if (cnt < TwinringWeapon.HITSET) this.hitset[base + this.hitN[i]++] = j;
      const died = en.damageAt(j, this.dmgv[i]);
      ctx.damageText.spawn(this.dmgv[i], en.x[j], en.scale[j] * 0.7, en.z[j], false);
      if (!died) {
        const dsp = Math.sqrt(dx * dx + dz * dz) || 1;
        en.push(j, dx / dsp, dz / dsp, 2);
      }
      ctx.effects.spawnRing(en.x[j], en.z[j], 1.0, 1.6, 0.5, 0.3, 0.16);
      if (died) ctx.onKill(j);
    }
  }

  // 진홍/금 회전 쌍륜 발광(파티클). 빠른 회전 잔상이 링을 이룸.
  // 애디티브 누적 백색광(화이트아웃) 방지 위해 강도·수명 억제 — 색상 정체성 유지.
  private renderBody(ctx: WeaponContext, i: number): void {
    const px = this.bx[i];
    const pz = this.bz[i];
    const s = this.spin[i];
    const wr = 0.34;
    ctx.particles.emit(px + Math.cos(s) * wr, 0.9, pz + Math.sin(s) * wr, 0, 0, 0, 0.95, 0.62, 0.14, 0.6, 0.1, 0, 0.9); // 금
    ctx.particles.emit(px + Math.cos(s + Math.PI) * wr, 0.9, pz + Math.sin(s + Math.PI) * wr, 0, 0, 0, 0.9, 0.12, 0.14, 0.6, 0.1, 0, 0.9); // 진홍
    ctx.particles.emit(px, 0.9, pz, 0, 0, 0, 0.5, 0.22, 0.08, 0.42, 0.08, 0, 0.9); // 은은한 금핵
    // 저순위 미니 금광원 추종(무쌍 광원과 강도·반경으로 자연 분리). 확률 게이트로 필드 부담 억제.
    if (ctx.rng.next() < 0.6) ctx.effects.spawnLight?.(px, pz, 0.42, 0.3, 0.09, 1.5, 0.1);
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
  caltrop: CaltropWeapon,
  poison: PoisonWeapon,
  twinring: TwinringWeapon,
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
