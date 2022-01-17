import Token from "../Utils/Token";
import IMercadoPago from "./IMercadoPago";

class MercadoPago implements IMercadoPago {
    authToken(): Token {
        return new Token();
    }
    mpSendPayment(): void {
        console.log('Realizando pagamento via Mercado Pago');
    }
    mpReceivePayment(): void {
        console.log('Recebndo pagamento via Mercado Pago');
    }

}


export default MercadoPago;