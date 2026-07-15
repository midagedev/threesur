// WebAudio 오디오 시스템 (모듈 싱글턴). 첫 유저 제스처에서 init()로 컨텍스트 생성.
// BGM: mp3 fetch+decode, 루프, 씬 전환 시 크로스페이드. SFX: 전부 프로시저럴(파일 없음).
// 미초기화/미지원 시 모든 호출은 안전하게 no-op (게임은 정상 진행).

const BGM_FILES: Record<string, string> = {
  title: 'bgm-title.mp3',
  battle: 'bgm-battle.mp3',
  boss: 'bgm-boss.mp3',
  siege: 'bgm-siege.mp3', // 낙양 수성전 75s 전용(DESIGN 20.3) — 타악 주도 공성 긴장감
  victory: 'jingle-victory.mp3',
  defeat: 'jingle-defeat.mp3',
};
const CROSSFADE = 1.2;
const HIT_PER_FRAME = 2; // 프레임당 타격 SFX 최대 발생 수

type SfxKind =
  | 'hit'
  | 'gem'
  | 'levelup'
  | 'cardSelect'
  | 'musou'
  | 'bossHorn'
  | 'evolve'
  | 'playerHit'
  | 'playerHitProj' // 적 원거리탄 피격 (둔탁·저역, playerHit과 구분 — DESIGN 18.3)
  | 'revive'
  | 'uiClick'
  | 'relic' // 저주 유물 획득
  | 'buff' // 사당 버프
  | 'warn' // 전장 이벤트 경고
  | 'fever' // 콤보 피버 진입
  | 'explosion' // 화약통/유성 착탄
  | 'heartbeat' // 저체력 심박
  | 'achievement'; // 업적 달성

interface BgmVoice {
  src: AudioBufferSourceNode;
  gain: GainNode;
  name: string;
}

class AudioSystem {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private musicBus: GainNode | null = null;
  private sfxBus: GainNode | null = null;
  private noise: AudioBuffer | null = null;

  private readonly buffers: Record<string, AudioBuffer | undefined> = {};
  private readonly loading: Record<string, boolean> = {};
  private current: BgmVoice | null = null;
  private wantBgm: string | null = null;

  muted = false;
  private hitCount = 0;
  private gemStep = 0;
  private gemStepAt = 0; // 마지막 젬 획득 시각(연속 상승 판정)

  // 첫 유저 제스처(타이틀 "시작" 클릭)에서 호출. 재호출 시 resume만.
  init(): void {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') void this.ctx.resume();
      return;
    }
    try {
      const Ctor: typeof AudioContext =
        window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new Ctor();
    } catch {
      this.ctx = null;
      return;
    }
    const ctx = this.ctx;
    // 마스터 컴프레서로 클리핑 방지
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14;
    comp.knee.value = 24;
    comp.ratio.value = 4;
    comp.attack.value = 0.003;
    comp.release.value = 0.25;
    comp.connect(ctx.destination);

    this.master = ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 1;
    this.master.connect(comp);

    this.musicBus = ctx.createGain();
    this.musicBus.gain.value = 0.55;
    this.musicBus.connect(this.master);

    this.sfxBus = ctx.createGain();
    this.sfxBus.gain.value = 0.9;
    this.sfxBus.connect(this.master);

    // 노이즈 버퍼(타격/피격용) 1회 생성
    const n = ctx.sampleRate * 0.5;
    this.noise = ctx.createBuffer(1, n, ctx.sampleRate);
    const nd = this.noise.getChannelData(0);
    for (let i = 0; i < n; i++) nd[i] = Math.random() * 2 - 1;

