import { Scene } from 'three';
import type { Atlas } from '../gfx/atlas';
import type { CameraRig } from '../gfx/camera';
import { Cinematics } from '../gfx/cinematics';
import type { Input } from '../core/input';
import { Ground } from '../gfx/ground';
import { BattlefieldWorld } from '../gfx/worldKit';
import { GateBreachFx } from '../gfx/gateBreachFx';
import { InstancedSpriteRenderer, ShadowRenderer } from '../gfx/sprites';
import { EffectsSystem } from '../gfx/effects';
import { ArrowRain } from '../gfx/arrowRain';
import { StarAura } from '../gfx/starAura';
import { ParticleSystem } from '../gfx/particles';
import { DamageText } from '../gfx/damageText';
import { Labels } from '../gfx/labels';
import { MarkerLayer } from '../gfx/markers';
import { CastleZone } from '../gfx/castleZone';
import { LightField } from '../gfx/lightField';
import { WaveBanner } from '../gfx/banner';
import { DecalPool } from '../gfx/decals';
import { Player } from './player';
import { EnemyPool, ENEMY_CAP, SHEET_SGRADE, SHEET_APRIORITY } from './enemies';
import { Spawner } from './spawner';
import { findNearestEnemy, SpatialHash } from './collision';
import { GemPool } from './pickups';
import {
  PK_ARROW,
  PK_CAVALRY,
  PK_ORB,
  PK_SLASHWAVE,
  PK_TALISMAN,
  ProjectilePool,
} from './projectiles';
import { ZonePool } from './zones';
import {
  EK_ARROW,
  EK_FIREBALL,
  EK_HEAVY,
  EK_LIGHTNING,
  EK_POISON,
  EK_STRATEGIST,
  EnemyProjectilePool,
} from './enemyProjectiles';
import { TreasurePool } from './treasure';
import { Combo } from './combo';
import { Musou } from './musou';
import { Boss, MINIBOSS_CYCLE } from './boss';
import { BattlefieldEvents } from './events';
import { BattlefieldObjects } from './objects';
import type { BuffKind } from './player';
import { RELIC_BY_ID, rollRelic, relicName, relicDesc,
  MASTERWORK_BY_ID, rollMasterworks, masterworkName, masterworkDesc } from '../data/relics';
import { bossLine } from '../data/bossDialogue';
import type { Weapon, WeaponContext } from './weapons/types';
import { createWeapon } from './weapons/roster';
import { LevelUp } from './levelup';
import type { CardView } from './levelup';
import { Hud } from '../ui/hud';
import type { HudState, SlotView } from '../ui/hud';
import { HEROES } from '../data/heroes';
import type { HeroDef } from '../data/heroes';
import { t, getLang, nameOf, WEAPON_DESC_EN } from '../core/i18n';
import { WEAPON_DEFS, EVOLUTIONS } from '../data/weapons';
import { PASSIVE_DEFS, PASSIVE_BY_ID } from '../data/passives';
import type { MetaMods } from '../data/upgrades';
import { rng } from '../core/rng';
import { audio } from '../core/audio';
import { Companion } from './companion';
import { pickSecondCompanion, SECOND_JOIN_TIME } from '../data/companions';
import { pickLine } from '../data/dialogue';
import { BattlefieldMap, castleRenderData, CASTLE } from './battlefieldMap';
import type { GateBarrier, MapLandmark } from './battlefieldMap';
import { SiegeSystem } from './siege';
import { lordName, lordAppearLine, lordDeathLine, siegeQuestLine, siegeBanner } from '../data/siegeData';
import { factionNarration, hulaoNarration, minibossHail } from '../data/narration';
import { LandmarkSystem, WATCHTOWER_RANGE_MUL, BEACON_ATTACK_MUL } from './landmarks';

type State = 'attract' | 'play' | 'levelup' | 'paused' | 'dead' | 'victory';

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
  masterworks: string[]; // 이번 런에서 획득한 명기 id (도감 이력 누적용)
  endless: boolean; // 무한 모드 진입 여부(10분 승리 후 계속 전투)
  canContinue: boolean; // 결과 화면에서 "계속 싸운다"(무한 진입) 가능 여부
  luoyang: 'none' | 'captured' | 'held' | 'fallen'; // 낙양 공방전 도달 결과(칭호 판정). siegeEvents 파생.
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
  | { kind: 'masterwork'; id: string }
  | { kind: 'reward'; id: 'heal' | 'gold' | 'xp' };

const MAX_RELICS = 2;
const RELIC_CHANCE = 0.1; // 레벨업 카드에 저주 유물 등장 확률

// #24 XP 커브 2차식화: 선형(5+lv*10)은 초반 레벨업 스팸 유발 → 후반이 가팔라지는 2차식으로
// 누적 XP를 늘려 Lv10 도달을 ~96s에서 ~3분으로. (스폰 밀도 #25와 함께 측정·튜닝)
function nextXpFor(level: number): number {
  return 8 + level * level * 3;
}

// 씬 상태머신 훅: Phase 3에서 Title→Select→Run→Result가 이 위에 붙는다.
export class Run {
  readonly scene = new Scene();

  private readonly rig: CameraRig;
  private readonly cinematics: Cinematics;
  // PostFX 순간 펄스(#21) — main이 RenderPipeline을 주입. 상시/무쌍 파생은 postfx.ts가 자체 구동.
  private postfx: { pulseBlur(s: number, dx?: number, dz?: number): void; pulseAberration(s: number): void } | null = null;
  private readonly input: Input;
  private readonly atlas: Atlas;

  private readonly ground: Ground;
  private readonly map = new BattlefieldMap();
  private readonly world: BattlefieldWorld;
  private readonly soldiersR: InstancedSpriteRenderer;
  private readonly variantsR: InstancedSpriteRenderer;
  private readonly sgradeR: InstancedSpriteRenderer;
  private readonly apriorityR: InstancedSpriteRenderer;
  private readonly shadowR: ShadowRenderer;
  private readonly effects: EffectsSystem;
  private readonly lightField: LightField;
  private readonly banner: WaveBanner;
  private readonly decals: DecalPool;
  private readonly particles: ParticleSystem;
  private readonly damageText: DamageText;
  private readonly labels: Labels;
  private readonly markers: MarkerLayer;
  private readonly castleZone: CastleZone;
  private readonly gateBreachFx: GateBreachFx;
  private readonly arrowRain: ArrowRain;
  private readonly starAura: StarAura;

  private readonly player: Player;
  private readonly companion: Companion;
  private readonly companion2: Companion; // #42 2호 원군(270s 랜덤 합류)
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
  private availableWeapons: Set<string> | null = null; // 시작 풀 해금 필터(null=전체 허용)

  private readonly combo: Combo;
  private readonly musou: Musou;
  private readonly boss: Boss;
  private readonly events: BattlefieldEvents;
  private readonly objects: BattlefieldObjects;
  private readonly siege: SiegeSystem;
  private readonly landmarks: LandmarkSystem;
  private siegeEvents = { lordSpawn: 0, capture: 0, counter: 0, volley: 0, defended: 0, lost: 0 };

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
  private nextXp = nextXpFor(1);
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
  private minibossIdx = 0; // 무한 모드 미니보스 순환 인덱스
  private nextMinibossAt = 720; // 12분부터 3분 주기
  private frameKills = 0;
  private killWindowT = 0; // #24 킬캠 롤링 윈도우(0.35s)
  private killWindowCount = 0;
  private rerolledThisLevel = false;
  private relicIds: string[] = []; // 보유 저주 유물(카드 중복 방지·카운트)
  private masterworkIds: string[] = []; // 보유 명기(보스 드랍, 상한 없음)
  private feverWasOn = false; // 콤보 피버 진입 감지
  private endless = false; // 무한 모드(10분 승리 후 계속)
  private victoryAchieved = false; // 10분 도달(이후 사망해도 승리 처리)
  private forceRelicNext = false; // 테스트: 다음 레벨업 카드에 유물 강제
  private heroQuoteCursor = 0;
  private nextHeroQuoteAt = 12;
  private hulaoAt = 0; // 호로관 세트피스 예정 시각(초). 0이면 미예정
  private gateRushTimer = 0;
  private gateRushX = 0;
  private gateRushZ = 0;
  private gateRushHorizontal = true;
  private playerWallHits = 0;

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
  private readonly moveOut = { x: 0, z: 0 };
  private lastAttackWeapon = '';
  private lastAttackX = 0;
  private lastAttackZ = 1;
  private lastAttackCount = 0;
  private prevAttackCount = 0; // 프레임당 공격 델타 산출용(성문 HP 타격 연동)

