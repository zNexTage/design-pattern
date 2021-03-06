import IVehicle from "../Vehicle/IVehicle";

//Classe Creator
abstract class VehicleFactory {
    //Factory Method
    abstract getVehicle(vehicleName: string): IVehicle;

    pickUp(customerName:string, vehicleName:string):IVehicle {
        const car = this.getVehicle(vehicleName);

        car.pickUp(customerName);

        return car;
    }
}


export default VehicleFactory;