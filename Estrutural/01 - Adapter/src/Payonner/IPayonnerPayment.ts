import Token from "../Utils/Token";

interface IPayonnerPayment {
    authToken(): Token;
    sendPayment(): void;
    receivePayment(): void;
}


export default IPayonnerPayment;