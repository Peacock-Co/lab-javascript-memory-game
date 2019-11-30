class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
    for (let i = 0; i < this.cards.length; i++) {
      this.cards[Math.floor(Math.random() * this.cards.length)];
    }
  }
  checkIfPair(card1, card2) {}
  isFinished() {}
}
