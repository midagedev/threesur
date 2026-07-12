import { HEROES } from '../data/heroes';
import { WEAPON_DEFS } from '../data/weapons';
import { PASSIVE_BY_ID } from '../data/passives';
import { UPGRADE_DEFS, upgradeCost, LVBU_UNLOCK_COST } from '../data/upgrades';
import { BOSS_DEFS } from '../game/boss';
import { ACHIEVEMENT_BY_ID, ACHIEVEMENTS } from '../data/achievements';
import { DIALOGUE, anyRandomLine } from '../data/dialogue';
import { heroUnlockText, isHeroUnlocked } from '../data/heroUnlocks';
import { openSharePreview } from './shareCard';
import type { SaveData } from '../core/save';
import type { RunResult } from '../game/run';
import type { Atlas } from '../gfx/atlas';

// 결과 확정 시 App이 계산해 넘기는 공유/업적 정보.
export interface ShareInfo {
  title: { name: string; hanja: string }; // 공유 카드 대표 칭호
  newAchievements: string[]; // 이번 런에 새로 달성한 업적 id
  newHeroes: string[]; // 이번 런 결과로 새로 열린 장수 id
}

// 장수 선택 순서.
const HERO_ORDER = ['zhaoyun', 'guanyu', 'zhangfei', 'zhugeliang', 'huangzhong', 'lvbu'];
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
  const sheetW = 80 * cellW; // 3840
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

  constructor(cb: ScreenCallbacks, atlas: Atlas) {
    this.cb = cb;
    this.atlas = atlas;

    this.fade = el('div');
    this.fade.id = 'fade';
    document.body.appendChild(this.fade);

    this.overlay = el('div', 'overlay');
    document.body.appendChild(this.overlay);
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
    b.setAttribute('aria-label', '음소거 토글');
    b.addEventListener('click', () => {
      this.muted = this.cb.onToggleMute();
      b.textContent = this.muted ? '🔇' : '🔊';
    });
    return b;
  }

  // ===== 타이틀 =====
  showTitle(instant = false): void {
    this.current = 'title';
    this.show(() => {
      const s = el('div', 'screen');
      const mark = el('div', 'title-mark');
      mark.appendChild(el('div', 'title-hanja', '一騎當千'));
      mark.appendChild(el('div', 'title-kor', '일 기 당 천'));
      mark.appendChild(el('div', 'title-tag', '삼국 서바이버 · 한 명의 장수로 수천을 베어라'));
      s.appendChild(mark);

      const primary = el('div', 'btn-row');
      primary.appendChild(this.button('출진 出陣', this.cb.onStart, { primary: true }));
      s.appendChild(primary);

      const secondary = el('div', 'btn-row');
      secondary.appendChild(this.button('본진 本陣', () => this.cb.onOpenShop('upgrade')));
      secondary.appendChild(this.button('전공 戰功', () => this.cb.onOpenShop('codex')));
      secondary.appendChild(this.muteButton());
      s.appendChild(secondary);

      s.appendChild(
        el(
          'div',
          'controls-hint',
          '<b>WASD / 화살표</b> 이동 &nbsp;·&nbsp; <b>Space</b> 무쌍난무 &nbsp;·&nbsp; <b>Esc</b> 일시정지<br>모바일: 좌측 가상 조이스틱 + 우측 무쌍 버튼',
        ),
      );

      // 타이틀 진입마다 장수 혼잣말 한 줄 (군웅전 대사)
      const m = anyRandomLine();
      if (m.line) s.appendChild(el('div', 'title-quote', `“${m.line}” <span class="who">— ${m.name}</span>`));

      this.overlay.appendChild(s);
    }, instant);
  }

  // ===== 장수 선택 =====
  showSelect(save: SaveData): void {
    this.current = 'select';
    this.show(() => {
      const s = el('div', 'screen');
      s.appendChild(el('div', 'section-title', '장수 선택 <small>將帥選擇</small>'));

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
        card.appendChild(el('div', 'hero-name', `${h.name}<span class="hanja">${h.hanja}</span>`));
        card.appendChild(el('div', 'hero-line', `무기 <span class="k">${wname}</span>`));
        card.appendChild(el('div', 'hero-line', h.bonusText));
        card.appendChild(el('div', 'hero-musou', this.musouText(id)));
        const quote = DIALOGUE[id]?.select;
        if (quote && !locked) card.appendChild(el('div', 'hero-quote', `“${quote}”`));
        if (locked) {
          if (id === 'lvbu') card.addEventListener('click', () => this.cb.onOpenShop('upgrade'));
        } else {
          card.addEventListener('click', () => this.cb.onSelectHero(id));
        }
        grid.appendChild(card);
      }
      s.appendChild(grid);
      s.appendChild(this.button('뒤로 ‹', this.cb.onBackToTitle));
      this.overlay.appendChild(s);
    });
  }

  private musouText(id: string): string {
    const map: Record<string, string> = {
      zhaoyun: '무쌍 창격돌진 — 8방향 무적 돌진',
      guanyu: '무쌍 청룡회천참 — 거대 회전 참격',
      zhangfei: '무쌍 장판교 포효 — 전화면 스턴',
      zhugeliang: '무쌍 천뢰소환 — 낙뢰 폭풍',
      huangzhong: '무쌍 백보천양 — 전방위 화살',
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
    this.show(() => {
      const s = el('div', 'screen');
      const win = result.victory;
      s.appendChild(el('div', `result-title ${win ? 'win' : 'lose'}`, win ? '天下統一' : '戰死'));
      s.appendChild(el('div', 'result-sub', win ? '천하통일' : '전사'));
      const quote = DIALOGUE[result.heroId]?.select;
      if (quote) s.appendChild(el('div', 'result-quote', `“${quote}”`));

      // 업적 달성 토스트 (새로 달성한 것만)
      if (share.newAchievements.length > 0) {
        const names = share.newAchievements
          .map((id) => ACHIEVEMENT_BY_ID[id])
          .filter((a) => !!a)
          .map((a) => `${a.name} ${a.hanja}`)
          .join(' · ');
        const toast = el('div', 'ach-toast', `업적 달성! <b>${names}</b>`);
        s.appendChild(toast);
      }
      if (share.newHeroes.length > 0) {
        const names = share.newHeroes
          .map((id) => HEROES[id])
          .filter((h) => !!h)
          .map((h) => `${h.name} ${h.hanja}`)
          .join(' · ');
        s.appendChild(el('div', 'ach-toast hero-unlock-toast', `새 장수 해금! <b>${names}</b>`));
      }

      const stats = el('div', 'result-stats');
      stats.appendChild(this.stat('생존', fmtTime(result.time), records.time));
      stats.appendChild(this.stat('처치', String(result.kills), records.kills));
      stats.appendChild(this.stat('최대 콤보', String(result.maxCombo), records.combo));
      stats.appendChild(this.stat('레벨', `Lv ${result.level}`, records.level));
      const heroName = HEROES[result.heroId]?.name ?? result.heroId;
      stats.appendChild(this.stat('장수', heroName, false));
      stats.appendChild(this.stat('보스 토벌', String(result.bosses.length), false));
      s.appendChild(stats);

      const gold = el(
        'div',
        'gold-earned',
        `획득 골드 ⟡ ${result.goldEarned}` +
          (result.comboBonus > 0 ? `<span class="bonus">(콤보 보너스 +${result.comboBonus})</span>` : ''),
      );
      s.appendChild(gold);
      s.appendChild(el('div', 'controls-hint', `본진 잔액 ⟡ ${save.gold}`));

      // 빌드 요약
      const build = el('div', 'build-summary');
      for (const w of result.weapons) {
        const d = WEAPON_DEFS[w.id];
        build.appendChild(el('div', 'build-chip w', `${d?.name ?? w.id} <b>Lv${w.level}</b>`));
      }
      for (const p of result.passives) {
        const d = PASSIVE_BY_ID[p.id];
        build.appendChild(el('div', 'build-chip p', `${d?.name ?? p.id} <b>Lv${p.level}</b>`));
      }
      s.appendChild(build);

      const row = el('div', 'btn-row');
      row.appendChild(this.button('다시 출진 再出陣', this.cb.onRetry, { primary: true }));
      row.appendChild(
        this.button('전과 공유 戰果', () =>
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
      row.appendChild(this.button('본진으로 本陣', this.cb.onBackToTitle));
      s.appendChild(row);
      this.overlay.appendChild(s);
    });
  }

  private stat(label: string, value: string, record: boolean): HTMLDivElement {
    const d = el('div', 'rs');
    d.appendChild(el('div', 'v', value + (record ? '<span class="nr">신기록</span>' : '')));
    d.appendChild(el('div', 'l', label));
    return d;
  }

  // ===== 상점 / 도감 =====
  private shopSave: SaveData | null = null;
  private shopTab: 'upgrade' | 'codex' = 'upgrade';

  showShop(save: SaveData, tab: 'upgrade' | 'codex'): void {
    this.current = 'shop';
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
    s.appendChild(el('div', 'section-title', '본진 <small>本陣</small>'));
    s.appendChild(el('div', 'gold-tag', `보유 골드 ⟡ ${save.gold}`));

    const tabs = el('div', 'tabs');
    const t1 = el('div', tab === 'upgrade' ? 'tab active' : 'tab', '강화 强化');
    const t2 = el('div', tab === 'codex' ? 'tab active' : 'tab', '전공 戰功');
    t1.addEventListener('click', () => this.rebuildShop(save, 'upgrade'));
    t2.addEventListener('click', () => this.rebuildShop(save, 'codex'));
    tabs.appendChild(t1);
    tabs.appendChild(t2);
    s.appendChild(tabs);

    if (tab === 'upgrade') s.appendChild(this.upgradeList(save));
    else s.appendChild(this.codexPanel(save));

    s.appendChild(this.button('뒤로 ‹', this.cb.onBackToTitle));
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
      info.appendChild(el('div', 'name', `${def.name}<span class="hanja">${def.hanja}</span>`));
      info.appendChild(el('div', 'desc', maxed ? def.desc(lv) : def.desc(lv + 1)));
      const pips = el('div', 'pips');
      for (let i = 0; i < def.maxLevel; i++) pips.appendChild(el('div', i < lv ? 'pip on' : 'pip'));
      info.appendChild(pips);
      row.appendChild(info);

      const buyWrap = el('div', 'shop-buy');
      if (maxed) {
        buyWrap.appendChild(el('div', 'gold-tag', 'MAX'));
      } else {
        const affordable = save.gold >= cost;
        buyWrap.appendChild(el('div', 'controls-hint', `⟡ ${cost}`));
        buyWrap.appendChild(
          this.button('강화', () => this.cb.onBuyUpgrade(def.id), { disabled: !affordable }),
        );
      }
      row.appendChild(buyWrap);
      list.appendChild(row);
    }

    // 여포 해금
    if (!save.lvbuUnlocked) {
      const row = el('div', 'shop-row');
      const info = el('div', 'shop-info');
      info.appendChild(el('div', 'name', `여포 해금<span class="hanja">呂布</span>`));
      info.appendChild(el('div', 'desc', '방천화극 · 공격력 +25%(받는 피해 +25%) · 적토무쌍'));
      row.appendChild(info);
      const buyWrap = el('div', 'shop-buy');
      buyWrap.appendChild(el('div', 'controls-hint', `⟡ ${LVBU_UNLOCK_COST}`));
      buyWrap.appendChild(
        this.button('해금', this.cb.onUnlockLvbu, { disabled: save.gold < LVBU_UNLOCK_COST }),
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
    records.appendChild(this.rec(fmtTime(save.best.time), '최고 생존'));
    records.appendChild(this.rec(String(save.best.kills), '최다 처치'));
    records.appendChild(this.rec(`Lv ${save.best.level}`, '최고 레벨'));
    records.appendChild(this.rec(String(save.best.combo), '최대 콤보'));
    wrap.appendChild(records);
    // 보스 도감
    wrap.appendChild(el('div', 'controls-hint', '보스 토벌 기록'));
    const grid = el('div', 'codex-grid');
    for (const id of BOSS_ORDER) {
      const def = BOSS_DEFS[id] as unknown as Named | undefined;
      if (!def) continue;
      const slain = save.bosses.includes(id);
      const cell = el('div', slain ? 'codex-cell slain' : 'codex-cell');
      cell.appendChild(el('div', 'cx-name', slain ? `${def.name} ${def.hanja}` : '???'));
      cell.appendChild(
        el('div', 'cx-state', slain ? '<span style="color:#e8c667">토벌 완료</span>' : '<span style="color:#7f8496">미토벌</span>'),
      );
      grid.appendChild(cell);
    }
    wrap.appendChild(grid);

    // 업적 목록
    const earned = save.achievements ?? [];
    wrap.appendChild(el('div', 'controls-hint', `업적 業績 (${earned.length}/${ACHIEVEMENTS.length})`));
    const achGrid = el('div', 'ach-grid');
    for (const a of ACHIEVEMENTS) {
      const done = earned.includes(a.id);
      const cell = el('div', done ? 'ach-cell done' : 'ach-cell');
      cell.appendChild(el('div', 'ach-name', done ? `${a.name} <span class="ah">${a.hanja}</span>` : a.name));
      cell.appendChild(el('div', 'ach-desc', done ? a.desc : '???'));
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
    // 일시정지는 페이드 없이 즉시 표시(즉각 반응).
    this.overlay.textContent = '';
    const s = el('div', 'screen');
    s.appendChild(el('div', 'section-title', '일시정지 <small>一時停止</small>'));
    const row = el('div', 'btn-row');
    row.appendChild(this.button('계속 繼續', this.cb.onResume, { primary: true }));
    row.appendChild(this.muteButton());
    row.appendChild(this.button('포기 抛棄', this.cb.onAbandon));
    s.appendChild(row);
    s.appendChild(el('div', 'controls-hint', 'Esc 로도 계속'));
    this.overlay.appendChild(s);
    this.overlay.classList.add('show');
  }
}
