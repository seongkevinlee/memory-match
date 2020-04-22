var firstCardClicked;
var secondCardClicked;
var firstCardClasses;
var secondCardClasses;
var maxMatches = 9;
var matches = 0;
var attempts = 0;
var gamesPlayed = 0;

var gameCards = document.querySelector("#gameCards");

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
    console.log("attempts:", attempts);

    if(firstCardClasses === secondCardClasses) {
      gameCards.addEventListener("click", handleClick);
      firstCardClicked = null;
      secondCardClicked = null;
      matches++;
      console.log("matches:", matches)
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
  return Math.trunc(matches / attempts * 100) + "%";
}
