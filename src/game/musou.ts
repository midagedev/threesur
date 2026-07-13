import type { WeaponContext } from './weapons/types';
import type { Player } from './player';
import { PK_ARROW } from './projectiles';

const DURATION = 5.0;
const ENEMY_SLOW = 0.3;

// 장수별 문장 한자 + 테마 광원 색 (#18)
const CREST: Record<string, { char: string; r: number; g: number; b: number }> = {
  zhaoyun: { char: '龍', r: 0.5, g: 1.4, b: 2.4 },
  guanyu: { char: '義', r: 0.35, g: 1.9, b: 1.1 },
  zhangfei: { char: '蛇', r: 2.3, g: 1.2, b: 0.5 },
  zhugeliang: { char: '卦', r: 0.7, g: 1.2, b: 2.4 },
  huangzhong: { char: '弓', r: 2.2, g: 1.6, b: 0.6 },
  lvbu: { char: '戟', r: 2.4, g: 0.5, b: 0.3 },
  sunshangxiang: { char: '香', r: 2.2, g: 0.55, b: 1.05 }, // 진홍·연분홍
  default: { char: '武', r: 1.5, g: 1.4, b: 1.0 },
};

// 무쌍 게이지 + 장수별 난무. 킬 +1%, 피격 +3%, 콤보 가속. Space로 발동.
// 발동 5초: 적 시간 0.3배(적 dt만), 플레이어 무적, 장수별 난무, 종료 대형 충격파.
export class Musou {
  gauge = 0; // 0..100
  active = false;
  chargeMul = 1; // 사당 '무쌍 충전' 버프 시 2 (run이 매 프레임 세팅)
  private timer = 0;
  private tick = 0;
  private stormAngle = 0;
  private dashIdx = 0;
  private dashTimer = 0;
  private initDone = false;
  private introDone = false; // #18 발동 연출(문장/광원) 1회
  private heroMusou: string;
  private readonly onActivateFx: () => void; // 발동 연출(한자/사운드)

