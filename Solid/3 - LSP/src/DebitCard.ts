import Card from "./Card";

class DebitCard extends Card {
    validation(): boolean {
        console.log('Validar se há saldo suficiente...');

        return true;
    }
}


export default DebitCard;