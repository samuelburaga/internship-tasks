import { Entity } from "../interfaces/entity";
import { EntityType } from "../enums/entity-type";

export abstract class Player implements Entity {
  constructor(
    public name: string,
    public health: number,
    public strength: number,
    public type: EntityType
  ) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.type = type;
  }

  attack(target: Entity): void {
    target.takeDamage(this.strength * 2);
  }

  takeDamage(amount: number): void {
    this.health = this.health - amount;
  }
}
