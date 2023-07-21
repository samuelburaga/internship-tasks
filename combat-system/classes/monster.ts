import { Hero } from "../classes/hero";
import { Entity } from "../interfaces/entity";
import { EntityType } from "../enums/entity-type";
import { Player } from "../classes/player";
export class Monster extends Player {
  type: EntityType;
  constructor(name: string, health: number, strength: number) {
    super(name, health, strength);
    this.type = EntityType.MONSTER;
  }
}
