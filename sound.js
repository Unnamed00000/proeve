window.medicalTrainingSound = (() => {
  let enabled = localStorage.getItem('medicalTrainingSound') !== 'off';
  let audio = null;

  function getAudio() {
    if (!audio) audio = new (window.AudioContext || window.webkitAudioContext)();
    if (audio.state === 'suspended') audio.resume();
    return audio;
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
    if (name === 'open') tone(520, 0.08, 'triangle', 0.04);
    if (name === 'next') tone(660, 0.06, 'sine', 0.035);
    if (name === 'back') tone(360, 0.08, 'triangle', 0.035);
    if (name === 'correct') tone(760, 0.12, 'sine', 0.055);
    if (name === 'wrong') tone(190, 0.14, 'sine', 0.05);
    if (name === 'reset') tone(420, 0.07, 'square', 0.025);
    if (name === 'finish') {
      tone(620, 0.11, 'sine', 0.05);
      setTimeout(() => tone(820, 0.15, 'sine', 0.05), 130);
    }
  }

  function injectSettingsStyle() {
    if (document.querySelector('#settingsStyle')) return;
    const style = document.createElement('style');
    style.id = 'settingsStyle';
    style.textContent = `
      .settings-button {
        position: absolute;
        top: 8px;
        right: 0;
        z-index: 20;
        display: grid;
        place-items: center;
        width: 48px;
        height: 48px;
        border: 1px solid rgba(7, 31, 24, 0.18);
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.88);
        color: #071f18;
        font-size: 1.45rem;
        line-height: 1;
        cursor: pointer;
        box-shadow: 0 12px 28px rgba(10, 20, 16, 0.12);
      }

      .settings-button:active {
        transform: scale(0.96);
      }

      .settings-panel {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: grid;
        place-items: center;
        padding: 22px;
        background: rgba(7, 31, 24, 0.28);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
      }

      .settings-panel.hidden {
        display: none !important;
      }

      .settings-card {
        width: min(360px, 100%);
        border: 1px solid rgba(255, 255, 255, 0.65);
        border-radius: 22px;
        background: rgba(255, 255, 255, 0.96);
        box-shadow: 0 24px 70px rgba(0, 0, 0, 0.22);
        overflow: hidden;
      }

      .settings-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 18px 18px 14px;
        border-bottom: 1px solid #d7dfd8;
        color: #071f18;
        font-size: 1.2rem;
      }

      .settings-close {
        width: 36px;
        height: 36px;
        border: 0;
        border-radius: 50%;
        background: #eef6f2;
        color: #071f18;
        font-size: 1.4rem;
        font-weight: 900;
        cursor: pointer;
      }

      .settings-section {
        padding: 18px;
      }

      .settings-section h4 {
        margin: 0 0 12px;
        color: #50675f;
        font-size: 0.9rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .sound-switch {
        width: 100%;
        min-height: 52px;
        border: 0;
        border-radius: 14px;
        background: #176b5d;
        color: #ffffff;
        font-size: 1rem;
        font-weight: 900;
        cursor: pointer;
      }

      .sound-switch.off {
        background: #8b0014;
      }

      @media (max-width: 720px) {
        .settings-button {
          width: 42px;
          height: 42px;
          top: 4px;
          right: 0;
          font-size: 1.25rem;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function addSettings() {
    injectSettingsStyle();
    if (document.querySelector('#settingsButton')) return;
    const topbar = document.querySelector('.topbar');
    if (!topbar) return;

    const btn = document.createElement('button');
    btn.id = 'settingsButton';
    btn.className = 'settings-button';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Indstillinger');
    btn.textContent = '⚙';

    const panel = document.createElement('div');
    panel.id = 'settingsPanel';
    panel.className = 'settings-panel hidden';
    panel.innerHTML = `
      <div class="settings-card" role="dialog" aria-modal="true" aria-label="Indstillinger">
        <div class="settings-head">
          <strong>Indstillinger</strong>
          <button type="button" class="settings-close" aria-label="Luk">×</button>
        </div>
        <div class="settings-section">
          <h4>Sounds</h4>
          <button type="button" id="soundSwitch" class="sound-switch"></button>
        </div>
      </div>
    `;

    topbar.appendChild(btn);
    document.body.appendChild(panel);

    const soundSwitch = panel.querySelector('#soundSwitch');
    const closeBtn = panel.querySelector('.settings-close');

    function updateSwitch() {
      soundSwitch.textContent = enabled ? 'Lyd: Til' : 'Lyd: Fra';
      soundSwitch.classList.toggle('off', !enabled);
    }

    btn.addEventListener('click', () => {
      panel.classList.remove('hidden');
      play('open');
    });

    closeBtn.addEventListener('click', () => {
      panel.classList.add('hidden');
      play('back');
    });

    panel.addEventListener('click', (event) => {
      if (event.target === panel) panel.classList.add('hidden');
    });

    soundSwitch.addEventListener('click', () => {
      enabled = !enabled;
      localStorage.setItem('medicalTrainingSound', enabled ? 'on' : 'off');
      updateSwitch();
      if (enabled) play('open');
    });

    updateSwitch();
  }

  document.addEventListener('DOMContentLoaded', addSettings);
  window.addEventListener('load', addSettings);

  return { play, addSettings };
})();
