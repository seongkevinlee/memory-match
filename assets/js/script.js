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
var completedMatches = 0;
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
  { class: "bruschetta-basil", text: "Basil", id: 2 },
  { class: "bruschetta-tomato", text: "Tomatoes", id: 3 },
  { class: "fettuccine-noodles", text: "Fettuccine", id: 101 },
  { class: "fettuccine-sauce", text: "Cream Sauce", id: 102 },
  { class: "fettuccine-chicken", text: "Chicken", id: 103 },
  { class: "salad-croutons", text: "Croutons", id: 1001 },
  { class: "salad-parmesan", text: "Parmesan Cheese", id: 1002 },
  { class: "salad-romaine", text: "Romaine", id: 1003 },
  { class: "spaghetti-marinara", text: "Marinara Sauce", id: 10001 },
  { class: "spaghetti-meatballs", text: "Meatballs", id: 10002 },
  { class: "spaghetti-noodles", text: "Spaghetti", id: 10003 },
  { class: "tart-crust", text: "Pie Crust", id: 100001 },
  { class: "tart-peaches", text: "Peaches", id: 100002 },
  { class: "tart-sugar", text: "Powdered Sugar", id: 100003 },
  { class: "tiramisu-coffee", text: "Coffee", id: 1000001 },
  { class: "tiramisu-ladyfingers2", text: "Ladyfingers", id: 1000002 },
  { class: "tiramisu-marscapone", text: "Marscapone Cheese", id: 1000003 },
];

