import DbProductFactory from "../Factory/DbProductFactory";


class Payment {
    pay(productId: number): void {
        const dbProd = DbProductFactory.create();

        const prod = dbProd.getProductById(productId);

        console.log(prod);        
    }
}


export default Payment;