"use strict";
exports.__esModule = true;
exports.FrenchPeople = exports.EnglishPeople = void 0;
//TS Style
var EnglishPeople = /** @class */ (function () {
    function EnglishPeople(name, age, info) {
        this.name = name;
        this.age = age;
        this.info = info;
    }
    EnglishPeople.prototype.printUser = function () {
        var data = "My name is ".concat(this.name, ". My age is ").concat(this.age);
        console.log(data);
        return data;
    };
    return EnglishPeople;
}());
exports.EnglishPeople = EnglishPeople;
var FrenchPeople = /** @class */ (function () {
    function FrenchPeople(name, age, info) {
        this.name = name;
        this.age = age;
        this.info = info;
    }
    FrenchPeople.prototype.printUser = function () {
        var data = "Je m'appelles ".concat(this.name, ". J'ai ").concat(this.age, " ans");
        console.log(data);
        return data;
    };
    return FrenchPeople;
}());
exports.FrenchPeople = FrenchPeople;
