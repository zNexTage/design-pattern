import Token from "../Utils/Token";
import IPayPalPayment from "./IPayPalPayment";

class PayPal implements IPayPalPayment {
    private token: Token;

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.token = this.authToken();
        console.log('Token: ', this.token.token);
        console.log('Enviando pagamento via PayPal');
    }
    paypalReceive(): void {
        console.log('Recebendo pagamento via PayPal');
    }

}

export default PayPal;