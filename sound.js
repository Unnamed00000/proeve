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

  function addSettings() {
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
      <div class="settings-card">
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
      panel.classList.toggle('hidden');
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
