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
    }
}

createDeck();

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
