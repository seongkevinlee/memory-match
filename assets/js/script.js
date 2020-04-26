var firstCardClicked;
var secondCardClicked;
var thirdCardClicked;
var firstCardClasses;
var secondCardClasses;
var thirdCardClasses;
var firstCardID;
var secondCardID;
var thirdCardID;
var maxMatches = 9;
var matches = 0;
var attempts = 0;
var gamesPlayed = 0;
var costs = 1800;
var revenue = 0;
var netProfit = revenue - costs;
var profitMargin = netProfit / costs;
var dishID = 0;
var bruschettaID = 6;
var fettuccineID = 306;
var saladID = 3006;
var spaghettiID = 30006;
var tartID = 300006;
var tiramisuID = 3000006;


var cardFrontArray = [
  { class: "bruschetta-bread", text: "Bread", id: 1 },
  { class: "bruschetta-okra", text: "Okra", id: 2 },
  { class: "bruschetta-tomato", text: "Tomatoes", id: 3 },
  { class: "fettuccine-noodles", text: "Fettuccine", id: 101 },
  { class: "fettuccine-sauce", text: "Cream Sauce", id: 102 },
  { class: "fettuccine-shrimp", text: "Shrimp", id: 103 },
  { class: "salad-olives", text: "Olives", id: 1001 },
  { class: "salad-pepperoni", text: "Pepperoni", id: 1002 },
  { class: "salad-romaine", text: "Romaine", id: 1003 },
  { class: "spaghetti-marinara", text: "Marinara Sauce", id: 10001 },
  { class: "spaghetti-meatballs", text: "Meatballs", id: 10002 },
  { class: "spaghetti-noodles", text: "Spaghetti", id: 10003 },
  { class: "tart-crust", text: "Pie Crust", id: 100001 },
  { class: "tart-peaches", text: "Peaches", id: 100002 },
  { class: "tart-sugar", text: "Powdered Sugar", id: 100003 },
  { class: "tiramisu-coffee", text: "Coffee", id: 1000001 },
  { class: "tiramisu-ladyfingers", text: "Ladyfingers", id: 1000002 },
  { class: "tiramisu-marscapone", text: "Marscapone Cheese", id: 1000003 },
];

var cardFronts = document.querySelector(".card-front");
var gameCards = document.querySelector("#gameCards");
var startButton = document.querySelector(".startGame");
var costText = document.querySelector('#cost');
var revenueText = document.querySelector('#cost');
var netProfitText = document.querySelector('#cost');
var profitabilityText = document.querySelector('#cost');

startButton.addEventListener("click", createCards);

gameCards.addEventListener("click", handleClick);
function handleClick(event) {
  if (event.target.className.indexOf("highlightCard") !== -1) {
    return;
  }
  event.target.classList.add("highlightCard");
 // highlightClick();
  console.log(event);

  if (!firstCardClicked) {
    firstCardClicked = event.target;
    firstCardClasses = firstCardClicked.className;
    firstCardID = firstCardClicked.id;

  } else if(!secondCardClicked) {
    secondCardClicked = event.target;
    secondCardClasses = secondCardClicked.className;
    secondCardID = secondCardClicked.id;
  } else {
    thirdCardClicked = event.target;
    thirdCardClasses = thirdCardClicked.className;
    thirdCardID = thirdCardClicked.id;
    gameCards.removeEventListener("click", handleClick);
    attempts++;

//FIRST CARD CLICKED ID + SECOND CARD CLICKED ID + THIRD CARD CLICKED IF = ONE OF THE VALUES OF THAR DISH, THEN OUTPUT PICTURE OF DISH
//IF

    if (Number(firstCardID) + Number(secondCardID) + Number(thirdCardID) === 6) {
      gameCards.addEventListener("click", handleClick);
      firstCardClicked = null;
      secondCardClicked = null;
      thirdCardClicked = null;
      revenue += 1200;
      console.log("Bruschetta")
    } else if (Number(firstCardID) + Number(secondCardID) + Number(thirdCardID) === 306) {
      gameCards.addEventListener("click", handleClick);
      firstCardClicked = null;
      secondCardClicked = null;
      thirdCardClicked = null;
      revenue += 1200;
      console.log("Fettuccine")
    } else if (Number(firstCardID) + Number(secondCardID) + Number(thirdCardID) === 3006) {
      gameCards.addEventListener("click", handleClick);
      firstCardClicked = null;
      secondCardClicked = null;
      thirdCardClicked = null;
      revenue += 1200;
      console.log("Salad")
    } else if (Number(firstCardID) + Number(secondCardID) + Number(thirdCardID) === 30006) {
      gameCards.addEventListener("click", handleClick);
      firstCardClicked = null;
      secondCardClicked = null;
      thirdCardClicked = null;
      revenue += 1200;
      console.log("Spaghetti")
    } else if (Number(firstCardID) + Number(secondCardID) + Number(thirdCardID) === 300006) {
      gameCards.addEventListener("click", handleClick);
      firstCardClicked = null;
      secondCardClicked = null;
      thirdCardClicked = null;
      revenue += 1200;
      console.log("Tart")
    } else if (Number(firstCardID) + Number(secondCardID) + Number(thirdCardID) === 3000006) {
      gameCards.addEventListener("click", handleClick);
      firstCardClicked = null;
      secondCardClicked = null;
      thirdCardClicked = null;
      revenue += 1200;
      console.log("Tiramisu")
    } else {
      console.log(firstCardID);
      console.log(secondCardID);
      console.log(thirdCardID);
      console.log(firstCardID + secondCardID + thirdCardID);
      highlightRemove();
      return;
    }

/*
    if (firstCardClasses === secondCardClasses) {
      gameCards.addEventListener("click", handleClick);
      firstCardClicked = null;
      secondCardClicked = null;
      matches++;
      if (matches === maxMatches) {
        var modal = document.querySelector(".modal");
        modal.classList.remove("hidden");
      }
    } else {
      setTimeout(function () {
        firstCardClicked.classList.remove("hidden");
        secondCardClicked.classList.remove("hidden");
        gameCards.addEventListener("click", handleClick);
        firstCardClicked = null;
        secondCardClicked = null;
      }, 1500);
    }
    displayStats();*/
  }
}

