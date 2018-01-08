var newGameBtn = document.getElementById('js-newGameButton');

	pickRock = document.getElementById('js-playerPick_rock');
	pickPaper = document.getElementById('js-playerPick_paper');
	pickScissors = document.getElementById('js-playerPick_scissors');

    newGameElem = document.getElementById('js-newGameElement');
    pickElem = document.getElementById('js-playerPickElement');
    resultsElem = document.getElementById('js-resultsTableElement');

	playerPointsElem = document.getElementById('js-playerPoints');
    playerNameElem = document.getElementById('js-playerName');
    computerPointsElem = document.getElementById('js-computerPoints');
    
	playerPickElem = document.getElementById('js-playerPick');
    computerPickElem = document.getElementById('js-computerPick');
    playerResultElem = document.getElementById('js-playerResult');
    computerResultElem = document.getElementById('js-computerResult');

newGameBtn.addEventListener('click', newGame);
pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });
 	
var gameState = 'notStarted', 
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
      break;
    case 'ended':
        newGameBtn.innerText = 'Jeszcze raz';
    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
  }
}
setGameElements();

function newGame() {
  player.name = prompt('Please enter your name', 'imię gracza');
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();

    playerNameElem.innerHTML = player.name;
  }

}

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
} 

function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; 
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {
		roundWinner(computerResultElem, computer);
    } else {
        roundWinner(playerResultElem, player);
    }
    
    setGamePoints();
    whoWins();
}

function roundWinner(winnerResultElem, winner) {
    winnerResultElem.innerHTML = "Win!";
    winner.score++;
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

function whoWins () {
    
    if (player.score === 10 || computer.score === 10) {
         gameState = 'ended';
         setGameElements();
         if (player.score === 10) {          
             alert('Wygrał gracz');
         }
         else {
             alert('Wygrał Komputer');
         }
         player.score = computer.score = 0;
         setGamePoints();
     }  
 }