  constructor(heroMusou: string, onActivateFx: () => void) {
    this.heroMusou = heroMusou;
    this.onActivateFx = onActivateFx;
  }

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
    this.initDone = false;
    this.introDone = false;
    this.chargeMul = 1;
  }

  get ready(): boolean {
    return this.gauge >= 100;
  }

  get enemyTimeScale(): number {
    return this.active ? ENEMY_SLOW : 1;
  }

  addKill(comboCount: number): void {
    if (this.active) return;
    this.gauge = Math.min(100, this.gauge + (1 + Math.min(1.5, comboCount * 0.02)) * this.chargeMul);
  }

  addHit(): void {
    if (this.active) return;
    this.gauge = Math.min(100, this.gauge + 3 * this.chargeMul);
  }

  activate(): boolean {
    if (!this.ready || this.active) return false;
    this.active = true;
    this.timer = DURATION;
    this.tick = 0;
    this.stormAngle = 0;
    this.dashIdx = 0;
    this.dashTimer = 0;
    this.initDone = false;
    this.introDone = false;
    this.gauge = 0;
    this.onActivateFx();
    return true;
  }

  // 실제(real) dt로 진행. active 동안 장수별 난무 수행. 종료 시 true(run이 후처리).
  update(dt: number, ctx: WeaponContext, player: Player): boolean {
    if (!this.active) return false;
    this.timer -= dt;
    this.tick -= dt;
    this.dashTimer -= dt;

    // #18 공통: 발동 문장 데칼(1회) + 테마 광원이 플레이어를 따라다님(매 프레임 prio 갱신)
    const crest = CREST[this.heroMusou] ?? CREST.default;
    if (!this.introDone) {
      this.introDone = true;
      ctx.effects.spawnCrest(player.x, player.z, crest.char, crest.r, crest.g, crest.b, DURATION);
      if (this.heroMusou === 'zhugeliang') ctx.effects.spawnBaguaSigil(player.x, player.z, DURATION);
    }
    // 따라다니는 은은한 테마 광원(상시 재갱신). 화면 화이트아웃 방지로 반경·강도 억제(#23).
    ctx.effects.spawnMusouLight?.(player.x, player.z, crest.r * 0.32, crest.g * 0.32, crest.b * 0.32, 6.5, 0.07);

    switch (this.heroMusou) {
      case 'zhaoyun': this.runZhaoyun(ctx, player); break;
      case 'guanyu': this.runGuanyu(ctx, player); break;
      case 'zhangfei': this.runZhangfei(ctx, player); break;
      case 'zhugeliang': this.runZhuge(ctx, player); break;
      case 'huangzhong': this.runHuang(ctx, player); break;
      case 'lvbu': this.runLvbu(ctx, player); break;
      case 'sunshangxiang': this.runSunshangxiang(ctx, player); break;
      default: this.runCommon(ctx, player); break;
    }

    if (this.timer <= 0) {
      this.active = false;
      // 마무리 대폭발: 시차 3중 충격파 + 대형 링 + 균열 데칼 + 전 화면 대미지
      ctx.effects.spawnTripleShock(player.x, player.z, 30, crest.r, crest.g, crest.b);
      ctx.effects.spawnRing(player.x, player.z, 26, 2.2, 1.7, 0.8, 0.7);
      ctx.effects.spawnMusouLight?.(player.x, player.z, crest.r * 0.6, crest.g * 0.6, crest.b * 0.6, 15, 0.5);
      this.aoe(ctx, player.x, player.z, 30, 400 * ctx.stats.damageMul, 6);
      return true;
    }
    return false;
  }

  // 공통(폴백): 회전 참격 폭풍
  private runCommon(ctx: WeaponContext, player: Player): void {
    if (this.tick > 0) return;
    this.tick = 0.1;
    this.stormAngle += 0.9;
    const dx = Math.cos(this.stormAngle);
    const dz = Math.sin(this.stormAngle);
    ctx.effects.spawnSlashArc(player.x, player.z, dx, dz, 7, 1.3, 1.6, 1.2, 2.4, 0.24);
    this.aoe(ctx, player.x, player.z, 7.5, 60 * ctx.stats.damageMul, 0);
  }

  // 조운 창격돌진: 8방향 연속 무적 돌진 + 궤적 참격
  private runZhaoyun(ctx: WeaponContext, player: Player): void {
    this.runCommon(ctx, player); // 주변 참격 유지
    if (this.dashTimer > 0) return;
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
    // 잔상 리본 + 경로 균열(청백)
    for (let s = 0; s < 4; s++) ctx.effects.spawnFlameTrail(player.x - dx * s * 1.8, player.z - dz * s * 1.8, 0.5, 1.3, 2.4);
    this.capsule(ctx, player.x, player.z, dx, dz, 9, 1.2, 90 * ctx.stats.damageMul);
  }

  // 관우 청룡회천참: 거대 회전 참격 + 넉백
  private runGuanyu(ctx: WeaponContext, player: Player): void {
    if (this.tick > 0) return;
    this.tick = 0.06;
    this.stormAngle += 0.55;
    const dx = Math.cos(this.stormAngle);
    const dz = Math.sin(this.stormAngle);
    ctx.effects.spawnSlashArc(player.x, player.z, dx, dz, 9.5, 1.5, 0.6, 2.2, 1.1, 0.2);
    // 청룡 청록 화염 트레일(회전 선두)
    ctx.effects.spawnFlameTrail(player.x + dx * 9, player.z + dz * 9, 0.3, 1.9, 1.1);
    this.aoe(ctx, player.x, player.z, 9.5, 55 * ctx.stats.damageMul, 5);
  }

  // 장비 장판교의 포효: 전 화면 스턴 3초 + 반복 대미지
  private runZhangfei(ctx: WeaponContext, player: Player): void {
    if (!this.initDone) {
      this.initDone = true;
      this.stunAll(ctx, player.x, player.z, 30, 3.0);
      // 시차 3중 충격파 + 방사형 먼지 웨이브(장판교 포효)
      ctx.effects.spawnTripleShock(player.x, player.z, 28, 2.4, 1.5, 0.6);
      for (let k = 0; k < 28; k++) {
        const a = (k / 28) * Math.PI * 2;
        ctx.particles.dust(player.x + Math.cos(a) * 3, player.z + Math.sin(a) * 3);
      }
      this.aoe(ctx, player.x, player.z, 30, 90 * ctx.stats.damageMul, 12);
    }
    if (this.tick > 0) return;
    this.tick = 0.5;
    ctx.effects.spawnRing(player.x, player.z, 14, 2.2, 1.2, 0.6, 0.4);
    this.aoe(ctx, player.x, player.z, 26, 70 * ctx.stats.damageMul, 4);
  }

  // 제갈량 천뢰소환: 낙뢰 폭풍
  private runZhuge(ctx: WeaponContext, player: Player): void {
    if (this.tick > 0) return;
    this.tick = 0.12;
    const t = ctx.enemies.randomAlive();
    if (t < 0) return;
    const x = ctx.enemies.x[t];
    const z = ctx.enemies.z[t];
    ctx.effects.spawnLightning(x, z);
    this.aoe(ctx, x, z, 3.0, 80 * ctx.stats.damageMul, 0);
  }

  // 황충 백보천양: 전방위 화살 폭풍
  private runHuang(ctx: WeaponContext, player: Player): void {
    if (this.tick > 0) return;
    this.tick = 0.08;
    const count = 12;
    const base = this.stormAngle;
    this.stormAngle += 0.4;
    const d = 30 * ctx.stats.damageMul;
    for (let k = 0; k < count; k++) {
      const a = base + (k / count) * Math.PI * 2;
      ctx.projectiles.spawn(
        player.x, player.z, Math.cos(a), Math.sin(a), 18, d, 0.5, 3, 1.6,
        PK_ARROW, 2.2, 1.6, 0.7, 1.6, 0.55,
      );
    }
    // 백보천양: 3D 화살이 하늘에서 포물선으로 쏟아짐 + 착탄 광역
    for (let m = 0; m < 3; m++) {
      const rr = 4 + Math.random() * 16;
      const aa = Math.random() * Math.PI * 2;
      const mx = player.x + Math.cos(aa) * rr;
      const mz = player.z + Math.sin(aa) * rr;
      ctx.effects.spawnMeteorArrow(mx, mz, 2.2, 1.6, 0.6, 0.45 + Math.random() * 0.25);
      this.aoe(ctx, mx, mz, 2.4, d * 0.7, 2);
    }
  }

  // 손상향 홍련난무(紅蓮亂舞): 진홍 꽃잎 회전 폭풍(3방향 아크) + 주기적 방사 화살.
  // 절제 원칙 — 아크 반경 ≤ 공통 무쌍(7), 대형 링 없음(공통 문장/광원만). 화이트아웃 금지.
  private runSunshangxiang(ctx: WeaponContext, player: Player): void {
    if (this.tick > 0) return;
    this.tick = 0.1;
    this.stormAngle += 0.7;
    // 홍련 꽃잎: 3방향 회전 부채꼴(진홍·연분홍)
    for (let k = 0; k < 3; k++) {
      const a = this.stormAngle + (k / 3) * Math.PI * 2;
      ctx.effects.spawnSlashArc(player.x, player.z, Math.cos(a), Math.sin(a), 6.5, 0.7, 2.2, 0.55, 1.05, 0.2);
    }
    this.aoe(ctx, player.x, player.z, 7, 62 * ctx.stats.damageMul, 4);
    // 활 장수: 0.8s마다 방사 화살 일제사격. 아군 로즈골드(g 높여 적 진홍과 구분).
    if (this.dashTimer <= 0) {
      this.dashTimer = 0.8;
      const count = 12;
      const d = 26 * ctx.stats.damageMul;
      for (let k = 0; k < count; k++) {
        const a = this.stormAngle + (k / count) * Math.PI * 2;
        ctx.projectiles.spawn(
          player.x, player.z, Math.cos(a), Math.sin(a), 17, d, 0.5, 3, 1.5,
          PK_ARROW, 2.3, 1.0, 0.85, 1.6, 0.55,
        );
      }
    }
  }

  // 여포 적토무쌍: 조작 가능 무적 돌진(이동은 run의 입력) + 궤적 대폭발
  private runLvbu(ctx: WeaponContext, player: Player): void {
    ctx.particles.dust(player.x, player.z); // 말발굽 먼지/불꽃
    if (this.tick > 0) return;
    // #23: 정지 시 동일 위치 화염벽이 additive 누적돼 백색 폭발 → 생성간격↑·잔류↓·강도↓로 완화.
    this.tick = 0.28;
    ctx.effects.spawnFireWall(player.x, player.z, player.faceX, player.faceZ, 6, 1.5, 0.5);
    // 링 반경 <3 → lightField 광원 미생성(정지 시 광원 누적 차단).
    ctx.effects.spawnRing(player.x, player.z, 2.6, 2.2, 1.0, 0.4, 0.3);
    this.aoe(ctx, player.x, player.z, 7, 85 * ctx.stats.damageMul * 2.3, 6); // 간격 늘린 만큼 틱당 피해 보정
  }

  private aoe(ctx: WeaponContext, cx: number, cz: number, radius: number, damage: number, knockback: number): void {
    const en = ctx.enemies;
    const n = ctx.hash.query(cx, cz, radius, ctx.scratch);
    for (let c = 0; c < n; c++) {
      const j = ctx.scratch[c];
      if (en.alive[j] === 0) continue;
      const dx = en.x[j] - cx;
      const dz = en.z[j] - cz;
      const d2 = dx * dx + dz * dz;
      if (d2 > radius * radius) continue;
      const died = en.damageAt(j, damage);
      if (knockback > 0) {
        const d = Math.sqrt(d2) || 1;
        en.push(j, dx / d, dz / d, knockback);
      }
      if (died) ctx.onKill(j);
    }
  }

  private stunAll(ctx: WeaponContext, cx: number, cz: number, radius: number, dur: number): void {
    const en = ctx.enemies;
    const n = ctx.hash.query(cx, cz, radius, ctx.scratch);
    for (let c = 0; c < n; c++) {
      const j = ctx.scratch[c];
      if (en.alive[j] === 0 || en.boss[j] === 1) continue;
      if (en.stun[j] < dur) en.stun[j] = dur;
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