function highlightRemove() {
  for (var i = 0; i < cardFronts.length; i++) {
    cardFronts[i].className.remove("highlightCard");
  }
}

function displayStats() {
  var gamesPlayedNum = document.querySelector("#gamesPlayed");
  gamesPlayedNum.textContent = gamesPlayed;
  var attemptsNum = document.querySelector("#attempts");
  attemptsNum.textContent = attempts;
  var accuracy = document.querySelector("#accuracy");
  accuracy.textContent = calculateAccuracy(attempts, matches);
}

function calculateAccuracy(attempts, matches) {
  if (!attempts) {
    return "0%";
  }
  return Math.trunc((matches / attempts) * 100) + "%";
}

//PLAY AGAIN BUTTON
var playAgain = document.querySelector("#play-again");
playAgain.addEventListener("click", resetGame);

//HIGHLIGHT THE CARD THAT IS CLICKED
function highlightClick (event) {
  if(event.className.split(' ').includes("main")){
    console.log(event);
    return
  } else {
    event.target.classList.add("highlightCard");
    console.log(event);
  }

}

function resetGame() {
  matches = 0;
  attempts = 0;
  gamesPlayed++;
  displayStats();
  resetCards();
  document.querySelector(".modal").classList.add("hidden");
}

function resetCards() {
  shuffleCards();
  displayCards();
  var hiddenCards = document.querySelectorAll(".card-back");
  for (var i = 0; i < hiddenCards.length; i++) {
    hiddenCards[i].classList.remove("hidden");
  }
}

function shuffleCards() {
  for (let i = cardFrontArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cardFrontArray[i], cardFrontArray[j]] = [
      cardFrontArray[j],
      cardFrontArray[i],
    ];
  }
}



function createCards() {
  gameCards.classList.add("cardboard");
  document.querySelector(".startModal").classList.add("hidden");
  shuffleCards();
  for (var i = 0; i < maxMatches * 2; i++) {
    var cardContainer = document.createElement("div");
    cardContainer.className = "card col-2 overlay";
    var cardFront = createFrontCard(cardFrontArray[i]["class"]);
    cardFront.setAttribute('id', cardFrontArray[i]["id"]);
    var cardTextBox = createCardTextContainer(cardFrontArray[i]);
    var cardBoxText = createCardText(cardFrontArray[i]["text"]);
    cardTextBox.append(cardBoxText);
    cardFront.append(cardTextBox);
    cardContainer.append(cardFront);
    gameCards.append(cardContainer);
  }
}

function createFrontCard(className) {
  var frontCard = document.createElement("div");
  frontCard.classList.add("card-front", className);
  return frontCard;
}

function createCardText(cardText) {
  var cardTextEl = document.createElement("div");
  cardTextEl.classList.add('card-text');
  cardTextEl.textContent = cardText;
  return cardTextEl;
}

function createCardTextContainer() {
  var cardTextContain = document.createElement("div");
  cardTextContain.classList.add("card-text-container");
  return cardTextContain;
}
