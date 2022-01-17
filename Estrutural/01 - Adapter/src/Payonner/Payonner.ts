import Token from "../Utils/Token";
import IPayonnerPayment from "./IPayonnerPayment";

class Payonner implements IPayonnerPayment {
    private token: Token;

    authToken(): Token {
        return new Token();
    }
    sendPayment(): void {
        this.token = this.authToken();
        console.log('Token: ', this.token.token);
        console.log('Enviando pagamento via Payonner');
    }
    receivePayment(): void {
        console.log('Recebendo pagamento via Payonner');
    }

}


export default Payonner;