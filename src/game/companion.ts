import type { Scene } from 'three';
import type { Atlas, SheetInfo } from '../gfx/atlas';
import type { LightUniforms } from '../gfx/lightField';
import { cellUvOffset } from '../gfx/atlas';
import { SpriteQuad, dirFromVelocity } from '../gfx/sprites';
import { CELL_W } from '../data/spriteManifest';
import { COMPANION_BY_HERO, COMPANION_JOIN_TIME } from '../data/companions';
import type { CompanionDef } from '../data/companions';
import type { Player } from './player';
import type { WeaponContext } from './weapons/types';

const FOLLOW_RATE = 4.5;
const ATTACK_RANGE = 15;
const ANIM_FPS = 7;

// 한 런에 한 명만 등장하는 가벼운 원군. 관계·성장·경제를 만들지 않고
// 따라오기 + 자동 공격 + 대사 이벤트만 담당한다.
export class Companion {
  active = false;
  attacks = 0;
  x = 0;
  z = 0;
  readonly radius = 0.45;

  private def: CompanionDef = COMPANION_BY_HERO.zhaoyun;
  private readonly sheet: SheetInfo;
  private readonly quad: SpriteQuad;
  private blockPx = 0;
  private dir = 0;
  private frame = 0;
  private animTime = 0;
  private attackTimer = 0;
  private readonly uv = { u: 0, v: 0 };

  constructor(scene: Scene, atlas: Atlas, light: LightUniforms) {
    this.sheet = atlas.sgrade;
    this.quad = new SpriteQuad(this.sheet, light, 2.15);
    this.quad.setTint(0.78, 1.08, 1.35);
    this.quad.mesh.visible = false;
    scene.add(this.quad.mesh);
  }

  get definition(): CompanionDef {
    return this.def;
  }

  reset(heroId: string): void {
    this.def = COMPANION_BY_HERO[heroId] ?? COMPANION_BY_HERO.zhaoyun;
    this.blockPx = this.def.charIndex * 4 * CELL_W;
    this.active = false;
    this.attacks = 0;
    this.animTime = 0;
    this.attackTimer = 0;
    this.quad.mesh.visible = false;
  }

  // 합류한 프레임에 true를 반환해 Run이 UI/대사를 한 번만 띄운다.
  update(dt: number, gameTime: number, player: Player, ctx: WeaponContext): boolean {
    let joined = false;
    if (!this.active) {
      if (gameTime < COMPANION_JOIN_TIME) return false;
      this.active = true;
      this.x = player.x - player.faceX * 2.2 + player.faceZ * 1.4;
      this.z = player.z - player.faceZ * 2.2 - player.faceX * 1.4;
      this.quad.mesh.visible = true;
      joined = true;
    }

    const targetX = player.x - player.faceX * 2.2 + player.faceZ * 1.4;
    const targetZ = player.z - player.faceZ * 2.2 - player.faceX * 1.4;
    let vx = targetX - this.x;
    let vz = targetZ - this.z;
    const dist = Math.hypot(vx, vz);
    if (dist > 14) {
      this.x = targetX;
      this.z = targetZ;
      vx = 0;
      vz = 0;
    } else {
      const follow = 1 - Math.exp(-FOLLOW_RATE * dt);
      this.x += vx * follow;
      this.z += vz * follow;
    }

    const moving = Math.hypot(vx, vz) > 0.08;
    this.dir = dirFromVelocity(vx, vz, this.dir);
    if (moving) {
      this.animTime += dt;
      this.frame = ((this.animTime * ANIM_FPS) | 0) % 4;
    } else {
      this.frame = 0;
    }

    this.attackTimer -= dt;
    if (this.attackTimer <= 0) this.attack(ctx);

    cellUvOffset(this.sheet, this.blockPx, 0, this.dir, this.frame, this.uv);
    this.quad.setUv(this.uv.u, this.uv.v);
    this.quad.setPosition(this.x, 0, this.z);
    return joined;
  }

  private attack(ctx: WeaponContext): void {
    const en = ctx.enemies;
    const n = ctx.hash.query(this.x, this.z, ATTACK_RANGE, ctx.scratch);
    let best = -1;
    let bestD2 = ATTACK_RANGE * ATTACK_RANGE;
    for (let c = 0; c < n; c++) {
      const i = ctx.scratch[c];
      if (en.alive[i] === 0) continue;
      const dx = en.x[i] - this.x;
      const dz = en.z[i] - this.z;
      const d2 = dx * dx + dz * dz;
      if (d2 < bestD2) {
        bestD2 = d2;
        best = i;
      }
    }
    if (best < 0) {
      this.attackTimer = 0.25;
      return;
    }

    const dx = en.x[best] - this.x;
    const dz = en.z[best] - this.z;
    const d = Math.hypot(dx, dz) || 1;
    const nx = dx / d;
    const nz = dz / d;
    const damage = this.def.damage * ctx.stats.damageMul;
    if (this.def.attack === 'lightning') {
      ctx.effects.spawnLightning(en.x[best], en.z[best]);
    } else {
      ctx.effects.spawnThrust(this.x, this.z, nx, nz, Math.min(8, d), 0.9, 0.55, 1.35, 2.2);
    }
    const died = en.damageAt(best, damage);
    ctx.damageText.spawn(damage, en.x[best], en.scale[best] * 0.7, en.z[best], false);
    en.push(best, nx, nz, 3.5);
    if (died) ctx.onKill(best);
    this.attacks++;
    this.attackTimer = this.def.cooldown * ctx.stats.cooldownMul;
  }
}
