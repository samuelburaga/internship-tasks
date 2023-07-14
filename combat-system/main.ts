import * as b from "./classes/battle";
import { EntityType } from "./enums/entity-type";

let hero = new b.Hero("Superman", 180, 10, EntityType.HERO);
let monster = new b.Monster("Thanos", 200, 15, EntityType.MONSTER);

let battle = new b.Battle(hero, monster);
let winner = battle.fight();

console.log("\t" + winner.name + " won!");
