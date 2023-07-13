class Battle<T, U> {
  player1: T;
  player2: U;
  constructor(player1: T, player2: U) {
    this.player1 = player1;
    this.player2 = player2;
  }
  fight() {}
}
