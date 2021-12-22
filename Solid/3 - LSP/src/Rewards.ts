import IPaymentInstrument from "./IPaymentInstrument";

class Rewards implements IPaymentInstrument{
    validation(): boolean {
        console.log('Verificar a pontuação no rewards');

        return true;
    }
    pay(): void {
        console.log('Pagamento realizado com a pontuação do rewards')
    }
    
}

export default Rewards;