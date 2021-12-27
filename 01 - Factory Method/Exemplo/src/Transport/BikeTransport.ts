import Transport from "./Transport";
import Bike from "./Vehicles/Bike";
import IVehicle from "./Vehicles/Interfaces/IVehicle";

class BikeTransport extends Transport {
    protected createTransport(): IVehicle {
        return new Bike();
    }    
}


export default BikeTransport;