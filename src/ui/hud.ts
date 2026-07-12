export interface HudState {
  time: number;
  kills: number;
  level: number;
  xp: number;
  nextXp: number;
  hp: number;
  maxHp: number;
  gold: number; // 런 중 획득 골드
  musouPct: number; // 0..100
  musouReady: boolean;
  combo: number;
  bossActive: boolean;
  bossName: string;
  bossHanja: string;
  bossFrac: number;
}

// 좌상단 슬롯 아이콘 1칸 (무기/패시브).
export interface SlotView {
  id: string;
  glyph: string; // 한자 1자
  level: number;
  accent: string;
}

// 전투 HUD: 타이머/킬/레벨/골드/XP/HP + 무쌍 게이지 + 콤보 + 보스 HP 바 + 슬롯 바 + 배너.
export class Hud {
  private readonly root: HTMLDivElement;
  private readonly timerEl: HTMLDivElement;
  private readonly killsEl: HTMLDivElement;
  private readonly levelEl: HTMLDivElement;
  private readonly goldEl: HTMLDivElement;
  private readonly xpFill: HTMLDivElement;
  private readonly hpFill: HTMLDivElement;
  private readonly hpText: HTMLDivElement;
  private readonly musouWrap: HTMLDivElement;
  private readonly musouFill: HTMLDivElement;
  private readonly musouHint: HTMLDivElement;
  private readonly comboEl: HTMLDivElement;
  private readonly bossWrap: HTMLDivElement;
  private readonly bossFill: HTMLDivElement;
  private readonly bossName: HTMLDivElement;
  private readonly bannerLayer: HTMLDivElement;
  private readonly slotBar: HTMLDivElement;
  private readonly bottom: HTMLDivElement;
  private readonly seenSlots = new Set<string>();
  private lastCombo = 0;
  private wasReady = false;
  private readonly touch: boolean;

