import IVehicle from "./Interfaces/IVehicle";

class Bike implements IVehicle {
    startRoute(): void {
        this.getCargo();

        console.log('Iniciando a entrega...');
    }
    getCargo(): void {
        console.log('Já pegamos a entrega!!');
    }
    
}

export default Bike;