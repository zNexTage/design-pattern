import BikeTransport from "./Transport/BikeTransport";
import CarTransport from "./Transport/CarTransport";
import MotorcycleTransport from "./Transport/MotorcycleTransport";
import Transport from "./Transport/Transport";

declare var process;

let tranp: Transport;

const argv = process.argv;

if(argv.includes('--uber')){
    tranp = new CarTransport();
} else if(argv.includes('--log')){
    tranp = new MotorcycleTransport();
} else if(argv.includes('--bike')){
    tranp = new BikeTransport();
} else {
    console.error('Selecione o tipo de entrega!!');
}

if(tranp){
    tranp.startTransport();
}