  constructor(touch = false) {
    this.touch = touch;
    const top = document.createElement('div');
    top.className = 'hud-top';
    top.style.cssText = [
      'position:fixed',
      'top:calc(env(safe-area-inset-top,0px) + 10px)',
      'left:0',
      'right:0',
      'display:flex',
      'flex-direction:column',
      'align-items:center',
      'gap:6px',
      'pointer-events:none',
      'z-index:20',
      'transform-origin:top center',
      'font-family:"Nanum Myeongjo","Times New Roman",serif',
    ].join(';');

    this.timerEl = document.createElement('div');
    this.timerEl.style.cssText =
      'color:#f0e4c0;font-size:34px;letter-spacing:3px;text-shadow:0 2px 8px rgba(0,0,0,0.8);font-variant-numeric:tabular-nums;';
    this.timerEl.textContent = '00:00';
    top.appendChild(this.timerEl);

    const stats = document.createElement('div');
    stats.style.cssText =
      'display:flex;gap:20px;color:#c9cdda;font-size:15px;letter-spacing:1px;align-items:center;';
    this.levelEl = document.createElement('div');
    this.levelEl.textContent = 'Lv 1';
    this.killsEl = document.createElement('div');
    this.killsEl.style.cssText = 'font-variant-numeric:tabular-nums;';
    this.killsEl.textContent = '처치 0';
    this.goldEl = document.createElement('div');
    this.goldEl.style.cssText = 'color:#e8c667;font-variant-numeric:tabular-nums;';
    this.goldEl.textContent = '⟡ 0';
    stats.appendChild(this.levelEl);
    stats.appendChild(this.killsEl);
    stats.appendChild(this.goldEl);
    top.appendChild(stats);

    const xpBar = document.createElement('div');
    xpBar.style.cssText =
      'width:min(70vw,520px);height:7px;background:rgba(20,22,30,0.85);border:1px solid rgba(232,198,103,0.3);border-radius:4px;overflow:hidden;';
    this.xpFill = document.createElement('div');
    this.xpFill.style.cssText =
      'height:100%;width:0%;background:linear-gradient(90deg,#5aa9ff,#a9d4ff);box-shadow:0 0 8px rgba(120,180,255,0.7);';
    xpBar.appendChild(this.xpFill);
    top.appendChild(xpBar);

    // 보스 HP 바 (이름을 바 위로 분리 배치, 겹침 방지)
    this.bossWrap = document.createElement('div');
    this.bossWrap.style.cssText =
      'display:none;flex-direction:column;align-items:center;gap:5px;margin-top:12px;';
    this.bossName = document.createElement('div');
    this.bossName.style.cssText =
      'color:#ff7a68;font-size:19px;letter-spacing:4px;text-shadow:0 0 12px rgba(232,92,74,0.7),0 2px 4px rgba(0,0,0,0.9);';
    this.bossWrap.appendChild(this.bossName);
    const bossBar = document.createElement('div');
    bossBar.style.cssText =
      'width:min(80vw,640px);height:14px;background:rgba(20,10,10,0.85);border:1px solid rgba(232,92,74,0.5);border-radius:4px;overflow:hidden;';
    this.bossFill = document.createElement('div');
    this.bossFill.style.cssText =
      'height:100%;width:100%;background:linear-gradient(90deg,#8a1f16,#e85c4a,#e8c667);box-shadow:0 0 10px rgba(232,92,74,0.6);transition:width 0.1s;';
    bossBar.appendChild(this.bossFill);
    this.bossWrap.appendChild(bossBar);
    top.appendChild(this.bossWrap);

    document.body.appendChild(top);
    this.root = top;

    // 좌상단 무기/패시브 슬롯 아이콘 바
    this.slotBar = document.createElement('div');
    this.slotBar.className = 'hud-slots';
    this.slotBar.style.cssText = [
      'position:fixed',
      'top:calc(env(safe-area-inset-top,0px) + 10px)',
      'left:calc(env(safe-area-inset-left,0px) + 10px)',
      'display:flex',
      'flex-direction:column',
      'gap:6px',
      'pointer-events:none',
      'z-index:20',
      'transform-origin:top left',
    ].join(';');
    const wRow = document.createElement('div');
    wRow.style.cssText = 'display:flex;gap:4px;flex-wrap:wrap;max-width:220px;';
    const pRow = document.createElement('div');
    pRow.style.cssText = 'display:flex;gap:4px;flex-wrap:wrap;max-width:220px;';
    this.slotBar.appendChild(wRow);
    this.slotBar.appendChild(pRow);
    (this.slotBar as unknown as { _w: HTMLDivElement })._w = wRow;
    (this.slotBar as unknown as { _p: HTMLDivElement })._p = pRow;
    document.body.appendChild(this.slotBar);

    // 하단: 무쌍 게이지 + HP 바
    const bottom = document.createElement('div');
    bottom.className = 'hud-bottom';
    bottom.style.cssText = [
      'position:fixed',
      'bottom:calc(env(safe-area-inset-bottom,0px) + 22px)',
      'left:0',
      'right:0',
      'display:flex',
      'flex-direction:column',
      'align-items:center',
      'gap:6px',
      'pointer-events:none',
      'z-index:20',
      'transform-origin:bottom center',
      'font-family:"Nanum Myeongjo","Times New Roman",serif',
    ].join(';');

    // 무쌍 게이지 (모바일에선 우측 버튼이 게이지 역할 → 하단 바 숨김)
    this.musouWrap = document.createElement('div');
    this.musouWrap.style.cssText = `display:${this.touch ? 'none' : 'flex'};flex-direction:column;align-items:center;gap:2px;`;
    this.musouHint = document.createElement('div');
    this.musouHint.style.cssText =
      'color:#e8c667;font-size:12px;letter-spacing:2px;opacity:0;transition:opacity 0.2s;';
    this.musouHint.innerHTML = '무쌍 無雙 — Space';
    this.musouWrap.appendChild(this.musouHint);
    const musouBar = document.createElement('div');
    musouBar.style.cssText =
      'width:min(46vw,320px);height:9px;background:rgba(28,22,10,0.85);border:1px solid rgba(232,198,103,0.4);border-radius:5px;overflow:hidden;';
    this.musouFill = document.createElement('div');
    this.musouFill.style.cssText =
      'height:100%;width:0%;background:linear-gradient(90deg,#a8791f,#e8c667,#fff2c0);box-shadow:0 0 8px rgba(232,198,103,0.7);';
    musouBar.appendChild(this.musouFill);
    this.musouWrap.appendChild(musouBar);
    bottom.appendChild(this.musouWrap);

    const hpBar = document.createElement('div');
    hpBar.style.cssText =
      'width:min(60vw,420px);height:16px;background:rgba(20,22,30,0.85);border:1px solid rgba(232,198,103,0.35);border-radius:5px;overflow:hidden;position:relative;';
    this.hpFill = document.createElement('div');
    this.hpFill.style.cssText =
      'height:100%;width:100%;background:linear-gradient(90deg,#c0362b,#e85c4a);box-shadow:0 0 8px rgba(232,92,74,0.6);transition:width 0.12s;';
    hpBar.appendChild(this.hpFill);
    this.hpText = document.createElement('div');
    this.hpText.style.cssText =
      'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;letter-spacing:1px;text-shadow:0 1px 2px rgba(0,0,0,0.9);font-variant-numeric:tabular-nums;';
    this.hpText.textContent = '100 / 100';
    hpBar.appendChild(this.hpText);
    bottom.appendChild(hpBar);
    document.body.appendChild(bottom);
    this.bottom = bottom;

    // 콤보 카운터 (우측)
    this.comboEl = document.createElement('div');
    this.comboEl.style.cssText = [
      'position:fixed',
      'right:28px',
      'top:38%',
      'display:none',
      'flex-direction:column',
      'align-items:center',
      'pointer-events:none',
      'z-index:20',
      'font-family:"Nanum Myeongjo","Times New Roman",serif',
      'text-shadow:0 0 12px rgba(232,198,103,0.5)',
    ].join(';');
    document.body.appendChild(this.comboEl);

    // 배너 레이어 (마일스톤/경고/무쌍 한자)
    this.bannerLayer = document.createElement('div');
    this.bannerLayer.style.cssText = [
      'position:fixed',
      'inset:0',
      'display:flex',
      'align-items:center',
      'justify-content:center',
      'pointer-events:none',
      'z-index:32',
      'font-family:"Nanum Myeongjo","Times New Roman",serif',
    ].join(';');
    document.body.appendChild(this.bannerLayer);
  }

