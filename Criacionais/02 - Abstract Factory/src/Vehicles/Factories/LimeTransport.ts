import Drone from "../Aerial/Drone";
import IAircraft from "../Aerial/Providers/IAircraft";
import ILand from "../Land/Providers/ILand";
import Scooters from "../Land/Scooters";
import ITransportFactory from "./Providers/ITransportFactory";

class LimeTransport implements ITransportFactory {
    createTransportVehicle(): ILand {
        return new Scooters();
    }
    createTransportAircraft(): IAircraft {
        return new Drone();
    }
    
}


export default LimeTransport;