"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CarFactory_1 = __importDefault(require("../Factories/CarFactory"));
var RandomVehicle_1 = __importDefault(require("../Main/RandomVehicle"));
var RandomNumber_1 = __importDefault(require("../Utils/RandomNumber"));
var carFactory = new CarFactory_1.default();
var customers = ['Ana', 'Joana', 'Helena', 'João'];
for (var i = 0; i < 10; i++) {
    var vehicle = RandomVehicle_1.default();
    var name_1 = customers[RandomNumber_1.default(customers.length)];
    vehicle.pickUp(name_1);
    vehicle.stop();
    var newCar = carFactory.pickUp(name_1, 'Carro legal - ' + RandomNumber_1.default(100));
    newCar.stop();
    console.log('---');
}
