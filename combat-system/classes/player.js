"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    Player.prototype.attack = function (target) {
        target.takeDamage(this.strength * 2);
    };
    Player.prototype.takeDamage = function (amount) {
        this.health = this.health - amount;
    };
    return Player;
}());
exports.Player = Player;
