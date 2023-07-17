import { EntityType } from "../enums/entity-type";
import { Player } from "../classes/player";

export class Hero extends Player {
  constructor(
    public name: string,
    public health: number,
    public strength: number
  ) {
    super(name, health, strength);
    this.type = EntityType.HERO;
  }
}
