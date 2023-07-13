interface Entity {
  name: string;
  health: number;
  strength: number;
  attack(target: Entity): void;
  takeDamage(amount: number): void;
}
