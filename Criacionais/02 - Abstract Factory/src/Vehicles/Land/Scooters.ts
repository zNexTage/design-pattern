import ILand from "./Providers/ILand";

class Scooters implements ILand{
    startRoute(): void {
        this.getCargo();

        console.log('[Patinete] - Iniciando a entrega...');
    }
    getCargo(): void {
        console.log('[Patinete] - Obtendo a carga...');
    }
    
}


export default Scooters;