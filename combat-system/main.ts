import { Hero } from "./classes/hero";
import { Monster } from "./classes/monster";
import { Battle } from "./classes/battle";

let hero = new Hero("Superman", 180, 10);
let monster = new Monster("Thanos", 200, 15);

let battle = new Battle(hero, monster);
let winner = battle.fight();

console.log("\t" + winner.name + " won!");