    void this.resume();
    // 원하던 트랙이 있었으면 로드 후 재생
    if (this.wantBgm) this.playBgm(this.wantBgm);
  }

  private async resume(): Promise<void> {
    if (this.ctx && this.ctx.state === 'suspended') {
      try {
        await this.ctx.resume();
      } catch {
        /* ignore */
      }
    }
  }

  get initialized(): boolean {
    return this.ctx !== null;
  }

  setMuted(m: boolean): void {
    this.muted = m;
    if (this.master && this.ctx) {
      const t = this.ctx.currentTime;
      this.master.gain.cancelScheduledValues(t);
      this.master.gain.setTargetAtTime(m ? 0 : 1, t, 0.05);
    }
  }

  toggleMuted(): boolean {
    this.setMuted(!this.muted);
    return this.muted;
  }

  private base(): string {
    return import.meta.env.BASE_URL + 'assets/audio/';
  }

  private ensureBuffer(name: string): void {
    if (!this.ctx) return;
    if (this.buffers[name] || this.loading[name]) return;
    const file = BGM_FILES[name];
    if (!file) return;
    this.loading[name] = true;
    fetch(this.base() + file)
      .then((r) => r.arrayBuffer())
      .then((buf) => this.ctx!.decodeAudioData(buf))
      .then((audioBuf) => {
        this.buffers[name] = audioBuf;
        this.loading[name] = false;
        // 로드 지연 중 여전히 이 트랙을 원하면 재생
        if (this.wantBgm === name && (!this.current || this.current.name !== name)) {
          this.startBgm(name, audioBuf, true);
        }
      })
      .catch(() => {
        this.loading[name] = false; // 로드 실패 조용히 무시
      });
  }

  // 루프 BGM 재생(크로스페이드). 이미 같은 트랙이면 무시.
  playBgm(name: string): void {
    this.wantBgm = name;
    if (!this.ctx || !this.musicBus) return;
    if (this.current && this.current.name === name) return;
    const buf = this.buffers[name];
    if (!buf) {
      this.ensureBuffer(name);
      // 로드되면 콜백에서 시작
      this.fadeOutCurrent();
      return;
    }
    this.startBgm(name, buf, true);
  }

  // 일회성 징글(승리/패배). BGM 페이드아웃 후 1회 재생.
  playJingle(name: string): void {
    this.wantBgm = null;
    if (!this.ctx || !this.musicBus) return;
    this.fadeOutCurrent();
    const buf = this.buffers[name];
    if (!buf) {
      this.ensureBuffer(name);
      // 로드 후 1회성이므로 준비되면 즉시 재생(재요청 없이)
      const check = () => {
        const b = this.buffers[name];
        if (b) this.startBgm(name, b, false);
      };
      // ensureBuffer 완료 콜백은 wantBgm 기반이라, 여기선 짧게 폴링 대신 재시도 예약
      setTimeout(check, 400);
      setTimeout(check, 1200);
      return;
    }
    this.startBgm(name, buf, false);
  }

  private startBgm(name: string, buf: AudioBuffer, loop: boolean): void {
    if (!this.ctx || !this.musicBus) return;
    const t = this.ctx.currentTime;
    this.fadeOutCurrent();
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    src.loop = loop;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(1, t + CROSSFADE);
    src.connect(gain).connect(this.musicBus);
    src.start();
    if (loop) this.current = { src, gain, name };
    else {
      // 징글은 current로 잡지 않음(끝나면 자동 정리)
      src.onended = () => {
        try {
          src.disconnect();
          gain.disconnect();
        } catch {
          /* ignore */
        }
      };
    }
  }

  private fadeOutCurrent(): void {
    if (!this.ctx || !this.current) return;
    const t = this.ctx.currentTime;
    const { src, gain } = this.current;
    gain.gain.cancelScheduledValues(t);
    gain.gain.setValueAtTime(gain.gain.value, t);
    gain.gain.linearRampToValueAtTime(0, t + CROSSFADE);
    try {
      src.stop(t + CROSSFADE + 0.05);
    } catch {
      /* ignore */
    }
    this.current = null;
  }

  stopBgm(): void {
    this.wantBgm = null;
    this.fadeOutCurrent();
  }

  // 프레임 끝에서 호출: 타격 스로틀 카운터 리셋.
  endFrame(): void {
    this.hitCount = 0;
  }

  sfx(kind: SfxKind): void {
    if (!this.ctx || !this.sfxBus || this.ctx.state !== 'running') return;
    if (kind === 'hit') {
      if (this.hitCount >= HIT_PER_FRAME) return;
      this.hitCount++;
    }
    const t = this.ctx.currentTime;
    switch (kind) {
      case 'hit':
        this.playHit(t);
        break;
      case 'gem':
        this.playGem(t);
        break;
      case 'levelup':
        this.playGong(t, 220, 1.4, 0.5);
        this.playGong(t + 0.02, 330, 1.2, 0.35);
        break;
      case 'cardSelect':
        this.playBlip(t, 660, 0.08, 'square', 0.18);
        this.playBlip(t + 0.05, 990, 0.07, 'square', 0.14);
        break;
      case 'musou':
        this.playDrum(t);
        this.playHum(t);
        break;
      case 'bossHorn':
        this.playHorn(t);
        break;
      case 'evolve':
        this.playSweep(t);
        break;
      case 'playerHit':
        this.playThud(t);
        break;
      case 'playerHitProj':
        // 둔탁한 저역 임팩트 — 적탄 피격 전용(playerHit 툭보다 낮고 뭉근하게)
        this.playBlip(t, 92, 0.11, 'sine', 0.30);
        this.playBlip(t + 0.012, 128, 0.07, 'triangle', 0.16);
        break;
      case 'revive':
        this.playGong(t, 523, 2.2, 0.4);
        this.playGong(t + 0.08, 784, 2.0, 0.3);
        this.playGong(t + 0.16, 1046, 1.8, 0.24);
        break;
      case 'uiClick':
        this.playBlip(t, 440, 0.05, 'triangle', 0.12);
        break;
      case 'relic':
        // 불길한 하강 스윕 + 저역 공 (저주받은 유물)
        this.playSweep(t);
        this.playGong(t, 147, 1.8, 0.4);
        break;
      case 'buff':
        // 밝은 상승 공 2연 (사당 축복)
        this.playGong(t, 587, 1.0, 0.34);
        this.playGong(t + 0.07, 880, 0.9, 0.26);
        break;
      case 'warn':
        // 낮은 뿔피리 경고
        this.playHorn(t);
        break;
      case 'fever':
        // 대북 + 상승 블립 (피버 진입)
        this.playDrum(t);
        this.playBlip(t, 660, 0.08, 'square', 0.16);
        this.playBlip(t + 0.06, 990, 0.08, 'square', 0.14);
        this.playBlip(t + 0.12, 1320, 0.08, 'square', 0.12);
        break;
      case 'explosion':
        // 저역 펀치 + 노이즈 (폭발)
        this.playThud(t);
        this.playHit(t);
        break;
      case 'heartbeat':
        // 낮고 부드러운 "lub-dub" 이중 박동 (저체력)
        this.playBlip(t, 70, 0.09, 'sine', 0.18);
        this.playBlip(t + 0.13, 58, 0.11, 'sine', 0.14);
        break;
      case 'achievement':
        // 밝은 3화음 공 (업적)
        this.playGong(t, 659, 1.6, 0.34);
        this.playGong(t + 0.09, 988, 1.4, 0.26);
        this.playGong(t + 0.18, 1319, 1.2, 0.2);
        break;
    }
  }

  // --- 프로시저럴 SFX 프리미티브 ---

  private env(gain: GainNode, t: number, peak: number, attack: number, decay: number): void {
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(peak, t + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay);
  }

  private playHit(t: number): void {
    const ctx = this.ctx!;
    // 저역 펀치
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(180, t);
    osc.frequency.exponentialRampToValueAtTime(60, t + 0.09);
    const og = ctx.createGain();
    this.env(og, t, 0.5, 0.002, 0.09);
    osc.connect(og).connect(this.sfxBus!);
    osc.start(t);
    osc.stop(t + 0.12);
    // 노이즈 어택
    const nsrc = ctx.createBufferSource();
    nsrc.buffer = this.noise;
    const nf = ctx.createBiquadFilter();
    nf.type = 'bandpass';
    nf.frequency.value = 1400;
    nf.Q.value = 0.8;
    const ng = ctx.createGain();
    this.env(ng, t, 0.28, 0.001, 0.05);
    nsrc.connect(nf).connect(ng).connect(this.sfxBus!);
    nsrc.start(t);
    nsrc.stop(t + 0.07);
  }

  private playGem(t: number): void {
    const ctx = this.ctx!;
    // 연속 획득(0.8s 내, #45 19.3)이면 음계 상승, 아니면 리셋 — 픽업 런이 오래 이어지게.
    if (t - this.gemStepAt < 0.8) this.gemStep = Math.min(14, this.gemStep + 1);
    else this.gemStep = 0;
    this.gemStepAt = t;
    const penta = [0, 2, 4, 7, 9]; // 장 펜타토닉 반음 오프셋
    const oct = Math.floor(this.gemStep / 5);
    const semi = penta[this.gemStep % 5] + oct * 12;
    const freq = 523.25 * Math.pow(2, semi / 12); // C5 기준 상승
    const osc = ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, t);
    const g = ctx.createGain();
    this.env(g, t, 0.16, 0.004, 0.14);
    osc.connect(g).connect(this.sfxBus!);
    osc.start(t);
    osc.stop(t + 0.18);
  }

  private playGong(t: number, freq: number, dur: number, peak: number): void {
    const ctx = this.ctx!;
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, t);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.985, t + dur);
    const g = ctx.createGain();
    this.env(g, t, peak, 0.006, dur);
    // 배음
    const osc2 = ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 2.76, t);
    const g2 = ctx.createGain();
    this.env(g2, t, peak * 0.3, 0.006, dur * 0.5);
    osc.connect(g).connect(this.sfxBus!);
    osc2.connect(g2).connect(this.sfxBus!);
    osc.start(t);
    osc.stop(t + dur + 0.1);
    osc2.start(t);
    osc2.stop(t + dur + 0.1);
  }

  private playBlip(t: number, freq: number, dur: number, type: OscillatorType, peak: number): void {
    const ctx = this.ctx!;
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    const g = ctx.createGain();
    this.env(g, t, peak, 0.002, dur);
    osc.connect(g).connect(this.sfxBus!);
    osc.start(t);
    osc.stop(t + dur + 0.02);
  }

  private playDrum(t: number): void {
    const ctx = this.ctx!;
    // 대북: 급강하 저역 + 노이즈 어택
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(160, t);
    osc.frequency.exponentialRampToValueAtTime(45, t + 0.25);
    const g = ctx.createGain();
    this.env(g, t, 0.8, 0.002, 0.35);
    osc.connect(g).connect(this.sfxBus!);
    osc.start(t);
    osc.stop(t + 0.4);
    const nsrc = ctx.createBufferSource();
    nsrc.buffer = this.noise;
    const nf = ctx.createBiquadFilter();
    nf.type = 'lowpass';
    nf.frequency.value = 800;
    const ng = ctx.createGain();
    this.env(ng, t, 0.4, 0.001, 0.08);
    nsrc.connect(nf).connect(ng).connect(this.sfxBus!);
    nsrc.start(t);
    nsrc.stop(t + 0.1);
  }

  private playHum(t: number): void {
    const ctx = this.ctx!;
    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(70, t);
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 220;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.22, t + 0.15);
    g.gain.linearRampToValueAtTime(0.18, t + 0.6);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.1);
    osc.connect(lp).connect(g).connect(this.sfxBus!);
    osc.start(t);
    osc.stop(t + 1.2);
  }

  private playHorn(t: number): void {
    const ctx = this.ctx!;
    // 뿔피리: 톱니 저역 + 완만한 비브라토 + 상승
    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, t);
    osc.frequency.linearRampToValueAtTime(175, t + 0.5);
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 5.5;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 6;
    lfo.connect(lfoGain).connect(osc.frequency);
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 900;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.5, t + 0.12);
    g.gain.linearRampToValueAtTime(0.45, t + 0.9);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.4);
    osc.connect(lp).connect(g).connect(this.sfxBus!);
    osc.start(t);
    osc.stop(t + 1.5);
    lfo.start(t);
    lfo.stop(t + 1.5);
  }

  private playSweep(t: number): void {
    const ctx = this.ctx!;
    // 신비한 상승음: 상승 사인 + 반짝임
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, t);
    osc.frequency.exponentialRampToValueAtTime(1200, t + 0.6);
    const g = ctx.createGain();
    this.env(g, t, 0.4, 0.02, 0.6);
    osc.connect(g).connect(this.sfxBus!);
    osc.start(t);
    osc.stop(t + 0.7);
    const osc2 = ctx.createOscillator();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(900, t);
    osc2.frequency.exponentialRampToValueAtTime(2400, t + 0.5);
    const g2 = ctx.createGain();
    this.env(g2, t + 0.05, 0.18, 0.02, 0.45);
    osc2.connect(g2).connect(this.sfxBus!);
    osc2.start(t);
    osc2.stop(t + 0.6);
  }

  private playThud(t: number): void {
    const ctx = this.ctx!;
    const nsrc = ctx.createBufferSource();
    nsrc.buffer = this.noise;
    const nf = ctx.createBiquadFilter();
    nf.type = 'lowpass';
    nf.frequency.value = 300;
    const ng = ctx.createGain();
    this.env(ng, t, 0.45, 0.002, 0.16);
    nsrc.connect(nf).connect(ng).connect(this.sfxBus!);
    nsrc.start(t);
    nsrc.stop(t + 0.2);
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(90, t);
    osc.frequency.exponentialRampToValueAtTime(50, t + 0.15);
    const g = ctx.createGain();
    this.env(g, t, 0.35, 0.002, 0.15);
    osc.connect(g).connect(this.sfxBus!);
    osc.start(t);
    osc.stop(t + 0.2);
  }
}

export const audio = new AudioSystem();
