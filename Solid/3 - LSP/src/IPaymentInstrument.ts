interface IPaymentInstrument {
    validation(): boolean;
    pay(): void;
}

export default IPaymentInstrument;