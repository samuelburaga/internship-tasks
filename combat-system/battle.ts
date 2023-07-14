import { Hero } from "./hero";
import { Monster } from "./monster";
import * as e from "./Entity";

export class Battle<T extends e.Entity, U extends e.Entity> {
  player1: T;
  player2: U;
  constructor(player1: T, player2: U) {
    this.player1 = player1;
    this.player2 = player2;
  }

  fight() {
    while (this.player1.health * this.player2.health > 0) {
      let thePlayerThatAttacks = Math.floor(Math.random() * 2 + 1);
      if (thePlayerThatAttacks == 1) {
        this.player1.attack(this.player2);
      } else {
        this.player2.attack(this.player1);
      }
    }
    if (this.player1.health > 0) return this.player1;
    return this.player2;
  }
}

export { Hero, Monster };
