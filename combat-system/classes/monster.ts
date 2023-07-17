import { Hero } from "../classes/hero";
import { Entity } from "../interfaces/entity";
import { EntityType } from "../enums/entity-type";

export class Monster extends Hero implements Entity {
  type: EntityType;
  constructor(public name, public health, public strength) {
    super(name, health, strength);
    this.type = EntityType.MONSTER;
  }
}
