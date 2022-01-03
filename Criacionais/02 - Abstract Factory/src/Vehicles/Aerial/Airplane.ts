import IAircraft from "./Providers/IAircraft";

class Airplane implements IAircraft {
    startRoute(): void {
        this.checkWind();

        this.getCargo();

        console.log('Iniciando a decolagem');
    }
    getCargo(): void {
        console.log('Pegamos os passageiros, estamos prontos!');
        
    }
    checkWind(): void {
        console.log('Ventos a 25KM, ventos ok!');
    }

}


export default Airplane;