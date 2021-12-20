import Customer from "./Customer";
import Notify from "./Notify";

const customer = new Customer();
const notify = new Notify();

customer.email = "email@email.com";
notify.sendEmail(customer.email);