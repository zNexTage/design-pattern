import Client from "./Vehicles/Client/Client";
import Company from "./Vehicles/Enum/Company";
import LimeTransport from "./Vehicles/Factories/LimeTransport";
import NineNineTransport from "./Vehicles/Factories/NineNineTransport";
import ITransportFactory from "./Vehicles/Factories/Providers/ITransportFactory";
import UberTransport from "./Vehicles/Factories/UberTransport";

const currentCompany = Company.LIME;
let factory: ITransportFactory;

switch (currentCompany) {
    case Company.UBER: {
        factory = new UberTransport();
        break;
    }

    case Company.NINENINE: {
        factory = new NineNineTransport();
        break;
    }

    case Company.LIME: {
        factory = new LimeTransport();
        break;
    }

    default: console.error('Company not found!');
}


const client = new Client(factory);

client.startRoute();