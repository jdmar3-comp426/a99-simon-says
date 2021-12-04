let sequence = [];
let humanSequence = [];
let gameLevel = 0;

const form = document.getElementById( "forms" );
let username = "";
let userInfo = {}; 

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
  console.log(username);
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
      let request = new XMLHttpRequest();
      
      request.open('PATCH', "http://localhost:5500/app/update/user/:" + username + "/:" + gameLevel);
      request.responseType = 'text';
  
      request.send(username, gameLevel);
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

window.addEventListener("load", function(){
    
  //start add user
  function addAccount() {
      const XHR = new XMLHttpRequest()
       // Bind the FormData object and the form element
      const FD = new URLSearchParams(new FormData( form ));
      username = FD.get("user");

      // Define what happens on successful data submission
      XHR.addEventListener( "load", function(event) {
          alert( 'Logged in! :)' );
      } );

      // Define what happens in case of error
      XHR.addEventListener( "error", function( event ) {
          alert( 'Oops! Something went wrong.' );
      } );

      // Set up our request
      XHR.open( "POST", "http://localhost:5500/app/new", true );

      // The data sent is what the user provided in the form
      XHR.send( FD );
  }

  function getScore() {
    let request = new XMLHttpRequest();

    request.open('GET', "http://localhost:5500/app/user/:" + username);
    
    request.onload = function() {
        userInfo = request.response
    };

    request.send(username);
    
  } 

  // Submit account to database after clicking submit
  form.addEventListener( "submit", function ( event ) {
      event.preventDefault();

      addAccount();

      getScore();

      console.log(userInfo)
  })
  //end add user

  //
})