  // 전투 HUD 표시/숨김 (메뉴 상태에서 숨김).
  setVisible(v: boolean): void {
    this.root.style.display = v ? 'flex' : 'none';
    this.slotBar.style.display = v ? 'flex' : 'none';
    this.bottom.style.display = v ? 'flex' : 'none';
    if (!v) {
      this.comboEl.style.display = 'none';
      this.bossWrap.style.display = 'none';
    }
  }

  // 무기/패시브 슬롯 갱신 (변경 시에만 호출 → 프레임당 할당 회피). 신규 슬롯은 반짝임.
  setLoadout(weapons: SlotView[], passives: SlotView[]): void {
    const wRow = (this.slotBar as unknown as { _w: HTMLDivElement })._w;
    const pRow = (this.slotBar as unknown as { _p: HTMLDivElement })._p;
    this.renderSlots(wRow, weapons);
    this.renderSlots(pRow, passives);
  }

  private renderSlots(row: HTMLDivElement, slots: SlotView[]): void {
    // 슬롯 엘리먼트 개수 맞추기 (glyph span + level span 구조 유지)
    while (row.children.length < slots.length) {
      const el = document.createElement('div');
      el.style.cssText = [
        'position:relative',
        'width:30px',
        'height:30px',
        'border-radius:6px',
        'display:flex',
        'align-items:center',
        'justify-content:center',
        'font-size:16px',
        'font-family:"Nanum Myeongjo",serif',
        'background:rgba(14,15,21,0.8)',
        'border:1px solid rgba(232,198,103,0.4)',
        'box-shadow:0 1px 4px rgba(0,0,0,0.6)',
      ].join(';');
      const glyph = document.createElement('span');
      const lv = document.createElement('span');
      lv.style.cssText =
        'position:absolute;right:-2px;bottom:-4px;font-size:10px;color:#f0e4c0;background:rgba(0,0,0,0.7);border-radius:3px;padding:0 2px;line-height:1.2;';
      el.appendChild(glyph);
      el.appendChild(lv);
      row.appendChild(el);
    }
    while (row.children.length > slots.length) row.removeChild(row.lastChild!);
    for (let i = 0; i < slots.length; i++) {
      const s = slots[i];
      const el = row.children[i] as HTMLDivElement;
      const glyph = el.children[0] as HTMLSpanElement;
      const lvEl = el.children[1] as HTMLSpanElement;
      el.style.borderColor = s.accent;
      glyph.style.color = s.accent;
      glyph.textContent = s.glyph;
      lvEl.textContent = String(s.level);
      if (!this.seenSlots.has(s.id)) {
        this.seenSlots.add(s.id);
        el.animate(
          [
            { transform: 'scale(1.6)', filter: 'brightness(2.2)' },
            { transform: 'scale(1)', filter: 'brightness(1)' },
          ],
          { duration: 420, easing: 'ease-out' },
        );
      }
    }
  }

