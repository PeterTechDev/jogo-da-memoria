const front = "card_front";
const back = "card_back";

let avengers = [
    "Captain America",
    "Iron Man",
    "Thor Odinson",
    "Hulk",
    "Black Widow",
    "Doctor Strange",
    "Spider Man",
    "Ant Man",
    "Black Panther",
    "Nick Fury"
];

let cards = null;
startGame();

function startGame() {
    cards = createCards(avengers);
    shuffleCards(cards);
    console.log(cards);
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