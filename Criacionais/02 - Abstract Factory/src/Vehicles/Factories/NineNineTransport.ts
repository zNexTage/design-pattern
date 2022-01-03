import Helicopter from "../Aerial/Helicopter";
import IAircraft from "../Aerial/Providers/IAircraft";
import Motorcycle from "../Land/Motorcycle";
import ILand from "../Land/Providers/ILand";
import ITransportFactory from "./Providers/ITransportFactory";

class NineNineTransport implements ITransportFactory {
    createTransportVehicle(): ILand {
        return new Motorcycle();
    }
    createTransportAircraft(): IAircraft {
        return new Helicopter();
    }

}

export default NineNineTransport;