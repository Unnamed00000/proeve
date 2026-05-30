window.medicalTrainingSound = (() => {
  let enabled = localStorage.getItem('medicalTrainingSound') !== 'off';
  let vibrationEnabled = localStorage.getItem('medicalTrainingVibration') !== 'off';
  let darkEnabled = localStorage.getItem('medicalTrainingDarkMode') === 'on';
  let audio = null;

  function defaultStats() {
    return { tests: 0, answered: 0, correct: 0, best: 0, last: 0 };
  }

  function getStats() {
    try { return { ...defaultStats(), ...JSON.parse(localStorage.getItem('medicalTrainingStats') || '{}') }; }
    catch (error) { return defaultStats(); }
  }

  function saveStats(stats) {
    localStorage.setItem('medicalTrainingStats', JSON.stringify(stats));
    updateStatsView();
  }

  function recordResult(result) {
    const stats = getStats();
    stats.tests += 1;
    stats.answered += result.total || 0;
    stats.correct += result.correctCount || 0;
    stats.last = result.percent || 0;
    stats.best = Math.max(stats.best || 0, result.percent || 0);
    saveStats(stats);
  }

  function resetStats() {
    saveStats(defaultStats());
    play('reset');
  }

  function updateStatsView() {
    const box = document.querySelector('#statsBox');
    if (!box) return;
    const s = getStats();
    const accuracy = s.answered ? Math.round((s.correct / s.answered) * 100) : 0;
    box.innerHTML = `
      <div class="stat-line"><span>Beståede test</span><strong>${s.tests}</strong></div>
      <div class="stat-line"><span>Besvarede spørgsmål</span><strong>${s.answered}</strong></div>
      <div class="stat-line"><span>Korrekte svar</span><strong>${s.correct}</strong></div>
      <div class="stat-line"><span>Nøjagtighed</span><strong>${accuracy}%</strong></div>
      <div class="stat-line"><span>Bedste resultat</span><strong>${s.best}%</strong></div>
      <div class="stat-line"><span>Sidste resultat</span><strong>${s.last}%</strong></div>
    `;
  }

  function applyTheme() { document.body.classList.toggle('dark-mode', darkEnabled); }

  function getAudio() {
    if (!audio) audio = new (window.AudioContext || window.webkitAudioContext)();
    if (audio.state === 'suspended') audio.resume();
    return audio;
  }

  function vibrate(pattern) {
    if (!vibrationEnabled || !navigator.vibrate) return;
    navigator.vibrate(pattern);
  }

  function tone(freq, duration, type, volume) {
    if (!enabled) return;
    try {
      const a = getAudio();
      const osc = a.createOscillator();
      const gain = a.createGain();
      const start = a.currentTime;
      const end = start + duration;
      osc.type = type;
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(volume, start + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, end);
      osc.connect(gain);
      gain.connect(a.destination);
      osc.start(start);
      osc.stop(end + 0.02);
    } catch (error) {}
  }

  function play(name) {
    if (name === 'open') { tone(520, 0.08, 'triangle', 0.04); vibrate(12); }
    if (name === 'next') { tone(660, 0.06, 'sine', 0.035); vibrate(8); }
    if (name === 'back') { tone(360, 0.08, 'triangle', 0.035); vibrate(10); }
    if (name === 'correct') { tone(760, 0.12, 'sine', 0.055); vibrate(25); }
    if (name === 'wrong') { tone(190, 0.14, 'sine', 0.05); vibrate([45, 25, 45]); }
    if (name === 'reset') { tone(420, 0.07, 'square', 0.025); vibrate(20); }
    if (name === 'finish') { tone(620, 0.11, 'sine', 0.05); setTimeout(() => tone(820, 0.15, 'sine', 0.05), 130); vibrate([35, 40, 35]); }
  }

  function injectSettingsStyle() {
    if (document.querySelector('#settingsStyle')) return;
    const style = document.createElement('style');
    style.id = 'settingsStyle';
    style.textContent = `
      body.dark-mode { background: #071f18 !important; color: #f5f6f2; }
      body.dark-mode .eyebrow { color: #7ee7c8 !important; text-shadow: 0 2px 5px rgba(0,0,0,.9), 0 0 14px rgba(126,231,200,.28); }
      body.dark-mode #screenTitle, body.dark-mode h2, body.dark-mode h3 { color: #dff8ee !important; text-shadow: 0 2px 5px rgba(0,0,0,.9), 0 0 10px rgba(255,255,255,.12); }
      body.dark-mode .folder-title, body.dark-mode .folder-text, body.dark-mode .question-text, body.dark-mode .feedback, body.dark-mode .result-card, body.dark-mode .settings-row span, body.dark-mode .settings-author { color: #f7fff9 !important; text-shadow: 0 1px 3px rgba(0,0,0,.95), 0 0 8px rgba(255,255,255,.10); }
      body.dark-mode .material-card, body.dark-mode .question-panel, body.dark-mode .secondary-button { background: #102c24; color: #f5f6f2; border-color: rgba(255,255,255,0.16); }
      body.dark-mode .answer-button { background: #0e241e; color: #f5f6f2; border-color: rgba(255,255,255,0.18); text-shadow: 0 1px 3px rgba(0,0,0,.8); }
      body.dark-mode .settings-card { background: rgba(16, 44, 36, 0.98); color: #f5f6f2; }
      body.dark-mode .settings-head, body.dark-mode .settings-row strong, body.dark-mode .settings-author strong, body.dark-mode .stat-line strong { color: #ffffff !important; text-shadow: 0 1px 4px rgba(0,0,0,.95); }
      body.dark-mode .settings-row, body.dark-mode .settings-close, body.dark-mode .stats-box { background: #0e241e; color: #f5f6f2; border-color: rgba(255,255,255,0.16); }
      .settings-button { position: absolute; top: 8px; right: 0; z-index: 20; display: grid; place-items: center; width: 48px; height: 48px; border: 1px solid rgba(7, 31, 24, 0.18); border-radius: 50%; background: rgba(255, 255, 255, 0.88); color: #071f18; font-size: 1.45rem; line-height: 1; cursor: pointer; box-shadow: 0 12px 28px rgba(10, 20, 16, 0.12); }
      .settings-panel { position: fixed; inset: 0; z-index: 9999; display: grid; place-items: center; padding: 22px; background: rgba(7, 31, 24, 0.28); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); }
      .settings-panel.hidden { display: none !important; }
      .settings-card { width: min(390px, 100%); max-height: 88vh; overflow-y: auto; border: 1px solid rgba(255,255,255,.65); border-radius: 22px; background: rgba(255,255,255,.96); box-shadow: 0 24px 70px rgba(0,0,0,.22); }
      .settings-head { display:flex; align-items:center; justify-content:space-between; padding:18px 18px 14px; border-bottom:1px solid #d7dfd8; color:#071f18; font-size:1.2rem; }
      .settings-close { width:36px; height:36px; border:0; border-radius:50%; background:#eef6f2; color:#071f18; font-size:1.4rem; font-weight:900; cursor:pointer; }
      .settings-section { padding:18px; display:grid; gap:12px; }
      .settings-section h4 { margin:0; color:#50675f; font-size:.9rem; letter-spacing:.08em; text-transform:uppercase; }
      .settings-row { display:grid; grid-template-columns:1fr auto; gap:12px; align-items:center; padding:12px; border:1px solid #d7dfd8; border-radius:14px; background:#f5f6f2; }
      .settings-row strong { color:#071f18; }
      .settings-row span { color:#50675f; font-size:.82rem; }
      .setting-switch { min-width:105px; min-height:42px; border:0; border-radius:999px; background:#176b5d; color:#fff; font-size:.95rem; font-weight:900; cursor:pointer; }
      .setting-switch.off { background:#8b0014; }
      .stats-box { display:grid; gap:7px; padding:12px; border:1px solid #d7dfd8; border-radius:14px; background:#f5f6f2; }
      .stat-line { display:flex; justify-content:space-between; gap:14px; color:#50675f; font-size:.9rem; }
      .stat-line strong { color:#071f18; }
      .settings-author { display:grid; place-items:center; gap:3px; margin:4px 18px 18px; padding-top:16px; border-top:1px solid #d7dfd8; color:#50675f; text-align:center; font-size:.82rem; line-height:1.35; }
      .settings-author strong { display:block; margin:3px 0; color:#071f18; font-size:.95rem; }
      @media (max-width:720px) { .settings-button { width:42px; height:42px; top:4px; right:0; font-size:1.25rem; } }
    `;
    document.head.appendChild(style);
  }

  function addSettings() {
    injectSettingsStyle(); applyTheme();
    if (document.querySelector('#settingsButton')) return;
    const topbar = document.querySelector('.topbar');
    if (!topbar) return;
    const btn = document.createElement('button');
    btn.id = 'settingsButton'; btn.className = 'settings-button'; btn.type = 'button'; btn.setAttribute('aria-label', 'Indstillinger'); btn.textContent = '⚙';
    const panel = document.createElement('div');
    panel.id = 'settingsPanel'; panel.className = 'settings-panel hidden';
    panel.innerHTML = `
      <div class="settings-card" role="dialog" aria-modal="true" aria-label="Indstillinger">
        <div class="settings-head"><strong>Indstillinger</strong><button type="button" class="settings-close" aria-label="Luk">×</button></div>
        <div class="settings-section"><h4>Lyd og vibration</h4><div class="settings-row"><div><strong>Lyd</strong><br><span>Professionelle korte signaler</span></div><button type="button" id="soundSwitch" class="setting-switch"></button></div><div class="settings-row"><div><strong>Vibration</strong><br><span>Feedback ved svar og navigation</span></div><button type="button" id="vibrationSwitch" class="setting-switch"></button></div></div>
        <div class="settings-section"><h4>Udseende</h4><div class="settings-row"><div><strong>Mørk tilstand</strong><br><span>Roligere skærm i mørke omgivelser</span></div><button type="button" id="darkSwitch" class="setting-switch"></button></div></div>
        <div class="settings-section"><h4>Statistik</h4><div class="stats-box" id="statsBox"></div><button type="button" id="resetStats" class="setting-switch off">Nulstil statistik</button></div>
        <div class="settings-author"><span>Version 1.0</span><span>Udviklet af</span><strong>© Adam Margoev</strong><span>Medical Education &amp; Training Platform</span></div>
      </div>`;
    topbar.appendChild(btn); document.body.appendChild(panel);
    const soundSwitch = panel.querySelector('#soundSwitch');
    const vibrationSwitch = panel.querySelector('#vibrationSwitch');
    const darkSwitch = panel.querySelector('#darkSwitch');
    const closeBtn = panel.querySelector('.settings-close');
    const resetBtn = panel.querySelector('#resetStats');
    function updateSwitches() {
      soundSwitch.textContent = enabled ? 'Til' : 'Fra'; soundSwitch.classList.toggle('off', !enabled);
      vibrationSwitch.textContent = vibrationEnabled ? 'Til' : 'Fra'; vibrationSwitch.classList.toggle('off', !vibrationEnabled);
      darkSwitch.textContent = darkEnabled ? 'Til' : 'Fra'; darkSwitch.classList.toggle('off', !darkEnabled);
      updateStatsView();
    }
    btn.addEventListener('click', () => { panel.classList.remove('hidden'); updateStatsView(); play('open'); });
    closeBtn.addEventListener('click', () => { panel.classList.add('hidden'); play('back'); });
    panel.addEventListener('click', (event) => { if (event.target === panel) panel.classList.add('hidden'); });
    soundSwitch.addEventListener('click', () => { enabled = !enabled; localStorage.setItem('medicalTrainingSound', enabled ? 'on' : 'off'); updateSwitches(); if (enabled) play('open'); });
    vibrationSwitch.addEventListener('click', () => { vibrationEnabled = !vibrationEnabled; localStorage.setItem('medicalTrainingVibration', vibrationEnabled ? 'on' : 'off'); updateSwitches(); vibrate(25); });
    darkSwitch.addEventListener('click', () => { darkEnabled = !darkEnabled; localStorage.setItem('medicalTrainingDarkMode', darkEnabled ? 'on' : 'off'); applyTheme(); updateSwitches(); play('open'); });
    resetBtn.addEventListener('click', resetStats);
    updateSwitches();
  }

  document.addEventListener('DOMContentLoaded', addSettings);
  window.addEventListener('load', addSettings);
  return { play, addSettings, vibrate, recordResult, updateStatsView };
})();
