class Battle {
  player1: EntityType.HERO | EntityType.MONSTER;
  player2: EntityType.HERO | EntityType.MONSTER;
  constructor(
    player1: EntityType.HERO | EntityType.MONSTER,
    player2: EntityType.HERO | EntityType.MONSTER
  ) {
    this.player1 = player1;
    this.player2 = player2;
  }
  fight() {}
}
