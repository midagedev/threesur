import { Scene } from 'three';
import type { Atlas } from '../gfx/atlas';
import type { CameraRig } from '../gfx/camera';
import type { Input } from '../core/input';
import { Ground } from '../gfx/ground';
import { InstancedSpriteRenderer, ShadowRenderer } from '../gfx/sprites';
import { EffectsSystem } from '../gfx/effects';
import { ParticleSystem } from '../gfx/particles';
import { DamageText } from '../gfx/damageText';
import { Labels } from '../gfx/labels';
import { Player } from './player';
import { EnemyPool, ENEMY_CAP, SHEET_SGRADE, SHEET_APRIORITY } from './enemies';
import { Spawner } from './spawner';
import { SpatialHash } from './collision';
import { GemPool } from './pickups';
import { ProjectilePool } from './projectiles';
import { ZonePool } from './zones';
import { EnemyProjectilePool } from './enemyProjectiles';
import { TreasurePool } from './treasure';
import { Combo } from './combo';
import { Musou } from './musou';
import { Boss } from './boss';
import { BattlefieldEvents } from './events';
import { BattlefieldObjects } from './objects';
import type { BuffKind } from './player';
import { RELIC_BY_ID, rollRelic } from '../data/relics';
import type { Weapon, WeaponContext } from './weapons/types';
import { createWeapon } from './weapons/roster';
import { LevelUp } from './levelup';
import type { CardView } from './levelup';
import { Hud } from '../ui/hud';
import type { HudState, SlotView } from '../ui/hud';
import { HEROES } from '../data/heroes';
import type { HeroDef } from '../data/heroes';
import { WEAPON_DEFS, EVOLUTIONS } from '../data/weapons';
import { PASSIVE_DEFS, PASSIVE_BY_ID } from '../data/passives';
import type { MetaMods } from '../data/upgrades';
import { rng } from '../core/rng';
import { audio } from '../core/audio';

type State = 'attract' | 'play' | 'levelup' | 'paused' | 'dead' | 'victory' | 'victoryChoice';

// 런 종료 결과 (App이 저장·결과화면에 사용).
export interface RunResult {
  victory: boolean;
  heroId: string;
  time: number;
  kills: number;
  maxCombo: number;
  level: number;
  goldEarned: number; // 전투 골드 + 콤보 보너스
  comboBonus: number;
  weapons: { id: string; level: number }[];
  passives: { id: string; level: number }[];
  bosses: string[]; // 처치한 보스 type id
  endless: boolean; // 무한 모드 진입 여부(10분 승리 후 계속 전투)
}

// App이 주입하는 씬 전환 콜백.
export interface RunHooks {
  onEnd: (result: RunResult) => void; // 사망/승리 시
  onPause: () => void; // Esc 일시정지 → App이 메뉴 표시
}

const MAX_WEAPONS = 6;
const MAX_PASSIVES = 6;
const REROLL_COST = 50;
const RUN_LENGTH = 600; // 10분

type Choice =
  | { kind: 'newWeapon'; id: string }
  | { kind: 'upWeapon'; id: string }
  | { kind: 'newPassive'; id: string }
  | { kind: 'upPassive'; id: string }
  | { kind: 'relic'; id: string }
  | { kind: 'reward'; id: 'heal' | 'gold' | 'xp' };

const MAX_RELICS = 2;
const RELIC_CHANCE = 0.1; // 레벨업 카드에 저주 유물 등장 확률

// 씬 상태머신 훅: Phase 3에서 Title→Select→Run→Result가 이 위에 붙는다.
export class Run {
  readonly scene = new Scene();

  private readonly rig: CameraRig;
  private readonly input: Input;
  private readonly atlas: Atlas;

  private readonly ground: Ground;
  private readonly soldiersR: InstancedSpriteRenderer;
  private readonly variantsR: InstancedSpriteRenderer;
  private readonly sgradeR: InstancedSpriteRenderer;
  private readonly apriorityR: InstancedSpriteRenderer;
  private readonly shadowR: ShadowRenderer;
  private readonly effects: EffectsSystem;
  private readonly particles: ParticleSystem;
  private readonly damageText: DamageText;
  private readonly labels: Labels;

  private readonly player: Player;
  private readonly enemies = new EnemyPool();
  private readonly spawner: Spawner;
  private readonly hash = new SpatialHash();
  private readonly gems: GemPool;
  private readonly projectiles: ProjectilePool;
  private readonly zones: ZonePool;
  private readonly enemyProj: EnemyProjectilePool;
  private readonly treasure: TreasurePool;
  private weapons: Weapon[];
  private passives: Record<string, number> = {};

  private readonly combo: Combo;
  private readonly musou: Musou;
  private readonly boss: Boss;
  private readonly events: BattlefieldEvents;
  private readonly objects: BattlefieldObjects;

  private readonly hud: Hud;
  private readonly levelup = new LevelUp();
  private readonly hooks: RunHooks;

  private hero: HeroDef = HEROES.zhaoyun;
  private meta: MetaMods | null = null;
  private state: State = 'attract';
  private gameTime = 0;
  private kills = 0;
  private level = 1;
  private xp = 0;
  private nextXp = 5 + 1 * 10;
  private pendingLevels = 0;
  private gold = 0; // 런 중 사용 가능 골드 (리롤에 소비)
  private goldEarned = 0; // 전투로 번 골드 누적 (메타 적립용, 리롤 무관)
  private maxCombo = 0;
  private readonly bossesKilled = new Set<string>();
  private reviveAvailable = false;
  private reviveUsed = false;
  private ended = false; // onEnd 중복 방지
  private attractTime = 0;
  private bossFlags = { b3: false, b6: false, b9: false };
  private frameKills = 0;
  private rerolledThisLevel = false;
  private relicIds: string[] = []; // 보유 저주 유물(카드 중복 방지·카운트)
  private feverWasOn = false; // 콤보 피버 진입 감지
  private endless = false; // 무한 모드(10분 승리 후 계속)
  private victoryChoiceShown = false; // 승리 선택 오버레이 1회 표시
  private victoryAchieved = false; // 10분 도달(이후 사망해도 승리 처리)
  private forceRelicNext = false; // 테스트: 다음 레벨업 카드에 유물 강제
  private readonly victoryOverlay: HTMLDivElement;