  constructor(atlas: Atlas, rig: CameraRig, input: Input, hooks: RunHooks, touch = false) {
    this.atlas = atlas;
    this.rig = rig;
    this.cinematics = new Cinematics(rig);
    this.input = input;
    this.hooks = hooks;
    this.hud = new Hud(touch);

    this.lightField = new LightField(touch);
    const lu = this.lightField.uniforms();
    this.ground = new Ground(this.scene, lu);
    this.map.update(0, 0, 0);
    this.world = new BattlefieldWorld(this.scene, this.map);
    this.soldiersR = new InstancedSpriteRenderer(atlas.soldiers, ENEMY_CAP, lu);
    this.variantsR = new InstancedSpriteRenderer(atlas.variants, ENEMY_CAP, lu);
    this.sgradeR = new InstancedSpriteRenderer(atlas.sgrade, 48, lu);
    this.apriorityR = new InstancedSpriteRenderer(atlas.apriority, 48, lu);
    this.shadowR = new ShadowRenderer(ENEMY_CAP + 2);
    this.scene.add(
      this.soldiersR.mesh,
      this.variantsR.mesh,
      this.sgradeR.mesh,
      this.apriorityR.mesh,
      this.shadowR.mesh,
    );

    this.effects = new EffectsSystem(this.scene);
    this.arrowRain = new ArrowRain(this.scene, this.effects);
    this.starAura = new StarAura(this.scene);
    this.decals = new DecalPool(this.scene);
    this.particles = new ParticleSystem(this.scene);
    this.damageText = new DamageText(this.scene);
    this.labels = new Labels(this.scene);
    this.markers = new MarkerLayer(this.scene);
    this.castleZone = new CastleZone(this.scene);
    this.gateBreachFx = new GateBreachFx(this.scene);
    this.gems = new GemPool(this.scene);
    this.projectiles = new ProjectilePool(this.scene, lu);
    this.zones = new ZonePool(this.scene);
    this.enemyProj = new EnemyProjectilePool(this.scene);
    this.treasure = new TreasurePool(this.scene);

    this.player = new Player(atlas, this.hero, lu);
    this.player.setRimScale(touch ? 0.5 : 1); // 모바일 저해상도 블룸에서 림 과다 방지
    this.scene.add(this.player.mesh);
    this.companion = new Companion(this.scene, atlas, lu);
    this.companion2 = new Companion(this.scene, atlas, lu);
    this.spawner = new Spawner(atlas, this.enemies, this.map);
    this.banner = new WaveBanner(this.scene);
    // 세력(웨이브) 전환 → 펄럭이는 배너 연출 (DESIGN 14.4 쇼케이스)
    this.spawner.onWave = (f) => {
      this.banner.trigger(f.hanja, f.ko, f.banner);
      const n = factionNarration(f.id); // 동탁/원소/군웅 진입 시만. 시작 세력(황건)은 ''
      if (n) {
        this.hud.quote(this.hero.name, n, 3200);
        this.nextHeroQuoteAt = this.gameTime + 30; // 직후 주기 대사 중복 방지(빈도 억제)
      }
    };
    this.weapons = [createWeapon(this.hero.startWeapon)];

    this.combo = new Combo(
      (text) => this.hud.banner(text, '#e8c667', 60),
      () => this.hud.punchCombo(),
    );
    this.musou = new Musou(this.hero.musou, () => {
      this.hud.banner('無雙', '#ffe9a8', 120, 1200, 3);
      this.sayHero(2600);
      audio.sfx('musou');
    });
    this.boss = new Boss(atlas, (name, hanja) => {
      this.hud.banner(`${name} ${t('bannerAppear')} ${hanja}`, '#e85c4a', 44, 1800, 2);
      this.sayHero();
      // 보스 방향 팬은 checkBossSpawn → cinematics.onBossSpawn에서 처리
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
      playerHpFrac: () => this.player.hp / Math.max(1, this.player.maxHp),
      magnetizeGems: () => this.gems.magnetizeAll(),
      stunEnemies: (x, z, r, dur) => {
        const n = this.hash.query(x, z, r, this.scratch);
        for (let c = 0; c < n; c++) {
          const j = this.scratch[c];
          if (this.enemies.alive[j] === 1 && this.enemies.controlled[j] === 0)
            this.enemies.stun[j] = Math.max(this.enemies.stun[j], dur);
        }
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
      aimX: 0,
      aimZ: 1,
      aimTarget: -1,
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
      onAttack: (weaponId: string, dirX: number, dirZ: number) => {
        this.lastAttackWeapon = weaponId;
        this.lastAttackX = dirX;
        this.lastAttackZ = dirZ;
        this.lastAttackCount++;
      },
      scratch: this.scratch,
    };

    // 낙양 공방전(DESIGN 20). 참조는 생성자 주입, 이벤트는 콜백 필드(spawner.onWave 패턴).
    this.siege = new SiegeSystem({
      map: this.map,
      spawner: this.spawner,
      enemies: this.enemies,
      rng,
      bossActive: () => this.boss.active,
      hulaoActive: () => this.map.hulaoOn,
      requestLord: (x, z) => {
        if (this.boss.active) return;
        this.boss.spawn('huaxiong', Math.max(1, this.gameTime / 60), this.ctx, x, z + 16);
        if (this.boss.idx >= 0) {
          this.enemies.x[this.boss.idx] = x;
          this.enemies.z[this.boss.idx] = z;
          this.cinematics.onBossSpawn(x - this.player.x, z - this.player.z);
        }
      },
      hitPlayer: (dmg) => { this.onPlayerHit(dmg); },
      placeSupply: (kind, x, z) => {
        if (kind === 'dumpling') this.objects.spawnDumplingAt(x, z);
        else this.objects.spawnGongAt(x, z);
      },
    });
    this.siege.onApproach = () => {
      this.hud.quote(this.hero.name, siegeQuestLine(), 3600);
      audio.sfx('warn');
    };
    this.siege.onLordSpawn = () => {
      this.siegeEvents.lordSpawn++;
      this.hud.quote(lordName(), lordAppearLine(), 3200);
    };
    this.siege.onCapture = (x, z) => {
      this.siegeEvents.capture++;
      this.hud.banner(siegeBanner('capture'), '#ffd86b', 60, 1800, 1);
      for (let k = 0; k < 10; k++) {
        const a = rng.next() * Math.PI * 2;
        this.gems.spawn(x + Math.cos(a) * 2, z + Math.sin(a) * 2, 6);
      }
      // 점령 보상: 명기 3택(미보유 풀). 전부 보유면 회복 폴백. (#36 보스 보상과 동일 패턴)
      const picks = rollMasterworks(() => rng.next(), this.masterworkIds, 3);
      if (picks.length > 0) {
        this.player.heal(this.player.maxHp * 0.4);
        this.curChoices = picks.map((m) => ({ kind: 'masterwork', id: m.id }) as Choice);
        this.state = 'levelup';
        const views = this.curChoices.map((c) => this.cardView(c));
        this.levelup.open(views, Math.floor(this.gold), false, (i) => this.pickCard(i), () => {});
      } else {
        this.player.heal(this.player.maxHp * 0.5);
      }
      // 규칙 안내(첫 점령 시 무엇을 할지): 성에 머물러 보급 받고 탈환군에 대비.
      this.hud.quote(
        this.hero.name,
        getLang() === 'en'
          ? 'Luoyang is ours. Stay in the keep, resupply — the reclaimers will come.'
          : '낙양은 우리 것이다. 성에 머물며 보급을 받고, 탈환군을 기다려라.',
        4200,
      );
    };
    this.siege.onCounterattack = () => {
      this.siegeEvents.counter++;
      this.hud.banner(siegeBanner('counter'), '#e85c4a', 56, 1800, 1);
      // 규칙 안내(수성 승패 기준): 적을 본성에 들이지 말고 제한시간을 버텨라.
      this.hud.quote(
        this.hero.name,
        getLang() === 'en'
          ? 'Reclaimers flood in! Hold your ground in the castle for 75 seconds.'
          : '탈환군이 몰려온다! 성 안에서 75초만 버텨내라.',
        4600,
      );
      audio.sfx('warn');
      audio.playBgm('siege');
      this.rig.addTrauma(0.4);
    };
    this.siege.onVolley = (shots) => {
      this.siegeEvents.volley++;
      this.arrowRain.volley(shots); // gfx 화살비. 착탄 판정(피해)은 siege 소유 — payload 동기
    };
    this.siege.onDefended = () => {
      this.siegeEvents.defended++;
      this.hud.banner(siegeBanner('defended'), '#9affc0', 60, 1800, 1);
      for (let k = 0; k < 24; k++) {
        const a = rng.next() * Math.PI * 2;
        const r = 2 + rng.next() * 5;
        this.gems.spawn(CASTLE.cx + Math.cos(a) * r, CASTLE.cz + Math.sin(a) * r, 8);
      }
      for (let k = 0; k < 3; k++) this.objects.spawnDumplingAt(CASTLE.cx + (k - 1) * 3, CASTLE.cz + 3);
      this.musou.gauge = Math.min(100, this.musou.gauge + 50);
      this.rig.addTrauma(0.5);
      audio.sfx('levelup');
      // 수성 중 정규 보스가 난입했을 수 있음 — 보스전 BGM은 유지
      if (!this.boss.active) audio.playBgm('battle');
    };
    this.siege.onLost = () => {
      this.siegeEvents.lost++;
      this.hud.banner(siegeBanner('fallen'), '#c8322a', 56, 1800, 1);
      this.rig.addTrauma(0.6);
      audio.sfx('warn');
      if (!this.boss.active) audio.playBgm('battle');
    };

    // 랜드마크 기능 시스템(#50 21.3): 망루 사거리 오라 + 봉화 랠리. run이 매 프레임 update·질의.
    this.landmarks = new LandmarkSystem(this.map);

    // 낙뢰 화면 미세 플래시 훅
    this.effects.screenFlash = (i: number) => this.flashScreen(i);
    this.effects.spawnLight = (x, z, r, g, b, radius, life) =>
      this.lightField.spawn(x, 0.6, z, r, g, b, radius, life);
    this.zones.spawnLight = (x, z, r, g, b, radius, life) =>
      this.lightField.spawn(x, 0.5, z, r, g, b, radius, life);
    this.effects.spawnDecal = (x, z, radius, r, g, b) => this.decals.spawn(x, z, radius, r, g, b);
    this.effects.spawnMusouLight = (x, z, r, g, b, radius, life) =>
      this.lightField.spawn(x, 0.8, z, r, g, b, radius, life, true);

    // 피격/사망 데미지 비네트 (붉은 방사형)
    this.damageFlash = document.createElement('div');
    this.damageFlash.style.cssText = [
      'position:fixed',
      'inset:0',
      'pointer-events:none',
      'opacity:0',
      'z-index:30',
      'background:radial-gradient(ellipse at center, rgba(0,0,0,0) 28%, rgba(200,26,20,0.98) 100%)',
    ].join(';');
    document.body.appendChild(this.damageFlash);

    // 저체력 상시 비네트 (30% 이하, 은은한 붉은 맥동 — 심박과 동기)
    this.lowHpVignette = document.createElement('div');
    this.lowHpVignette.style.cssText = [
      'position:fixed',
      'inset:0',
      'pointer-events:none',
      'opacity:0',
      'z-index:29',
      'transition:opacity 0.25s linear',
      'background:radial-gradient(ellipse at center, rgba(0,0,0,0) 45%, rgba(150,10,10,0.9) 100%)',
    ].join(';');
    document.body.appendChild(this.lowHpVignette);
  }

  private readonly lowHpVignette: HTMLDivElement;
  private lowHpBeat = 0;
  private damageVigLevel = 0; // #29: 관리형 피격 비네트 레벨(점멸 대신 유지+감쇠)
  private smallFlashCd = 0; // 소형 화면 플래시 쿨다운(스트로브 방지)

  // 매 프레임: 피격 비네트 감쇠 + 저체력 비네트/심박. (updateLowHp 호출부에서 매 프레임 구동)
  private updateLowHp(dt: number): void {
    if (this.smallFlashCd > 0) this.smallFlashCd -= dt;
    // 피격 비네트: 히트마다 레벨을 올리고(재트리거=레벨 상향, 새 애니메이션 X) 매 프레임 감쇠 → 스트로브 제거.
    if (this.damageVigLevel > 0.001) {
      this.damageVigLevel *= Math.exp(-dt / 0.26);
      if (this.damageVigLevel < 0.02) this.damageVigLevel = 0;
      this.damageFlash.style.opacity = this.damageVigLevel.toFixed(3);
    } else if (this.damageFlash.style.opacity !== '0') {
      this.damageFlash.style.opacity = '0';
    }
    const frac = this.player.hp / Math.max(1, this.player.maxHp);
    if (frac < 0.3 && this.state === 'play' && !this.player.dead) {
      const intensity = (0.3 - frac) / 0.3;
      this.lowHpVignette.style.opacity = (0.3 + 0.3 * intensity).toFixed(2); // max 0.6 클램프
      this.lowHpBeat -= dt;
      if (this.lowHpBeat <= 0) {
        this.lowHpBeat = 0.5 + 0.5 * (frac / 0.3);
        audio.sfx('heartbeat');
      }
    } else if (this.lowHpVignette.style.opacity !== '0') {
      this.lowHpVignette.style.opacity = '0';
      this.lowHpBeat = 0;
    }
  }

  // 피격 비네트 펄스(피해 비례). 재생 중 재트리거는 레벨을 올릴 뿐 → 점멸 없음. 정보(맞았다)는 유지.
  private pulseDamageVig(intensity: number): void {
    const i = intensity < 0.15 ? 0.15 : intensity > 0.62 ? 0.62 : intensity;
    if (i > this.damageVigLevel) this.damageVigLevel = i;
  }

  // 순간 흰 화면 플래시. 소형(무기 프록 <0.2)은 쿨다운·상한으로 스트로브 방지, 대형(무쌍/보스)은 항상.
  private flashScreen(intensity: number): void {
    let i = intensity;
    if (i < 0.2) {
      if (this.smallFlashCd > 0) return;
      this.smallFlashCd = 0.5;
      if (i > 0.06) i = 0.06;
    }
    const el = document.createElement('div');
    el.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:31;background:rgba(200,220,255,1);';
    document.body.appendChild(el);
    el.animate([{ opacity: i }, { opacity: 0 }], { duration: 120, easing: 'ease-out' }).onfinish =
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
  beginRun(heroId: string, meta: MetaMods, unlockedWeapons?: string[]): void {
    this.setHero(heroId);
    this.meta = meta;
    this.player.setMeta(meta);
    this.availableWeapons = unlockedWeapons ? new Set(unlockedWeapons) : null;
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
    this.markers.reset();
    this.castleZone.reset();
    this.arrowRain.reset();
    this.lightField.reset();
    this.banner.reset();
    this.decals.reset();
    this.lowHpVignette.style.opacity = '0';
    this.lowHpBeat = 0;
    this.damageVigLevel = 0;
    this.smallFlashCd = 0;
    this.damageFlash.style.opacity = '0';
    this.spawner.reset();
    this.combo.reset();
    this.musou.reset();
    this.events.reset();
    this.objects.reset();
    this.map.reset();
    this.siege.reset();
    this.landmarks.reset();
    this.siegeEvents = { lordSpawn: 0, capture: 0, counter: 0, volley: 0, defended: 0, lost: 0 };
    this.gateBreachFx.reset();
    this.starAura.reset();
    this.cinematics.reset();
    this.gateRushTimer = 0;
    this.hulaoAt = 420 + rng.range(0, 120); // 7~9분 사이 호로관 세트피스 1회
    this.playerWallHits = 0;
    this.lastAttackWeapon = '';
    this.lastAttackX = 0;
    this.lastAttackZ = 1;
    this.lastAttackCount = 0;
    this.prevAttackCount = 0;
    this.companion.reset(this.hero.id);
    this.companion2.reset(this.hero.id, { def: pickSecondCompanion(this.companion.definition.id, () => rng.next()), side: -1, joinTime: SECOND_JOIN_TIME, specialPhase: 6 });
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
    this.minibossIdx = 0;
    this.nextMinibossAt = 720;
    this.timeScale = 1;
    this.hitstopRemaining = 0;
    this.musouStrength = 0;
    this.relicIds = [];
    this.masterworkIds = [];
    this.endless = false;
    this.victoryAchieved = false;
    this.forceRelicNext = false;
    this.feverWasOn = false;
    this.heroQuoteCursor = 0;
    this.nextHeroQuoteAt = 12;
    this.hud.setFever(false);
    // 메타: 부활 + 시작 레벨
    this.reviveAvailable = this.meta?.revive ?? false;
    this.reviveUsed = false;
    const startLv = this.meta?.startLevel ?? 0;
    this.level = 1 + startLv;
    this.nextXp = nextXpFor(this.level);
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
      this.map.update(tx, tz, dt);
      this.world.update();
      this.particles.update(dt);
      this.effects.update(dt);
      this.rig.update(dt, tx, tz);
      this.musouStrength += (0 - this.musouStrength) * Math.min(1, dt * 6);
      this.renderSprites();
      return;
    }

    // 종료/선택 상태: 오버레이가 위에 뜬 채 마지막 프레임을 정지(버튼은 DOM으로 동작).
    if (this.state === 'dead' || this.state === 'victory') return;

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

    // 시네마틱(보스 등장 팬) 스킵: 이동/Space 입력 시
    if (
      this.cinematics.wantsSkipInput &&
      (this.input.move.x !== 0 || this.input.move.z !== 0 || this.input.isDown('Space'))
    ) {
      this.cinematics.skip();
    }

    // 무쌍 발동
    if (this.input.consumePressed('Space') && this.musou.activate()) {
      this.rig.addTrauma(0.5);
      this.cinematics.onMusouStart();
      this.postfx?.pulseAberration(0.7);
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
    this.map.update(this.player.x, this.player.z, gdt);
    const prevPlayerX = this.player.x;
    const prevPlayerZ = this.player.z;
    this.player.update(gdt, this.input);
    if (this.map.resolveMovement(
      prevPlayerX, prevPlayerZ, this.player.x, this.player.z, this.player.radius, this.moveOut,
    )) this.playerWallHits++;
    this.player.setPosition(this.moveOut.x, this.moveOut.z);
    // #45 19.1 드리프트 VFX — player가 세운 플래그 소비
    if (this.player.justSkid) {
      this.player.justSkid = false;
      this.effects.spawnFlash(this.player.x, this.player.z, 1.6, 1.2, 0.4, 0.9);
      this.particles.dust(this.player.x, this.player.z);
    }
    if (this.player.justBoost) {
      this.player.justBoost = false;
      const t2 = this.player.boostTier >= 2;
      this.effects.spawnThrust(this.player.x, this.player.z, this.player.faceX, this.player.faceZ, t2 ? 6 : 4.5, t2 ? 2.2 : 1.6, 1.7, 1.35, 0.5, 0.24);
      this.effects.spawnRing(this.player.x, this.player.z, t2 ? 4 : 2.8, 1.7, 1.3, 0.5, 0.4);
      this.rig.punchFov(t2 ? 3 : 2);
      audio.sfx('warn');
    }
    this.map.update(this.player.x, this.player.z, 0);
    this.world.update();

    // 대시: 지면 리플 + 발광 스트릭 + 먼지 잔상 + 시네마틱 줌 + 트라우마
    if (this.player.justDashed) {
      this.player.justDashed = false;
      const dpx = this.player.x;
      const dpz = this.player.z;
      const ddx = this.player.dashDirX;
      const ddz = this.player.dashDirZ;
      this.effects.spawnRing(dpx, dpz, 4.5, 1.4, 1.9, 2.4, 0.35);
      this.effects.spawnThrust(dpx, dpz, ddx, ddz, 6, 2.0, 0.7, 1.4, 2.2, 0.22);
      this.effects.spawnFlash(dpx, dpz, 0.8, 1.4, 2.2, 2.2);
      for (let d = 0; d < 6; d++) this.particles.dust(dpx - ddx * d * 0.4, dpz - ddz * d * 0.4);
      this.cinematics.onDash();
      this.postfx?.pulseBlur(0.8, ddx, ddz);
      audio.sfx('warn');
    }

    // 선택 장수의 군웅전 NPC 카드 대사를 런 전반에 드문드문 노출한다.
    if (this.gameTime >= this.nextHeroQuoteAt) this.sayHero(); // sayHero가 다음 시각 재예약

    // 보스 스케줄
    this.checkBossSpawn();

    // 호로관 파성 세트피스 (7~9분 1회). 오픈필드에 잠깐 성문이 솟는다.
    if (this.hulaoAt > 0 && this.gameTime >= this.hulaoAt && !this.map.hulaoOn && !this.map.isGateBreached()) {
      this.hulaoAt = 0;
      this.map.triggerHulao(this.player.x, this.player.z);
      this.hud.banner(`${t('bannerHulao')} 虎牢關`, '#ffb05a', 48, 1800);
      this.hud.quote(this.hero.name, hulaoNarration(), 3200);
      this.nextHeroQuoteAt = this.gameTime + 30;
      audio.sfx('warn');
    }

    this.spawner.setBossActive(this.boss.active);
    this.spawner.update(edt, this.gameTime, this.player.x, this.player.z);
    this.siege.update(edt, this.gameTime, this.player.x, this.player.z);
    // 낙양 거점화·수성 중 성 안 방어 구역 바닥 표시(#51 가독성).
    this.castleZone.setActive(this.siege.keepAuraActive);
    this.castleZone.update(gdt);
    this.landmarks.update(edt);
    // 봉화 점화(근접 자동, #50 21.3): 점화 순간 주변 적 스태거 + 넉백 펄스.
    const ign = this.landmarks.tryIgniteBeacon(this.player.x, this.player.z);
    if (ign) {
      const cnt = this.hash.query(ign.x, ign.z, ign.radius, this.scratch);
      for (let c = 0; c < cnt; c++) {
        const j = this.scratch[c];
        if (this.enemies.alive[j] === 1 && this.enemies.controlled[j] === 0) {
          this.enemies.stun[j] = Math.max(this.enemies.stun[j], 0.9);
          const ex = this.enemies.x[j] - ign.x;
          const ez = this.enemies.z[j] - ign.z;
          const d = Math.hypot(ex, ez) || 1;
          this.enemies.push(j, ex / d, ez / d, 6);
        }
      }
      this.effects.spawnRing(ign.x, ign.z, ign.radius, 2.2, 1.1, 0.4, 0.5);
      this.hud.banner(getLang() === 'en' ? 'Beacon Rally 烽火' : '봉화 랠리 烽火', '#ff9a3c', 46, 1400, 1);
      audio.sfx('warn');
    }

    // 분리용 해시 (이동 전)
    this.hash.clear();
    this.enemies.insertAll(this.hash);

    const aimTarget = findNearestEnemy(
      this.enemies, this.hash, this.player.x, this.player.z, 22, this.scratch,
    );
    this.ctx.aimTarget = aimTarget;
    this.ctx.aimX = this.player.faceX;
    this.ctx.aimZ = this.player.faceZ;
    // #45 19.6: 대시/부스트 상태 — roster 근접 히트가 넉백·스매시 분기에 사용
    this.ctx.dashing = this.player.dashing;
    this.ctx.boosting = this.player.boosting;
    if (aimTarget >= 0) {
      const dx = this.enemies.x[aimTarget] - this.player.x;
      const dz = this.enemies.z[aimTarget] - this.player.z;
      const d = Math.hypot(dx, dz) || 1;
      this.ctx.aimX = dx / d;
      this.ctx.aimZ = dz / d;
    }
    this.enemies.update(edt, this.player.x, this.player.z, this.hash, this.enemyProj, this.effects, this.map);

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

    // 원군 2인 체제(#42): 1호 45s(장수별 지정) + 2호 270s(잔여 풀 랜덤). 3막 합류 연출 공용.
    const onJoin = (c: Companion): void => {
      const ally = c.definition;
      this.hud.banner(`${t('bannerAlly')} ${ally.name} ${ally.hanja}`, '#7ec8ff', 46, 1600);
      this.hud.quote(ally.name, pickLine(ally.id, 0));
      audio.sfx('buff');
      this.cinematics.onAllyJoin(c.joinDirX, c.joinDirZ);
      this.hitstop(250, 0.32); // 소프트 슬로모
      if (!this.banner.playing) this.banner.trigger(ally.hanja, ally.name, [ally.cr, ally.cg, ally.cb]);
    };
    if (this.companion.update(gdt, this.gameTime, this.player, this.ctx, this.level, this.musou.active)) onJoin(this.companion);
    if (this.companion2.update(gdt, this.gameTime, this.player, this.ctx, this.level, this.musou.active)) onJoin(this.companion2);
    const bothAllies = this.companion.active && this.companion2.active;
    this.companion.damageScale = bothAllies ? 0.8 : 1;
    this.companion2.damageScale = bothAllies ? 0.8 : 1;
    // 특기 발동 → 대사 + 사운드
    const sp = this.companion.consumeSpecialEvent();
    if (sp) {
      this.hud.quote(this.companion.definition.name, sp.line);
      audio.sfx('buff');
    }
    const sp2 = this.companion2.consumeSpecialEvent();
    if (sp2) {
      this.hud.quote(this.companion2.definition.name, sp2.line);
      audio.sfx('buff');
    }

    // 무기
    // 랜드마크 버프(#50 21.3): 망루 근접 사거리 +25% / 봉화 랠리 공격 +20%.
    // player.stats는 매프레임 재계산이 아니므로 snapshot→적용→복원(매프레임 곱셈 누적 방지).
    const savedRangeMul = this.player.stats.rangeMul;
    const savedDamageMul = this.player.stats.damageMul;
    if (this.landmarks.watchtowerActive(this.player.x, this.player.z)) {
      this.player.stats.rangeMul = savedRangeMul * WATCHTOWER_RANGE_MUL;
    }
    if (this.landmarks.beaconBuffActive()) {
      this.player.stats.damageMul = savedDamageMul * BEACON_ATTACK_MUL;
    }
    for (let i = 0; i < this.weapons.length; i++) this.weapons[i].update(this.ctx);
    this.player.stats.rangeMul = savedRangeMul;
    this.player.stats.damageMul = savedDamageMul;
    this.projectiles.update(
      gdt, this.player.x, this.player.z, this.enemies, this.hash,
      this.damageText, this.ctx.onKill, this.particles, this.effects, this.scratch,
    );
    this.zones.update(gdt, this.enemies, this.hash, this.damageText, this.ctx.onKill, this.particles, this.scratch);

    // 전장 오브젝트: 접촉(만두/사당) + 화약통은 플레이어 근접 시 무기 판정으로 유폭
    this.objects.update(gdt, this.gameTime);
    // 15.3 군영 軍營 취사장 오라 — 반경 5m 초당 2.5% 회복 + 취사 연기 + 온색 광원
    for (const lm of this.map.landmarks) {
      if (lm.kind !== 5) continue;
      const ax = this.player.x - lm.x;
      const az = this.player.z - lm.z;
      if (ax * ax + az * az <= 25) {
        this.player.heal(this.player.maxHp * 0.025 * gdt);
        if (Math.random() < 6 * gdt) this.particles.steam(lm.x, lm.z + 0.4);
        this.lightField.spawn(lm.x, 0.6, lm.z, 1.3, 0.9, 0.5, 6, 0.2);
      }
    }
    // 낙양 거점화 회복 오라 — 내성 중심 반경 6m, 군영과 동일률(0.025/s). (DESIGN 20)
    if (this.siege.keepAuraActive) {
      const kx = this.siege.keepCenterX;
      const kz = this.siege.keepCenterZ;
      const ax = this.player.x - kx;
      const az = this.player.z - kz;
      const kr = this.siege.keepAuraRadius;
      if (ax * ax + az * az <= kr * kr) {
        this.player.heal(this.player.maxHp * 0.025 * gdt);
        if (Math.random() < 6 * gdt) this.particles.steam(kx, kz + 0.4);
        this.lightField.spawn(kx, 0.6, kz, 1.3, 0.9, 0.5, 6, 0.2);
      }
    }
    this.objects.hitAt(this.player.x, this.player.z, 4.0);
    // 성문 HP 직접 타격(#50 21.2): 이번 프레임에 무기가 실제로 공격을 발동했고(lastAttackCount 증가)
    // 봉쇄 성문 근처(6m)일 때만 타격당 청크로 감소. 그냥 서 있으면(공격 없음) 안 닳음 — 오너 피드백.
    const atkThisFrame = this.lastAttackCount - this.prevAttackCount;
    this.prevAttackCount = this.lastAttackCount;
    if (atkThisFrame > 0) {
      const sealedGate = this.map.nearestSealedGateKey(this.player.x, this.player.z, 6);
      if (sealedGate) {
        const dealt = 34 * this.player.stats.damageMul * atkThisFrame; // 타격당 청크(≈4타/s → ~120/s)
        const breached = this.map.damageGate(sealedGate, dealt);
        const g = this.map.gates.find((x) => x.key === sealedGate);
        if (g) this.effects.spawnRing(g.x, g.z, 1.5, 1.6, 0.6, 0.22, 0.22); // 타격마다 성문 피격 스파크
        if (breached) this.onGateBreached(breached);
      }
    }

    // 무쌍 난무 (실제 dt로 진행, 종료 시 마무리 충격파)
    this.ctx.dt = dt;
    const preMusouX = this.player.x;
    const preMusouZ = this.player.z;
    if (this.musou.update(dt, this.ctx, this.player)) this.cinematics.onMusouEnd();
    this.map.resolveMovement(
      preMusouX, preMusouZ, this.player.x, this.player.z, this.player.radius, this.moveOut,
    );
    this.player.setPosition(this.moveOut.x, this.moveOut.z);
    this.ctx.dt = gdt;

    // 적 투사체 (적 dt)
    this.enemyProj.update(
      edt, this.player.x, this.player.z, this.player.radius, this.onPlayerHit,
      this.particles, this.effects,
      (x, z, r) => this.map.circleBlocked(x, z, r),
    );

    // 접촉 대미지
    this.contactDamage();

    // 대량 처치 히트스탑
    if (this.frameKills >= 8) {
      this.hitstop(30, 0.08);
      this.rig.addTrauma(0.35);
    }
    // 대량 퇴치 킬캠: 0.5s 롤링 윈도우 누적 6킬 (게이트 측정: 실킬레이트 2~4/s → 10킬/0.35s는 미발동)
    this.killWindowT -= dt;
    if (this.killWindowT <= 0) {
      this.killWindowT = 0.5;
      this.killWindowCount = 0;
    }
    this.killWindowCount += this.frameKills;
    if (this.killWindowCount >= 6) {
      this.cinematics.onMassKill(this.killWindowCount);
      this.postfx?.pulseBlur(0.85);
      this.hitstop(240, 0.28); // 드물게 뜨는 대신 슬로모를 진하게 (오너 지시)
      this.killWindowCount = -100000; // 같은 윈도우 내 재발동 방지(윈도우 리셋 시 0 복귀)
    }

    // 픽업
    this.gems.update(gdt, this.player.x, this.player.z, this.player.stats.pickupMul, this.onCollect,
      (v) => { this.player.heal(this.player.maxHp * v); audio.sfx('buff'); });
    this.treasure.update(gdt, this.player.x, this.player.z, this.player.stats.pickupMul, this.onTreasure);

    // 연출 (실제 dt)
    this.combo.update(gdt);
    // 콤보 피버: 화면 연출 + 진입 사운드 (XP 1.5배는 onCollect에서)
    const fever = this.combo.fever;
    this.hud.setFever(fever);
    if (fever && !this.feverWasOn) audio.sfx('fever');
    this.feverWasOn = fever;
    this.effects.update(dt);
    this.arrowRain.update(dt);
    this.starAura.update(dt, this.player.x, this.player.z, this.player.shrineBuffActive); // 사당 스타파워 오라(#50 폴리시)
    this.lightField.update(dt);
    this.decals.update(dt);
    this.updateLowHp(dt);
    this.particles.update(dt);
    this.damageText.update(dt);
    this.gateBreachFx.update(dt);
    this.ground.update(dt, this.player.x, this.player.z);
    this.map.update(this.player.x, this.player.z, dt);
    this.world.update();
    // 동적 카메라: 주변 위협 밀도 줌아웃 + 진행방향 룩어헤드
    const threatN = this.hash.query(this.player.x, this.player.z, 11, this.scratch);
    let near = 0;
    for (let c = 0; c < threatN; c++) {
      const j = this.scratch[c];
      if (this.enemies.alive[j] === 1 && this.enemies.controlled[j] === 0) near++;
    }
    this.rig.setThreat(Math.min(1, near / 45));
    this.rig.setLookAhead(this.player.velX, this.player.velZ, this.player.speedFrac);
    this.cinematics.update(dt); // 시네마틱 포즈를 rig에 밀어넣은 뒤 rig.update
    this.rig.update(dt, this.player.x, this.player.z);
    this.banner.update(dt, this.rig.camera); // rig 갱신 후 카메라 정면에 배너 배치

    if (this.gateRushTimer > 0) {
      this.gateRushTimer -= dt;
      if (this.gateRushTimer <= 0) {
        this.spawner.spawnGateRush(
          this.gateRushX, this.gateRushZ, this.gateRushHorizontal, this.gameTime / 60,
        );
      }
    }

    // 무쌍 포스트 연출 세기 부드럽게
    const target = this.musou.active ? 0.9 : 0;
    this.musouStrength += (target - this.musouStrength) * Math.min(1, dt * 6);

    // 렌더 버퍼
    this.renderSprites();
    this.updateLabels();
    this.updateMarkers(dt);
    this.updateSiegeObjective();

    // 레벨업 대기
    if (this.pendingLevels > 0 && this.state === 'play') this.showNextLevelUp();

    // 종료 판정 (사망 → 부활 또는 결과, 10분 도달 → 승리 선택)
    if (this.player.dead) this.onPlayerDeath();
    else if (!this.endless && this.gameTime >= RUN_LENGTH) this.finish(true);
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
      bossName: nameOf('hero', this.boss.typeId, this.boss.name),
      bossHanja: this.boss.hanja,
      bossFrac: this.boss.hpFrac(this.ctx),
    };
  }

  private sayHero(durationMs = 3600): void {
    const line = pickLine(this.hero.id, this.heroQuoteCursor++);
    this.hud.quote(this.hero.name, line, durationMs);
    // #24: 주기 대사 105→60s(~40% 단축). 이벤트 대사도 타이머를 리셋 → 이벤트 직후 주기 대사 중복 방지.
    this.nextHeroQuoteAt = this.gameTime + 60;
  }

  // 슬롯별 등장 후보(랜덤). 9분 슬롯은 최종보스 여포 고정.
  private static readonly BOSS_SLOT_3 = ['yuanshao', 'xiahoudun', 'sunce'];
  private static readonly BOSS_SLOT_6 = ['dongzhuo', 'simayi', 'zhouyu'];

  private checkBossSpawn(): void {
    if (this.boss.active) return;
    let spawned = false;
    const minute = this.gameTime / 60;
    if (!this.bossFlags.b3 && this.gameTime >= 180) {
      this.bossFlags.b3 = true;
      const pool = Run.BOSS_SLOT_3;
      this.boss.spawn(pool[rng.int(pool.length)], minute, this.ctx, this.player.x, this.player.z);
      spawned = true;
    } else if (!this.bossFlags.b6 && this.gameTime >= 360) {
      this.bossFlags.b6 = true;
      const pool = Run.BOSS_SLOT_6;
      this.boss.spawn(pool[rng.int(pool.length)], minute, this.ctx, this.player.x, this.player.z);
      spawned = true;
    } else if (!this.bossFlags.b9 && this.gameTime >= 540) {
      this.bossFlags.b9 = true;
      this.boss.spawn('lvbu', minute, this.ctx, this.player.x, this.player.z);
      spawned = true;
    } else if (this.endless && this.gameTime >= this.nextMinibossAt) {
      // 무한 모드: 12분부터 3분 주기로 미니보스 5종 순환 (HP는 minute 스케일로 상승)
      this.nextMinibossAt += 180;
      const id = MINIBOSS_CYCLE[this.minibossIdx % MINIBOSS_CYCLE.length];
      this.minibossIdx++;
      this.boss.spawn(id, minute, this.ctx, this.player.x, this.player.z);
      spawned = true;
    }
    if (spawned && this.boss.idx >= 0) {
      this.cinematics.onBossSpawn(
        this.enemies.x[this.boss.idx] - this.player.x,
        this.enemies.z[this.boss.idx] - this.player.z,
      );
      // 보스 등장 대사 (#37 q4 발췌·번안) — 상단 대사 박스로
      if (this.boss.typeId) {
        // 무한 미니보스는 재대면 별칭(관찰 톤)으로 대체 — 화자=장수. 그 외는 기존 등장 대사. 빈도 불변.
        const hail = this.endless ? minibossHail(this.boss.typeId) : '';
        const line = hail || bossLine(this.boss.typeId, 'appear');
        if (line) {
          const speaker = hail ? this.hero.name : nameOf('hero', this.boss.typeId, this.boss.name);
          this.hud.quote(speaker, line, 3200);
        }
      }
    }
  }

  // 보스 처치 PiP 리플레이 트리거를 main이 소비(→ pipeline.playReplay).
  consumeReplayTrigger(): boolean {
    return this.cinematics.consumeReplayTrigger();
  }

  setPostFx(fx: { pulseBlur(s: number, dx?: number, dz?: number): void; pulseAberration(s: number): void }): void {
    this.postfx = fx;
  }

  private renderSprites(): void {
    this.shadowR.begin();
    if (this.state !== 'attract') this.shadowR.push(this.player.x, this.player.z, this.player.radius * 1.6);
    if (this.companion.active) this.shadowR.push(this.companion.x, this.companion.z, this.companion.radius * 1.5);
    if (this.companion2.active) this.shadowR.push(this.companion2.x, this.companion2.z, this.companion2.radius * 1.5);
    this.enemies.render(
      this.atlas, this.soldiersR, this.variantsR, this.sgradeR, this.apriorityR, this.shadowR,
    );
    this.shadowR.end();
    this.decals.render();
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

  // 랜드마크/오브젝트 표식(글로우·이름표·근접 힌트) + 랜드마크 상시 연출.
  private updateMarkers(dt: number): void {
    const px = this.player.x;
    const pz = this.player.z;
    this.markers.begin(this.renderTime);
    const lms = this.map.landmarks;
    for (let i = 0; i < lms.length; i++) {
      const lm = lms[i];
      const dx = px - lm.x;
      const dz = pz - lm.z;
      const dsq = dx * dx + dz * dz;
      if (lm.glow > 0) this.markers.glowAt(lm.x, lm.z, lm.glow, lm.gr, lm.gg, lm.gb);
      if (dsq < 30 * 30) this.markers.name(lm.name, lm.x, lm.height * 0.5 + 1.0, lm.z);
      if (dsq < 46 * 46) this.emitLandmarkAmbient(lm, dt);
      // 랜드마크 상호작용 어포던스 링(#50 21.3): 봉화(점화 가능=활성), 군영·전고(상시 기능).
      if (lm.kind === 11) {
        this.markers.interactRing(lm.x, lm.z, 1.6, 0.9, 0.35, this.landmarks.beaconStateNear(lm.x, lm.z) === 0);
      } else if (lm.kind === 5) {
        this.markers.interactRing(lm.x, lm.z, 0.5, 1.3, 0.7, true); // 군영 회복(청록)
      } else if (lm.kind === 6) {
        this.markers.interactRing(lm.x, lm.z, 1.4, 0.85, 0.4, true); // 전고 스턴(주황)
      } else if (lm.kind === 2) {
        this.markers.interactRing(lm.x, lm.z, 0.6, 0.85, 1.2, this.landmarks.watchtowerActive(lm.x, lm.z)); // 망루 사거리(청)
      }
    }
    // 전장 오브젝트(화약통/만두/사당/동라/목책) — 위치·어포던스 링 포함(#50 오너 Q: 위치 표기)
    this.objects.emitMarkers(this.markers, px, pz);
    // 성문 HP 바(#50 21.2): 봉쇄 외성 3문 위에 게이지. 파성/HP없음이면 -1 → 미표시.
    for (const g of CASTLE.outerGates) {
      this.markers.gateBar(g.x, g.z, this.map.gateHp01(g.key));
    }
    // 화면 밖 목표 방향 셰브론(#51): 우선순위 — 보급 마차(도주·놓치기 쉬움) > 보스 > 성 목표.
    // 색으로 성격 구분(마차 금·보스 적·성 청). 화면 안이면 guide가 자동 숨김.
    const guide = this.guideTarget();
    if (guide) this.markers.guide(guide.x, guide.z, px, pz, this.rig.camera, guide.color);
    else this.markers.guideOff();
    this.markers.end();
  }

  // 셰브론이 가리킬 최우선 화면-밖 대상 + 성격별 색.
  private guideTarget(): { x: number; z: number; color: string } | null {
    // 1) 보급 마차(도주 중인 특수 적 = flee 플래그). 시간 제한 이벤트라 최우선.
    const en = this.enemies;
    for (let i = 0; i < en.flee.length; i++) {
      if (en.alive[i] === 1 && en.flee[i] === 1) {
        return { x: en.x[i], z: en.z[i], color: 'rgba(255,225,77,0.95)' }; // 금색(보급)
      }
    }
    // 2) 보스(활성 시). 화면 안이면 guide가 숨기므로 항상 넘겨도 무해.
    if (this.boss.active && this.boss.idx >= 0 && en.alive[this.boss.idx] === 1) {
      return { x: en.x[this.boss.idx], z: en.z[this.boss.idx], color: 'rgba(232,92,74,0.95)' }; // 적색(보스)
    }
    // 3) 성 공방전 목표.
    const s = this.siegeGuideTarget();
    if (s) return { x: s.x, z: s.z, color: 'rgba(120,220,200,0.9)' }; // 청록(성 목표)
    return null;
  }

  // 현재 공성 국면의 목표 지점(셰브론이 가리킬 곳). 성 근처가 아니면 null(선택형).
  private siegeGuideTarget(): { x: number; z: number } | null {
    const s = this.siege.siegeState;
    if (s === 'held' || s === 'fallen') return null;
    const near = Math.hypot(this.player.x - CASTLE.cx, this.player.z - CASTLE.cz) < 70;
    if (s === 'enemy_held' || s === 'breached') {
      if (!near) return null;
      // 아직 안 부순 외성문 중 가장 가까운 곳
      let best: { x: number; z: number } | null = null;
      let bestD = Infinity;
      for (const g of CASTLE.outerGates) {
        if (this.map.isGateBreached(g.key)) continue;
        const d = (g.x - this.player.x) ** 2 + (g.z - this.player.z) ** 2;
        if (d < bestD) { bestD = d; best = { x: g.x, z: g.z }; }
      }
      return best;
    }
    if (s === 'lord' || s === 'captured' || s === 'counterattack') {
      return near ? { x: CASTLE.cx, z: CASTLE.cz } : null;
    }
    return null;
  }

  // 국면별 목표 HUD 패널(#50 21.1). 성 근처가 아니거나 종결 상태면 숨김(선택형).
  private updateSiegeObjective(): void {
    const s = this.siege.siegeState;
    const near = Math.hypot(this.player.x - CASTLE.cx, this.player.z - CASTLE.cz) < 60;
    const en = getLang() === 'en';
    if (!near || s === 'held' || s === 'fallen') { this.hud.setObjective(null); return; }
    if (s === 'enemy_held' || s === 'breached') {
      const done = this.map.castleOuterBreachCount();
      this.hud.setObjective({
        title: en ? 'Breach the Luoyang gates' : '낙양 성문을 부숴라',
        sub: en ? `Attack the gate · breached ${done}/3 · reward 名器` : `성문을 공격하라 · 파성 ${done}/3 · 보상 名器`,
        progress01: done / 3,
      });
    } else if (s === 'lord') {
      this.hud.setObjective({ title: en ? 'Slay the warlord Hua Xiong' : '성주 화웅을 베어라', color: '#e85c4a' });
    } else if (s === 'captured') {
      const cr = this.siege.captureRemainSec;
      this.hud.setObjective({
        title: en ? 'Luoyang taken — resupply' : '낙양 점령 — 보급·정비',
        sub: en ? 'Stay in the keep. Reclaimers incoming' : '성에 머물러 대비 · 탈환군 내습 임박',
        countdownSec: cr >= 0 ? cr : undefined,
        color: '#9affc0',
      });
    } else if (s === 'counterattack') {
      const rem = this.siege.counterRemainSec;
      this.hud.setObjective({
        title: en ? 'Hold Luoyang — survive!' : '낙양 사수 — 버텨라!',
        sub: en ? 'Survive in the castle until time runs out' : '성 안에서 시간이 다할 때까지 버텨라',
        countdownSec: rem >= 0 ? rem : undefined,
        color: '#e85c4a',
      });
    }
  }

  // 봉화대 불티 / 군영·잔해 연기 (근거리에서만, 순수 연출 — Math.random 게이트)
  private emitLandmarkAmbient(lm: MapLandmark, dt: number): void {
    const k = lm.kind;
    if (k === 11) {
      if (Math.random() < 13 * dt) this.particles.fireEmber(lm.x, lm.z, 0.5);
    } else if (k === 5) {
      if (Math.random() < 4 * dt) {
        this.particles.emit(
          lm.x + (Math.random() - 0.5), lm.height * 0.72, lm.z + (Math.random() - 0.5) * 0.6,
          (Math.random() - 0.5) * 0.2, 0.7 + Math.random() * 0.4, (Math.random() - 0.5) * 0.2,
          0.5, 0.5, 0.52, 1.1, 1.2, -0.3, 0.95,
        );
      }
    } else if (k === 4) {
      if (Math.random() < 2 * dt) {
        this.particles.emit(
          lm.x, lm.height * 0.5, lm.z, 0, 0.5 + Math.random() * 0.3, 0,
          0.42, 0.42, 0.44, 0.9, 1.4, -0.2, 0.96,
        );
      }
    }
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
      this.hitstop(90, 0.05);
      this.rig.addTrauma(0.65);
      this.pulseDamageVig(0.22 + (maxDmg * 0.5 / this.player.maxHp) * 1.1);
      this.player.hurtFlash();
      this.postfx?.pulseAberration(0.85);
      this.musou.addHit();
      audio.sfx('playerHit');
    }
  }

  private readonly onPlayerHit = (dmg: number, dirX = 0, dirZ = 0): boolean => {
    if (this.player.takeDamage(dmg)) {
      this.hitstop(90, 0.05);
      this.rig.addTrauma(0.62);
      this.pulseDamageVig(0.22 + (dmg / this.player.maxHp) * 1.1);
      this.player.hurtFlash();
      this.postfx?.pulseAberration(0.85);
      this.musou.addHit();
      if (dirX !== 0 || dirZ !== 0) {
        // 적 원거리탄 피격(#44 18.3): 방향성 넛지 + 소형 트라우마 + 전용 둔탁 SFX
        this.player.nudge(dirX, dirZ, 2.4);
        this.rig.addTrauma(0.15);
        audio.sfx('playerHitProj');
      } else {
        audio.sfx('playerHit'); // 접촉 등 무방향 피격
      }
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
    const breachedGate = this.map.recordKillAt(x, z);
    if (breachedGate) this.onGateBreached(breachedGate);
    if (en.cart[i] === 1) {
      // 보급 마차 확보: 골드 대량 + 보물상자
      this.particles.burst(x, z, 2.6, 2.0, 0.7, 30, 6);
      this.effects.spawnRing(x, z, 7, 2.6, 2.0, 0.7, 0.6);
      this.treasure.spawn(x, z, false);
      this.addGold(Math.round(400 * this.player.stats.goldMul));
      this.hud.banner(`${t('bannerSupply')} 補給確保`, '#ffe14d', 52, 1500);
      audio.sfx('levelup');
      this.kills++;
      en.kill(i);
      return;
    }
    if (en.boss[i] === 1) {
      // 낙양 성주(화웅): 일반 보스 보상 경로 우회 → 공방전 점령으로 처리. (DESIGN 20)
      if (this.boss.typeId === 'huaxiong') {
        this.captureCastle(i);
        return;
      }
      // 보스 처치: 대형 폭발 + 보물상자 + 큰 보상 + BGM 복귀 + 도감 기록
      this.particles.burst(x, z, 2.6, 1.6, 0.7, 60, 8);
      this.effects.spawnRing(x, z, 16, 2.4, 1.6, 0.8, 0.7);
      this.effects.spawnRing(x, z, 10, 2.2, 1.2, 2.0, 0.5);
      this.effects.spawnFlash(x, z, 2.6, 2.0, 1.0, 7);
      this.treasure.spawn(x, z, true);
      this.hitstop(120, 0.05);
      this.rig.addTrauma(0.9);
      this.cinematics.onBossDeath(x - this.player.x, z - this.player.z);
      this.postfx?.pulseBlur(0.7);
      this.postfx?.pulseAberration(1.0);
      this.flashScreen(0.4);
      this.hud.banner('討伐', '#e8c667', 90, 1600, 1);
      audio.sfx('levelup');
      if (this.boss.typeId) {
        // 보스 처치 대사 (#37)
        const line = bossLine(this.boss.typeId, 'death');
        if (line) this.hud.quote(nameOf('hero', this.boss.typeId, this.boss.name), line, 3200);
        this.bossesKilled.add(this.boss.typeId);
      }
      audio.playBgm('battle'); // 보스 처치 → 전투 BGM 복귀
      this.addGold(Math.round(300 * this.player.stats.goldMul));
      this.kills++;
      en.kill(i);
      return;
    }
    if (en.elite[i] === 1) {
      this.particles.burst(x, z, 2.4, 1.4, 0.7, 26, 6);
      this.effects.spawnRing(x, z, 6, 2.2, 1.6, 0.8, 0.5);
      this.effects.spawnFlash(x, z, 2.2, 1.6, 0.8, 3.6);
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
    // #45 19.2 KO 홈런 별 — 무쌍 킬만(난무 aoe는 weapon-layer 밖). 근접 차등(60/100%)은 roster가 네이티브 처리.
    if (this.musou.active) {
      const aw = Math.atan2(z - this.player.z, x - this.player.x);
      this.effects.spawnKOStar(x, z, Math.cos(aw), Math.sin(aw));
    }
    // 15.2 적 드랍 회복 픽업 — 저체력 연민 2배, 동시 상한 6
    {
      const lowHp = this.player.hp < this.player.maxHp * 0.4;
      if (this.gems.activeHealCount < 6 && rng.next() < (lowHp ? 0.024 : 0.012)) this.gems.spawnHeal(x, z, 0.06);
    }
    this.addGold(this.player.stats.goldMul); // 소량 누적
    this.kills++;
    this.frameKills++;
    // 킬 광점(프레임당 2회 상한 — 대량 처치 시 글로우 폭주 방지)
    if (this.frameKills <= 2) {
      this.effects.spawnFlash(x, z, 1.5 * en.tr[i], 0.95 * en.tg[i], 0.5 * en.tb[i], 1.4);
    }
    audio.sfx('hit');
    const bonus = this.combo.onKill();
    if (this.combo.count > this.maxCombo) this.maxCombo = this.combo.count;
    if (bonus > 0) this.xp += bonus * this.player.stats.xpMul;
    this.musou.addKill(this.combo.count);
    this.rig.punchFov(-0.5); // 미세 펀치줌
    en.kill(i);
  }

  // 낙양 성주 처단: 처단 연출 + 점령 전환(보상은 siege.onCapture). 일반 보스 討伐/보물/도감 경로 우회.
  private captureCastle(i: number): void {
    const en = this.enemies;
    const x = en.x[i];
    const z = en.z[i];
    this.particles.burst(x, z, 2.6, 1.6, 0.7, 60, 8);
    this.effects.spawnRing(x, z, 16, 2.4, 1.6, 0.8, 0.7);
    this.effects.spawnRing(x, z, 10, 2.2, 1.2, 2.0, 0.5);
    this.effects.spawnFlash(x, z, 2.6, 2.0, 1.0, 7);
    this.hitstop(120, 0.05);
    this.rig.addTrauma(0.9);
    this.cinematics.onBossDeath(x - this.player.x, z - this.player.z);
    this.postfx?.pulseBlur(0.7);
    this.postfx?.pulseAberration(1.0);
    this.flashScreen(0.4);
    const dl = lordDeathLine();
    if (dl) this.hud.quote(lordName(), dl, 3200);
    audio.sfx('levelup');
    audio.playBgm('battle');
    this.kills++;
    this.siege.captureNow(x, z);
    en.kill(i);
  }

  private onGateBreached(gate: GateBarrier): void {
    this.world.update();
    this.gateBreachFx.burst(gate.x, gate.z);
    this.effects.spawnRing(gate.x, gate.z, 11, 1.15, 0.36, 0.13, 0.62);
    this.effects.spawnRing(gate.x, gate.z, 6.5, 0.95, 0.62, 0.24, 0.4);
    this.particles.burst(gate.x, gate.z, 1.8, 0.7, 0.25, 72, 9);
    this.hitstop(90, 0.03);
    this.rig.addTrauma(0.78);
    this.rig.punchFov(3);
    this.flashScreen(0.16);
    audio.sfx('explosion');
    // 낙양 외성문 파성: 공방전 통지 + 전용 배너(호로관 배너·게이트러시 우회). (DESIGN 20)
    if (gate.key.startsWith('castle-')) {
      this.siege.notifyGateBreach(gate.key);
      this.hud.banner(`${getLang() === 'en' ? 'Gate Breached' : '성문 돌파'} 城門突破`, '#ffb05a', 52, 1600, 1);
      return;
    }
    this.hud.banner(`${t('bannerHulaoBreak')} 虎牢關破城`, '#ffb05a', 58, 1900);
    this.gateRushTimer = 0.8;
    this.gateRushX = gate.x;
    this.gateRushZ = gate.z;
    this.gateRushHorizontal = gate.horizontal;
  }

  private readonly onCollect = (value: number): void => {
    const feverMul = this.combo.fever ? 1.5 : 1; // 콤보 피버 시 XP 1.5배
    this.xp += value * this.player.stats.xpMul * feverMul;
    audio.sfx('gem');
    this.particles.emit(this.player.x, 1.0, this.player.z, 0, 1.5, 0, 0.4, 0.8, 2.2, 0.7, 0.4, 3, 0.9);
    while (this.xp >= this.nextXp) {
      this.xp -= this.nextXp;
      this.level++;
      this.nextXp = nextXpFor(this.level);
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
      this.hud.banner(`${t('bannerEvolve')} ${evo}`, '#ff9a3c', 56, 1800);
      audio.sfx('evolve');
      this.refreshLoadout();
      return;
    }
    // 보스 보상: 진화 불가 시 명기 3택 카드(미보유 풀). 전부 보유면 아래 기존 보상 폴백. (#36)
    if (boss) {
      const picks = rollMasterworks(() => rng.next(), this.masterworkIds, 3);
      if (picks.length > 0) {
        this.player.heal(this.player.maxHp * 0.5);
        this.curChoices = picks.map((m) => ({ kind: 'masterwork', id: m.id }) as Choice);
        this.state = 'levelup';
        const views = this.curChoices.map((c) => this.cardView(c));
        this.levelup.open(views, Math.floor(this.gold), false, (i) => this.pickCard(i), () => {});
        return;
      }
    }
    // 고급 보상: 회복 + 골드 + 경험치
    this.player.heal(this.player.maxHp * (boss ? 0.6 : 0.35));
    this.addGold(Math.round((boss ? 200 : 80) * this.player.stats.goldMul));
    this.xp += (boss ? this.nextXp * 1.5 : this.nextXp * 0.6) * this.player.stats.xpMul;
    this.hud.banner(boss ? t('bannerTreasure') : t('bannerReward'), '#9affc0', 48, 1400);
    while (this.xp >= this.nextXp) {
      this.xp -= this.nextXp;
      this.level++;
      this.nextXp = nextXpFor(this.level);
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
        if (this.availableWeapons && !this.availableWeapons.has(id)) continue; // 미해금 무기 제외
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
    const en = getLang() === 'en';
    if (c.kind === 'newWeapon') {
      const d = WEAPON_DEFS[c.id];
      return { title: nameOf('weapon', c.id, d.name), hanja: d.hanja, desc: en ? WEAPON_DESC_EN[c.id] ?? d.desc : d.desc, tag: `${t('catWeapon')} · ${t('tagNew')}`, accent: '#e8c667', symbol: d.hanja[0], badge: t('tagNew'), count: `${en ? 'Weapons' : '무기'} ${this.weapons.length}/${MAX_WEAPONS}` };
    }
    if (c.kind === 'upWeapon') {
      const d = WEAPON_DEFS[c.id];
      const w = this.weapons.find((x) => x.id === c.id)!;
      const willMax = w.level + 1 >= 8;
      // 진화 임박 힌트(DESIGN 13.3): MAX 도달 시 파트너 패시브 보유 여부로 레시피 노출
      let evoHint: string | undefined;
      if (willMax) {
        const rule = EVOLUTIONS.find((r) => r.from === c.id);
        if (rule && !this.weapons.some((x) => x.id === rule.to)) {
          const pName = nameOf('passive', rule.passive, PASSIVE_BY_ID[rule.passive]?.name ?? rule.passive);
          const hasPartner = (this.passives[rule.passive] ?? 0) >= 1;
          evoHint = hasPartner
            ? (en ? 'Evolution ready · elite chest 進化' : '進化 준비 완료 · 정예 보물상자')
            : (en ? `Evolve soon · needs ${pName} 進化` : `進化 임박 · ${pName} 필요`);
        }
      }
      return {
        title: nameOf('weapon', c.id, d.name),
        hanja: d.hanja,
        desc: en ? WEAPON_DESC_EN[c.id] ?? d.desc : d.desc,
        tag: `${t('catWeapon')} ${willMax ? t('tagMax') : t('tagUp')} Lv${w.level}→${w.level + 1}`,
        accent: '#e8a94a',
        symbol: d.hanja[0],
        badge: willMax ? t('tagMax') : t('tagUp'),
        rare: willMax, // Lv8 도달 → 진화 조건 근접 강조
        count: `${en ? 'Weapons' : '무기'} ${this.weapons.length}/${MAX_WEAPONS}`,
        evoHint,
      };
    }
    if (c.kind === 'newPassive') {
      const d = PASSIVE_BY_ID[c.id];
      return { title: nameOf('passive', c.id, d.name), hanja: d.hanja, desc: d.desc(1), tag: `${t('catPassive')} · ${t('tagNew')}`, accent: '#7ec8ff', symbol: d.hanja[0], badge: t('tagNew'), rare: d.rare, count: `${en ? 'Passives' : '패시브'} ${Object.keys(this.passives).length}/${MAX_PASSIVES}` };
    }
    if (c.kind === 'upPassive') {
      const d = PASSIVE_BY_ID[c.id];
      const lvl = this.passives[c.id];
      return { title: nameOf('passive', c.id, d.name), hanja: d.hanja, desc: d.desc(lvl + 1), tag: `${t('catPassive')} ${t('tagUp')} Lv${lvl}→${lvl + 1}`, accent: '#7ec8ff', symbol: d.hanja[0], badge: t('tagUp'), rare: d.rare, count: `${en ? 'Passives' : '패시브'} ${Object.keys(this.passives).length}/${MAX_PASSIVES}` };
    }
    if (c.kind === 'relic') {
      const d = RELIC_BY_ID[c.id];
      return { title: relicName(d), hanja: d.hanja, desc: relicDesc(d), tag: t('catRelic'), accent: '#c77dff', symbol: d.hanja[0], badge: t('tagCurse'), rare: true };
    }
    if (c.kind === 'masterwork') {
      const d = MASTERWORK_BY_ID[c.id];
      return {
        title: masterworkName(d), hanja: d.hanja, desc: masterworkDesc(d),
        tag: en ? 'Masterwork 名器' : '명기 名器',
        accent: '#f5c542', symbol: d.hanja[0],
        badge: en ? 'RARE' : '名器', rare: true,
      };
    }
    // reward — 심볼(治/金/書)은 한자 공통
    const map = {
      heal: { name: t('rewardHealName'), hanja: '再整備', desc: t('rewardHealDesc'), symbol: '治' },
      gold: { name: t('rewardGoldName'), hanja: '軍資金', desc: t('rewardGoldDesc'), symbol: '金' },
      xp: { name: t('rewardXpName'), hanja: '兵法修鍊', desc: t('rewardXpDesc'), symbol: '書' },
    };
    const m = map[c.id];
    return { title: m.name, hanja: m.hanja, desc: m.desc, tag: t('tagReward'), accent: '#9affc0', symbol: m.symbol, badge: t('tagReward') };
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
    } else if (c.kind === 'masterwork') {
      this.masterworkIds.push(c.id);
      this.player.addMasterwork(c.id);
      audio.sfx('relic');
      // 획득 모먼트: 금빛 한자 문장 솟음 + 링 + 순간 광원 (절제된 단발)
      const hz = MASTERWORK_BY_ID[c.id].hanja[0];
      // 금빛이 백색으로 타지 않게 강도 하향 (E2E 판독 반영 — 금색 정체성 유지)
      this.effects.spawnCrest(this.player.x, this.player.z, hz, 1.3, 1.02, 0.34, 2.0);
      this.effects.spawnRing(this.player.x, this.player.z, 9, 1.3, 1.02, 0.34, 0.7);
      if (this.effects.spawnLight) this.effects.spawnLight(this.player.x, this.player.z, 1.6, 1.2, 0.4, 7, 0.5);
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

  // 결과 화면 "계속 싸운다" → 현재 런을 무한 모드로 이어감 (App/phase3-ui가 호출).
  // 풀은 리셋하지 않으므로 10분 시점 전황이 그대로 이어진다.
  resumeEndless(): void {
    if (this.endless) return;
    this.endless = true;
    this.ended = false;
    this.victoryAchieved = true;
    this.state = 'play';
    this.hud.setVisible(true);
    this.hud.banner(`${t('bannerEndless')} 無限`, '#e85c4a', 56, 1600);
    audio.playBgm('battle');
  }

  // 부활 충격파: 주변 적에게 대미지 + 넉백.
  private shockwave(cx: number, cz: number, radius: number, damage: number): void {
    this.postfx?.pulseAberration(0.7);
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
    if (victory && !this.endless && this.gameTime >= RUN_LENGTH) this.victoryAchieved = true;
    this.hud.setFever(false);
    this.state = victory ? 'victory' : 'dead';
    if (victory) {
      this.rig.addTrauma(0.5);
    } else {
      // 사망은 종료 상태(업데이트 루프 정지)라 1회성 WAAPI 페이드로 처리(점멸 아님).
      this.damageVigLevel = 0;
      this.damageFlash.animate([{ opacity: 0.85 }, { opacity: 0 }], { duration: 600, easing: 'ease-out' });
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
      masterworks: [...this.masterworkIds],
      endless: this.endless,
      canContinue: victory && !this.endless && this.gameTime >= RUN_LENGTH,
      luoyang:
        this.siegeEvents.defended > 0 ? 'held'
        : this.siegeEvents.lost > 0 ? 'fallen'
        : this.siegeEvents.capture > 0 ? 'captured'
        : 'none',
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

  // QA용: 실제 피격 경로로 n 대미지(무적/부활 로직 포함). 부활→재사망 엣지 검증용.
  testDamagePlayer(n: number): void {
    this.onPlayerHit(n);
  }

  // QA/시각검증용: 활성 보스 즉시 처치(→ handleKill 보스 분기 → onBossDeath → PiP 리플레이). #26 검증 지원.
  testKillBoss(): void {
    if (!this.boss.active || this.boss.idx < 0) return;
    const i = this.boss.idx;
    if (this.enemies.damageAt(i, 1e9)) this.handleKill(i);
  }

  // #18 개발용: 무쌍 스펙터클 프리미티브를 플레이어 주변에 일괄 시연.
  testMusouFx(): void {
    const x = this.player.x;
    const z = this.player.z;
    this.effects.spawnCrest(x, z, '龍', 0.5, 1.4, 2.4, 6);
    this.effects.spawnBaguaSigil(x + 13, z, 6);
    this.effects.spawnTripleShock(x - 13, z, 5, 1.6, 1.0, 0.4);
    this.effects.spawnFireWall(x, z + 11, 1, 0, 9, 1.8, 3);
    this.effects.spawnFlameTrail(x + 7, z - 9, 0.4, 1.9, 1.1);
    for (let k = 0; k < 6; k++) {
      this.effects.spawnMeteorArrow(x - 12 + k * 4.5, z - 13, 1.7, 1.4, 0.6, 0.55 + k * 0.07);
    }
    this.lightField.spawn(x, 1, z, 0.5, 1.2, 2.2, 12, 2, true); // 우선순위 무쌍 광원
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
  testSpawnProjectileShowcase(): void {
    const x = this.player.x - 4;
    const z = this.player.z;
    const shots: Array<[number, number, number, number, number, number, number, number]> = [
      [PK_ARROW, -3.2, 2.0, 1.5, 0.55, 2.0, 1.5, 0.7],
      [PK_TALISMAN, -1.6, 1.6, 1.25, 0.95, 1.7, 1.7, 2.1],
      [PK_SLASHWAVE, 0, 1.3, 3.0, 2.2, 0.7, 2.4, 1.2],
      [PK_ORB, 1.8, 1.0, 1.35, 1.35, 1.6, 1.8, 2.3],
      [PK_CAVALRY, 3.8, 2.4, 4.5, 1.7, 2.0, 1.4, 0.9],
    ];
    for (const [kind, oz, speed, length, width, r, g, b] of shots) {
      this.projectiles.spawn(
        x, z + oz, 1, 0, speed, 0, 0.2, 99, 4.5, kind,
        r, g, b, length, width, false, 0, kind === PK_CAVALRY,
      );
    }
    this.testSpawnEnemyProjectileShowcase();
  }
  testSpawnEnemyProjectileShowcase(): void {
    const x = this.player.x - 2.4;
    const z = this.player.z;
    const enemyShots: Array<[number, number, number, boolean]> = [
      [EK_ARROW, 6.2, 1.8, false],
      [EK_STRATEGIST, 3.8, 1.3, true],
      [EK_FIREBALL, 1.5, 1.45, false],
      [EK_POISON, -0.8, 1.2, true],
      [EK_LIGHTNING, -3.6, 1.7, false],
      [EK_HEAVY, -6.2, 1.05, false],
    ];
    for (const [kind, oz, speed, homing] of enemyShots) {
      this.enemyProj.spawn(x, z + oz, 1, 0, speed, 0, homing, kind);
    }
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
  testSpawnPattern(name: string): void {
    this.spawner.forcePattern(name, this.gameTime, this.player.x, this.player.z);
  }
  testShowWorldObjects(): void {
    this.objects.testShowcase(this.player.x, this.player.z);
  }
  testSetPlayerPosition(x: number, z: number): void {
    this.map.projectWalkable(x, z, this.player.radius, this.moveOut);
    this.player.setPosition(this.moveOut.x, this.moveOut.z);
    this.map.update(this.player.x, this.player.z, 0);
    this.world.update();
  }
  testSetInvulnerable(seconds = 60): void {
    this.player.invuln = Math.max(this.player.invuln, seconds);
  }
  testTriggerHulao(): void {
    this.map.triggerHulao(this.player.x, this.player.z);
  }
  // 낙양 공방전 GFX 검증용 훅: 깃발 소유 전환 웨이브 / 불화살 볼리 강제.
  testFlipBanners(allied: boolean): void {
    castleRenderData.allied = allied;
    castleRenderData.flipX = CASTLE.cx;
    castleRenderData.flipZ = CASTLE.cz;
    castleRenderData.flipVersion++;
  }
  testVolley(): void {
    const px = this.player.x;
    const pz = this.player.z;
    const shots: { x: number; z: number; t: number }[] = [];
    for (let k = 0; k < 6; k++) {
      const a = (k / 6) * Math.PI * 2;
      shots.push({ x: px + Math.cos(a) * 5, z: pz + Math.sin(a) * 5, t: 0.9 });
    }
    this.arrowRain.volley(shots);
  }
  testPrimeGate(): void {
    if (!this.map.hulaoOn) this.map.triggerHulao(this.player.x, this.player.z);
    this.map.primeGate();
  }
  testBreachGate(): void {
    if (!this.map.hulaoOn) this.map.triggerHulao(this.player.x, this.player.z);
    this.map.primeGate();
    const gate = this.map.gates.find((candidate) => candidate.key === 'hulao');
    if (!gate) return;
    const breached = this.map.recordKillAt(gate.x, gate.z);
    if (breached) this.onGateBreached(breached);
  }
  // 낙양 공방전(DESIGN 20) QA
  testSiegeBreach(key = 'castle-s'): void {
    const g = this.map.gates.find((c) => c.key === key);
    if (!g) return;
    const breached = this.map.breachNear(g.x, g.z, 0.5);
    if (breached) this.onGateBreached(breached);
  }
  testSiegeForceLord(): void { this.siege.testForceLord(); }
  testSiegeForceCounter(): void { this.siege.testForceCounter(); }
  testSiegeAddFall(n: number): void { this.siege.testAddFall(n); }
  testSiegeForceDefend(): void { this.siege.testForceDefend(); }
  testSetObjective(o: unknown): void { this.hud.setObjective(o as never); }
  testDamageGate(key: string, amt: number): void { const b = this.map.damageGate(key, amt); if (b) this.onGateBreached(b); }
  // 다음 레벨업 카드에 저주 유물 강제 + 즉시 레벨업
  testForceRelic(): void {
    this.forceRelicNext = true;
    this.testForceLevel();
  }
  // 무한 모드 즉시 진입 (10분 승리 후 계속)
  testEnterEndless(): void {
    this.victoryAchieved = true;
    this.endless = true;
    if (this.gameTime < 601) this.gameTime = 601;
  }
  get testStats() {
    return {
      time: this.gameTime,
      musouGauge: this.musou.gauge,
      kills: this.kills,
      level: this.level,
      gold: Math.floor(this.gold),
      goldEarned: Math.floor(this.goldEarned),
      maxCombo: this.maxCombo,
      hero: this.hero.id,
      alive: this.enemies.aliveCount,
      worldProps: this.world.visibleProps,
      worldObjects: this.objects.visibleCount,
      map: {
        walls: this.map.walls.length,
        roads: this.map.roads.length,
        landmarks: this.map.landmarks.length,
        landmarkVisible: this.world.landmarkVisible,
        colliders: this.map.activeColliderCount,
        collisions: this.map.collisionCount,
        gateKills: this.map.gateKills,
        gateBreached: this.map.isGateBreached(),
        gateHp: { s: this.map.gateHp01('castle-s'), e: this.map.gateHp01('castle-e'), w: this.map.gateHp01('castle-w') },
        breaches: this.map.breachCount,
        playerInsideWall: this.map.circleBlocked(this.player.x, this.player.z, this.player.radius * 0.95),
        playerWallHits: this.playerWallHits,
        enemiesInsideWall: this.enemies.countInsideWalls(this.map),
        debris: this.gateBreachFx.activeCount,
        playerX: this.player.x,
        playerZ: this.player.z,
      },
      enemyProjectiles: this.enemyProj.activeCount,
      enemyProjectileKinds: this.enemyProj.kindCounts,
      patterns: {
        charge: this.enemies.chargeStarts,
        volley: this.enemies.volleyStarts,
        caster: this.enemies.casterStarts,
      },
      autoAim: {
        target: this.ctx.aimTarget,
        x: this.ctx.aimX,
        z: this.ctx.aimZ,
        lastWeapon: this.lastAttackWeapon,
        lastX: this.lastAttackX,
        lastZ: this.lastAttackZ,
        count: this.lastAttackCount,
      },
      weapons: this.weapons.map((w) => `${w.id}:${w.level}`),
      passives: { ...this.passives },
      musou: this.musou.gauge,
      bossActive: this.boss.active,
      companion: this.companion.active ? this.companion.definition.id : null,
      companionAttacks: this.companion.attacks,
      companionKills: this.companion.kills + this.companion2.kills,
      relics: [...this.relicIds],
      endless: this.endless,
      fever: this.combo.fever,
      siege: {
        state: this.siege.siegeState,
        fallGauge: this.siege.fallGaugeValue,
        allied: castleRenderData.allied,
        events: { ...this.siegeEvents },
      },
      state: this.state,
    };
  }
}
