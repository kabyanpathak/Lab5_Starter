// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const image = document.querySelector('#expose img');
  const audio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');

  const jsConfetti = new JSConfetti();

  // Set initial volume
  audio.volume = volumeSlider.value / 100;

  hornSelect.addEventListener('change', () => {
    const selectedHorn = hornSelect.value;
    image.src = `assets/images/${selectedHorn}.svg`;
    image.alt = selectedHorn;
    audio.src = `assets/audio/${selectedHorn}.mp3`;
  });

  volumeSlider.addEventListener('input', () => {
    const volume = volumeSlider.value;
    audio.volume = volume / 100;

    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  });

  playButton.addEventListener('click', () => {
    if (hornSelect.value !== 'select') {
      audio.play();

      if (hornSelect.value === 'party-horn') {
        jsConfetti.addConfetti();
      }
    }
  });
}
