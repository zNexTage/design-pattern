"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Classe Creator
var VehicleFactory = /** @class */ (function () {
    function VehicleFactory() {
    }
    VehicleFactory.prototype.pickUp = function (customerName, vehicleName) {
        var car = this.getVehicle(vehicleName);
        car.pickUp(customerName);
        return car;
    };
    return VehicleFactory;
}());
exports.default = VehicleFactory;
