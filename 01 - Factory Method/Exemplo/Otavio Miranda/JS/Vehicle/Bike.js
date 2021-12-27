"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bike = /** @class */ (function () {
    function Bike(name) {
        this.name = name;
    }
    Bike.prototype.pickUp = function (customerName) {
        console.log(this.name + " est\u00E1 buscando " + customerName);
    };
    Bike.prototype.stop = function () {
        console.log(this.name + " parou");
    };
    return Bike;
}());
exports.default = Bike;
