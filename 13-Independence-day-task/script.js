// Create 24 spokes dynamically
const spokeContainer = document.querySelector('.spoke-container');
for (let i = 0; i < 24; i++) {
  const spoke = document.createElement('div');
  spoke.classList.add('spoke');
  spoke.style.transform = `rotate(${i * 15}deg)`;
  spokeContainer.appendChild(spoke);
}

// Play audio on flag click
function playAnthem() {
  const audio = document.getElementById('anthem');
  audio.play();
}
