// 레벨업 3택 카드 오버레이 (먹빛 배경 + 금색 헤어라인). 무기/패시브 획득·강화.
// run이 후보 카드를 만들어 전달하고, 선택/리롤을 콜백으로 돌려받는 프레젠터.
// 레이아웃은 style.css의 .levelup-* 클래스가 담당(반응형: nowrap 3열 + vh clamp 축소).
export interface CardView {
  title: string; // 이름
  hanja: string;
  desc: string; // 효과 설명
  tag: string; // 분류 (무기 신규/강화, 패시브, 진화, 보상)
  accent: string; // 강조색
  symbol: string; // 심볼 글자(한자 1자) — CSS 원형에 표시
  badge?: string; // 뱃지 텍스트 (신규/강화/진화)
  rare?: boolean; // 희귀(진화 가능/희귀 패시브) → 금테
}

export class LevelUp {
  private readonly root: HTMLDivElement;
  private readonly cardEls: HTMLDivElement[] = [];
  private readonly rerollBtn: HTMLDivElement;
  private onPick: ((index: number) => void) | null = null;
  private onReroll: (() => void) | null = null;
  private count = 0;
  active = false;

  constructor() {
    this.root = document.createElement('div');
    this.root.className = 'levelup-overlay';

    const wrap = document.createElement('div');
    wrap.className = 'levelup-wrap';

    const title = document.createElement('div');
    title.className = 'levelup-title';
    title.innerHTML = '레벨 업 — 하나를 택하라 <span>選一</span>';
    wrap.appendChild(title);

    const row = document.createElement('div');
    row.className = 'levelup-row';
    for (let i = 0; i < 3; i++) {
      const card = document.createElement('div');
      card.className = 'levelup-card';
      const idx = i;
      card.addEventListener('click', () => this.pick(idx));
      row.appendChild(card);
      this.cardEls.push(card);
    }
    wrap.appendChild(row);

    const bottom = document.createElement('div');
    bottom.className = 'levelup-bottom';
    const hint = document.createElement('div');
    hint.className = 'levelup-hint';
    hint.textContent = '1 · 2 · 3 키로도 선택';
    bottom.appendChild(hint);

    this.rerollBtn = document.createElement('div');
    this.rerollBtn.className = 'levelup-reroll';
    this.rerollBtn.addEventListener('click', () => {
      if (this.onReroll) this.onReroll();
    });
    bottom.appendChild(this.rerollBtn);
    wrap.appendChild(bottom);

    this.root.appendChild(wrap);
    document.body.appendChild(this.root);
  }

  open(cards: CardView[], gold: number, canReroll: boolean, onPick: (index: number) => void, onReroll: () => void): void {
    this.onPick = onPick;
    this.onReroll = onReroll;
    this.count = cards.length;
    for (let i = 0; i < this.cardEls.length; i++) {
      const el = this.cardEls[i];
      const c = cards[i];
      if (c) {
        el.style.display = 'flex';
        // 희귀(진화 가능/희귀 패시브)는 금테 + 강한 글로우 (색은 데이터 기반이라 인라인 유지)
        el.style.borderColor = c.rare ? '#ffe9a8' : c.accent;
        el.style.boxShadow = c.rare
          ? '0 0 26px rgba(255,220,120,0.4),inset 0 0 0 1px rgba(255,220,120,0.4)'
          : '0 0 18px rgba(232,198,103,0.12),inset 0 0 0 1px rgba(232,198,103,0.12)';
        const badge = c.badge
          ? `<div class="lc-badge" style="background:${c.accent}22;color:${c.accent};border-color:${c.accent}66;">${c.badge}</div>`
          : '';
        el.innerHTML =
          badge +
          `<div class="lc-symbol" style="color:${c.accent};border-color:${c.accent};box-shadow:0 0 14px ${c.accent}55;">${c.symbol}</div>` +
          `<div class="lc-tag" style="color:${c.accent};">${c.tag}</div>` +
          `<div class="lc-title">${c.title}</div>` +
          `<div class="lc-hanja" style="color:${c.accent};">${c.hanja}</div>` +
          `<div class="lc-desc">${c.desc}</div>` +
          `<div class="lc-num">${i + 1}</div>`;
        // 순차 슬라이드+스케일 등장
        el.animate(
          [
            { transform: 'translateY(26px) scale(0.9)', opacity: 0 },
            { transform: 'translateY(0) scale(1)', opacity: 1 },
          ],
          { duration: 300, delay: i * 90, easing: 'cubic-bezier(0.2,0.9,0.3,1)', fill: 'backwards' },
        );
      } else {
        el.style.display = 'none';
      }
    }
    this.rerollBtn.textContent = `리롤 (50G) · 보유 ${gold}G`;
    this.rerollBtn.style.opacity = canReroll ? '1' : '0.4';
    this.rerollBtn.style.pointerEvents = canReroll ? 'auto' : 'none';
    this.root.style.display = 'flex';
    this.active = true;
  }

  pick(index: number): void {
    if (!this.active || index >= this.count) return;
    this.active = false;
    this.root.style.display = 'none';
    const cb = this.onPick;
    this.onPick = null;
    this.onReroll = null;
    if (cb) cb(index);
  }

  close(): void {
    this.active = false;
    this.root.style.display = 'none';
  }
}
