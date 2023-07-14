class Battle {
  player1: Hero | Monster;
  player2: Hero | Monster;
  constructor(player1: Hero | Monster, player2: Hero | Monster) {
    this.player1 = player1;
    this.player2 = player2;
  }
  fight() {}
}
