const $front = "card_front";
const $back = "card_back";
const $card = "card";
const $icon = "icon";

let avengers = [
    "captainAmerica",
    "ironMan",
    "thor",
    "hulk",
    "blackWidow",
    "doctorStrange",
    "spiderMan",
    "antMan",
    "blackPanther",
    "nickFury"
];

let cards = null;
startGame();

function startGame() {
    cards = createCards(avengers);
    shuffleCards(cards);
    // console.log(cards);

    initializeCards(cards);
}

function initializeCards(cards) {
    let gameBoard = document.getElementById('gameBoard');

    // criar as cartas
    cards.forEach((card=>{
        
        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add($card);
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement)

    }))
}

function createCardContent(card, cardElement){

    createCardFace($front, card, cardElement); 
    createCardFace($back, card, cardElement); 


}

function createCardFace(face, card, element){

    let cardElementFace = document.createElement('div')
    cardElementFace.classList.add(face)
    if(face == $front){
        let iconElement = document.createElement('img')
        iconElement.classList.add($icon);
        iconElement.src = './assets/images/'+card.icon + ".png"
        cardElementFace.appendChild(iconElement)
    }else{
        cardElementFace.innerHTML = 'back'
    }
    element.appendChild(cardElementFace);
}

function shuffleCards(cards) {
    let currentIndex = cards.length;
    let randomIndex = 0;

    while(currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // inverter os valores
        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]];
    }
}


function createCards(avengers) {
    let cards = [];

    for (let avenger of avengers) {
        cards.push(createCardPair(avenger));
    }
    return cards.flatMap(pair => pair);
}

function createCardPair(avenger) {
    return [{
        id: createId(avenger),
        icon: avenger,
        flipped: false,
    }, {
        id: createId(avenger),
        icon: avenger,
        flipped: false,
    }]
}

function createId(avenger) {
    return avenger + parseInt(Math.random() * 1000)
}

function flipCard(){
    this.classList.add('flip');
}