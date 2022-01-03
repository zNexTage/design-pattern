import ILand from "./Providers/ILand";

class Motorcycle implements ILand {
    startRoute(): void {
        this.getCargo();

        console.log('Iniciando a entrega...');
    }
    getCargo(): void {
        console.log('Já pegamos a encomenda!');
    }
}


export default Motorcycle;