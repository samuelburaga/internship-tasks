"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
var Hero = /** @class */ (function () {
    function Hero(name, health, strength, type) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.type = type;
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.type = type;
    }
    Hero.prototype.attack = function (target) {
        target.takeDamage(this.strength * 2);
    };
    Hero.prototype.takeDamage = function (amount) {
        this.health = this.health - amount;
    };
    return Hero;
}());
exports.Hero = Hero;