  // 히트스탑: 시뮬 dt만 스케일, 연출/카메라는 실제 dt 유지 (game-feel)
  private timeScale = 1;
  private hitstopRemaining = 0;

  // 무쌍 포스트 연출 (main이 읽어 파이프라인에 전달)
  musouStrength = 0;
  renderTime = 0;

  private readonly scratch: number[] = [];
  private readonly ctx: WeaponContext;
  private readonly damageFlash: HTMLDivElement;
  private curChoices: Choice[] = [];

  constructor(atlas: Atlas, rig: CameraRig, input: Input, hooks: RunHooks, touch = false) {
    this.atlas = atlas;
    this.rig = rig;
    this.input = input;
    this.hooks = hooks;
    this.hud = new Hud(touch);

    this.ground = new Ground(this.scene);
    this.soldiersR = new InstancedSpriteRenderer(atlas.soldiers, ENEMY_CAP);
    this.variantsR = new InstancedSpriteRenderer(atlas.variants, ENEMY_CAP);
    this.sgradeR = new InstancedSpriteRenderer(atlas.sgrade, 48);
    this.apriorityR = new InstancedSpriteRenderer(atlas.apriority, 48);
    this.shadowR = new ShadowRenderer(ENEMY_CAP + 1);
    this.scene.add(
      this.soldiersR.mesh,
      this.variantsR.mesh,
      this.sgradeR.mesh,
      this.apriorityR.mesh,
      this.shadowR.mesh,
    );

    this.effects = new EffectsSystem(this.scene);
    this.particles = new ParticleSystem(this.scene);
    this.damageText = new DamageText(this.scene);
    this.labels = new Labels(this.scene);
    this.gems = new GemPool(this.scene);
    this.projectiles = new ProjectilePool(this.scene);
    this.zones = new ZonePool(this.scene);
    this.enemyProj = new EnemyProjectilePool(this.scene);
    this.treasure = new TreasurePool(this.scene);

    this.player = new Player(atlas, this.hero);
    this.player.setRimScale(touch ? 0.5 : 1); // 모바일 저해상도 블룸에서 림 과다 방지
    this.scene.add(this.player.mesh);
    this.spawner = new Spawner(atlas, this.enemies);
    this.weapons = [createWeapon(this.hero.startWeapon)];

    this.combo = new Combo(
      (text) => this.hud.banner(text, '#e8c667', 60),
      () => this.hud.punchCombo(),
    );
    this.musou = new Musou(this.hero.musou, () => {
      this.hud.banner('無雙', '#ffe9a8', 120, 1200);
      audio.sfx('musou');
    });
    this.boss = new Boss(atlas, (name, hanja) => {
      this.hud.banner(`${name} 등장 ${hanja}`, '#e85c4a', 44, 1800);
      audio.sfx('bossHorn');
      audio.playBgm('boss');
    });

    // 전장 이벤트 (보급 마차/황건 러시/유성우)
    this.events = new BattlefieldEvents({
      enemies: this.enemies,
      zones: this.zones,
      effects: this.effects,
      particles: this.particles,
      atlas,
      rng,
      banner: (text, color) => {
        this.hud.banner(text, color, 44, 1800);
        audio.sfx('warn');
      },
      playerX: () => this.player.x,
      playerZ: () => this.player.z,
      hitPlayer: (dmg) => {
        this.onPlayerHit(dmg);
      },
    });

    // 전장 오브젝트 (화약통/만두/사당)
    this.objects = new BattlefieldObjects(this.scene, {
      effects: this.effects,
      particles: this.particles,
      rng,
      playerX: () => this.player.x,
      playerZ: () => this.player.z,
      playerRadius: this.player.radius,
      damageArea: (x, z, r, dmg) => {
        this.shockwave(x, z, r, dmg);
        audio.sfx('explosion');
      },
      heal: (frac) => {
        this.player.heal(this.player.maxHp * frac);
        audio.sfx('buff');
      },
      applyBuff: (kind: BuffKind, dur) => {
        this.player.applyBuff(kind, dur);
        audio.sfx('buff');
      },
      banner: (text, color) => {
        this.hud.banner(text, color, 40, 1400);
      },
    });

    // 재사용 무기 컨텍스트 (프레임당 할당 회피)
    this.ctx = {
      dt: 0,
      gameTime: 0,
      px: 0,
      pz: 0,
      faceX: 0,
      faceZ: 1,
      hash: this.hash,
      enemies: this.enemies,
      effects: this.effects,
      damageText: this.damageText,
      projectiles: this.projectiles,
      zones: this.zones,
      particles: this.particles,
      stats: this.player.stats,
      rng,
      onKill: (i: number) => this.handleKill(i),
      scratch: this.scratch,
    };

    // 낙뢰 화면 미세 플래시 훅
    this.effects.screenFlash = (i: number) => this.flashScreen(i);

    // 피격/사망 데미지 비네트 (붉은 방사형)
    this.damageFlash = document.createElement('div');
    this.damageFlash.style.cssText = [
      'position:fixed',
      'inset:0',
      'pointer-events:none',
      'opacity:0',
      'z-index:30',
      'background:radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(180,30,24,0.85) 100%)',
    ].join(';');
    document.body.appendChild(this.damageFlash);

    // 10분 승리 선택 오버레이 (계속 싸운다 → 무한 모드 / 결과 보기 → 종료). 자체 DOM.
    this.victoryOverlay = document.createElement('div');
    this.victoryOverlay.style.cssText = [
      'position:fixed', 'inset:0', 'display:none', 'flex-direction:column', 'align-items:center',
      'justify-content:center', 'gap:18px', 'background:rgba(6,7,12,0.86)', 'z-index:41',
      'font-family:"Nanum Myeongjo","Times New Roman",serif', 'text-align:center',
    ].join(';');
    this.victoryOverlay.innerHTML =
      '<div style="color:#ffe9a8;font-size:58px;letter-spacing:10px;text-shadow:0 0 24px rgba(255,233,168,0.7);">天下統一</div>' +
      '<div style="color:#f0e4c0;font-size:19px;letter-spacing:3px;">천하통일 — 계속 싸우겠는가?</div>';
    const vrow = document.createElement('div');
    vrow.style.cssText = 'display:flex;gap:16px;margin-top:8px;';
    const mkVBtn = (label: string, primary: boolean, onClick: () => void): void => {
      const btn = document.createElement('button');
      btn.textContent = label;
      btn.style.cssText = [
        'padding:12px 24px', 'border-radius:8px', 'cursor:pointer', 'font-size:16px',
        'letter-spacing:2px', 'font-family:inherit',
        primary
          ? 'background:linear-gradient(180deg,#e8c667,#a8791f);color:#161006;border:none;'
          : 'background:transparent;color:#e8c667;border:1px solid #6b5a2e;',
      ].join(';');
      btn.addEventListener('click', onClick);
      vrow.appendChild(btn);
    };
    mkVBtn('계속 싸운다 無限', true, () => this.continueEndless());
    mkVBtn('결과 보기 結果', false, () => this.finish(true));
    this.victoryOverlay.appendChild(vrow);
    document.body.appendChild(this.victoryOverlay);
  }

