import ILand from "./Providers/ILand";

class Car implements ILand {
    startRoute(): void {
        this.getCargo();

        console.log('Iniciando o trajeto...');
    }
    getCargo(): void {
        console.log('Pegamos os passageiros, estamos prontos!');
    }
    
}


export default Car;