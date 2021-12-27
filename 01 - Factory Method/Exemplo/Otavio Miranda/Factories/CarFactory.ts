import Car from "../Vehicle/Car";
import IVehicle from "../Vehicle/IVehicle";
import VehicleFactory from "./VehicleFactory";

class CarFactory extends VehicleFactory {
    getVehicle(vehicleName: string): IVehicle {
        return new Car(vehicleName);
    }    
}


export default CarFactory;