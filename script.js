const front = "card_front";
const back = "card_back";

let techs = [
    "bootstrap",
    "css",
    "electron",
    "firebase",
    "html",
    "javascript",
    "jquery",
    "mongo",
    "node",
    "react"
];

createCards(techs);

function createCards(techs) {
    let cards = [];

    for(let tech of techs){
        cards.push(createCardPair(tech));
    }
    return cards.flatMap(pair => pair);
}

function createCardPair(tech){
    return [{
        id: createId(tech),
        icon:tech,
        flipped: false,
    }, {
        id: createId(tech),
        icon:tech,
        flipped: false,
    }]
}

function createId(tech){
    return tech + parseInt(Math.random() * 1000)
}