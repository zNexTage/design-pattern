import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import ProcessPayment from "./ProcessPayment";
import Rewards from "./Rewards";

// const card = new CreditCard();
// const card = new DebitCard();
const card = new Rewards();

const processPayment = new ProcessPayment(card);
processPayment.execute();



