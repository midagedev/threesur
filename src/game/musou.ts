import type { WeaponContext } from './weapons/types';
import type { Player } from './player';

const DURATION = 5.0;
const ENEMY_SLOW = 0.3;

// 무쌍 게이지 + 난무. 킬 +1%, 피격 +3%, 콤보 가속. Space로 발동.
// 발동 5초: 적 시간 0.3배(적 dt만), 플레이어 무적, 장수별 난무, 종료 대형 충격파.
export class Musou {
  gauge = 0; // 0..100
  active = false;
  private timer = 0;
  private tick = 0;
  private stormAngle = 0;
  private dashIdx = 0;
  private dashTimer = 0;
  private heroMusou: string;
  private readonly onActivateFx: () => void; // 발동 연출(한자/사운드)

  constructor(heroMusou: string, onActivateFx: () => void) {
    this.heroMusou = heroMusou;
    this.onActivateFx = onActivateFx;
  }

  // 장수 교체 시 무쌍 종류 갱신(선택 화면).
  setHero(musouKey: string): void {
    this.heroMusou = musouKey;
  }

  reset(): void {
    this.gauge = 0;
    this.active = false;
    this.timer = 0;
    this.tick = 0;
    this.dashIdx = 0;
    this.dashTimer = 0;
  }

  get ready(): boolean {
    return this.gauge >= 100;
  }

  // 무쌍 중 적 시간 배율.
  get enemyTimeScale(): number {
    return this.active ? ENEMY_SLOW : 1;
  }

  addKill(comboCount: number): void {
    if (this.active) return;
    this.gauge = Math.min(100, this.gauge + 1 + Math.min(1.5, comboCount * 0.02));
  }

  addHit(): void {
    if (this.active) return;
    this.gauge = Math.min(100, this.gauge + 3);
  }

  // 발동 시도. 성공 시 true.
  activate(): boolean {
    if (!this.ready || this.active) return false;
    this.active = true;
    this.timer = DURATION;
    this.tick = 0;
    this.gauge = 0;
    this.stormAngle = 0;
    this.dashIdx = 0;
    this.dashTimer = 0;
    this.onActivateFx();
    return true;
  }

  // 실제(real) dt로 진행. active 동안 난무 공격 수행. 종료 시 true 반환(run이 마무리 충격파).
  update(dt: number, ctx: WeaponContext, player: Player): boolean {
    if (!this.active) return false;
    this.timer -= dt;
    this.tick -= dt;
    this.dashTimer -= dt;

    // 공통 난무: 회전 참격 폭풍
    if (this.tick <= 0) {
      this.tick = 0.1;
      this.stormAngle += 0.9;
      const dirX = Math.cos(this.stormAngle);
      const dirZ = Math.sin(this.stormAngle);
      ctx.effects.spawnSlashArc(player.x, player.z, dirX, dirZ, 7, 1.3, 1.6, 1.2, 2.4, 0.24);
      this.aoe(ctx, player.x, player.z, 7.5, 60 * ctx.stats.damageMul);
    }

    // 조운 전용: 8방향 돌진 참격
    if (this.heroMusou === 'zhaoyun' && this.dashTimer <= 0) {
      this.dashTimer = 0.5;
      const a = (this.dashIdx / 8) * Math.PI * 2;
      this.dashIdx++;
      const dx = Math.cos(a);
      const dz = Math.sin(a);
      player.x += dx * 3.2;
      player.z += dz * 3.2;
      player.faceX = dx;
      player.faceZ = dz;
      ctx.effects.spawnThrust(player.x, player.z, dx, dz, 9, 2.2, 1.4, 1.9, 2.6);
      this.capsule(ctx, player.x, player.z, dx, dz, 9, 1.2, 90 * ctx.stats.damageMul);
    }

    if (this.timer <= 0) {
      this.active = false;
      // 마무리: 대형 충격파 + 전 화면 대미지
      ctx.effects.spawnRing(player.x, player.z, 26, 2.2, 1.7, 0.8, 0.7);
      this.aoe(ctx, player.x, player.z, 30, 400 * ctx.stats.damageMul);
      return true;
    }
    return false;
  }

  private aoe(ctx: WeaponContext, cx: number, cz: number, radius: number, damage: number): void {
    const en = ctx.enemies;
    const n = ctx.hash.query(cx, cz, radius, ctx.scratch);
    for (let c = 0; c < n; c++) {
      const j = ctx.scratch[c];
      if (en.alive[j] === 0) continue;
      const dx = en.x[j] - cx;
      const dz = en.z[j] - cz;
      if (dx * dx + dz * dz > radius * radius) continue;
      const died = en.damageAt(j, damage);
      if (died) ctx.onKill(j);
    }
  }

  private capsule(ctx: WeaponContext, ax: number, az: number, dx: number, dz: number, len: number, w: number, damage: number): void {
    const en = ctx.enemies;
    const bx = ax + dx * len;
    const bz = az + dz * len;
    const mx = (ax + bx) * 0.5;
    const mz = (az + bz) * 0.5;
    const n = ctx.hash.query(mx, mz, len * 0.5 + w + 1.2, ctx.scratch);
    for (let c = 0; c < n; c++) {
      const j = ctx.scratch[c];
      if (en.alive[j] === 0) continue;
      const hitR = w + en.radius[j];
      const t = clampSeg(en.x[j], en.z[j], ax, az, bx, bz);
      const px = ax + (bx - ax) * t;
      const pz = az + (bz - az) * t;
      const ex = en.x[j] - px;
      const ez = en.z[j] - pz;
      if (ex * ex + ez * ez > hitR * hitR) continue;
      const died = en.damageAt(j, damage);
      en.push(j, dx, dz, 6);
      if (died) ctx.onKill(j);
    }
  }
}

function clampSeg(px: number, pz: number, ax: number, az: number, bx: number, bz: number): number {
  const dx = bx - ax;
  const dz = bz - az;
  const len2 = dx * dx + dz * dz;
  if (len2 <= 0) return 0;
  let t = ((px - ax) * dx + (pz - az) * dz) / len2;
  if (t < 0) t = 0;
  else if (t > 1) t = 1;
  return t;
}