  private flashDamage(peak: number, durationMs: number): void {
    this.damageFlash.animate([{ opacity: peak }, { opacity: 0 }], {
      duration: durationMs,
      easing: 'ease-out',
    });
  }

  // 낙뢰/무쌍 순간 흰 화면 미세 플래시 (WAAPI 짧게)
  private flashScreen(intensity: number): void {
    const el = document.createElement('div');
    el.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:31;background:rgba(200,220,255,1);';
    document.body.appendChild(el);
    el.animate([{ opacity: intensity }, { opacity: 0 }], { duration: 120, easing: 'ease-out' }).onfinish =
      () => el.remove();
  }

  private hitstop(durationMs: number, scale = 0.05): void {
    this.hitstopRemaining = Math.max(this.hitstopRemaining, durationMs / 1000);
    this.timeScale = scale;
  }

  // 장수 교체 (선택 화면). 스프라이트/스탯/무쌍 종류 갱신.
  setHero(heroId: string): void {
    const h = HEROES[heroId];
    if (!h) return;
    this.hero = h;
    this.player.setHero(h);
    this.musou.setHero(h.musou);
  }

  // 타이틀/선택/상점 배경용 어트랙트 모드(적 없이 지면+반딧불만, 플레이어 숨김).
  enterAttract(): void {
    this.resetPools();
    this.player.mesh.visible = false;
    this.hud.setVisible(false);
    this.state = 'attract';
    this.attractTime = 0;
  }

  // 런 시작: 장수 + 메타 강화 적용 후 플레이 진입.
  beginRun(heroId: string, meta: MetaMods): void {
    this.setHero(heroId);
    this.meta = meta;
    this.player.setMeta(meta);
    this.restart();
  }

  private resetPools(): void {
    this.enemies.reset();
    this.gems.reset();
    this.projectiles.reset();
    this.zones.reset();
    this.enemyProj.reset();
    this.treasure.reset();
    this.labels.reset();
    this.spawner.reset();
    this.combo.reset();
    this.musou.reset();
    this.events.reset();
    this.objects.reset();
    this.boss.active = false;
    this.boss.idx = -1;
  }

  private restart(): void {
    this.resetPools();
    this.passives = {};
    this.player.reset(this.passives);
    this.player.mesh.visible = true;
    this.weapons = [createWeapon(this.hero.startWeapon)];
    this.gameTime = 0;
    this.kills = 0;
    this.xp = 0;
    this.gold = 0;
    this.goldEarned = 0;
    this.maxCombo = 0;
    this.bossesKilled.clear();
    this.ended = false;
    this.bossFlags = { b3: false, b6: false, b9: false };
    this.timeScale = 1;
    this.hitstopRemaining = 0;
    this.musouStrength = 0;
    this.relicIds = [];
    this.endless = false;
    this.victoryChoiceShown = false;
    this.victoryAchieved = false;
    this.forceRelicNext = false;
    this.feverWasOn = false;
    this.victoryOverlay.style.display = 'none';
    this.hud.setFever(false);
    // 메타: 부활 + 시작 레벨
    this.reviveAvailable = this.meta?.revive ?? false;
    this.reviveUsed = false;
    const startLv = this.meta?.startLevel ?? 0;
    this.level = 1 + startLv;
    this.nextXp = 5 + this.level * 10;
    this.pendingLevels = startLv;
    this.hud.setVisible(true);
    this.hud.resetSlots();
    this.refreshLoadout();
    this.state = 'play';
    audio.playBgm('battle');
  }

  // 좌상단 무기/패시브 슬롯 바 갱신 (변경 시에만 호출).
  private refreshLoadout(): void {
    const wv: SlotView[] = [];
    for (const w of this.weapons) {
      wv.push({ id: w.id, glyph: (WEAPON_DEFS[w.id]?.hanja ?? '?')[0], level: w.level, accent: '#e8c667' });
    }
    const pv: SlotView[] = [];
    for (const id in this.passives) {
      pv.push({ id, glyph: (PASSIVE_BY_ID[id]?.hanja ?? '?')[0], level: this.passives[id], accent: '#7ec8ff' });
    }
    this.hud.setLoadout(wv, pv);
  }

  // 일시정지 (Esc). App이 메뉴 표시.
  pause(): void {
    if (this.state !== 'play') return;
    this.state = 'paused';
    this.hooks.onPause();
  }

  resume(): void {
    if (this.state === 'paused') this.state = 'play';
  }

