interface Entity {
  name: string;
  health: number;
  strength: number;
  type: EntityType;
  attack(target: Entity): void;
  takeDamage(amount: number): void;
}
