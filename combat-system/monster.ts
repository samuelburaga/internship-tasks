class Monster implements Entity {
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
    target.health = target.health - this.strength * 10;
  }
  takeDamage(amount: number): void {
    this.health = this.health - amount;
  }
}
