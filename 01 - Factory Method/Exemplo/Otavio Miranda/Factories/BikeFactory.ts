import Bike from "../Vehicle/Bike";
import IVehicle from "../Vehicle/IVehicle";
import VehicleFactory from "./VehicleFactory";

class BikeFactory extends VehicleFactory {
    getVehicle(vehicleName: string): IVehicle {
        return new Bike(vehicleName);
    }
}


export default BikeFactory;