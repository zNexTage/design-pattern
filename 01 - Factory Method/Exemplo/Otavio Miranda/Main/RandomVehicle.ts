import BikeFactory from "../Factories/BikeFactory";
import CarFactory from "../Factories/CarFactory";
import randomNumbers from "../Utils/RandomNumber";
import IVehicle from "../Vehicle/IVehicle";

const randomVehicle = (): IVehicle => {
    const carFactory = new CarFactory();
    const bike = new BikeFactory();

    const car1 = carFactory.getVehicle('Fusca');
    const car2 = carFactory.getVehicle('Celta Preto');
    
    const bike1 = bike.getVehicle('Caloi');

    const vehicles = [car1, car2, bike1];

    return vehicles[randomNumbers(vehicles.length)];
}


export default randomVehicle;