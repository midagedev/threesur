import { t, getLang } from '../core/i18n';

// 슬롯 프레임 캡 (DESIGN 13.4). run.ts의 MAX_WEAPONS/MAX_PASSIVES와 동일.
const WEAPON_SLOTS = 6;
const PASSIVE_SLOTS = 6;

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

// 공성 목표 HUD 패널(#50). 텍스트는 run이 ko/en 완성해 넘긴다(i18n 무접촉 계약).
export interface Objective {
  title: string; // 굵은 지시문 ("낙양 성문을 부숴라")
  sub?: string; // 보조(보상 예고 등)
  progress01?: number; // 0..1 이면 진행 바 표시(성문 HP 등). undefined/음수면 바 없음.
  countdownSec?: number; // 지정 시 MM:SS 카운트다운(run이 매 프레임 값 갱신). undefined면 없음.
  color?: string; // 진행 바 상황색(CSS 색). 기본 금색.
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
  private readonly hpDelay: HTMLDivElement; // 피격 시 뒤따라 줄어드는 흰 잔상 바
  private readonly hpText: HTMLDivElement;
  private readonly musouWrap: HTMLDivElement;
  private readonly musouFill: HTMLDivElement;
  private readonly musouHint: HTMLDivElement;
  private readonly comboEl: HTMLDivElement;
  private readonly bossWrap: HTMLDivElement;
  private readonly bossFill: HTMLDivElement;
  private readonly bossName: HTMLDivElement;
  private readonly bannerLayer: HTMLDivElement;
  // 중앙 배너 큐(#39): 동시 호출 시 겹치지 않게 순차 재생. 우선순위 높은 것 먼저, 대기 2개 초과 시 최저우선·최고령 드랍.
  private readonly bannerQueue: { text: string; color: string; sizePx: number; durationMs: number; priority: number; seq: number }[] = [];
  private bannerSeq = 0;
  private bannerPlaying = false;
  private readonly quoteLayer: HTMLDivElement; // 전투 중 원군 대사 — 상단(조이스틱 존 회피, #31)
  private bossActiveNow = false; // 대사 박스 상단 오프셋을 보스바 유무에 맞춰 조정
  // 공성 목표 패널(#50): 타이머 클러스터 하단(hud-top 플로우 마지막), 대사 박스 위.
  private readonly objWrap: HTMLDivElement;
  private readonly objTitle: HTMLDivElement;
  private readonly objSub: HTMLDivElement;
  private readonly objBarTrack: HTMLDivElement;
  private readonly objBarFill: HTMLDivElement;
  private readonly objCountdown: HTMLDivElement;
  private objVisible = false;
  private objDanger = false; // 카운트다운 ≤10s 붉은 점멸 상태
  private readonly feverEl: HTMLDivElement;
  private feverOn = false;
  private readonly slotBar: HTMLDivElement;
  private readonly bottom: HTMLDivElement;
  private readonly seenSlots = new Set<string>();
  private weaponsFullSeen = false; // 무기 6칸 만석 배너 1회 트리거용
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
    this.killsEl.textContent = `${t('hudKillsLabel')} 0`;
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

