var firstCardClicked;
var secondCardClicked;
var firstCardClasses;
var secondCardClasses;
var maxMatches = 9;
var matches = 0;
var attempts = 0;
var gamesPlayed = 0;
var cardFrontArray = [
  "react-logo",
  "react-logo",
  "php-logo",
  "php-logo",
  "node-logo",
  "node-logo",
  "mysql-logo",
  "mysql-logo",
  "html-logo",
  "html-logo",
  "github-logo",
  "github-logo",
  "js-logo",
  "js-logo",
  "css-logo",
  "css-logo",
  "docker-logo",
  "docker-logo",
];
var cardFronts = document.querySelectorAll(".card-front");
var gameCards = document.querySelector('#gameCards');
var startButton = document.querySelector('.startGame');

startButton.addEventListener('click', createCards);

gameCards.addEventListener('click', handleClick);
function handleClick(event) {
  if(event.target.className.indexOf('card-back') === -1) {
    return;
  }
  event.target.classList.add('hidden');

  if(!firstCardClicked) {
    firstCardClicked = event.target;
    firstCardClasses = firstCardClicked.previousElementSibling.className;
  } else {
    secondCardClicked = event.target;
    secondCardClasses = secondCardClicked.previousElementSibling.className;
    gameCards.removeEventListener('click', handleClick);
    attempts++;

    if(firstCardClasses === secondCardClasses) {
      gameCards.addEventListener("click", handleClick);
      firstCardClicked = null;
      secondCardClicked = null;
      matches++;
      if(matches === maxMatches) {
        var modal = document.querySelector(".modal")
        modal.classList.remove("hidden");
      }
    } else {
      setTimeout(function() {
        firstCardClicked.classList.remove('hidden');
        secondCardClicked.classList.remove('hidden');
        gameCards.addEventListener('click', handleClick);
        firstCardClicked = null;
        secondCardClicked = null;
      }, 1500);
    }
    displayStats();
  }
}

function displayStats() {
  var gamesPlayedNum = document.querySelector('#gamesPlayed');
  gamesPlayedNum.textContent = gamesPlayed;
  var attemptsNum = document.querySelector('#attempts');
  attemptsNum.textContent = attempts;
  var accuracy = document.querySelector('#accuracy');
  accuracy.textContent = calculateAccuracy(attempts, matches);
}

function calculateAccuracy(attempts, matches) {
  if(!attempts) {
    return "0%";
  }
  return Math.trunc(matches / attempts * 100) + "%";
}

//PLAY AGAIN BUTTON
var playAgain = document.querySelector("#play-again");
playAgain.addEventListener('click', resetGame);

function resetGame() {
  matches = 0;
  attempts = 0;
  gamesPlayed++;
  displayStats();
  resetCards();
  document.querySelector(".modal").classList.add('hidden');
}

function resetCards() {
  shuffleCards();
  displayCards();
  var hiddenCards = document.querySelectorAll('.card-back');
  for(var i = 0 ; i < hiddenCards.length ; i++) {
    hiddenCards[i].classList.remove('hidden');
    }
  }

function shuffleCards() {
  for (let i = cardFrontArray.length - 1 ; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [cardFrontArray[i], cardFrontArray[j]] = [cardFrontArray[j], cardFrontArray[i]];
  }
}

function displayCards() {
  for(var i = 0 ; i < cardFronts.length ; i++) {
    cardFronts[i].className = 'card-front ' + cardFrontArray[i];
  }
}


function createCards() {
  document.querySelector('.startModal').classList.add('hidden');
  shuffleCards()
  for(var i = 0 ; i < maxMatches * 2 ; i++) {
    var cardContainer = document.createElement('div');
    cardContainer.className = "card col-2";
    var cardFront = createFrontCard(cardFrontArray[i]);
    var cardBack = createBackCard();
    cardContainer.append(cardFront, cardBack);
    gameCards.append(cardContainer);
  }
}

function createFrontCard(className) {
  var frontCard = document.createElement('div');
  frontCard.classList.add("card-front", className);
  return frontCard;
}

function createBackCard() {
  var backCard = document.createElement('div');
  backCard.classList.add("card-back");
  return backCard;
}
