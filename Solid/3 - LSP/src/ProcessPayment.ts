import IPaymentInstrument from "./IPaymentInstrument";

class ProcessPayment {
    constructor(
        private paymentInstrument: IPaymentInstrument
    ) { }

    execute() {
        if (this.paymentInstrument.validation()) {
            this.paymentInstrument.pay();
        }
        else {
            console.log('Não foi possível realizar a validação do pagamento.');
        }
    }
}

export default ProcessPayment;