  // 포기 (일시정지 메뉴). 현재 상태로 패배 결과 방출.
  abandon(): void {
    if (this.state === 'paused' || this.state === 'play') this.finish(this.victoryAchieved);
  }

  get musouGauge(): number {
    return this.musou.gauge;
  }
  get musouReadyFlag(): boolean {
    return this.musou.ready;
  }
  get currentState(): State {
    return this.state;
  }

  update(dt: number): void {
    this.renderTime += dt;

    // 어트랙트(메뉴 배경): 지면/반딧불/파티클 + 느린 카메라 드리프트만.
    if (this.state === 'attract') {
      this.attractTime += dt;
      const tx = Math.sin(this.attractTime * 0.06) * 5;
      const tz = Math.cos(this.attractTime * 0.05) * 5;
      this.ground.update(dt, tx, tz);
      this.particles.update(dt);
      this.effects.update(dt);
      this.rig.update(dt, tx, tz);
      this.musouStrength += (0 - this.musouStrength) * Math.min(1, dt * 6);
      this.renderSprites();
      return;
    }

    // 종료/선택 상태: 오버레이가 위에 뜬 채 마지막 프레임을 정지(버튼은 DOM으로 동작).
    if (this.state === 'dead' || this.state === 'victory' || this.state === 'victoryChoice') return;

    if (this.state === 'levelup') {
      if (this.input.consumePressed('Digit1')) this.pickCard(0);
      else if (this.input.consumePressed('Digit2')) this.pickCard(1);
      else if (this.input.consumePressed('Digit3')) this.pickCard(2);
      return;
    }
    if (this.input.consumePressed('Escape') || this.input.consumePressed('KeyP')) {
      this.pause();
    }
    if (this.state === 'paused') return;

    // 무쌍 발동
    if (this.input.consumePressed('Space') && this.musou.activate()) {
      this.rig.addTrauma(0.5);
      this.flashScreen(0.35);
    }

    // 히트스탑: 실제 시간 감쇠, 시뮬 dt만 스케일
    if (this.hitstopRemaining > 0) {
      this.hitstopRemaining -= dt;
      if (this.hitstopRemaining <= 0) this.timeScale = 1;
    }
    const gdt = dt * this.timeScale;
    const edt = gdt * this.musou.enemyTimeScale; // 적 전용 dt (무쌍 슬로우)
    this.frameKills = 0;
    this.musou.chargeMul = this.player.musouBuffed ? 2 : 1; // 사당 '무쌍 충전' 버프

    // === 시뮬레이션 ===
    this.gameTime += gdt;
    this.player.musouInvuln = this.musou.active;
    this.player.update(gdt, this.input);

    // 보스 스케줄
    this.checkBossSpawn();

    this.spawner.update(edt, this.gameTime, this.player.x, this.player.z);
    this.spawner.setBossActive(this.boss.active);

    // 분리용 해시 (이동 전)
    this.hash.clear();
    this.enemies.insertAll(this.hash);
    this.enemies.update(edt, this.player.x, this.player.z, this.hash, this.enemyProj);

    // ctx 갱신
    this.ctx.dt = gdt;
    this.ctx.gameTime = this.gameTime;
    this.ctx.px = this.player.x;
    this.ctx.pz = this.player.z;
    this.ctx.faceX = this.player.faceX;
    this.ctx.faceZ = this.player.faceZ;

    // 보스 패턴 (적 dt)
    this.ctx.dt = edt;
    this.boss.update(edt, this.ctx, this.enemyProj, this.player.x, this.player.z);
    // 전장 이벤트(보급 마차/황건 러시/유성우) — 적 dt로 진행
    this.events.update(edt, this.gameTime);
    this.ctx.dt = gdt;

    // 이동 후 해시 재구성 (무기/접촉 판정)
    this.hash.clear();
    this.enemies.insertAll(this.hash);

    // 무기
    for (let i = 0; i < this.weapons.length; i++) this.weapons[i].update(this.ctx);
    this.projectiles.update(
      gdt, this.player.x, this.player.z, this.enemies, this.hash,
      this.damageText, this.ctx.onKill, this.particles, this.scratch,
    );
    this.zones.update(gdt, this.enemies, this.hash, this.damageText, this.ctx.onKill, this.particles, this.scratch);

    // 전장 오브젝트: 접촉(만두/사당) + 화약통은 플레이어 근접 시 무기 판정으로 유폭
    this.objects.update(gdt, this.gameTime);
    this.objects.hitAt(this.player.x, this.player.z, 4.0);

    // 무쌍 난무 (실제 dt로 진행, 종료 시 마무리 충격파)
    this.ctx.dt = dt;
    this.musou.update(dt, this.ctx, this.player);
    this.ctx.dt = gdt;

    // 적 투사체 (적 dt)
    this.enemyProj.update(edt, this.player.x, this.player.z, this.player.radius, this.onPlayerHit);

    // 접촉 대미지
    this.contactDamage();

    // 대량 처치 히트스탑
    if (this.frameKills >= 8) {
      this.hitstop(30, 0.08);
      this.rig.addTrauma(0.35);
    }

    // 픽업
    this.gems.update(gdt, this.player.x, this.player.z, this.player.stats.pickupMul, this.onCollect);
    this.treasure.update(gdt, this.player.x, this.player.z, this.player.stats.pickupMul, this.onTreasure);

    // 연출 (실제 dt)
    this.combo.update(gdt);
    // 콤보 피버: 화면 연출 + 진입 사운드 (XP 1.5배는 onCollect에서)
    const fever = this.combo.fever;
    this.hud.setFever(fever);
    if (fever && !this.feverWasOn) audio.sfx('fever');
    this.feverWasOn = fever;
    this.effects.update(dt);
    this.particles.update(dt);
    this.damageText.update(dt);
    this.ground.update(dt, this.player.x, this.player.z);
    this.rig.update(dt, this.player.x, this.player.z);

    // 무쌍 포스트 연출 세기 부드럽게
    const target = this.musou.active ? 0.9 : 0;
    this.musouStrength += (target - this.musouStrength) * Math.min(1, dt * 6);

    // 렌더 버퍼
    this.renderSprites();
    this.updateLabels();

    // 레벨업 대기
    if (this.pendingLevels > 0 && this.state === 'play') this.showNextLevelUp();

    // 종료 판정 (사망 → 부활 또는 결과, 10분 도달 → 승리 선택)
    if (this.player.dead) this.onPlayerDeath();
    else if (!this.endless && !this.victoryChoiceShown && this.gameTime >= RUN_LENGTH) this.showVictoryChoice();
    // 종료된 프레임은 HUD 갱신 생략(숨김 상태 유지).
    if (this.ended) return;

    this.hud.update(this.buildHudState());
  }

