// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const horn = document.getElementById('horn-select');
  const img = document.querySelector('#expose img');
  const audio = document.querySelector('audio');
  const volume_slide = document.getElementById('volume');
  const volume_controls = document.querySelector('#volume-controls img');
  const play_button = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  horn.addEventListener('change', () => {
    img.src = `assets/images/${horn.value}.svg`;
    audio.src = `assets/audio/${horn.value}.mp3`;
  });

  volume_slide.addEventListener('input', () => {
    const vol = volume_slide.value;
    audio.volume = vol / 100; 
    if (vol == 0) {
      volume_controls.src = 'assets/icons/volume-level-0.svg';
    } else if (vol < 33) {
      volume_controls.src = 'assets/icons/volume-level-1.svg';
    } else if (vol < 67) {
      volume_controls.src = 'assets/icons/volume-level-2.svg';
    } else {
      volume_controls.src = 'assets/icons/volume-level-3.svg';
    }
  });

  play_button.addEventListener('click', () => {
    audio.play();
    if (horn.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
