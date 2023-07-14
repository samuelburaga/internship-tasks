"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Battle = exports.Monster = exports.Hero = void 0;
var hero_1 = require("./hero");
Object.defineProperty(exports, "Hero", { enumerable: true, get: function () { return hero_1.Hero; } });
var monster_1 = require("./monster");
Object.defineProperty(exports, "Monster", { enumerable: true, get: function () { return monster_1.Monster; } });
var Battle = /** @class */ (function () {
    function Battle(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }
    Battle.prototype.fight = function () {
        while (this.player1.health * this.player2.health > 0) {
            var thePlayerThatAttacks = Math.floor(Math.random() * 2 + 1);
            if (thePlayerThatAttacks == 1) {
                this.player1.attack(this.player2);
            }
            else {
                this.player2.attack(this.player1);
            }
            console.log("Player 1 health: " + this.player1.health);
            console.log("Player 2 health: " + this.player2.health);
        }
        console.log("\nTHE BATTLE IS OVER");
        if (this.player1.health > 0) {
            return this.player1;
        }
        return this.player2;
    };
    return Battle;
}());
exports.Battle = Battle;