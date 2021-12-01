let sequence = [];
let humanSequence = [];
let gameLevel = 0;
// get highscore
let highScore = 0;

const heading = document.querySelector('.js-heading');
const tileContainer = document.querySelector('.js-container');


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
  tileContainer.classList.add('unclickable');
  info.textContent = 'Wait for the computer';
  heading.textContent = `Level ${gameLevel} of 20`


  const nextSequence = [...sequence];
  nextSequence.push(nextStep());
  playRound(nextSequence);
  sequence = [...nextSequence];
  setTimeout(() => {
    humanTurn(gameLevel);
  }, gameLevel * 600 + 1000);
}

function startGame() {
  startButton.classList.add('hidden');
  info.classList.remove('hidden');
  info.textContent = 'Ready to play!';
  nextRound();
}

function humanTurn(gameLevel) {
  tileContainer.classList.remove('unclickable');
  info.textContent = `Your turn: ${gameLevel} Tap${gameLevel > 1 ? 's' : ''}`;
}

tileContainer.addEventListener('click', event => {
  const sqColor = event.target.dataset;
  console.log(sqColor.type);

  if (sqColor) handleClick(sqColor.type);
});


function handleClick(tile) {
  info.textContent = `tile clicked`;
  const index = humanSequence.push(tile) - 1;

  const remainingTaps = sequence.length - humanSequence.length;

  if (humanSequence[index] !== sequence[index]) {
    resetGame('Oops! Game over, you pressed the wrong tile');
    return;
  }

  if (humanSequence.length === sequence.length) {
    humanSequence = [];
    info.textContent = 'Success! Keep going!';
    setTimeout(() => {
      nextRound();
    }, 1000);
    score();
    return;
  }

  if (humanSequence.length === sequence.length) {
    if (humanSequence.length === 20) {
      resetGame('Congrats! You completed all the levels');
      return
    }

    humanSequence = [];
    info.textContent = 'Success! Keep going!';
    setTimeout(() => {
      nextRound();
    }, 1000);
    score();
    return;
  }

  info.textContent = `Your turn: ${remainingTaps} Tap${remainingTaps > 1 ? 's' : ''
    }`;

}

function resetGame(text) {
  alert(text);
  sequence = [];
  humanSequence = [];
  gameLevel = 0;
  startButton.classList.remove('hidden');
  heading.textContent = 'Simon Game';
  info.classList.add('hidden');
  tileContainer.classList.add('unclickable');
  // if (gameLevel > GET HIGH SCORE)
  //      New div that says new high score
  // set high score send back to form
  if (gameLevel > highScore) {
    sethighScore();
  }
}

function score() {
  document.getElementById("score").innerHTML = gameLevel;
  console.log(gameLevel);
}

function sethighScore() {
  // new html content
  highScore.classList.remove('hidden');
}

startButton.addEventListener('click', startGame);