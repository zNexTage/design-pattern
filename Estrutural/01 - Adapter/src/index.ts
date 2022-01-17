import MercadoPagoAdapter from "./Adapters/MercadoPagoAdapter";
import PayonnerAdapter from "./Adapters/PayonnerAdapter";
import MercadoPago from "./MercadoPago/MercadoPago";
import IPayonnerPayment from "./Payonner/IPayonnerPayment";
import Payonner from "./Payonner/Payonner";
import IPayPalPayment from "./PayPal/IPayPalPayment";
import PayPal from "./PayPal/PayPal";

// const payment: IPayPalPayment = new PayPal();

// payment.paypalPayment();
// payment.paypalReceive();

// const payment: IPayonnerPayment = new Payonner();
// payment.sendPayment();
// payment.receivePayment();


const payonner: Payonner = new Payonner();


let payment: IPayPalPayment = new PayonnerAdapter(payonner);

payment.paypalPayment();
payment.paypalReceive();
console.log('--------------');


const mercadoPago: MercadoPago = new MercadoPago();

payment = new MercadoPagoAdapter(mercadoPago);
payment.paypalPayment();
payment.paypalReceive();