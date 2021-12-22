import TypeVehicle from "./TypeVehicle";
import Car from "./Vehicles/Car";
import Motorcycle from "./Vehicles/Motorcycle";

const type = TypeVehicle.CAR;

let vehicle;

if(type === TypeVehicle.CAR){
    vehicle = new Car('Yellow', 2022, 2.0, 4, 4);
}
else if (type === TypeVehicle.MOTORCYCLE){
    vehicle = new Motorcycle('Yellow', 2022, 2.0);
}