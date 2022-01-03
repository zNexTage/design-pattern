import IAircraft from "../Aerial/Providers/IAircraft";
import ITransportFactory from "../Factories/Providers/ITransportFactory";
import ILand from "../Land/Providers/ILand";

class Client {
    private vehicle: ILand;
    private aircraft: IAircraft;

    constructor(private factory: ITransportFactory) {
        this.vehicle = factory.createTransportVehicle();
        this.aircraft = factory.createTransportAircraft();
    }

    startRoute(): void {
        this.vehicle.startRoute();
        this.aircraft.startRoute();
    }
}


export default Client;