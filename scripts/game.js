let game = {

    avengers: [
        "captainAmerica",
        "ironMan",
        "thor",
        "hulk",
        "blackWidow",
        "deadpool",
        "spiderMan",
        "groot",
        "hawkeye",
        "nickFury"
    ],


    // para bloquear enquanto seleciona a segunda carta, não é possível escolher uma terceira carta
    lockMode: false,
    cards: null,
    firstCard: null,
    secondCard: null,


    // regras do jogo
    setCard: function (id) {
        // checar se a carta foi virada
        let card = this.cards.filter(card => card.id === id)[0];


        if (card.flipped || this.lockMode) {
            return false;
        }
        if (!this.firstCard) {
            this.firstCard = card;
            this.firstCard.flipped = true;
            return true;
        } else {
            this.secondCard = card;
            this.secondCard.flipped = true;
            this.lockMode = true;
            return true;
        }
    },

    checkMatch: function () {
        if (!this.firstCard || !this.secondCard) {
            return false;
        } else if (this.firstCard.icon === this.secondCard.icon) {
            
            // colocar a borda
            let idFirstCard = '#' + String(this.firstCard.id)
            let idSecondCard = '#' + String(this.secondCard.id)
            document.querySelector(idFirstCard).classList.add('gradient-border')
            document.querySelector(idSecondCard).classList.add('gradient-border')
        }
        return this.firstCard.icon === this.secondCard.icon;
    },

    clearCards: function () {
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
    },

    unflipCards: function () {
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.clearCards();
    },

    checkGameOver: function () {
        // verifica se tem alguma carta virada
        return this.cards.filter(card => !card.flipped).length == 0;
    },

    flipAll: function (){
        this.cards.forEach(card =>card.flipped = true);
        // this.cards.forEach(card =>console.log(card));
    },

    createCards: function (avengers) {
        this.cards = [];

        this.avengers.forEach((avenger) => {
            this.cards.push(this.createCardPair(avenger));
        })
        this.cards = this.cards.flatMap(pair => pair);
        this.shuffleCards();
        // return this.cards;
    },

    createCardPair: function (avenger) {
        return [{
            id: this.createId(avenger),
            icon: avenger,
            flipped: false,
        }, {
            id: this.createId(avenger),
            icon: avenger,
            flipped: false,
        }]
    },

    createId: function (avenger) {
        return avenger + parseInt(Math.random() * 1000)
    },

    shuffleCards: function (cards) {
        let currentIndex = this.cards.length;
        let randomIndex = 0;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // inverter os valores
            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]];
        }
    },

}