  private buildHudState(): HudState {
    return {
      time: this.gameTime,
      kills: this.kills,
      level: this.level,
      xp: this.xp,
      nextXp: this.nextXp,
      hp: this.player.hp,
      maxHp: this.player.maxHp,
      gold: this.gold,
      musouPct: this.musou.gauge,
      musouReady: this.musou.ready,
      combo: this.combo.count,
      bossActive: this.boss.active,
      bossName: this.boss.name,
      bossHanja: this.boss.hanja,
      bossFrac: this.boss.hpFrac(this.ctx),
    };
  }

  private checkBossSpawn(): void {
    if (this.boss.active) return;
    if (!this.bossFlags.b3 && this.gameTime >= 180) {
      this.bossFlags.b3 = true;
      this.boss.spawn('yuanshao', this.gameTime / 60, this.ctx, this.player.x, this.player.z);
    } else if (!this.bossFlags.b6 && this.gameTime >= 360) {
      this.bossFlags.b6 = true;
      this.boss.spawn('dongzhuo', this.gameTime / 60, this.ctx, this.player.x, this.player.z);
    } else if (!this.bossFlags.b9 && this.gameTime >= 540) {
      this.bossFlags.b9 = true;
      this.boss.spawn('lvbu', this.gameTime / 60, this.ctx, this.player.x, this.player.z);
    }
  }

  private renderSprites(): void {
    this.shadowR.begin();
    if (this.state !== 'attract') this.shadowR.push(this.player.x, this.player.z, this.player.radius * 1.6);
    this.enemies.render(
      this.atlas, this.soldiersR, this.variantsR, this.sgradeR, this.apriorityR, this.shadowR,
    );
    this.shadowR.end();
    this.gems.render();
    this.projectiles.render(this.renderTime);
    this.zones.render(this.renderTime);
    this.enemyProj.render(this.renderTime);
    this.treasure.render();
    this.objects.render(this.renderTime);
  }

  // 엘리트/보스 머리 위 이름표 갱신 (specials 리스트 사용, 죽은 항목 지연 제거)
  private updateLabels(): void {
    const en = this.enemies;
    const sp = en.specials;
    this.labels.begin();
    for (let k = sp.length - 1; k >= 0; k--) {
      const i = sp[k];
      if (en.alive[i] === 0 || en.labels[i] === null) {
        sp.splice(k, 1);
        continue;
      }
      this.labels.place(en.labels[i]!, en.x[i], en.scale[i] * 1.05, en.z[i]);
      // 보급 마차 금색 트레일
      if (en.cart[i] === 1 && Math.random() < 0.6) {
        this.particles.emit(en.x[i], 0.8, en.z[i], 0, 0.5, 0, 2.2, 1.8, 0.6, 0.6, 0.5, -0.4, 0.9);
      }
    }
    this.labels.end();
  }

  private contactDamage(): void {
    const px = this.player.x;
    const pz = this.player.z;
    const n = this.hash.query(px, pz, this.player.radius + 1.8, this.scratch);
    let maxDmg = 0;
    for (let c = 0; c < n; c++) {
      const j = this.scratch[c];
      if (this.enemies.alive[j] === 0) continue;
      const dx = px - this.enemies.x[j];
      const dz = pz - this.enemies.z[j];
      const rr = this.player.radius + this.enemies.radius[j];
      if (dx * dx + dz * dz <= rr * rr) {
        if (this.enemies.damage[j] > maxDmg) maxDmg = this.enemies.damage[j];
      }
    }
    if (maxDmg > 0 && this.player.takeDamage(maxDmg * 0.5)) {
      this.hitstop(70, 0.05);
      this.rig.addTrauma(0.5);
      this.flashDamage(0.45, 320);
      this.musou.addHit();
      audio.sfx('playerHit');
    }
  }

  private readonly onPlayerHit = (dmg: number): boolean => {
    if (this.player.takeDamage(dmg)) {
      this.rig.addTrauma(0.4);
      this.flashDamage(0.4, 300);
      this.musou.addHit();
      audio.sfx('playerHit');
    }
    return true;
  };

  private addGold(amount: number): void {
    this.gold += amount;
    this.goldEarned += amount;
  }

