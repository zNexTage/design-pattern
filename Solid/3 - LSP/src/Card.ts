import IPaymentInstrument from "./IPaymentInstrument";


abstract class Card implements IPaymentInstrument {
    validation(): boolean{
        console.log('Validação básica...');

        return true;
    }

    pay(): void {
        console.log('pagamento realizado!');
    }

}


export default Card;