import type { Atlas } from '../gfx/atlas';
import { HEROES } from '../data/heroes';
import { WEAPON_DEFS } from '../data/weapons';

// 스코어 공유 (DESIGN §11). 결과를 오프스크린 캔버스(1200×630) 공유 카드로 렌더하고
// navigator.share(files) / 클립보드 이미지 / PNG 다운로드로 공유. 결과 화면과 독립.
export interface ShareData {
  victory: boolean;
  heroId: string;
  time: number; // 생존 초
  kills: number;
  maxCombo: number;
  level: number;
  goldEarned: number;
  weapons: { id: string; level: number }[];
  title?: { name: string; hanja: string };
  endless?: boolean;
}

const CARD_W = 1200;
const CARD_H = 630;
const GAME_URL = 'midagedev.github.io/threesur';
const SHARE_URL = 'https://midagedev.github.io/threesur/';

function fmtTime(sec: number): string {
  const mm = Math.floor(sec / 60);
  const ss = Math.floor(sec % 60);
  return `${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`;
}

// 공유 카드 캔버스 렌더. atlas가 있으면 장수 도트 초상을 확대(NearestNeighbor)해 그린다.
export function renderShareCard(data: ShareData, atlas?: Atlas): HTMLCanvasElement {
  const cv = document.createElement('canvas');
  cv.width = CARD_W;
  cv.height = CARD_H;
  const ctx = cv.getContext('2d')!;
  const hero = HEROES[data.heroId];

  // 배경: 먹빛 방사 그라디언트 + 비네트
  const bg = ctx.createLinearGradient(0, 0, CARD_W, CARD_H);
  bg.addColorStop(0, '#12131b');
  bg.addColorStop(1, '#05060a');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, CARD_W, CARD_H);
  const vig = ctx.createRadialGradient(CARD_W / 2, CARD_H / 2, 200, CARD_W / 2, CARD_H / 2, 760);
  vig.addColorStop(0, 'rgba(0,0,0,0)');
  vig.addColorStop(1, 'rgba(0,0,0,0.55)');
  ctx.fillStyle = vig;
  ctx.fillRect(0, 0, CARD_W, CARD_H);

  // 은은한 격자 텍스처 느낌(가는 선)
  ctx.strokeStyle = 'rgba(120,140,180,0.05)';
  ctx.lineWidth = 1;
  for (let x = 0; x <= CARD_W; x += 60) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, CARD_H);
    ctx.stroke();
  }

  // 금색 헤어라인 테두리
  ctx.strokeStyle = 'rgba(232,198,103,0.7)';
  ctx.lineWidth = 2;
  ctx.strokeRect(22, 22, CARD_W - 44, CARD_H - 44);
  ctx.strokeStyle = 'rgba(232,198,103,0.25)';
  ctx.lineWidth = 1;
  ctx.strokeRect(30, 30, CARD_W - 60, CARD_H - 60);

  const serif = '"Nanum Myeongjo","Times New Roman",serif';

  // 로고
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = '#f0e4c0';
  ctx.font = `bold 46px ${serif}`;
  ctx.fillText('일기당천', 60, 96);
  ctx.fillStyle = '#e8c667';
  ctx.font = `30px ${serif}`;
  ctx.fillText('一騎當千', 270, 94);

  // 장수 도트 초상 (좌측)
  const px0 = 70;
  const py0 = 150;
  const pw = 210;
  const ph = 280;
  ctx.save();
  ctx.fillStyle = 'rgba(0,0,0,0.35)';
  ctx.fillRect(px0, py0, pw, ph);
  ctx.strokeStyle = 'rgba(232,198,103,0.5)';
  ctx.lineWidth = 2;
  ctx.strokeRect(px0, py0, pw, ph);
  const img = atlas?.sgrade.texture.image as CanvasImageSource | undefined;
  if (img && hero) {
    const sx = hero.charIndex * 4 * 48; // 남향(row0), idle(frame0)
    ctx.imageSmoothingEnabled = false;
    // 3:4 비율 유지하며 박스에 맞춤
    const scale = Math.min(pw / 48, ph / 64) * 0.82;
    const dw = 48 * scale;
    const dh = 64 * scale;
    ctx.drawImage(img, sx, 0, 48, 64, px0 + (pw - dw) / 2, py0 + (ph - dh) / 2 - 6, dw, dh);
  }
  ctx.restore();
  // 장수 이름
  ctx.textAlign = 'center';
  ctx.fillStyle = '#f0e4c0';
  ctx.font = `28px ${serif}`;
  ctx.fillText(hero ? hero.name : '장수', px0 + pw / 2, py0 + ph + 40);
  ctx.fillStyle = '#e8c667';
  ctx.font = `20px ${serif}`;
  ctx.fillText(hero ? hero.hanja : '', px0 + pw / 2, py0 + ph + 68);

  // 큰 처치 숫자 (우측 상단)
  const rx = 340;
  ctx.textAlign = 'left';
  ctx.fillStyle = '#8a8f9c';
  ctx.font = `26px ${serif}`;
  ctx.fillText('처치', rx, 190);
  const killStr = data.kills.toLocaleString();
  ctx.fillStyle = '#e85c4a';
  ctx.font = `bold 130px ${serif}`;
  ctx.fillText(killStr, rx, 300);
  const bigW = ctx.measureText(killStr).width;
  // '斬' 강조
  ctx.fillStyle = '#e8c667';
  ctx.font = `56px ${serif}`;
  ctx.fillText('斬', rx + bigW + 24, 300);

  // 통계 행
  const statY = 366;
  const stats: [string, string][] = [
    ['생존', fmtTime(data.time)],
    ['최대 콤보', `${data.maxCombo.toLocaleString()}`],
    ['레벨', `Lv ${data.level}`],
    ['획득 골드', `${data.goldEarned.toLocaleString()}`],
  ];
  let sx = rx;
  ctx.textBaseline = 'alphabetic';
  for (const [label, val] of stats) {
    ctx.textAlign = 'left';
    ctx.fillStyle = '#8a8f9c';
    ctx.font = `20px ${serif}`;
    ctx.fillText(label, sx, statY);
    ctx.fillStyle = '#f0e4c0';
    ctx.font = `bold 34px ${serif}`;
    ctx.fillText(val, sx, statY + 40);
    const w = ctx.measureText(val).width;
    sx += Math.max(150, w + 70);
  }

  // 칭호 pill
  if (data.title) {
    const tx = rx;
    const ty = 430;
    const label = `${data.title.name} ${data.title.hanja}`;
    ctx.font = `24px ${serif}`;
    const w = ctx.measureText(label).width + 44;
    ctx.fillStyle = 'rgba(232,198,103,0.14)';
    roundRect(ctx, tx, ty, w, 44, 22);
    ctx.fill();
    ctx.strokeStyle = 'rgba(232,198,103,0.6)';
    ctx.lineWidth = 1.5;
    roundRect(ctx, tx, ty, w, 44, 22);
    ctx.stroke();
    ctx.fillStyle = '#e8c667';
    ctx.textAlign = 'left';
    ctx.fillText(label, tx + 22, ty + 30);
  }

  // 무기 빌드 칩 행
  const wy = 502;
  ctx.font = `20px ${serif}`;
  ctx.textAlign = 'left';
  ctx.fillStyle = '#8a8f9c';
  ctx.fillText('전법', rx, wy - 6);
  let wx = rx;
  const wy2 = wy + 8;
  for (const w of data.weapons.slice(0, 6)) {
    const def = WEAPON_DEFS[w.id];
    if (!def) continue;
    const label = def.hanja;
    ctx.font = `22px ${serif}`;
    const cw = ctx.measureText(label).width + 28;
    const evo = def.evolution;
    ctx.fillStyle = evo ? 'rgba(255,154,60,0.16)' : 'rgba(120,150,200,0.12)';
    roundRect(ctx, wx, wy2, cw, 40, 8);
    ctx.fill();
    ctx.strokeStyle = evo ? 'rgba(255,154,60,0.7)' : 'rgba(160,180,220,0.5)';
    ctx.lineWidth = 1.5;
    roundRect(ctx, wx, wy2, cw, 40, 8);
    ctx.stroke();
    ctx.fillStyle = evo ? '#ffb469' : '#cdd7ee';
    ctx.fillText(label, wx + 14, wy2 + 28);
    wx += cw + 12;
    if (wx > CARD_W - 70) break;
  }

  // 승리/전사 도장 (우측 상단)
  drawSeal(ctx, CARD_W - 150, 150, data.victory);

  // 푸터 URL
  ctx.textAlign = 'right';
  ctx.fillStyle = '#8a8f9c';
  ctx.font = `22px ${serif}`;
  ctx.fillText(GAME_URL, CARD_W - 60, CARD_H - 48);

  return cv;
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number): void {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// 朱印(주인) 스타일 도장: 승리=天下統一(붉은 원형 인장), 전사=戰死(먹빛).
function drawSeal(ctx: CanvasRenderingContext2D, cx: number, cy: number, victory: boolean): void {
  const r = 78;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(-0.12);
  const color = victory ? '#c0362b' : '#3a3f4c';
  ctx.strokeStyle = color;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.rect(-r, -r, r * 2, r * 2);
  ctx.stroke();
  ctx.fillStyle = victory ? 'rgba(192,54,43,0.12)' : 'rgba(58,63,76,0.15)';
  ctx.fillRect(-r, -r, r * 2, r * 2);
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = 'bold 40px "Nanum Myeongjo","Times New Roman",serif';
  if (victory) {
    ctx.fillText('天下', 0, -26);
    ctx.fillText('統一', 0, 26);
  } else {
    ctx.font = 'bold 62px "Nanum Myeongjo","Times New Roman",serif';
    ctx.fillText('戰死', 0, 0);
  }
  ctx.restore();
}

function canvasToBlob(cv: HTMLCanvasElement): Promise<Blob> {
  return new Promise((resolve, reject) => {
    cv.toBlob((b) => (b ? resolve(b) : reject(new Error('blob 생성 실패'))), 'image/png');
  });
}

export function shareText(data: ShareData): string {
  const hero = HEROES[data.heroId];
  const name = hero ? hero.name : '장수';
  const verb = data.victory ? '천하를 통일했다' : `${data.kills.toLocaleString()}명을 베었다`;
  return `일기당천에서 ${name}으로 ${verb}! ⚔️ ${SHARE_URL}`;
}

export type ShareResult = 'shared' | 'copied' | 'downloaded' | 'failed';

// 공유 실행: navigator.share(files) → 클립보드 이미지 → PNG 다운로드 순 폴백.
export async function shareCanvas(cv: HTMLCanvasElement, text: string): Promise<ShareResult> {
  let blob: Blob;
  try {
    blob = await canvasToBlob(cv);
  } catch {
    return 'failed';
  }
  const file = new File([blob], 'ilgidangcheon.png', { type: 'image/png' });
  const nav = navigator as Navigator & {
    canShare?: (d: unknown) => boolean;
    share?: (d: unknown) => Promise<void>;
  };
  if (nav.share && nav.canShare && nav.canShare({ files: [file] })) {
    try {
      await nav.share({ files: [file], text, title: '일기당천 一騎當千' });
      return 'shared';
    } catch {
      // 사용자가 취소했거나 실패 → 폴백으로
    }
  }
  // 클립보드 이미지 복사
  try {
    const CI = (window as unknown as { ClipboardItem?: typeof ClipboardItem }).ClipboardItem;
    if (CI && navigator.clipboard && 'write' in navigator.clipboard) {
      await navigator.clipboard.write([new CI({ 'image/png': blob })]);
      return 'copied';
    }
  } catch {
    // 폴백으로
  }
  // PNG 다운로드
  try {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ilgidangcheon.png';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    return 'downloaded';
  } catch {
    return 'failed';
  }
}

// 자체 프리뷰 모달(결과 화면과 독립). 버튼 한 줄로 호출: openSharePreview(data, atlas).
export function openSharePreview(data: ShareData, atlas?: Atlas): void {
  const cv = renderShareCard(data, atlas);
  const root = document.createElement('div');
  root.style.cssText = [
    'position:fixed', 'inset:0', 'z-index:60', 'display:flex', 'flex-direction:column',
    'align-items:center', 'justify-content:center', 'gap:18px',
    'background:rgba(4,5,9,0.88)', 'font-family:"Nanum Myeongjo","Times New Roman",serif',
  ].join(';');

  const preview = document.createElement('img');
  preview.src = cv.toDataURL('image/png');
  preview.style.cssText = 'width:min(90vw,720px);border-radius:8px;box-shadow:0 8px 40px rgba(0,0,0,0.6);';
  root.appendChild(preview);

  const toast = document.createElement('div');
  toast.style.cssText = 'color:#e8c667;font-size:15px;height:18px;letter-spacing:1px;';
  root.appendChild(toast);
  const flash = (msg: string) => {
    toast.textContent = msg;
    toast.animate([{ opacity: 1 }, { opacity: 1, offset: 0.7 }, { opacity: 0 }], { duration: 2200 });
  };

  const row = document.createElement('div');
  row.style.cssText = 'display:flex;gap:12px;flex-wrap:wrap;justify-content:center;';
  const mkBtn = (label: string, onClick: () => void, primary = false) => {
    const btn = document.createElement('button');
    btn.textContent = label;
    btn.style.cssText = [
      'padding:11px 22px', 'border-radius:8px', 'cursor:pointer', 'font-size:15px', 'letter-spacing:1px',
      'font-family:inherit',
      primary ? 'background:linear-gradient(180deg,#e8c667,#a8791f);color:#161006;border:none;'
              : 'background:transparent;color:#e8c667;border:1px solid #6b5a2e;',
    ].join(';');
    btn.addEventListener('click', onClick);
    row.appendChild(btn);
    return btn;
  };

  const text = shareText(data);
  mkBtn('전과 공유', async () => {
    const r = await shareCanvas(cv, text);
    flash(r === 'shared' ? '공유했습니다' : r === 'copied' ? '이미지를 클립보드에 복사했습니다' : r === 'downloaded' ? '이미지를 저장했습니다' : '공유에 실패했습니다');
  }, true);
  mkBtn('이미지 복사', async () => {
    try {
      const CI = (window as unknown as { ClipboardItem?: typeof ClipboardItem }).ClipboardItem;
      const blob = await canvasToBlob(cv);
      if (!CI) throw new Error('unsupported');
      await navigator.clipboard.write([new CI({ 'image/png': blob })]);
      flash('이미지를 클립보드에 복사했습니다');
    } catch {
      flash('이 브라우저는 이미지 복사를 지원하지 않습니다');
    }
  });
  mkBtn('이미지 저장', async () => {
    const blob = await canvasToBlob(cv);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ilgidangcheon.png';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    flash('이미지를 저장했습니다');
  });
  mkBtn('문구 복사', async () => {
    try {
      await navigator.clipboard.writeText(text);
      flash('공유 문구를 복사했습니다');
    } catch {
      flash('클립보드 접근이 차단되었습니다');
    }
  });
  mkBtn('닫기', () => root.remove());
  root.appendChild(row);

  document.body.appendChild(root);
}
