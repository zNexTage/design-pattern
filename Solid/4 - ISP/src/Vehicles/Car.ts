import IVehicleCar from "./IVehicleCar";
import IVehicles from "./IVehicles";

class Car implements IVehicleCar, IVehicles {
    constructor(color: string, year: number, engine: number, seats: number) {
        this.configurationCar(color, year, engine, seats);
    }

    start(): void {
        console.log('Ligando os motores');

    }
    configurationCar(color: string, year: number, engine: number, seats: number): void {
        console.log(`Carro de cor ${color}, do ano ${year} com motor de ${engine} e com ${seats} assentos.`);

        this.start();
    }
}


export default Car;