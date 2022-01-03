"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BikeFactory_1 = __importDefault(require("../Factories/BikeFactory"));
var CarFactory_1 = __importDefault(require("../Factories/CarFactory"));
var RandomNumber_1 = __importDefault(require("../Utils/RandomNumber"));
var randomVehicle = function () {
    var carFactory = new CarFactory_1.default();
    var bike = new BikeFactory_1.default();
    var car1 = carFactory.getVehicle('Fusca');
    var car2 = carFactory.getVehicle('Celta Preto');
    var bike1 = bike.getVehicle('Caloi');
    var vehicles = [car1, car2, bike1];
    return vehicles[RandomNumber_1.default(vehicles.length)];
};
exports.default = randomVehicle;
