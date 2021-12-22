import Card from "./Card";

class CreditCard extends Card {
    
    validation(): boolean {
        console.log('Verificando o limite...');

        return true;
    }
}


export default CreditCard;