import CarFactory from "../Factories/CarFactory";
import randomVehicle from "../Main/RandomVehicle";
import randomNumbers from "../Utils/RandomNumber";

const carFactory = new CarFactory();
const customers = ['Ana', 'Joana', 'Helena', 'João'];

for (let i = 0; i < 10; i++) {
    const vehicle = randomVehicle();
    const name = customers[randomNumbers(customers.length)];

    vehicle.pickUp(name);
    vehicle.stop();
    const newCar = carFactory.pickUp(name, 'Carro legal - ' + randomNumbers(100));
    newCar.stop();
    
    console.log('---');

}