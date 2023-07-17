"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
var e = require("../interfaces/entity");
var Hero = /** @class */ (function () {
    function Hero(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.type = e.EntityType.HERO;
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
