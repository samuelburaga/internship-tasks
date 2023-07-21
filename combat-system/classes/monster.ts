import { EntityType } from "../enums/entity-type";
import { Player } from "../classes/player";

export class Monster extends Player {
  constructor(name: string, health: number, strength: number) {
    super(name, health, strength, EntityType.MONSTER);
  }
}
