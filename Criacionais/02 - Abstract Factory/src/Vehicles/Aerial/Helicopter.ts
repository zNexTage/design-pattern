import IAircraft from "./Providers/IAircraft";

class Helicopter implements IAircraft {
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        
        console.log('Iniciando a decolagem...');
    }
    getCargo(): void {
        console.log('Passageiros ok. Ligando hélices...');
    }
    checkWind(): void {
        console.log('Ventos a 25KM, Sudeste, ventos ok!');
    }
    
}

export default Helicopter;