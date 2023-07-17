"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monster = void 0;
var hero_1 = require("../classes/hero");
var entity_type_1 = require("../enums/entity-type");
var Monster = /** @class */ (function (_super) {
    __extends(Monster, _super);
    function Monster(name, health, strength) {
        var _this = _super.call(this, name, health, strength) || this;
        _this.name = name;
        _this.health = health;
        _this.strength = strength;
        _this.type = entity_type_1.EntityType.MONSTER;
        return _this;
    }
    return Monster;
}(hero_1.Hero));
exports.Monster = Monster;
