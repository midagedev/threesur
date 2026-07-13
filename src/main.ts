import './style.css';
import { createRenderer, RenderPipeline } from './gfx/renderer';
import { CameraRig } from './gfx/camera';
import { Input } from './core/input';
import { Loop } from './core/loop';
import { loadAtlas } from './gfx/atlas';
import { Run } from './game/run';
import type { RunResult } from './game/run';
import { Screens } from './ui/screens';
import { Joystick, isTouchDevice } from './ui/joystick';
import { audio } from './core/audio';
import { loadSave, writeSave, updateBest } from './core/save';
import type { SaveData } from './core/save';
import { computeMeta, UPGRADE_BY_ID, upgradeCost, LVBU_UNLOCK_COST } from './data/upgrades';
import { evaluateAchievements, bestTitle } from './data/achievements';
import { isHeroUnlocked, unlockedHeroIds } from './data/heroUnlocks';

type Scene = 'title' | 'select' | 'run' | 'result' | 'shop' | 'pause';

const app = document.getElementById('app')!;

// 로딩 표시
const loading = document.createElement('div');
loading.id = 'loading';
loading.innerHTML =
  '<div style="font-size:30px;">일기당천 一騎當千</div>' +
  '<div style="font-size:15px;color:#b8bcc8;">전장 준비 중…</div>';
document.body.appendChild(loading);

const renderer = createRenderer(app);
const rig = new CameraRig();
const input = new Input();
const touch = isTouchDevice();