var cardFronts = document.querySelector(".card-front");
var gameCards = document.querySelector("#gameCards");
var cardBoxes = document.querySelector(".card")
var startButton = document.querySelector(".startGame");
var costText = document.querySelector('#cost');
var revenueText = document.querySelector('#revenue');
var netProfitText = document.querySelector('#net-profit');
var profitabilityText = document.querySelector('#profitable');
var wrongModal = document.querySelector('.modal-wrong');
var bruschettaImage = document.querySelector('.bruschetta-match');
var fettuccineImage = document.querySelector('.fettuccine-match');
var saladImage = document.querySelector('.salad-match');
var spaghettiImage = document.querySelector('.spaghetti-match');
var tartImage = document.querySelector('.tart-match');
var tiramisuImage = document.querySelector('.tiramisu-match');
var winModal = document.querySelector('.modal');
var winModalText = document.querySelector('.modal-text')

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
    firstCardClasses = firstCardClicked.classList;
    firstCardID = firstCardClicked.id;

  } else if(!secondCardClicked) {
    secondCardClicked = event.target;
    secondCardClasses = secondCardClicked.classList;
    secondCardID = secondCardClicked.id;
  } else {
    thirdCardClicked = event.target;
    thirdCardClasses = thirdCardClicked.classList;
    thirdCardID = thirdCardClicked.id;
    gameCards.removeEventListener("click", handleClick);
    attempts++;

    if (Number(firstCardID) + Number(secondCardID) + Number(thirdCardID) === 6) {
      gameCards.addEventListener("click", handleClick);
      firstCardClicked = null;
      secondCardClicked = null;
      thirdCardClicked = null;
      revenue += 900;
      netProfit += 900;
      profitMargin = Math.trunc(netProfit / costs * 100);
      profitabilityText.textContent = profitMargin + "%";
      revenueText.textContent = "$" + revenue;
      netProfitText.textContent = "$" + netProfit;
      document.getElementById("1").remove();
      document.getElementById("2").remove();
      document.getElementById("3").remove();
      completedMatches++;
      bruschettaImage.classList.remove('hidden');
      setTimeout(function() {
        bruschettaImage.classList.add('hidden')
      }, 3000);
      console.log("Bruschetta")
    } else if (Number(firstCardID) + Number(secondCardID) + Number(thirdCardID) === 306) {
      gameCards.addEventListener("click", handleClick);
      firstCardClicked = null;
      secondCardClicked = null;
      thirdCardClicked = null;
      revenue += 900;
      netProfit += 900;
      profitMargin = Math.trunc(netProfit / costs * 100);
      profitabilityText.textContent = profitMargin + "%";
      revenueText.textContent = "$" + revenue;
      netProfitText.textContent = "$" + netProfit;
      document.getElementById("101").remove();
      document.getElementById("102").remove();
      document.getElementById("103").remove();
      completedMatches++;
      fettuccineImage.classList.remove('hidden');
      setTimeout(function () {
        fettuccineImage.classList.add('hidden')
      }, 3000);
      console.log("Fettuccine")
    } else if (Number(firstCardID) + Number(secondCardID) + Number(thirdCardID) === 3006) {
      gameCards.addEventListener("click", handleClick);
      firstCardClicked = null;
      secondCardClicked = null;
      thirdCardClicked = null;
      revenue += 900;
      netProfit += 900;
      profitMargin = Math.trunc(netProfit / costs * 100);
      profitabilityText.textContent = profitMargin + "%";
      revenueText.textContent = "$" + revenue;
      netProfitText.textContent = "$" + netProfit;
      document.getElementById("1001").remove();
      document.getElementById("1002").remove();
      document.getElementById("1003").remove();
      completedMatches++;
      saladImage.classList.remove('hidden');
      setTimeout(function () {
        saladImage.classList.add('hidden')
      }, 3000);
      console.log("Salad")
    } else if (Number(firstCardID) + Number(secondCardID) + Number(thirdCardID) === 30006) {
      gameCards.addEventListener("click", handleClick);
      firstCardClicked = null;
      secondCardClicked = null;
      thirdCardClicked = null;
      revenue += 900;
      netProfit += 900;
      profitMargin = Math.trunc(netProfit / costs * 100);
      profitabilityText.textContent = profitMargin + "%";
      revenueText.textContent = "$" + revenue;
      netProfitText.textContent = "$" + netProfit;
      document.getElementById("10001").remove();
      document.getElementById("10002").remove();
      document.getElementById("10003").remove();
      completedMatches++;
      spaghettiImage.classList.remove('hidden');
      setTimeout(function () {
        spaghettiImage.classList.add('hidden')
      }, 3000);
      console.log("Spaghetti")
    } else if (Number(firstCardID) + Number(secondCardID) + Number(thirdCardID) === 300006) {
      gameCards.addEventListener("click", handleClick);
      firstCardClicked = null;
      secondCardClicked = null;
      thirdCardClicked = null;
      revenue += 900;
      netProfit += 900;
      profitMargin = Math.trunc(netProfit / costs * 100);
      profitabilityText.textContent = profitMargin + "%";
      revenueText.textContent = "$" + revenue;
      netProfitText.textContent = "$" + netProfit;
      document.getElementById("100001").remove();
      document.getElementById("100002").remove();
      document.getElementById("100003").remove();
      completedMatches++;
      tartImage.classList.remove('hidden');
      setTimeout(function () {
        tartImage.classList.add('hidden')
      }, 3000);
      console.log("Tart")
    } else if (Number(firstCardID) + Number(secondCardID) + Number(thirdCardID) === 3000006) {
      gameCards.addEventListener("click", handleClick);
      firstCardClicked = null;
      secondCardClicked = null;
      thirdCardClicked = null;
      revenue += 900;
      netProfit += 900;
      profitMargin = Math.trunc(netProfit / costs * 100);
      profitabilityText.textContent = profitMargin + "%";
      revenueText.textContent = "$" + revenue;
      netProfitText.textContent = "$" + netProfit;
      document.getElementById("1000001").remove();
      document.getElementById("1000002").remove();
      document.getElementById("1000003").remove();
      completedMatches++;
      tiramisuImage.classList.remove('hidden');
      setTimeout(function () {
        tiramisuImage.classList.add('hidden')
      }, 3000);
      console.log("Tiramisu");
    } else {
      firstCardClasses.remove('highlightCard');
      secondCardClasses.remove('highlightCard');
      thirdCardClasses.remove('highlightCard');
      firstCardClicked = null;
      secondCardClicked = null;
      thirdCardClicked = null;
      wrongModal.classList.remove('hidden');
      setTimeout(function() {
        wrongModal.classList.add('hidden')
      }, 2000);
      gameCards.addEventListener("click", handleClick);
      costs += 300;
      costText.textContent = "$" + costs;
      netProfit -= 300;
      netProfitText.textContent = "$" + netProfit;
      console.log(netProfit);
      }

      if(completedMatches === 6) {
      console.log("YOU WIN!")
        if(profitMargin > 50 && profitMargin < 70) {
          winModalText.textContent = "YOUR PROFITABILITY MARGIN WAS GOOD ENOUGH FOR A PART-TIME POSITION!"
          winModal.classList.remove('hidden');
        } else if(profitMargin > 70 && profitMargin < 90) {
          winModalText.textContent = 'YOUR PROFITABILITY MARGIN WAS GOOD ENOUGH FOR A FULL TIME POSITION!'
          winModal.classList.remove('hidden');
        } else if(profitMargin > 90) {
          winModalText.textContent = 'WOW! YOUR PROFITABILITY MARGIN WAS AMAZING! WE WOULD LIKE TO OFFER YOU PART OWNERSHIP!'
          winModal.classList.remove('hidden');
        } else {
          winModalText.textContent = 'UNFORTUNATELY, YOUR PROFITABILITY MARGIN WAS TOO LOW TO BE OFFERED A JOB.'
          winModal.classList.remove('hidden');
        }
    }
  }
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
