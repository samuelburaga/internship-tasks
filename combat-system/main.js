"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b = require("./classes/battle");
var entity_type_1 = require("./enums/entity-type");
var hero = new b.Hero("Superman", 180, 10, entity_type_1.EntityType.HERO);
var monster = new b.Monster("Thanos", 200, 15, entity_type_1.EntityType.MONSTER);
var battle = new b.Battle(hero, monster);
var winner = battle.fight();
console.log("\t" + winner.name + " won!");
