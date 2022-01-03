import IAircraft from "./Providers/IAircraft";

class Drone implements IAircraft {
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        
        console.log('[Drone] - Iniciando a entrega...');
    }
    getCargo(): void {
        console.log('[Drone] - Obtendo a encomenda...');
    }
    checkWind(): void {
        console.log('[Drone] - Ventos a 25KM, ventos ok!');
    }
    
}


export default Drone;