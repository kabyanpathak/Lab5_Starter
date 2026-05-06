// explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const synthesis = window.speechSynthesis;
  const voice = document.getElementById('voice-select');
  const tts = document.getElementById('text-to-speak');
  const button = document.querySelector('button');
  const img = document.querySelector('#explore img');

  let voices = [];

  function voicelist() {
    voices = synthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voice.appendChild(option);
    }
  }

  voicelist();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = voicelist;
  }

  button.addEventListener('click', () => {
    const utterThis = new SpeechSynthesisUtterance(tts.value);
    const selectedOption = voice.selectedOptions[0].getAttribute('data-name');
    
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    utterThis.onstart = () => img.src = 'assets/images/smiling-open.png';
    utterThis.onend = () => img.src = 'assets/images/smiling.png';

    synthesis.speak(utterThis);
  });
}