loadAtlas()
  .then((atlas) => {
    const save: SaveData = loadSave();
    audio.setMuted(save.muted);

    let scene: Scene = 'title';
    let lastHero = 'zhaoyun';
    let lastResult: RunResult | null = null;

    const run = new Run(
      atlas,
      rig,
      input,
      {
        onEnd: (result) => onRunEnd(result),
        onPause: () => onPause(),
      },
      touch,
    );
    const pipeline = new RenderPipeline(renderer, run.scene, rig.camera);
    run.setPostFx(pipeline); // PostFX 순간 펄스(#21) 주입
    const joystick = new Joystick(input);

    const screens = new Screens({
      onStart: () => goSelect(),
      onSelectHero: (id) => startRun(id),
      onOpenShop: (tab) => goShop(tab),
      onBackToTitle: () => goTitle(),
      onRetry: () => startRun(lastResult?.heroId ?? lastHero),
      onBuyUpgrade: (id) => buyUpgrade(id),
      onUnlockLvbu: () => unlockLvbu(),
      onToggleMute: () => {
        save.muted = audio.toggleMuted();
        writeSave(save);
        return save.muted;
      },
      onResume: () => resumeRun(),
      onAbandon: () => run.abandon(),
    }, atlas);
    screens.setMuted(save.muted);

    // === 씬 전환 ===
    function goTitle(): void {
      scene = 'title';
      run.enterAttract();
      joystick.setVisible(false);
      audio.playBgm('title');
      screens.showTitle();
    }
    function goSelect(): void {
      scene = 'select';
      audio.playBgm('title');
      screens.showSelect(save);
    }
    function goShop(tab: 'upgrade' | 'codex'): void {
      scene = 'shop';
      audio.playBgm('title');
      screens.showShop(save, tab);
    }
    function startRun(heroId: string, bypassUnlock = false): void {
      if (!bypassUnlock && !isHeroUnlocked(heroId, save)) return;
      lastHero = heroId;
      scene = 'run';
      screens.hide();
      run.beginRun(heroId, computeMeta(save.upgrades));
      joystick.setVisible(touch);
    }
    function onRunEnd(result: RunResult): void {
      scene = 'result';
      lastResult = result;
      joystick.setVisible(false);
      const unlockedBefore = new Set(unlockedHeroIds(save));
      // 골드 적립 + 최고기록 + 보스 도감 + 누적 통계 저장
      save.gold += result.goldEarned;
      const records = updateBest(save.best, {
        time: result.time,
        kills: result.kills,
        level: result.level,
        combo: result.maxCombo,
      });
      for (const b of result.bosses) if (!save.bosses.includes(b)) save.bosses.push(b);
      save.totalKills += result.kills;
      if (result.victory) save.totalWins += 1;
      // 업적 판정 (결과 확정 시 1회) — 누적 통계 반영, 신규 달성분 저장
      const earned = evaluateAchievements({
        victory: result.victory,
        kills: result.kills,
        maxCombo: result.maxCombo,
        time: result.time,
        level: result.level,
        bosses: result.bosses,
        weapons: result.weapons,
        totalKills: save.totalKills,
        totalWins: save.totalWins,
        endless: result.endless,
      });
      const newAchievements = earned.filter((id) => !save.achievements.includes(id));
      for (const id of newAchievements) save.achievements.push(id);
      const newHeroes = unlockedHeroIds(save).filter((id) => !unlockedBefore.has(id));
      writeSave(save);
      audio.playJingle(result.victory ? 'victory' : 'defeat');
      if (newAchievements.length > 0) audio.sfx('achievement');
      screens.showResult(result, save, records, { title: bestTitle(earned), newAchievements, newHeroes });
    }
    function onPause(): void {
      scene = 'pause';
      joystick.setVisible(false);
      screens.showPause();
    }
    function resumeRun(): void {
      scene = 'run';
      screens.hide();
      run.resume();
      joystick.setVisible(touch);
    }
    function buyUpgrade(id: string): void {
      const def = UPGRADE_BY_ID[id];
      if (!def) return;
      const lv = save.upgrades[id] ?? 0;
      const cost = upgradeCost(def, lv);
      if (cost < 0 || save.gold < cost) return;
      save.gold -= cost;
      save.upgrades[id] = lv + 1;
      writeSave(save);
      audio.sfx('uiClick');
      screens.rerenderShop();
    }
    function unlockLvbu(): void {
      if (save.lvbuUnlocked || save.gold < LVBU_UNLOCK_COST) return;
      save.gold -= LVBU_UNLOCK_COST;
      save.lvbuUnlocked = true;
      writeSave(save);
      audio.sfx('revive');
      screens.rerenderShop();
    }

    // 첫 유저 제스처에서 오디오 컨텍스트 활성 (브라우저 자동재생 정책).
    const wakeAudio = (): void => {
      audio.init();
      audio.playBgm(scene === 'run' ? 'battle' : 'title');
    };
    window.addEventListener('pointerdown', wakeAudio, { once: true });
    window.addEventListener('keydown', wakeAudio, { once: true });

    // Esc: 일시정지 화면에서 계속 (run 시뮬레이션은 정지 중이라 App이 처리).
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && scene === 'pause') resumeRun();
    });

    window.addEventListener('resize', () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      rig.onResize(w, h);
      pipeline.setSize(w, h);
    });

    // 부팅: 어트랙트 배경 + 타이틀. (오디오는 첫 제스처에서 활성 → 타이틀 BGM 예약)
    run.enterAttract();
    audio.playBgm('title');
    screens.showTitle(true);
    loading.remove();

    // 드로우콜 프레임 단위 측정
    renderer.info.autoReset = false;
    let fpsEma = 60;
    const loop = new Loop((dt) => {
      input.poll();
      run.update(dt);
      if (scene === 'run') joystick.setMusou(run.musouGauge, run.musouReadyFlag);
      pipeline.setMusou(run.musouStrength, run.renderTime);
      if (scene === 'run' && run.consumeReplayTrigger()) pipeline.playReplay();
      renderer.info.reset();
      pipeline.render();
      input.endFrame();
      audio.endFrame();
      if (dt > 0) fpsEma += (1 / dt - fpsEma) * 0.05;
    });
    loop.start();

    // === 테스트 훅 (playtest 봇) ===
    // 공개 Pages 빌드에서는 치트/계측 전역을 노출하지 않는다. 로컬 dev/preview에서만 활성화.
    const allowTestHooks =
      import.meta.env.DEV || location.hostname === 'localhost' || location.hostname === '127.0.0.1';
    if (allowTestHooks) {
      (window as unknown as { __GAME_TEST__: unknown }).__GAME_TEST__ = {
      // 씬 제어
      goToTitle: () => goTitle(),
      selectHero: (id: string) => startRun(id, true),
      openShop: (tab: 'upgrade' | 'codex' = 'upgrade') => goShop(tab),
      grantGold: (n: number) => {
        save.gold += n;
        writeSave(save);
        screens.rerenderShop();
      },
      buyUpgrade: (id: string) => buyUpgrade(id),
      unlockLvbu: () => unlockLvbu(),
      killPlayer: () => run.testKillPlayer(),
      damagePlayer: (n: number) => run.testDamagePlayer(n),
      killBoss: () => run.testKillBoss(),
      get scene() {
        return scene;
      },
      get save() {
        return {
          gold: save.gold,
          upgrades: { ...save.upgrades },
          lvbuUnlocked: save.lvbuUnlocked,
          best: { ...save.best },
          bosses: [...save.bosses],
          achievements: [...save.achievements],
          totalKills: save.totalKills,
          totalWins: save.totalWins,
        };
      },
      // 런 제어 (기존 유지)
      setTime: (s: number) => run.testSetTime(s),
      giveWeapon: (id: string) => run.testGiveWeapon(id),
      givePassive: (id: string, lv?: number) => run.testGivePassive(id, lv),
      levelUp: () => run.testForceLevel(),
      fillMusou: () => run.testFillMusou(),
      activateMusou: () => run.testActivateMusou(),
      addGold: (n: number) => run.testAddGold(n),
      showProjectiles: () => run.testSpawnProjectileShowcase(),
      showEnemyProjectiles: () => run.testSpawnEnemyProjectileShowcase(),
      musouFx: () => run.testMusouFx(),
      spawnBoss: (t: string) => run.testSpawnBoss(t),
      setBossFlags: (b3: boolean, b6: boolean, b9: boolean) => run.testSetBossFlags(b3, b6, b9),
      treasure: (boss?: boolean) => run.testTreasure(boss),
      // Phase 4: 전장 이벤트/유물/무한 모드
      triggerEvent: (name: string) => run.testTriggerEvent(name),
      spawnPattern: (name: string) => run.testSpawnPattern(name),
      showWorldObjects: () => run.testShowWorldObjects(),
      setPlayerPosition: (x: number, z: number) => run.testSetPlayerPosition(x, z),
      setInvulnerable: (seconds?: number) => run.testSetInvulnerable(seconds),
      primeGate: () => run.testPrimeGate(),
      breachGate: () => run.testBreachGate(),
      triggerHulao: () => run.testTriggerHulao(),
      resumeEndless: () => run.resumeEndless(),
      forceRelic: () => run.testForceRelic(),
      enterEndless: () => run.testEnterEndless(),
      get stats() {
        return run.testStats;
      },
      };

      // 성능/디버그 계측 훅
      (window as unknown as { __DEBUG__: unknown }).__DEBUG__ = {
        info: () => ({
          fps: Math.round(fpsEma),
          calls: renderer.info.render.calls,
          tris: renderer.info.render.triangles,
          geometries: renderer.info.memory.geometries,
          textures: renderer.info.memory.textures,
        }),
      };
    }
  })
  .catch((err) => {
    console.error(err);
    loading.innerHTML =
      '<div style="color:#e85c4a;font-size:22px;">로드 실패</div>' +
      `<div style="font-size:13px;color:#b8bcc8;max-width:80vw;">${String(err)}</div>`;
  });
