import Transport from "./Transport";
import IVehicle from "./Vehicles/Interfaces/IVehicle";
import Motorcycle from "./Vehicles/Motorcycle";

class MotorcycleTransport extends Transport {
    protected createTransport(): IVehicle {
        return new Motorcycle();
    }    
}


export default MotorcycleTransport;