  resetSlots(): void {
    this.seenSlots.clear();
    const wRow = (this.slotBar as unknown as { _w: HTMLDivElement })._w;
    const pRow = (this.slotBar as unknown as { _p: HTMLDivElement })._p;
    wRow.textContent = '';
    pRow.textContent = '';
  }

  update(s: HudState): void {
    const mm = Math.floor(s.time / 60);
    const ss = Math.floor(s.time % 60);
    this.timerEl.textContent = `${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`;
    this.killsEl.textContent = `처치 ${s.kills}`;
    this.levelEl.textContent = `Lv ${s.level}`;
    this.goldEl.textContent = `⟡ ${Math.floor(s.gold)}`;
    this.xpFill.style.width = `${Math.min(100, (s.xp / s.nextXp) * 100)}%`;
    this.hpFill.style.width = `${Math.max(0, (s.hp / s.maxHp) * 100)}%`;
    this.hpText.textContent = `${Math.ceil(s.hp)} / ${Math.round(s.maxHp)}`;

    // 무쌍 (모바일은 우측 버튼이 담당 → 하단 바 미갱신)
    if (!this.touch) {
      this.musouFill.style.width = `${Math.min(100, s.musouPct)}%`;
      if (s.musouReady && !this.wasReady) {
        this.musouHint.style.opacity = '1';
        this.musouWrap.animate(
          [{ filter: 'brightness(1)' }, { filter: 'brightness(1.8)' }, { filter: 'brightness(1)' }],
          { duration: 900, iterations: Infinity },
        );
      } else if (!s.musouReady && this.wasReady) {
        this.musouHint.style.opacity = '0';
        this.musouWrap.getAnimations().forEach((a) => a.cancel());
      }
      this.wasReady = s.musouReady;
    }

    // 콤보
    if (s.combo >= 3) {
      this.comboEl.style.display = 'flex';
      this.comboEl.innerHTML =
        `<div style="color:#f0e4c0;font-size:52px;line-height:1;font-variant-numeric:tabular-nums;">${s.combo}</div>` +
        `<div style="color:#e8c667;font-size:16px;letter-spacing:2px;">連 킬</div>`;
      if (s.combo !== this.lastCombo) this.punchCombo();
    } else {
      this.comboEl.style.display = 'none';
    }
    this.lastCombo = s.combo;

    // 보스 바
    if (s.bossActive) {
      this.bossWrap.style.display = 'flex';
      this.bossName.textContent = `${s.bossName} ${s.bossHanja}`;
      this.bossFill.style.width = `${Math.max(0, s.bossFrac * 100)}%`;
    } else {
      this.bossWrap.style.display = 'none';
    }
  }

  punchLevel(): void {
    this.levelEl.animate(
      [
        { transform: 'scale(1.35)', color: '#e8c667' },
        { transform: 'scale(1)', color: '#c9cdda' },
      ],
      { duration: 260, easing: 'ease-out' },
    );
  }

  punchCombo(): void {
    this.comboEl.animate(
      [{ transform: 'scale(1.3)' }, { transform: 'scale(1)' }],
      { duration: 140, easing: 'ease-out' },
    );
  }

  // 중앙 배너 (마일스톤/경고). size px, color, 지속 ms.
  banner(text: string, color: string, sizePx: number, durationMs = 1400): void {
    const el = document.createElement('div');
    el.textContent = text;
    el.style.cssText = [
      'position:absolute',
      `color:${color}`,
      `font-size:min(${sizePx}px, 13vw)`,
      'letter-spacing:6px',
      `text-shadow:0 0 24px ${color}`,
      'white-space:nowrap',
    ].join(';');
    this.bannerLayer.appendChild(el);
    const anim = el.animate(
      [
        { transform: 'scale(0.6)', opacity: 0 },
        { transform: 'scale(1.1)', opacity: 1, offset: 0.2 },
        { transform: 'scale(1)', opacity: 1, offset: 0.75 },
        { transform: 'scale(1.05)', opacity: 0 },
      ],
      { duration: durationMs, easing: 'ease-out' },
    );
    anim.onfinish = () => el.remove();
  }
}
