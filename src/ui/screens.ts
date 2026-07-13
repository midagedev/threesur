import { HEROES } from '../data/heroes';
import { WEAPON_DEFS, EVOLUTIONS } from '../data/weapons';
import { PASSIVE_BY_ID } from '../data/passives';
import { UPGRADE_DEFS, upgradeCost, LVBU_UNLOCK_COST } from '../data/upgrades';
import { BOSS_DEFS } from '../game/boss';
import { ACHIEVEMENT_BY_ID, ACHIEVEMENTS } from '../data/achievements';
import { anyRandomLine, dialogueSelect } from '../data/dialogue';
import { heroUnlockText, isHeroUnlocked } from '../data/heroUnlocks';
import { WEAPON_UNLOCK_ORDER, isWeaponUnlocked, weaponUnlockText } from '../data/weaponUnlocks';
import { MASTERWORK_DEFS, masterworkName, masterworkDesc, masterworkLore, isMasterworkOwned, ownedMasterworks } from '../data/relics';
import { t, getLang, toggleLang, onLangChange, nameOf, WEAPON_DESC_EN, ACH_EN, HERO_BONUS_EN, HERO_MUSOU_EN } from '../core/i18n';
import { openSharePreview } from './shareCard';
import type { SaveData } from '../core/save';
import type { RunResult } from '../game/run';
import type { Atlas } from '../gfx/atlas';

// 결과 확정 시 App이 계산해 넘기는 공유/업적 정보.
export interface ShareInfo {
  title: { name: string; hanja: string }; // 공유 카드 대표 칭호
  newAchievements: string[]; // 이번 런에 새로 달성한 업적 id
  newHeroes: string[]; // 이번 런 결과로 새로 열린 장수 id
  newWeapons?: string[]; // 이번 런 결과로 새로 해금된 무기 id (DESIGN 13.1)
}

// 장수 선택 순서.
const HERO_ORDER = ['zhaoyun', 'guanyu', 'sunshangxiang', 'zhangfei', 'zhugeliang', 'huangzhong', 'lvbu'];
// 도감 보스 순서.
const BOSS_ORDER = ['yuanshao', 'dongzhuo', 'lvbu'];

export interface ScreenCallbacks {
  onStart: () => void; // 타이틀 → 선택
  onSelectHero: (id: string) => void; // 선택 확정 → 런 시작
  onOpenShop: (tab: 'upgrade' | 'codex') => void;
  onBackToTitle: () => void;
  onRetry: () => void; // 결과 → 다시 출진
  onBuyUpgrade: (id: string) => void;
  onUnlockLvbu: () => void;
  onToggleMute: () => boolean; // 새 muted 상태 반환
  onResume: () => void;
  onAbandon: () => void;
}

type Named = { name: string; hanja: string };

function fmtTime(sec: number): string {
  const mm = Math.floor(sec / 60);
  const ss = Math.floor(sec % 60);
  return `${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`;
}

function el<K extends keyof HTMLElementTagNameMap>(tag: K, className?: string, html?: string): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

// sgrade 시트에서 캐릭터 초상(정면 idle)을 CSS 스프라이트로 잘라 확대 표시.
function heroPortrait(charIndex: number, scale: number): HTMLDivElement {
  const base = import.meta.env.BASE_URL + 'assets/sprites/sgrade.png';
  const cellW = 48;
  const cellH = 64;
  const sheetW = 84 * cellW; // 4032 — sgrade 시트 열 수(manifest cols)와 일치해야 함
  const sheetH = 4 * cellH; // 256
  const x = charIndex * 4 * cellW; // 블록 원점(정면 idle = 열0, 행0)
  const d = el('div', 'hero-portrait');
  d.style.width = `${cellW * scale}px`;
  d.style.height = `${cellH * scale}px`;
  d.style.backgroundImage = `url(${base})`;
  d.style.backgroundSize = `${sheetW * scale}px ${sheetH * scale}px`;
  d.style.backgroundPosition = `-${x * scale}px 0px`;
  return d;
}

