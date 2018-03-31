// Array of cards
let cards = [
  'fa fa-cube',
  'fa fa-cube',
  'fa fa-paper-plane-o',
  'fa fa-paper-plane-o',
  'fa fa-bicycle',
  'fa fa-bicycle',
  'fa fa-bomb',
  'fa fa-bomb',
  'fa fa-leaf',
  'fa fa-leaf',
  'fa fa-diamond',
  'fa fa-diamond',
  'fa fa-anchor',
  'fa fa-anchor',
  'fa fa-bolt',
  'fa fa-bolt'
];

//declare global variables

let firstCard;
let secondCard;
let moveCounter = 0;
let matchCounter = 0;
let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let starCount = 5;
const deck = document.querySelector(".deck");
const displayTime = document.getElementById("time");

//Generate HTML for deck
function createDeck() {
    let shuffledCards = shuffle(cards);
    deck.innerHTML = "";
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < shuffledCards.length; i++) {
        let card = document.createElement("li");
        let cardFace = document.createElement("i");
        cardFace.className = shuffledCards[i];
        card.classList.add("card");
        card.appendChild(cardFace);
        deck.appendChild(card);
        card.addEventListener("click", checkCard);

    }
    deck.appendChild(fragment);
    startTimer();
}

//Flip card when clicked and assign cards to variables

function checkCard() {
    if (!firstCard) {
        firstCard = this;
        firstCard.removeEventListener('click', checkCard);
        firstCard.classList.add('show');
        firstCard.classList.add('open');
    } else if (!secondCard) {
        secondCard = this;
        secondCard.removeEventListener('click', checkCard);
        secondCard.classList.add('show');
        secondCard.classList.add('open');
        moveCounter++
    }
    checkMatch();
}

//Compare first and second card to see if there is a match

function checkMatch() {
    if (firstCard.firstChild.className === secondCard.firstChild.className) {
        firstCard.classList.add('match');
        secondCard.classList.add('match');
        firstCard = null;
        secondCard = null;
        matchCounter++;
        checkWin();

    } else {
        setTimeout(function () {
            firstCard.addEventListener('click', checkCard);
            firstCard.classList.remove('open');
            firstCard.classList.remove('show');
            secondCard.addEventListener('click', checkCard);
            secondCard.classList.remove('open');
            secondCard.classList.remove('show');
            firstCard = null;
            secondCard = null;
        }, 2000)
    }
}

//Start timer

function startTimer() {
    timer = setInterval(function () {
        seconds++;
        if (seconds >= 60) {
            minutes++;
            seconds = 0;
            if (minutes >= 60) {
                hours++;
                minutes = 0;
            }
        }
        displayTime.textContent = "Time " + (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    }, 1000)
}

//check if game is over and stop timer

function checkWin() {
    if (matchCounter === 8) {
      clearInterval(timer);
    }
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

createDeck();
