// explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const synthesis = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textToSpeak = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('button');
  const faceImage = document.querySelector('#explore img');

  let voices = [];

  function populateVoiceList() {
    voices = synthesis.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (synthesis.onvoiceschanged !== undefined) {
    synthesis.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener('click', () => {
    const text = textToSpeak.value;
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoiceName = voiceSelect.selectedOptions[0].getAttribute('data-name');

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedVoiceName) {
        utterance.voice = voices[i];
      }
    }

    utterance.addEventListener('start', () => {
      faceImage.src = 'assets/images/smiling-open.png';
    });

    utterance.addEventListener('end', () => {
      faceImage.src = 'assets/images/smiling.png';
    });

    synthesis.speak(utterance);
  });
}
