class Hero implements Entity {
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
    target.health = target.health - this.strength * 10;
  }
  takeDamage(amount: number) {
    this.health = this.health - amount;
  }
}
