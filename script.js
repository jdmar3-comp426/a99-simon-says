let sequence = [];
let humanSequence = [];
let gameLevel = 0;

const startButton = document.querySelector('.js-start');
const info = document.querySelector('.js-info');

function activateTile(color) {
    const sqColor = document.querySelector(`[data-type='${color}']`);  
    sqColor.classList.add('activated');
    setTimeout(() => {
        sqColor.classList.remove('activated');
      }, 300);
}

function playRound(nextSequence) {
    if(gameLevel > 1) {
        info.classList.add('hidden');
    }
    nextSequence.forEach((color, index) => {
        setTimeout(() => {
            activateTile(color);
        }, (index + 1) * 600);
    });
}

function nextStep() {
    const tiles = ['red', 'yellow', 'green', 'blue'];
    const random = tiles[Math.floor(Math.random() * tiles.length)];
    return random;
}

function nextRound() {
    gameLevel += 1;
    const nextSequence = [...sequence];
    nextSequence.push(nextStep());
    playRound(nextSequence);
}

function startGame() {
    startButton.classList.add('hidden');
    info.classList.remove('hidden');
    info.textContent = 'Ready to play!';
    nextRound();
}

startButton.addEventListener('click', startGame);