// 게임의 모든 메뉴 화면(타이틀/선택/결과/상점/도감/일시정지) + 페이드 전환.
export class Screens {
  private readonly cb: ScreenCallbacks;
  private readonly atlas: Atlas; // 공유 카드 초상 렌더용
  private readonly overlay: HTMLDivElement;
  private readonly fade: HTMLDivElement;
  private muted = false;
  current: 'none' | 'title' | 'select' | 'result' | 'shop' | 'pause' = 'none';
  // 언어 토글 시 현재 화면을 즉시(페이드 없이) 재구성하기 위한 재렌더 클로저.
  private rerender: (() => void) | null = null;

  constructor(cb: ScreenCallbacks, atlas: Atlas) {
    this.cb = cb;
    this.atlas = atlas;

    this.fade = el('div');
    this.fade.id = 'fade';
    document.body.appendChild(this.fade);

    this.overlay = el('div', 'overlay');
    document.body.appendChild(this.overlay);

    // 언어 변경 시 현재 화면 재구성.
    onLangChange(() => {
      if (this.rerender) this.rerender();
    });
  }

  setMuted(m: boolean): void {
    this.muted = m;
  }

  private show(build: () => void, instant = false): void {
    const swap = () => {
      this.overlay.textContent = '';
      build();
      this.overlay.classList.add('show');
    };
    if (instant) {
      swap();
      return;
    }
    this.fade.style.pointerEvents = 'auto';
    const a = this.fade.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 150, easing: 'ease-in', fill: 'forwards' });
    a.onfinish = () => {
      swap();
      const b = this.fade.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 150, easing: 'ease-out', fill: 'forwards' });
      b.onfinish = () => {
        this.fade.style.pointerEvents = 'none';
      };
    };
  }

  hide(): void {
    this.overlay.classList.remove('show');
    this.current = 'none';
  }

  private button(label: string, onClick: () => void, opts?: { primary?: boolean; disabled?: boolean }): HTMLButtonElement {
    const b = el('button', opts?.primary ? 'btn btn-primary' : 'btn');
    b.textContent = label;
    if (opts?.disabled) b.disabled = true;
    b.addEventListener('click', () => {
      if (!b.disabled) onClick();
    });
    return b;
  }

  private muteButton(): HTMLButtonElement {
    const b = el('button', 'btn btn-icon');
    b.textContent = this.muted ? '🔇' : '🔊';
    b.setAttribute('aria-label', '음소거 토글 / mute');
    b.addEventListener('click', () => {
      this.muted = this.cb.onToggleMute();
      b.textContent = this.muted ? '🔇' : '🔊';
    });
    return b;
  }

  // 한/영 토글 버튼. 클릭 시 언어 전환 → onLangChange 구독이 현재 화면 재렌더.
  private langButton(): HTMLButtonElement {
    const b = el('button', 'btn btn-icon');
    b.textContent = getLang() === 'ko' ? 'EN' : 'KO'; // 누르면 바뀔 대상 언어 표시
    b.setAttribute('aria-label', 'language / 언어');
    b.addEventListener('click', () => {
      toggleLang();
    });
    return b;
  }

  // ===== 타이틀 =====
  showTitle(instant = false): void {
    this.current = 'title';
    // 타이틀 진입 시 한 번 뽑은 혼잣말을 재렌더(언어 토글) 동안 유지.
    const m = anyRandomLine();
    const build = (): void => {
      const s = el('div', 'screen');
      const mark = el('div', 'title-mark');
      mark.appendChild(el('div', 'title-hanja', '一騎當千')); // 한자 로고 — 양 언어 공통
      mark.appendChild(el('div', 'title-kor', t('titleKor')));
      mark.appendChild(el('div', 'title-tag', t('titleTag')));
      s.appendChild(mark);

      const primary = el('div', 'btn-row');
      primary.appendChild(this.button(t('start'), this.cb.onStart, { primary: true }));
      s.appendChild(primary);

      const secondary = el('div', 'btn-row');
      secondary.appendChild(this.button(t('shop'), () => this.cb.onOpenShop('upgrade')));
      secondary.appendChild(this.button(t('codex'), () => this.cb.onOpenShop('codex')));
      secondary.appendChild(this.muteButton());
      secondary.appendChild(this.langButton());
      s.appendChild(secondary);

      s.appendChild(el('div', 'controls-hint', t('controlsHint')));

      // 장수 혼잣말 (군웅전 대사) — 대사 영어 번역은 후속 단계, 현재는 원문 유지.
      if (m.line) s.appendChild(el('div', 'title-quote', `“${m.line}” <span class="who">— ${m.name}</span>`));

      this.overlay.appendChild(s);
    };
    this.rerender = () => {
      this.overlay.textContent = '';
      build();
    };
    this.show(build, instant);
  }

  // ===== 장수 선택 =====
  showSelect(save: SaveData): void {
    this.current = 'select';
    const build = (): void => {
      const s = el('div', 'screen');
      s.appendChild(el('div', 'section-title', `${t('selectTitle')} <small>將帥選擇</small>`));

      const grid = el('div', 'hero-grid');
      for (const id of HERO_ORDER) {
        const h = HEROES[id];
        if (!h) continue;
        const locked = !isHeroUnlocked(id, save);
        const card = el('div', locked ? 'hero-card locked' : 'hero-card');
        if (locked && id === 'lvbu') card.classList.add('shop-lock');
        const port = heroPortrait(h.charIndex, 2.4);
        card.appendChild(port);
        if (locked) {
          const lock = el('div', 'hero-lock');
          lock.appendChild(el('div', '', '🔒'));
          lock.appendChild(el('div', 'price', heroUnlockText(id, save)));
          card.appendChild(lock);
        }
        const wname = WEAPON_DEFS[h.startWeapon]?.name ?? h.startWeapon;
        card.appendChild(el('div', 'hero-name', `${nameOf('hero', id, h.name)}<span class="hanja">${h.hanja}</span>`));
        card.appendChild(el('div', 'hero-line', `${t('weaponLabel')} <span class="k">${nameOf('weapon', h.startWeapon, wname)}</span>`));
        card.appendChild(el('div', 'hero-line', getLang() === 'en' ? HERO_BONUS_EN[id] ?? h.bonusText : h.bonusText));
        card.appendChild(el('div', 'hero-musou', this.musouText(id)));
        const quote = dialogueSelect(id);
        if (quote && !locked) card.appendChild(el('div', 'hero-quote', `“${quote}”`));
        if (locked) {
          if (id === 'lvbu') card.addEventListener('click', () => this.cb.onOpenShop('upgrade'));
        } else {
          card.addEventListener('click', () => this.cb.onSelectHero(id));
        }
        grid.appendChild(card);
      }
      s.appendChild(grid);
      s.appendChild(this.button(t('back'), this.cb.onBackToTitle));
      this.overlay.appendChild(s);
    };
    this.rerender = () => {
      this.overlay.textContent = '';
      build();
    };
    this.show(build);
  }

  private musouText(id: string): string {
    if (getLang() === 'en') return HERO_MUSOU_EN[id] ?? 'Musou';
    const map: Record<string, string> = {
      zhaoyun: '무쌍 창격돌진 — 8방향 무적 돌진',
      guanyu: '무쌍 청룡회천참 — 거대 회전 참격',
      zhangfei: '무쌍 장판교 포효 — 전화면 스턴',
      zhugeliang: '무쌍 천뢰소환 — 낙뢰 폭풍',
      huangzhong: '무쌍 백보천양 — 전방위 화살',
      sunshangxiang: '무쌍 홍련난무 — 붉은 화살 폭풍',
      lvbu: '무쌍 적토무쌍 — 조작 가능 무적 돌진',
    };
    return map[id] ?? '무쌍난무';
  }

  // ===== 결과 =====
  showResult(
    result: RunResult,
    save: SaveData,
    records: { time: boolean; kills: boolean; level: boolean; combo: boolean },
    share: ShareInfo,
  ): void {
    this.current = 'result';
    const build = (): void => {
      const s = el('div', 'screen');
      const win = result.victory;
      s.appendChild(el('div', `result-title ${win ? 'win' : 'lose'}`, win ? '天下統一' : '戰死')); // 한자 공통
      s.appendChild(el('div', 'result-sub', win ? t('resultWin') : t('resultLose')));
      const quote = dialogueSelect(result.heroId);
      if (quote) s.appendChild(el('div', 'result-quote', `“${quote}”`));

      // 업적 달성 토스트 (새로 달성한 것만) — 이름은 언어별, 한자 공통
      if (share.newAchievements.length > 0) {
        const names = share.newAchievements
          .map((id) => ACHIEVEMENT_BY_ID[id])
          .filter((a) => !!a)
          .map((a) => `${getLang() === 'en' ? ACH_EN[a.id]?.name ?? a.name : a.name} ${a.hanja}`)
          .join(' · ');
        s.appendChild(el('div', 'ach-toast', `${t('achGet')} <b>${names}</b>`));
      }
      if (share.newHeroes.length > 0) {
        const names = share.newHeroes
          .map((id) => (HEROES[id] ? `${nameOf('hero', id, HEROES[id].name)} ${HEROES[id].hanja}` : null))
          .filter((x): x is string => !!x)
          .join(' · ');
        s.appendChild(el('div', 'ach-toast hero-unlock-toast', `${t('heroUnlockGet')} <b>${names}</b>`));
      }
      // 신규 병법(무기) 해금 토스트 (DESIGN 13.1) — 라벨만 언어별, 무기명 nameOf/한자 공통.
      if (share.newWeapons && share.newWeapons.length > 0) {
        const names = share.newWeapons
          .map((id) => (WEAPON_DEFS[id] ? `${nameOf('weapon', id, WEAPON_DEFS[id].name)} ${WEAPON_DEFS[id].hanja}` : null))
          .filter((x): x is string => !!x)
          .join(' · ');
        if (names) {
          const label = getLang() === 'en' ? 'New tactic unlocked' : '신규 병법 해금';
          s.appendChild(el('div', 'ach-toast weapon-unlock-toast', `${label} — <b>${names}</b>`));
        }
      }

      const stats = el('div', 'result-stats');
      stats.appendChild(this.stat(t('rsSurvive'), fmtTime(result.time), records.time));
      stats.appendChild(this.stat(t('rsKills'), String(result.kills), records.kills));
      stats.appendChild(this.stat(t('rsMaxCombo'), String(result.maxCombo), records.combo));
      stats.appendChild(this.stat(t('rsLevel'), `Lv ${result.level}`, records.level));
      stats.appendChild(this.stat(t('rsHero'), nameOf('hero', result.heroId, HEROES[result.heroId]?.name ?? result.heroId), false));
      stats.appendChild(this.stat(t('rsBossKill'), String(result.bosses.length), false));
      s.appendChild(stats);

      const gold = el(
        'div',
        'gold-earned',
        `${t('goldEarned')} ⟡ ${result.goldEarned}` +
          (result.comboBonus > 0 ? `<span class="bonus">${t('goldBonus', { n: result.comboBonus })}</span>` : ''),
      );
      s.appendChild(gold);
      s.appendChild(el('div', 'controls-hint', t('baseBalance', { n: save.gold })));

      // 빌드 요약 (이름 언어별)
      const bs = el('div', 'build-summary');
      for (const w of result.weapons) {
        bs.appendChild(el('div', 'build-chip w', `${nameOf('weapon', w.id, WEAPON_DEFS[w.id]?.name ?? w.id)} <b>Lv${w.level}</b>`));
      }
      for (const p of result.passives) {
        bs.appendChild(el('div', 'build-chip p', `${nameOf('passive', p.id, PASSIVE_BY_ID[p.id]?.name ?? p.id)} <b>Lv${p.level}</b>`));
      }
      s.appendChild(bs);

      const row = el('div', 'btn-row');
      row.appendChild(this.button(t('retry'), this.cb.onRetry, { primary: true }));
      row.appendChild(
        this.button(t('share'), () =>
          openSharePreview(
            {
              victory: result.victory,
              heroId: result.heroId,
              time: result.time,
              kills: result.kills,
              maxCombo: result.maxCombo,
              level: result.level,
              goldEarned: result.goldEarned,
              weapons: result.weapons,
              title: share.title,
            },
            this.atlas,
          ),
        ),
      );
      row.appendChild(this.button(t('toTitle'), this.cb.onBackToTitle));
      s.appendChild(row);
      this.overlay.appendChild(s);
    };
    this.rerender = () => {
      this.overlay.textContent = '';
      build();
    };
    this.show(build);
  }

  private stat(label: string, value: string, record: boolean): HTMLDivElement {
    const d = el('div', 'rs');
    d.appendChild(el('div', 'v', value + (record ? `<span class="nr">${t('newRecord')}</span>` : '')));
    d.appendChild(el('div', 'l', label));
    return d;
  }

  // ===== 상점 / 도감 =====
  private shopSave: SaveData | null = null;
  private shopTab: 'upgrade' | 'codex' = 'upgrade';

  showShop(save: SaveData, tab: 'upgrade' | 'codex'): void {
    this.current = 'shop';
    this.rerender = () => this.rebuildShop(save, this.shopTab);
    this.show(() => this.buildShop(save, tab));
  }

  // 구매/해금 후 페이드 없이 현재 상점 즉시 갱신(골드/핍/버튼 상태 반영).
  rerenderShop(): void {
    if (this.current === 'shop' && this.shopSave) this.rebuildShop(this.shopSave, this.shopTab);
  }

  // 탭 전환은 페이드 없이 즉시 재구성.
  private rebuildShop(save: SaveData, tab: 'upgrade' | 'codex'): void {
    this.overlay.textContent = '';
    this.buildShop(save, tab);
  }

  private buildShop(save: SaveData, tab: 'upgrade' | 'codex'): void {
    this.shopSave = save;
    this.shopTab = tab;
    const s = el('div', 'screen');
    s.appendChild(el('div', 'section-title', `${t('shopTitle')} <small>本陣</small>`));
    s.appendChild(el('div', 'gold-tag', t('goldHeld', { n: save.gold })));

    const tabs = el('div', 'tabs');
    const t1 = el('div', tab === 'upgrade' ? 'tab active' : 'tab', t('tabUpgrade'));
    const t2 = el('div', tab === 'codex' ? 'tab active' : 'tab', t('tabCodex'));
    t1.addEventListener('click', () => this.rebuildShop(save, 'upgrade'));
    t2.addEventListener('click', () => this.rebuildShop(save, 'codex'));
    tabs.appendChild(t1);
    tabs.appendChild(t2);
    s.appendChild(tabs);

    if (tab === 'upgrade') s.appendChild(this.upgradeList(save));
    else s.appendChild(this.codexPanel(save));

    s.appendChild(this.button(t('back'), this.cb.onBackToTitle));
    this.overlay.appendChild(s);
  }

  private upgradeList(save: SaveData): HTMLDivElement {
    const list = el('div', 'shop-list');
    for (const def of UPGRADE_DEFS) {
      const lv = save.upgrades[def.id] ?? 0;
      const cost = upgradeCost(def, lv);
      const maxed = cost < 0;
      const row = el('div', 'shop-row');
      const info = el('div', 'shop-info');
      info.appendChild(el('div', 'name', `${nameOf('upgrade', def.id, def.name)}<span class="hanja">${def.hanja}</span>`));
      info.appendChild(el('div', 'desc', maxed ? def.desc(lv) : def.desc(lv + 1)));
      const pips = el('div', 'pips');
      for (let i = 0; i < def.maxLevel; i++) pips.appendChild(el('div', i < lv ? 'pip on' : 'pip'));
      info.appendChild(pips);
      row.appendChild(info);

      const buyWrap = el('div', 'shop-buy');
      if (maxed) {
        buyWrap.appendChild(el('div', 'gold-tag', t('maxed')));
      } else {
        const affordable = save.gold >= cost;
        buyWrap.appendChild(el('div', 'controls-hint', `⟡ ${cost}`));
        buyWrap.appendChild(
          this.button(t('upgradeBuy'), () => this.cb.onBuyUpgrade(def.id), { disabled: !affordable }),
        );
      }
      row.appendChild(buyWrap);
      list.appendChild(row);
    }

    // 여포 해금
    if (!save.lvbuUnlocked) {
      const row = el('div', 'shop-row');
      const info = el('div', 'shop-info');
      info.appendChild(el('div', 'name', `${t('lvbuUnlockName')}<span class="hanja">呂布</span>`));
      info.appendChild(el('div', 'desc', t('lvbuUnlockDesc')));
      row.appendChild(info);
      const buyWrap = el('div', 'shop-buy');
      buyWrap.appendChild(el('div', 'controls-hint', `⟡ ${LVBU_UNLOCK_COST}`));
      buyWrap.appendChild(
        this.button(t('unlockBuy'), this.cb.onUnlockLvbu, { disabled: save.gold < LVBU_UNLOCK_COST }),
      );
      row.appendChild(buyWrap);
      list.appendChild(row);
    }
    return list;
  }

  private codexPanel(save: SaveData): HTMLDivElement {
    const wrap = el('div', 'screen');
    wrap.style.gap = '14px';
    wrap.style.padding = '0';
    // 최고 기록
    const records = el('div', 'records');
    records.appendChild(this.rec(fmtTime(save.best.time), t('recSurvive')));
    records.appendChild(this.rec(String(save.best.kills), t('recKills')));
    records.appendChild(this.rec(`Lv ${save.best.level}`, t('recLevel')));
    records.appendChild(this.rec(String(save.best.combo), t('recCombo')));
    wrap.appendChild(records);
    // 보스 도감
    wrap.appendChild(el('div', 'controls-hint', t('bossCodex')));
    const grid = el('div', 'codex-grid');
    for (const id of BOSS_ORDER) {
      const def = BOSS_DEFS[id] as unknown as Named | undefined;
      if (!def) continue;
      const slain = save.bosses.includes(id);
      const cell = el('div', slain ? 'codex-cell slain' : 'codex-cell');
      cell.appendChild(el('div', 'cx-name', slain ? `${nameOf('hero', id, def.name)} ${def.hanja}` : '???'));
      cell.appendChild(
        el('div', 'cx-state', slain ? `<span style="color:#e8c667">${t('slain')}</span>` : `<span style="color:#7f8496">${t('notSlain')}</span>`),
      );
      grid.appendChild(cell);
    }
    wrap.appendChild(grid);

    // 병법(무기) 도감 — 보유 병법 + 진화 비전 (DESIGN 13.1/13.3)
    const en = getLang() === 'en';
    wrap.appendChild(el('div', 'controls-hint', en ? 'Tactics Codex 兵法' : '병법 도감 兵法'));
    const wpnGrid = el('div', 'wpn-grid');
    for (const id in WEAPON_DEFS) {
      const d = WEAPON_DEFS[id];
      if (d.evolution) continue; // 진화 무기는 아래 비전 섹션에서 레시피로
      // 미해금 무기는 실루엣(???)+조건 텍스트로 노출(욕망 설계, DESIGN 13.1).
      const locked = WEAPON_UNLOCK_ORDER.includes(id) && !isWeaponUnlocked(id, save);
      const cell = el('div', locked ? 'wpn-cell locked' : 'wpn-cell');
      if (locked) {
        cell.appendChild(el('div', 'wpn-name', '？？？'));
        cell.appendChild(el('div', 'wpn-cond', weaponUnlockText(id, save)));
      } else {
        cell.appendChild(el('div', 'wpn-name', `${nameOf('weapon', id, d.name)} <span class="wh">${d.hanja}</span>`));
        cell.appendChild(el('div', 'wpn-desc', en ? WEAPON_DESC_EN[id] ?? d.desc : d.desc));
      }
      wpnGrid.appendChild(cell);
    }
    wrap.appendChild(wpnGrid);

    // 진화 비전(레시피): 베이스 MAX + 파트너 패시브 → 진화 무기
    wrap.appendChild(el('div', 'controls-hint', en ? 'Evolutions 秘傳' : '진화 비전 秘傳'));
    const maxLabel = en ? 'MAX' : 'MAX';
    const evoGrid = el('div', 'wpn-grid');
    for (const rule of EVOLUTIONS) {
      const to = WEAPON_DEFS[rule.to];
      const from = WEAPON_DEFS[rule.from];
      const pas = PASSIVE_BY_ID[rule.passive];
      if (!to || !from || !pas) continue;
      const cell = el('div', 'wpn-cell evo');
      cell.appendChild(el('div', 'wpn-name', `${nameOf('weapon', rule.to, to.name)} <span class="wh">${to.hanja}</span>`));
      cell.appendChild(el('div', 'wpn-desc', en ? WEAPON_DESC_EN[rule.to] ?? to.desc : to.desc));
      cell.appendChild(
        el(
          'div',
          'wpn-recipe',
          `${nameOf('weapon', rule.from, from.name)} <b>${maxLabel}</b> + ${nameOf('passive', rule.passive, pas.name)}`,
        ),
      );
      evoGrid.appendChild(cell);
    }
    wrap.appendChild(evoGrid);

    // 명기(名器) 도감 — 보스 드랍 양성 아이템 (DESIGN 14.2). 획득분은 효과+감정문, 미획득은 실루엣+이름/한자.
    const mwOwned = ownedMasterworks(save).length;
    wrap.appendChild(el('div', 'controls-hint', `${en ? 'Masterworks' : '명기 도감'} 名器 (${mwOwned}/${MASTERWORK_DEFS.length})`));
    const mwGrid = el('div', 'mw-grid');
    for (const d of MASTERWORK_DEFS) {
      const owned = isMasterworkOwned(d.id, save);
      const cell = el('div', owned ? 'mw-cell owned' : 'mw-cell locked');
      cell.appendChild(el('div', 'mw-name', `${masterworkName(d)} <span class="mh">${d.hanja}</span>`));
      if (owned) {
        cell.appendChild(el('div', 'mw-desc', masterworkDesc(d)));
        cell.appendChild(el('div', 'mw-lore', `“${masterworkLore(d)}”`));
      } else {
        cell.appendChild(el('div', 'mw-state', en ? 'Undiscovered' : '未得'));
      }
      mwGrid.appendChild(cell);
    }
    wrap.appendChild(mwGrid);

    // 업적 목록 (이름/설명 언어별, 한자 공통)
    const earned = save.achievements ?? [];
    wrap.appendChild(el('div', 'controls-hint', `${t('achSection')} (${earned.length}/${ACHIEVEMENTS.length})`));
    const achGrid = el('div', 'ach-grid');
    for (const a of ACHIEVEMENTS) {
      const done = earned.includes(a.id);
      const aName = en ? ACH_EN[a.id]?.name ?? a.name : a.name;
      const aDesc = en ? ACH_EN[a.id]?.desc ?? a.desc : a.desc;
      const cell = el('div', done ? 'ach-cell done' : 'ach-cell');
      cell.appendChild(el('div', 'ach-name', done ? `${aName} <span class="ah">${a.hanja}</span>` : aName));
      cell.appendChild(el('div', 'ach-desc', done ? aDesc : '???'));
      achGrid.appendChild(cell);
    }
    wrap.appendChild(achGrid);
    return wrap;
  }

  private rec(value: string, label: string): HTMLDivElement {
    const d = el('div', 'rec');
    d.appendChild(el('div', 'rv', value));
    d.appendChild(el('div', 'rl', label));
    return d;
  }

  // ===== 일시정지 =====
  showPause(): void {
    this.current = 'pause';
    const build = (): void => {
      this.overlay.textContent = '';
      const s = el('div', 'screen');
      s.appendChild(el('div', 'section-title', `${t('pauseTitle')} <small>一時停止</small>`));
      const row = el('div', 'btn-row');
      row.appendChild(this.button(t('resume'), this.cb.onResume, { primary: true }));
      row.appendChild(this.muteButton());
      row.appendChild(this.langButton());
      row.appendChild(this.button(t('abandon'), this.cb.onAbandon));
      s.appendChild(row);
      s.appendChild(el('div', 'controls-hint', t('resumeHint')));
      this.overlay.appendChild(s);
      this.overlay.classList.add('show');
    };
    // 일시정지는 페이드 없이 즉시 표시(즉각 반응).
    this.rerender = build;
    build();
  }
}
