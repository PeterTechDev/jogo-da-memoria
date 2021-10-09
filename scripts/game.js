let game = {

    avengers:[
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
    ],

    cards: null,

    createCards: function (avengers) {
        this.cards = [];
    
        this.avengers.forEach((avenger)=>{
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
    
        while(currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
    
            // inverter os valores
            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]];
        }
    },
    
}