    // 공성 목표 패널(#50). hud-top 플로우의 마지막 자식 → 타이머/스탯/XP/보스바 아래에 자동 스택되고,
    // 모바일 축소(.hud-top scale)도 함께 상속. 정보 전달용이라 pointer-events 없음.
    this.objWrap = document.createElement('div');
    this.objWrap.className = 'hud-objective';
    this.objWrap.style.cssText = [
      'display:none',
      'flex-direction:column',
      'align-items:center',
      'gap:4px',
      'max-width:min(92vw,440px)',
      'box-sizing:border-box',
      'margin-top:10px',
      'padding:7px 18px',
      'border:1px solid rgba(232,198,103,0.42)',
      'border-radius:9px',
      'background:linear-gradient(180deg,rgba(22,19,12,0.9),rgba(12,11,8,0.92))',
      'box-shadow:0 3px 16px rgba(0,0,0,0.5),0 0 14px rgba(232,198,103,0.1)',
    ].join(';');
    const objHead = document.createElement('div');
    objHead.style.cssText =
      'display:flex;gap:12px;align-items:baseline;justify-content:center;flex-wrap:wrap;max-width:100%;';
    this.objTitle = document.createElement('div');
    this.objTitle.style.cssText =
      'color:#f4e6bd;font-size:17px;letter-spacing:2px;text-align:center;line-height:1.25;text-shadow:0 1px 6px rgba(0,0,0,0.8);';
    this.objCountdown = document.createElement('div');
    this.objCountdown.style.cssText =
      'display:none;color:#e8c667;font-size:15px;letter-spacing:1px;font-variant-numeric:tabular-nums;';
    objHead.appendChild(this.objTitle);
    objHead.appendChild(this.objCountdown);
    this.objSub = document.createElement('div');
    this.objSub.style.cssText =
      'display:none;color:#b9b18c;font-size:12px;letter-spacing:1px;text-align:center;line-height:1.3;';
    this.objBarTrack = document.createElement('div');
    this.objBarTrack.style.cssText =
      'display:none;width:100%;height:5px;border-radius:3px;background:rgba(20,18,12,0.9);border:1px solid rgba(232,198,103,0.28);overflow:hidden;';
    this.objBarFill = document.createElement('div');
    this.objBarFill.style.cssText =
      'height:100%;width:0%;background:linear-gradient(90deg,#a8791f,#e8c667);box-shadow:0 0 6px rgba(232,198,103,0.4);transition:width 0.18s;';
    this.objBarTrack.appendChild(this.objBarFill);
    this.objWrap.appendChild(objHead);
    this.objWrap.appendChild(this.objSub);
    this.objWrap.appendChild(this.objBarTrack);
    top.appendChild(this.objWrap);

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
      // 터치 기기: 조이스틱 엄지 영역(하단)과 겹치지 않게 체력/게이지 바를 위로 올린다(오너 피드백).
      `bottom:calc(env(safe-area-inset-bottom,0px) + ${this.touch ? '15vh' : '22px'})`,
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
    this.musouHint.innerHTML = t('musouHint');
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
    // 잔상 바(피격 시 흰 띠가 지연되며 따라 줄어듦) — 실제 HP 바 뒤에 깔린다.
    this.hpDelay = document.createElement('div');
    this.hpDelay.style.cssText =
      'position:absolute;left:0;top:0;height:100%;width:100%;background:rgba(255,225,210,0.7);transition:width 0.45s ease-out 0.14s;';
    hpBar.appendChild(this.hpDelay);
    this.hpFill = document.createElement('div');
    this.hpFill.style.cssText =
      'position:absolute;left:0;top:0;height:100%;width:100%;background:linear-gradient(90deg,#c0362b,#e85c4a);box-shadow:0 0 8px rgba(232,92,74,0.6);transition:width 0.12s;';
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

    // 원군 대사 레이어 — 상단 배치(조이스틱/무쌍 버튼이 있는 하단 회피, #31).
    // top은 보스바 유무에 맞춰 quote()에서 조정. 상단 HUD(z20) 위, 중앙 배너(z32) 아래.
    this.quoteLayer = document.createElement('div');
    this.quoteLayer.style.cssText = [
      'position:fixed',
      'top:calc(env(safe-area-inset-top,0px) + 96px)',
      'left:0',
      'right:0',
      'display:flex',
      'justify-content:center',
      'padding:0 12px',
      'pointer-events:none',
      'z-index:21',
      'font-family:"Nanum Myeongjo","Times New Roman",serif',
    ].join(';');
    document.body.appendChild(this.quoteLayer);

