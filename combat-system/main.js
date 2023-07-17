"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b = require("./classes/battle");
var hero = new b.Hero("Superman", 180, 10);
var monster = new b.Monster("Thanos", 200, 15);
var battle = new b.Battle(hero, monster);
var winner = battle.fight();
console.log("\t" + winner.name + " won!");
