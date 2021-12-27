import Transport from "./Transport";
import Car from "./Vehicles/Car";
import IVehicle from "./Vehicles/Interfaces/IVehicle";

class CarTransport extends Transport {
    protected createTransport(): IVehicle {
        return new Car();
    }
}


export default CarTransport;