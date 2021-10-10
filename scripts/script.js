const $front = "card_front";
const $back = "card_back";
const $card = "card";
const $icon = "icon";


// script conhece o game.js mas o game.js não conhece o script

startGame();

function startGame() {
    initializeCards(game.createCards());
}

function initializeCards(cards) {
    let gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = '';
    // criar as cartas
    game.cards.forEach((card => {

        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add($card);
        cardElement.classList.add('flip');
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement)

        preview(cardElement);

    }))
}

function preview(card) {
    setTimeout(() => {
        card.classList.remove('flip');
    }, 3000)
}


function createCardContent(card, cardElement) {

    createCardFace($front, card, cardElement);
    createCardFace($back, card, cardElement);


}

function createCardFace(face, card, element) {

    let cardElementFace = document.createElement('div')
    cardElementFace.classList.add(face)
    if (face == $front) {
        let iconElement = document.createElement('img')
        iconElement.classList.add($icon);
        iconElement.src = './assets/images/' + card.icon + ".png"
        cardElementFace.appendChild(iconElement)
    } else {
        cardElementFace.innerHTML = `<img src="./assets/images/logo.png" alt="logo avengers">`
    }
    element.appendChild(cardElementFace);
}


function flipCard() {
    if (game.setCard(this.id)) {
        this.classList.add('flip');
        if (game.secondCard) {
            if (game.checkMatch()) {
                game.clearCards();
                console.log('acertou');
                if (game.checkGameOver()) {
                    game.showLayers();
                }
            } else {
                // desvira as cartas
                setTimeout(function () {

                    let firstCardView = document.getElementById(game.firstCard.id);
                    let secondCardView = document.getElementById(game.secondCard.id);

                    firstCardView.classList.remove('flip');
                    secondCardView.classList.remove('flip');
                    game.unflipCards();
                }, 1000)
            }
        }
    }
}

function showLayers() {
    let gameOverLayer = document.getElementById('gameOver');
    let yayLayer = document.getElementById('yay');

    yayLayer.style.display = 'flex';
    setTimeout(() => {
        yayLayer.style.display = 'none';
        gameOverLayer.style.display = 'flex';
    }, 2000)
}

function restart() {
    game.clearCards();
    startGame();
    let gameOverLayer = document.getElementById('gameOver');
    gameOverLayer.style.display = 'none';
}

function gg() {
    game.flipAll()
    let avengers = document.querySelectorAll('.card');
    document.querySelectorAll('.card').forEach((avenger) => {
        avenger.classList.add('flip');
        avenger.classList.add('gradient-border');
    })
    showLayers()
}