"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monster = void 0;
var e = require("../interfaces/entity");
var Monster = /** @class */ (function () {
    function Monster(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.type = e.EntityType.MONSTER;
    }
    Monster.prototype.attack = function (target) {
        target.takeDamage(this.strength * 2);
    };
    Monster.prototype.takeDamage = function (amount) {
        this.health = this.health - amount;
    };
    return Monster;
}());
exports.Monster = Monster;
