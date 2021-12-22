import IVehicleMotorcycle from "./IVehicleMotorcycle";
import IVehicles from "./IVehicles";

class Motorcycle implements IVehicleMotorcycle, IVehicles {
    constructor(
        color: string,
        year: number,
        engine: number
    ) {
        this.configurationMotorcycle(color, year, engine);
    }

    start(): void {
        console.log('Ligando os motores');
    }

    configurationMotorcycle(color: string, year: number, engine: number): void {
        console.log(`Uma mota de cor ${color} do ano ${year} e com ${engine} cilindradas`);

        this.start();
    }
}


export default Motorcycle;