var firstCardClicked;
var secondCardClicked;
var firstCardClasses;
var secondCardClasses;
var maxMatches = 9;
var matches = 0;

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
    if(firstCardClasses === secondCardClasses) {
      gameCards.addEventListener("click", handleClick);
      firstCardClicked = null;
      secondCardClicked = null;
      matches++;
      if(matches === maxMatches) {
        var modal = document.querySelector(".modal")
        modal.classList.remove("hidden");
      }
      console.log(matches);
    } else {
      setTimeout(function() {
        firstCardClicked.classList.remove('hidden');
        secondCardClicked.classList.remove('hidden');
        gameCards.addEventListener('click', handleClick);
        firstCardClicked = null;
        secondCardClicked = null;
      }, 1500);
    }


  }
}
