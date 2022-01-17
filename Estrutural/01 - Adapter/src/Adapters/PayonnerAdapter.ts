import Payonner from "../Payonner/Payonner";
import IPayPalPayment from "../PayPal/IPayPalPayment";
import Token from "../Utils/Token";

class PayonnerAdapter implements IPayPalPayment {
    authToken(): Token {
        return this.payonner.authToken();
    }

    constructor(private payonner: Payonner) { }

    paypalPayment(): void {
        this.payonner.sendPayment();
    }
    paypalReceive(): void {
        this.payonner.receivePayment();
    }

}

export default PayonnerAdapter;