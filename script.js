let sequence = [];
let humanSequence = [];

const startButton = document.querySelector('.js-start');
const info = document.querySelector('.js-info');

function startGame() {
  startButton.classList.add('hidden');
  info.classList.remove('hidden');
  info.textContent = 'Ready to play!';
}

startButton.addEventListener('click', startGame);