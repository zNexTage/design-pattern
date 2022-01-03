import Airplane from "../Aerial/Airplane";
import IAircraft from "../Aerial/Providers/IAircraft";
import Car from "../Land/Car";
import ILand from "../Land/Providers/ILand";
import ITransportFactory from "./Providers/ITransportFactory";

class UberTransport implements ITransportFactory {
    createTransportVehicle(): ILand {
        return new Car();
    }
    createTransportAircraft(): IAircraft {
        return new Airplane();
    }

}

export default UberTransport;