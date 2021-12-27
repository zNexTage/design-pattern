import IVehicle from "./IVehicle";

class Car implements IVehicle {
    constructor(
        private name: string
    ) { }

    pickUp(customerName: string): void {
        console.log(`${this.name} está buscando ${customerName}`);
    }

    stop(): void {
        console.log(`${this.name} parou`);
    }
}


export default Car;