  private handleKill(i: number): void {
    const en = this.enemies;
    const x = en.x[i];
    const z = en.z[i];
    if (en.cart[i] === 1) {
      // 보급 마차 확보: 골드 대량 + 보물상자
      this.particles.burst(x, z, 2.6, 2.0, 0.7, 30, 6);
      this.effects.spawnRing(x, z, 7, 2.6, 2.0, 0.7, 0.6);
      this.treasure.spawn(x, z, false);
      this.addGold(Math.round(400 * this.player.stats.goldMul));
      this.hud.banner('보급 확보 補給確保', '#ffe14d', 52, 1500);
      audio.sfx('levelup');
      this.kills++;
      en.kill(i);
      return;
    }
    if (en.boss[i] === 1) {
      // 보스 처치: 대형 폭발 + 보물상자 + 큰 보상 + BGM 복귀 + 도감 기록
      this.particles.burst(x, z, 2.6, 1.6, 0.7, 60, 8);
      this.effects.spawnRing(x, z, 16, 2.4, 1.6, 0.8, 0.7);
      this.effects.spawnRing(x, z, 10, 2.2, 1.2, 2.0, 0.5);
      this.treasure.spawn(x, z, true);
      this.hitstop(120, 0.05);
      this.rig.addTrauma(0.9);
      this.flashScreen(0.4);
      this.hud.banner('討伐', '#e8c667', 90, 1600);
      audio.sfx('levelup');
      if (this.boss.typeId) this.bossesKilled.add(this.boss.typeId);
      audio.playBgm('battle'); // 보스 처치 → 전투 BGM 복귀
      this.addGold(Math.round(300 * this.player.stats.goldMul));
      this.kills++;
      en.kill(i);
      return;
    }
    if (en.elite[i] === 1) {
      this.particles.burst(x, z, 2.4, 1.4, 0.7, 26, 6);
      this.effects.spawnRing(x, z, 6, 2.2, 1.6, 0.8, 0.5);
      this.treasure.spawn(x, z, false);
      this.hitstop(60, 0.06);
      this.rig.addTrauma(0.4);
      audio.sfx('hit');
      this.addGold(Math.round(50 * this.player.stats.goldMul));
      this.kills++;
      en.kill(i);
      return;
    }
    // 일반: 사망 파티클 버스트(적 틴트) + 젬
    this.particles.burst(x, z, 2.2 * en.tr[i], 1.3 * en.tg[i], 0.5 * en.tb[i], 14, 4.5);
    this.gems.spawn(x, z, en.gemValue[i]);
    this.addGold(this.player.stats.goldMul); // 소량 누적
    this.kills++;
    this.frameKills++;
    audio.sfx('hit');
    const bonus = this.combo.onKill();
    if (this.combo.count > this.maxCombo) this.maxCombo = this.combo.count;
    if (bonus > 0) this.xp += bonus * this.player.stats.xpMul;
    this.musou.addKill(this.combo.count);
    this.rig.punchFov(-0.5); // 미세 펀치줌
    en.kill(i);
  }

  private readonly onCollect = (value: number): void => {
    const feverMul = this.combo.fever ? 1.5 : 1; // 콤보 피버 시 XP 1.5배
    this.xp += value * this.player.stats.xpMul * feverMul;
    audio.sfx('gem');
    this.particles.emit(this.player.x, 1.0, this.player.z, 0, 1.5, 0, 0.4, 0.8, 2.2, 0.7, 0.4, 3, 0.9);
    while (this.xp >= this.nextXp) {
      this.xp -= this.nextXp;
      this.level++;
      this.nextXp = 5 + this.level * 10;
      this.pendingLevels++;
      this.hud.punchLevel();
      audio.sfx('levelup');
    }
  };

  // 보물상자 획득: 진화 우선, 없으면 고급 보상.
  private readonly onTreasure = (boss: boolean): void => {
    this.effects.spawnRing(this.player.x, this.player.z, 5, 2.6, 2.0, 0.8, 0.5);
    const evo = this.tryEvolve();
    if (evo) {
      this.hud.banner(`진화! ${evo}`, '#ff9a3c', 56, 1800);
      audio.sfx('evolve');
      this.refreshLoadout();
      return;
    }
    // 고급 보상: 회복 + 골드 + 경험치
    this.player.heal(this.player.maxHp * (boss ? 0.6 : 0.35));
    this.addGold(Math.round((boss ? 200 : 80) * this.player.stats.goldMul));
    this.xp += (boss ? this.nextXp * 1.5 : this.nextXp * 0.6) * this.player.stats.xpMul;
    this.hud.banner(boss ? '보물 寶物' : '보상 報償', '#9affc0', 48, 1400);
    while (this.xp >= this.nextXp) {
      this.xp -= this.nextXp;
      this.level++;
      this.nextXp = 5 + this.level * 10;
      this.pendingLevels++;
    }
  };

  // 진화 가능하면 실행하고 진화 무기 이름 반환, 아니면 null.
  private tryEvolve(): string | null {
    for (const rule of EVOLUTIONS) {
      const w = this.weapons.find((x) => x.id === rule.from);
      if (!w || w.level < 8) continue;
      if ((this.passives[rule.passive] ?? 0) < 1) continue;
      if (this.weapons.some((x) => x.id === rule.to)) continue;
      const idx = this.weapons.indexOf(w);
      this.weapons[idx] = createWeapon(rule.to);
      this.projectiles.clearOrbits(); // 팔진도 진화 대비 정리
      this.effects.spawnRing(this.player.x, this.player.z, 9, 2.8, 1.6, 2.4, 0.8);
      return WEAPON_DEFS[rule.to].name;
    }
    return null;
  }

  // === 레벨업 카드 ===
  private showNextLevelUp(): void {
    if (this.pendingLevels <= 0) {
      this.state = 'play';
      return;
    }
    this.pendingLevels--;
    this.state = 'levelup';
    this.rerolledThisLevel = false;
    this.openCards();
  }

  private openCards(): void {
    this.curChoices = this.buildChoices();
    const views = this.curChoices.map((c) => this.cardView(c));
    this.levelup.open(
      views,
      Math.floor(this.gold),
      !this.rerolledThisLevel && this.gold >= REROLL_COST,
      (i) => this.pickCard(i),
      () => this.reroll(),
    );
  }

  private reroll(): void {
    if (this.rerolledThisLevel || this.gold < REROLL_COST) return;
    this.gold -= REROLL_COST;
    this.rerolledThisLevel = true;
    this.openCards();
  }

