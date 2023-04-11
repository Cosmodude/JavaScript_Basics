const myDeck = {
    deck: [],
    drawnCards: [],
    suits: ["hearts", "spades", "diamonds", "clubs"],
    values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
    makeNewDeck () {
        const { suits, values, deck } = this;  // destructuring
        deck: [];
        for (let value of values.split(",")) {
            for (let suit of suits) {
                deck.push({
                    suit,
                    value
                })
            }
        }
    },
    drawCard() {
        const card = this.deck.pop();
        this.drawnCards.push(card);
        return card;
    },
    drawSomeCards(number) {
        const cards = [];
        for (let i = 0; i < number; i++){
            cards.push(this.drawCard());
        }
        return cards;
    },
    shuffle() {
        const { deck } = this;  // destructuring
        for (let i = deck.length -1 ; i > 0; i--){
            let j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }
}
myDeck.makeNewDeck()
myDeck.shuffle()

function makeDeck() {
    return myDeck ;  // will return the reference, not usable
}