import Engine from "../Components/Engine";
import Transmission from "../Components/Transmission";
import VehicleType from "../Components/VehicleType";
import Wheel from "../Components/Wheel";
import Vehicle from "../Products/Vehicles";
import IBuilder from "./Providers/IBuilder";

class VehicleBuilder implements IBuilder {
    private vehicle: Vehicle;

    constructor() {
        this.vehicle = Vehicle.create();
    }

    reset(): void {
        this.vehicle = Vehicle.create();
    }

    getResult(): Vehicle {
        const result = this.vehicle;

        this.reset();

        return result;
    }

    addWheel(wheel: Wheel): void {
        this.vehicle.addWheel(wheel);
    }

    setVehicleType(vehicleType: VehicleType): void {
        this.vehicle.vehicleType = vehicleType;
    }

    setSeats(seats: number): void {
        this.vehicle.seats = seats;
    }

    setEngine(engine: Engine): void {
        this.vehicle.engine = engine;
    }

    setTransmission(transmission: Transmission): void {
        this.vehicle.transmission = transmission;
    }

}

export default VehicleBuilder;