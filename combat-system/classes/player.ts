import { Entity } from "../interfaces/entity";
import { EntityType } from "../enums/entity-type";

export abstract class Player implements Entity {
  type: EntityType;

  constructor(
    public name: string,
    public health: number,
    public strength: number
  ) {
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  attack(target: Entity): void {
    target.takeDamage(this.strength * 2);
  }

  takeDamage(amount: number): void {
    this.health = this.health - amount;
  }
}
