import IVehicle from "./Interfaces/IVehicle";

class Car implements IVehicle {
    startRoute(): void {
        this.getCargo();

        console.log('Iniciado o trajeto...');
    }
    getCargo(): void {
        console.log('Pegamos os passageiros, estamos pronto!');
    }
    
}


export default Car;