  private buildChoices(): Choice[] {
    const pool: Choice[] = [];
    for (const w of this.weapons) {
      if (w.level < 8 && WEAPON_DEFS[w.id] && !WEAPON_DEFS[w.id].evolution) {
        pool.push({ kind: 'upWeapon', id: w.id });
      }
    }
    for (const id in this.passives) {
      const def = PASSIVE_BY_ID[id];
      if (def && this.passives[id] < def.maxLevel) pool.push({ kind: 'upPassive', id });
    }
    if (this.weapons.length < MAX_WEAPONS) {
      for (const id in WEAPON_DEFS) {
        const def = WEAPON_DEFS[id];
        if (def.evolution) continue;
        if (this.weapons.some((w) => w.id === id)) continue;
        pool.push({ kind: 'newWeapon', id });
      }
    }
    if (Object.keys(this.passives).length < MAX_PASSIVES) {
      for (const def of PASSIVE_DEFS) {
        if (this.passives[def.id] === undefined) pool.push({ kind: 'newPassive', id: def.id });
      }
    }
    // 셔플 후 3개
    for (let i = pool.length - 1; i > 0; i--) {
      const j = rng.int(i + 1);
      const t = pool[i];
      pool[i] = pool[j];
      pool[j] = t;
    }
    const out = pool.slice(0, 3);
    while (out.length < 3) {
      const r = (['heal', 'gold', 'xp'] as const)[out.length % 3];
      out.push({ kind: 'reward', id: r });
    }
    // 저주 유물: 10% 확률(또는 테스트 강제)로 한 칸을 유물로 교체 (최대 2개 보유)
    if (this.relicIds.length < MAX_RELICS && (this.forceRelicNext || rng.next() < RELIC_CHANCE)) {
      const relic = rollRelic(() => rng.next(), this.relicIds);
      if (relic) out[rng.int(out.length)] = { kind: 'relic', id: relic.id };
      this.forceRelicNext = false;
    }
    return out;
  }

  private cardView(c: Choice): CardView {
    if (c.kind === 'newWeapon') {
      const d = WEAPON_DEFS[c.id];
      return { title: d.name, hanja: d.hanja, desc: d.desc, tag: '무기 · 신규', accent: '#e8c667', symbol: d.hanja[0], badge: '신규' };
    }
    if (c.kind === 'upWeapon') {
      const d = WEAPON_DEFS[c.id];
      const w = this.weapons.find((x) => x.id === c.id)!;
      const willMax = w.level + 1 >= 8;
      return {
        title: d.name,
        hanja: d.hanja,
        desc: d.desc,
        tag: `무기 강화 Lv${w.level}→${w.level + 1}`,
        accent: '#e8a94a',
        symbol: d.hanja[0],
        badge: willMax ? '최대' : '강화',
        rare: willMax, // Lv8 도달 → 진화 조건 근접 강조
      };
    }
    if (c.kind === 'newPassive') {
      const d = PASSIVE_BY_ID[c.id];
      return { title: d.name, hanja: d.hanja, desc: d.desc(1), tag: '패시브 · 신규', accent: '#7ec8ff', symbol: d.hanja[0], badge: '신규', rare: d.rare };
    }
    if (c.kind === 'upPassive') {
      const d = PASSIVE_BY_ID[c.id];
      const lvl = this.passives[c.id];
      return { title: d.name, hanja: d.hanja, desc: d.desc(lvl + 1), tag: `패시브 Lv${lvl}→${lvl + 1}`, accent: '#7ec8ff', symbol: d.hanja[0], badge: '강화', rare: d.rare };
    }
    if (c.kind === 'relic') {
      const d = RELIC_BY_ID[c.id];
      return { title: d.name, hanja: d.hanja, desc: d.desc, tag: '저주 유물', accent: '#c77dff', symbol: d.hanja[0], badge: '저주', rare: true };
    }
    // reward
    const map = {
      heal: { title: '재정비', hanja: '再整備', desc: '체력 50% 회복', symbol: '治' },
      gold: { title: '군자금', hanja: '軍資金', desc: '골드 +200', symbol: '金' },
      xp: { title: '병법 수련', hanja: '兵法修鍊', desc: '경험치 대량 획득', symbol: '書' },
    };
    const m = map[c.id];
    return { title: m.title, hanja: m.hanja, desc: m.desc, tag: '보상', accent: '#9affc0', symbol: m.symbol, badge: '보상' };
  }

  private pickCard(index: number): void {
    if (!this.levelup.active && this.state !== 'levelup') return;
    const c = this.curChoices[index];
    if (!c) return;
    audio.sfx('cardSelect');
    this.applyChoice(c);
    this.levelup.close();
    this.refreshLoadout();
    this.showNextLevelUp();
  }

  private applyChoice(c: Choice): void {
    if (c.kind === 'newWeapon') {
      this.weapons.push(createWeapon(c.id));
    } else if (c.kind === 'upWeapon') {
      const w = this.weapons.find((x) => x.id === c.id);
      if (w) w.level = Math.min(8, w.level + 1);
    } else if (c.kind === 'newPassive') {
      this.passives[c.id] = 1;
      this.player.recomputeStats(this.passives);
    } else if (c.kind === 'upPassive') {
      this.passives[c.id]++;
      this.player.recomputeStats(this.passives);
    } else if (c.kind === 'relic') {
      this.relicIds.push(c.id);
      this.player.addRelic(c.id);
      audio.sfx('relic');
    } else {
      if (c.id === 'heal') this.player.heal(this.player.maxHp * 0.5);
      else if (c.id === 'gold') this.gold += 200; // 런 내 리롤용(메타 적립 아님)
      else this.xp += this.nextXp * 0.9 * this.player.stats.xpMul;
    }
  }

  // 사망 처리: 부활 가능하면 부활, 아니면 결과 방출.
  private onPlayerDeath(): void {
    if (this.reviveAvailable && !this.reviveUsed) {
      this.reviveUsed = true;
      this.player.revive(0.5, 2.0);
      this.effects.spawnRing(this.player.x, this.player.z, 24, 2.4, 1.8, 0.8, 0.7);
      this.shockwave(this.player.x, this.player.z, 26, 600 * this.player.stats.damageMul);
      this.rig.addTrauma(0.7);
      this.flashScreen(0.45);
      this.hud.banner('起死回生', '#9affc0', 60, 1600);
      audio.sfx('revive');
      return;
    }
    this.finish(this.victoryAchieved); // 무한 모드 중 사망도 승리로 처리(10분 도달)
  }

