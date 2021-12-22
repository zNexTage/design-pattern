import IVehicles from "./IVehicles";

interface IVehicleCar {
    configurationCar(
        color: string,
        year: number,
        engine: number,
        seats: number): void;
}

export default IVehicleCar;