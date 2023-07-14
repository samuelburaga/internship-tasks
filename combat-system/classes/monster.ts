import * as e from "../interfaces/entity";

export class Monster implements e.Entity {
  constructor(
    public name: string,
    public health: number,
    public strength: number,
    public type: e.EntityType.MONSTER
  ) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.type = type;
  }

  attack(target: e.Entity): void {
    target.takeDamage(this.strength * 2);
  }

  takeDamage(amount: number): void {
    this.health = this.health - amount;
  }
}