  // 10분 도달: 승리 선택 오버레이(계속 싸운다 / 결과 보기).
  private showVictoryChoice(): void {
    this.victoryChoiceShown = true;
    this.victoryAchieved = true;
    this.state = 'victoryChoice';
    this.rig.addTrauma(0.4);
    audio.sfx('achievement');
    this.hud.banner('天下統一', '#ffe9a8', 90, 1600);
    this.victoryOverlay.style.display = 'flex';
  }

  // 무한 모드 진입: 계속 전투(스케일 무한 증가).
  private continueEndless(): void {
    this.endless = true;
    this.victoryOverlay.style.display = 'none';
    this.state = 'play';
    this.hud.banner('무한 전투 無限', '#e85c4a', 56, 1600);
    audio.playBgm('battle');
  }

  // 부활 충격파: 주변 적에게 대미지 + 넉백.
  private shockwave(cx: number, cz: number, radius: number, damage: number): void {
    const en = this.enemies;
    const n = this.hash.query(cx, cz, radius, this.scratch);
    for (let c = 0; c < n; c++) {
      const j = this.scratch[c];
      if (en.alive[j] === 0) continue;
      const dx = en.x[j] - cx;
      const dz = en.z[j] - cz;
      const d2 = dx * dx + dz * dz;
      if (d2 > radius * radius) continue;
      const d = Math.sqrt(d2) || 1;
      en.push(j, dx / d, dz / d, 10);
      if (en.damageAt(j, damage)) this.handleKill(j);
    }
  }

  // 런 종료: 결과 계산 후 App으로 방출. 중복 방지.
  private finish(victory: boolean): void {
    if (this.ended) return;
    this.ended = true;
    this.victoryOverlay.style.display = 'none';
    this.hud.setFever(false);
    this.state = victory ? 'victory' : 'dead';
    if (victory) {
      this.rig.addTrauma(0.5);
    } else {
      this.flashDamage(0.9, 600);
      this.rig.addTrauma(0.8);
    }
    this.hud.setVisible(false);
    const comboBonus = Math.floor(this.maxCombo);
    const result: RunResult = {
      victory,
      heroId: this.hero.id,
      time: this.gameTime,
      kills: this.kills,
      maxCombo: this.maxCombo,
      level: this.level,
      goldEarned: Math.floor(this.goldEarned) + comboBonus,
      comboBonus,
      weapons: this.weapons.map((w) => ({ id: w.id, level: w.level })),
      passives: Object.keys(this.passives).map((id) => ({ id, level: this.passives[id] })),
      bosses: Array.from(this.bossesKilled),
      endless: this.endless,
    };
    this.hooks.onEnd(result);
  }

  // === 테스트 훅 (main.ts에서 window.__GAME_TEST__로 노출) ===
  testSetTime(sec: number): void {
    this.gameTime = sec;
  }
  testGiveWeapon(id: string): void {
    if (!WEAPON_DEFS[id]) return;
    const w = this.weapons.find((x) => x.id === id);
    if (w) {
      w.level = 8;
    } else {
      if (this.weapons.length >= MAX_WEAPONS) this.weapons.pop();
      const nw = createWeapon(id);
      nw.level = 8;
      this.weapons.push(nw);
    }
    this.refreshLoadout();
  }
  testGivePassive(id: string, level = 5): void {
    if (!PASSIVE_BY_ID[id]) return;
    this.passives[id] = Math.min(PASSIVE_BY_ID[id].maxLevel, level);
    this.player.recomputeStats(this.passives);
    this.refreshLoadout();
  }
  // 사망 유도 (봇 테스트): 즉시 HP 0 → 다음 update에서 사망/부활 처리.
  testKillPlayer(): void {
    this.player.invuln = 0;
    this.player.musouInvuln = false;
    this.reviveAvailable = false; // 테스트는 즉시 사망까지 유도
    this.player.takeDamage(999999);
  }
  testForceLevel(): void {
    this.xp += this.nextXp;
    this.onCollect(0);
  }
  testFillMusou(): void {
    this.musou.gauge = 100;
  }
  testActivateMusou(): void {
    this.musou.gauge = 100;
    this.musou.activate();
  }
  testAddGold(n: number): void {
    this.gold += n;
  }
  testSpawnBoss(type: string): void {
    if (!this.boss.active) this.boss.spawn(type, this.gameTime / 60, this.ctx, this.player.x, this.player.z);
  }
  testTreasure(boss = false): void {
    this.onTreasure(boss);
  }
  // 시간 점프 테스트용: 이전 보스 등장을 완료 처리(중복 스폰 방지)
  testSetBossFlags(b3: boolean, b6: boolean, b9: boolean): void {
    this.bossFlags = { b3, b6, b9 };
  }
  // 전장 이벤트 강제 (rush/meteor/cart)
  testTriggerEvent(name: string): void {
    if (name === 'rush') this.events.forceRush();
    else if (name === 'meteor') this.events.forceMeteor();
    else if (name === 'cart') this.events.forceCart(this.gameTime);
  }
  // 다음 레벨업 카드에 저주 유물 강제 + 즉시 레벨업
  testForceRelic(): void {
    this.forceRelicNext = true;
    this.testForceLevel();
  }
  // 무한 모드 즉시 진입 (10분 승리 후 계속)
  testEnterEndless(): void {
    this.victoryAchieved = true;
    this.victoryChoiceShown = true;
    this.endless = true;
    if (this.gameTime < 601) this.gameTime = 601;
  }
  get testStats() {
    return {
      time: this.gameTime,
      kills: this.kills,
      level: this.level,
      gold: Math.floor(this.gold),
      goldEarned: Math.floor(this.goldEarned),
      maxCombo: this.maxCombo,
      hero: this.hero.id,
      alive: this.enemies.aliveCount,
      weapons: this.weapons.map((w) => `${w.id}:${w.level}`),
      passives: { ...this.passives },
      musou: this.musou.gauge,
      bossActive: this.boss.active,
      relics: [...this.relicIds],
      endless: this.endless,
      fever: this.combo.fever,
      state: this.state,
    };
  }
}
