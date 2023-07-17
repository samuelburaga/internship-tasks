import * as e from "../interfaces/entity";

export class Monster implements e.Entity {
  type: e.EntityType;

  constructor(
    public name: string,
    public health: number,
    public strength: number
  ) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.type = e.EntityType.MONSTER;
  }

  attack(target: e.Entity): void {
    target.takeDamage(this.strength * 2);
  }

  takeDamage(amount: number): void {
    this.health = this.health - amount;
  }
}
