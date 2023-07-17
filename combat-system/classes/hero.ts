import { Entity } from "../interfaces/entity";
import { EntityType } from "../enums/entity-type";
export class Hero implements Entity {
  type: EntityType;

  constructor(
    public name: string,
    public health: number,
    public strength: number
  ) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.type = EntityType.HERO;
  }

  attack(target: Entity): void {
    target.takeDamage(this.strength * 2);
  }

  takeDamage(amount: number): void {
    this.health = this.health - amount;
  }
}
