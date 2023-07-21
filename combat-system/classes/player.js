"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(name, health, strength, type) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.type = type;
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.type = type;
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