    // 콤보 피버: 화면 가장자리 금색 불꽃(inset 글로우). opacity 토글.
    this.feverEl = document.createElement('div');
    this.feverEl.style.cssText = [
      'position:fixed',
      'inset:0',
      'pointer-events:none',
      'opacity:0',
      'z-index:29',
      'transition:opacity 0.25s',
      'box-shadow:inset 0 0 120px 24px rgba(255,180,60,0.55),inset 0 0 40px 8px rgba(255,120,30,0.5)',
    ].join(';');
    document.body.appendChild(this.feverEl);
  }

  // 콤보 피버 화면 연출 on/off (진입 시 맥동 시작, 해제 시 페이드).
  setFever(on: boolean): void {
    if (on === this.feverOn) return;
    this.feverOn = on;
    if (on) {
      this.feverEl.style.opacity = '1';
      this.feverEl.animate(
        [{ filter: 'brightness(1)' }, { filter: 'brightness(1.5)' }, { filter: 'brightness(1)' }],
        { duration: 700, iterations: Infinity },
      );
    } else {
      this.feverEl.style.opacity = '0';
      this.feverEl.getAnimations().forEach((a) => a.cancel());
    }
  }

  // 전투 HUD 표시/숨김 (메뉴 상태에서 숨김).
  setVisible(v: boolean): void {
    this.root.style.display = v ? 'flex' : 'none';
    this.slotBar.style.display = v ? 'flex' : 'none';
    this.bottom.style.display = v ? 'flex' : 'none';
    if (!v) {
      this.comboEl.style.display = 'none';
      this.bossWrap.style.display = 'none';
      this.quoteLayer.textContent = '';
      // 중앙 배너 큐·재생 정리(#39) — 런 종료 시 잔여 배너/백로그 제거.
      this.bannerQueue.length = 0;
      this.bannerPlaying = false;
      this.bannerLayer.textContent = '';
      this.setFever(false);
      // 목표 패널 정리(#50).
      this.objVisible = false;
      this.objDanger = false;
      this.objCountdown.classList.remove('obj-danger');
      this.objCountdown.style.color = '#e8c667';
      this.objWrap.getAnimations().forEach((a) => a.cancel());
      this.objWrap.style.display = 'none';
      this.reflowQuote();
    }
  }

  // 공성 목표 패널 갱신(#50). null이면 페이드 아웃하며 숨김. run이 텍스트/진행/카운트다운을 완성해 넘긴다.
  // 등장 시 대사 박스를 패널 실제 하단 아래로 밀어 겹침을 막는다(보스바·모바일 축소 반영).
  setObjective(o: Objective | null): void {
    if (!o) {
      if (!this.objVisible) return;
      this.objVisible = false;
      if (this.objDanger) {
        this.objDanger = false;
        this.objCountdown.classList.remove('obj-danger');
        this.objCountdown.style.color = '#e8c667';
      }
      const el = this.objWrap;
      const anim = el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 200, easing: 'ease-out' });
      anim.onfinish = () => {
        if (!this.objVisible) el.style.display = 'none';
      };
      this.reflowQuote();
      return;
    }
    this.objTitle.textContent = o.title;
    if (o.sub) {
      this.objSub.textContent = o.sub;
      this.objSub.style.display = '';
    } else {
      this.objSub.style.display = 'none';
    }
    // 진행 바 (성문 HP 등). 상황색 지정 시 그 색, 아니면 기본 금색 그라디언트.
    if (o.progress01 !== undefined && o.progress01 >= 0) {
      this.objBarTrack.style.display = '';
      this.objBarFill.style.width = `${Math.max(0, Math.min(1, o.progress01)) * 100}%`;
      this.objBarFill.style.background = o.color
        ? `linear-gradient(90deg,${o.color},${o.color})`
        : 'linear-gradient(90deg,#a8791f,#e8c667)';
    } else {
      this.objBarTrack.style.display = 'none';
    }
    // 카운트다운 (run이 매 프레임 값 갱신 — 여기선 표시만). ≤10s면 붉게 1Hz 점멸(절제).
    if (o.countdownSec !== undefined && o.countdownSec >= 0) {
      const total = Math.ceil(o.countdownSec);
      const mm = Math.floor(total / 60);
      const ss = total % 60;
      this.objCountdown.textContent = `${mm}:${ss.toString().padStart(2, '0')}`;
      this.objCountdown.style.display = '';
      const danger = o.countdownSec <= 10;
      if (danger !== this.objDanger) {
        this.objDanger = danger;
        this.objCountdown.classList.toggle('obj-danger', danger);
        this.objCountdown.style.color = danger ? '#ff6a58' : '#e8c667'; // 인라인이 클래스보다 우선
      }
    } else {
      this.objCountdown.style.display = 'none';
      if (this.objDanger) {
        this.objDanger = false;
        this.objCountdown.classList.remove('obj-danger');
        this.objCountdown.style.color = '#e8c667';
      }
    }
    const wasVisible = this.objVisible;
    this.objVisible = true;
    this.objWrap.style.display = 'flex';
    // 등장 트랜스폼 전에 측정해야 실제 높이가 잡힘(WAAPI translateY는 레이아웃에 영향 없음).
    this.reflowQuote();
    if (!wasVisible) {
      this.objWrap.animate(
        [
          { opacity: 0, transform: 'translateY(-6px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        { duration: 200, easing: 'ease-out' },
      );
    }
  }

  // 대사 박스(quoteLayer) 상단 오프셋 재계산. 목표 패널이 보이면 그 실제 하단 아래로,
  // 아니면 보스바 유무 기준의 기존 오프셋으로. getBoundingClientRect가 모바일 축소·보스바를 모두 반영.
  private reflowQuote(): void {
    if (this.objVisible) {
      const bottom = this.objWrap.getBoundingClientRect().bottom;
      this.quoteLayer.style.top = `${Math.round(bottom + 8)}px`;
    } else {
      this.quoteLayer.style.top = `calc(env(safe-area-inset-top,0px) + ${this.bossActiveNow ? 164 : 96}px)`;
    }
  }

  // 무기/패시브 슬롯 갱신 (변경 시에만 호출 → 프레임당 할당 회피). 신규 슬롯은 반짝임.
  // 좌상단은 무기 6칸/패시브 6칸 고정 프레임 — 빈칸이 보여 "채워간다/꽉 찼다"가 체감된다(DESIGN 13.4).
  setLoadout(weapons: SlotView[], passives: SlotView[]): void {
    const wRow = (this.slotBar as unknown as { _w: HTMLDivElement })._w;
    const pRow = (this.slotBar as unknown as { _p: HTMLDivElement })._p;
    this.renderSlots(wRow, weapons, WEAPON_SLOTS);
    this.renderSlots(pRow, passives, PASSIVE_SLOTS);
    // 무기 슬롯 만석 최초 도달 → "병법 만진" 배너 1회 (한자 공통, 라벨만 언어별).
    if (!this.weaponsFullSeen && weapons.length >= WEAPON_SLOTS) {
      this.weaponsFullSeen = true;
      const label = getLang() === 'en' ? 'Full Arsenal' : '병법 만진';
      this.banner(`${label} 兵法滿陣`, '#e8c667', 54, 1700);
    }
  }

  private renderSlots(row: HTMLDivElement, slots: SlotView[], cap: number): void {
    // 고정 cap칸: 빈칸도 프레임을 유지한다. (셀은 최초 1회 생성, 이후 재사용 → 프레임당 할당 없음)
    while (row.children.length < cap) {
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
        'box-shadow:0 1px 4px rgba(0,0,0,0.6)',
        'transition:border-color 0.2s,background 0.2s',
      ].join(';');
      const glyph = document.createElement('span');
      const lv = document.createElement('span');
      lv.style.cssText =
        'position:absolute;right:-2px;bottom:-4px;font-size:10px;color:#f0e4c0;background:rgba(0,0,0,0.7);border-radius:3px;padding:0 2px;line-height:1.2;';
      el.appendChild(glyph);
      el.appendChild(lv);
      row.appendChild(el);
    }
    for (let i = 0; i < cap; i++) {
      const el = row.children[i] as HTMLDivElement;
      const glyph = el.children[0] as HTMLSpanElement;
      const lvEl = el.children[1] as HTMLSpanElement;
      const s = slots[i];
      if (s) {
        el.style.borderStyle = 'solid';
        el.style.borderWidth = '1px';
        el.style.borderColor = s.accent;
        el.style.background = 'rgba(14,15,21,0.8)';
        glyph.style.color = s.accent;
        glyph.textContent = s.glyph;
        lvEl.style.display = '';
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
      } else {
        // 빈칸: 점선 프레임 + 희미한 중앙 점 (본체를 압도하지 않게 절제).
        el.style.borderStyle = 'dashed';
        el.style.borderWidth = '1px';
        el.style.borderColor = 'rgba(232,198,103,0.16)';
        el.style.background = 'rgba(10,11,16,0.4)';
        glyph.style.color = 'rgba(232,198,103,0.22)';
        glyph.textContent = '·';
        lvEl.style.display = 'none';
        lvEl.textContent = '';
      }
    }
  }

  resetSlots(): void {
    this.seenSlots.clear();
    this.weaponsFullSeen = false;
    const wRow = (this.slotBar as unknown as { _w: HTMLDivElement })._w;
    const pRow = (this.slotBar as unknown as { _p: HTMLDivElement })._p;
    wRow.textContent = '';
    pRow.textContent = '';
  }

  update(s: HudState): void {
    const mm = Math.floor(s.time / 60);
    const ss = Math.floor(s.time % 60);
    this.timerEl.textContent = `${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`;
    this.killsEl.textContent = `${t('hudKillsLabel')} ${s.kills}`;
    this.levelEl.textContent = `Lv ${s.level}`;
    this.goldEl.textContent = `⟡ ${Math.floor(s.gold)}`;
    this.xpFill.style.width = `${Math.min(100, (s.xp / s.nextXp) * 100)}%`;
    const hpPct = Math.max(0, (s.hp / s.maxHp) * 100);
    this.hpFill.style.width = `${hpPct}%`;
    this.hpDelay.style.width = `${hpPct}%`;
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
        `<div style="color:#e8c667;font-size:16px;letter-spacing:2px;">${t('hudCombo')}</div>`;
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
    // 보스바가 뜨면 상단 대사 박스를 그만큼 아래로 (겹침 방지, #31). 목표 패널이 있으면 그 하단 기준(#50).
    if (s.bossActive !== this.bossActiveNow) {
      this.bossActiveNow = s.bossActive;
      this.reflowQuote();
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

  // 중앙 배너 (마일스톤/경고). size px, color, 지속 ms, priority(선택: 보스/무쌍 등 중요 배너는 높게 → 먼저 재생).
  // 동시 호출이 화면 중앙에 겹쳐 둘 다 못 읽던 문제(#39)를 큐로 해결 — 항상 순차 재생.
  banner(text: string, color: string, sizePx: number, durationMs = 1400, priority = 0): void {
    this.bannerQueue.push({ text, color, sizePx, durationMs, priority, seq: this.bannerSeq++ });
    // 대기열 상한 2 — 초과 시 최저 우선순위·최고령 항목 드랍(스팸 백로그 방지, 최신 정보 우선).
    while (this.bannerQueue.length > 2) {
      let worst = 0;
      for (let i = 1; i < this.bannerQueue.length; i++) {
        const a = this.bannerQueue[i];
        const b = this.bannerQueue[worst];
        if (a.priority < b.priority || (a.priority === b.priority && a.seq < b.seq)) worst = i;
      }
      this.bannerQueue.splice(worst, 1);
    }
    if (!this.bannerPlaying) this.playNextBanner();
  }

  // 큐에서 (최고 우선순위, 동순위는 최고령) 하나를 꺼내 재생. 끝나면 다음 것 재생.
  private playNextBanner(): void {
    if (this.bannerQueue.length === 0) {
      this.bannerPlaying = false;
      return;
    }
    let best = 0;
    for (let i = 1; i < this.bannerQueue.length; i++) {
      const a = this.bannerQueue[i];
      const b = this.bannerQueue[best];
      if (a.priority > b.priority || (a.priority === b.priority && a.seq < b.seq)) best = i;
    }
    const item = this.bannerQueue.splice(best, 1)[0];
    this.bannerPlaying = true;
    const el = document.createElement('div');
    el.textContent = item.text;
    el.style.cssText = [
      'position:absolute',
      `color:${item.color}`,
      `font-size:min(${item.sizePx}px, 13vw)`,
      'letter-spacing:6px',
      `text-shadow:0 0 24px ${item.color}`,
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
      { duration: item.durationMs, easing: 'ease-out' },
    );
    anim.onfinish = () => {
      el.remove();
      this.playNextBanner();
    };
  }

  // 전투 중 짧은 원군 대사. 조이스틱/무쌍 버튼이 있는 하단을 피해 상단(quoteLayer)에 둔다(#31).
  // top은 update()가 보스바 유무에 맞춰 조정 → 상단 HUD/보스바와 비겹침, 중앙 배너와도 분리.
  quote(name: string, line: string, durationMs = 3600): void {
    if (!line) return;
    this.quoteLayer.textContent = ''; // 이전 대사 교체
    const el = document.createElement('div');
    el.className = 'battle-quote';
    el.style.cssText = [
      'width:min(680px,92vw)',
      'padding:10px 16px',
      'border:1px solid rgba(126,200,255,0.45)',
      'border-radius:10px',
      'background:linear-gradient(90deg,rgba(8,14,24,0.92),rgba(15,25,38,0.86))',
      'box-shadow:0 4px 22px rgba(0,0,0,0.5),0 0 20px rgba(80,160,240,0.16)',
      'display:flex',
      'gap:10px',
      'align-items:baseline',
      'color:#e9f4ff',
      'font-size:min(15px,3.6vw)',
      'letter-spacing:0.4px',
      'white-space:normal',
    ].join(';');
    const who = document.createElement('b');
    who.textContent = name;
    who.style.cssText = 'color:#7ec8ff;white-space:nowrap;letter-spacing:2px;flex-shrink:0;';
    const lineEl = document.createElement('span');
    lineEl.textContent = `“${line}”`;
    lineEl.style.cssText = 'line-height:1.4;';
    el.appendChild(who);
    el.appendChild(lineEl);
    this.quoteLayer.appendChild(el);
    // 위에서 미끄러져 들어오고, 잠깐 머문 뒤 위로 사라짐.
    const anim = el.animate(
      [
        { transform: 'translateY(-12px)', opacity: 0 },
        { transform: 'translateY(0)', opacity: 1, offset: 0.15 },
        { transform: 'translateY(0)', opacity: 1, offset: 0.82 },
        { transform: 'translateY(-6px)', opacity: 0 },
      ],
      { duration: durationMs, easing: 'ease-out' },
    );
    anim.onfinish = () => el.remove();
  }
}
