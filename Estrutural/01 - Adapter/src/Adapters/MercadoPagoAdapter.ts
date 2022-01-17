import MercadoPago from "../MercadoPago/MercadoPago";
import IPayPalPayment from "../PayPal/IPayPalPayment";
import Token from "../Utils/Token";

class MercadoPagoAdapter implements IPayPalPayment {
    constructor(private mercadoPago: MercadoPago) { }

    authToken(): Token {
        return this.mercadoPago.authToken();
    }
    paypalPayment(): void {
        this.mercadoPago.mpSendPayment();
    }
    paypalReceive(): void {
        this.mercadoPago.mpReceivePayment();
    }

}


export default MercadoPagoAdapter;