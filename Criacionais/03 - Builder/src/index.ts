import VehicleBuilder from "./Builders/VehicleBuilder";
import Director from "./Director/Director";

const vehicleBuilder = new VehicleBuilder();

const director: Director = new Director(vehicleBuilder);

director.createSedan();

const sedan = vehicleBuilder.getResult();
console.log(`Criando um veículo do tipo: ${sedan.vehicleType}
com ${sedan.wheelsTotal} rodas.
Detalhes
Transmissão: ${sedan.transmission};
Motor: ${sedan.engine};
Assentos: ${sedan.seats}
`);

director.createTruck();

const truck = vehicleBuilder.getResult();
console.log(`Criando um veículo do tipo: ${truck.vehicleType}
com ${truck.wheelsTotal} rodas.
Detalhes
Transmissão: ${truck.transmission};
Motor: ${truck.engine};
Assentos: ${truck.seats}
`);


