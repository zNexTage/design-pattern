import Token from "../Utils/Token";

interface IMercadoPago {
    authToken(): Token;
    mpSendPayment(): void;
    mpReceivePayment(): void;
}

export default IMercadoPago;