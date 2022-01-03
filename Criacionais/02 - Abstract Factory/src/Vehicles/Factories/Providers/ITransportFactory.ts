import IAircraft from "../../Aerial/Providers/IAircraft";
import ILand from "../../Land/Providers/ILand";

interface ITransportFactory {
    createTransportVehicle(): ILand;
    createTransportAircraft(): IAircraft;
}


export default ITransportFactory;