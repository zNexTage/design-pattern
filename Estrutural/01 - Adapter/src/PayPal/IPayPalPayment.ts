import Token from "../Utils/Token";

interface IPayPalPayment {
    authToken(): Token;
    paypalPayment(): void;
    paypalReceive(): void;
}


export default IPayPalPayment;