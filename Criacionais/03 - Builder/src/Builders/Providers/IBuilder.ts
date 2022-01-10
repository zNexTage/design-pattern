import Engine from "../../Components/Engine";
import Transmission from "../../Components/Transmission";
import VehicleType from "../../Components/VehicleType";
import Wheel from "../../Components/Wheel";
import Vehicle from "../../Products/Vehicles";

interface IBuilder {
    reset(): void;
    getResult(): Vehicle;
    addWheel(wheel: Wheel): void;
    setVehicleType(vehicleType: VehicleType): void;
    setSeats(seats: number): void;
    setEngine(engine: Engine): void;
    setTransmission(transmission: Transmission): void;
}


export default IBuilder;

