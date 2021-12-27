import IVehicle from "./Vehicles/Interfaces/IVehicle";

abstract class Transport {
    startTransport(): void { 
        const vehicle = this.createTransport();

        vehicle.startRoute();
    };
    protected abstract createTransport(): IVehicle;
}


export default Transport;