import IBuilder from "../Builders/Providers/IBuilder";
import Engine from "../Components/Engine";
import Transmission from "../Components/Transmission";
import VehicleType from "../Components/VehicleType";
import Wheel from "../Components/Wheel";

class Director {
    constructor(private builder: IBuilder) { }

    createSedan() {
        this.builder.setVehicleType(VehicleType.SEDAN);
        this.builder.setSeats(5);
        this.builder.setTransmission(Transmission.AUTOMATIC);
        this.builder.setEngine(new Engine(16000));
        this.builder.addWheel(new Wheel(15));
        this.builder.addWheel(new Wheel(15));
        this.builder.addWheel(new Wheel(15));
        this.builder.addWheel(new Wheel(15));        
    }

    createTruck() {
        this.builder.setVehicleType(VehicleType.TRUCK);
        this.builder.setSeats(3);
        this.builder.setTransmission(Transmission.AUTOMATIC_SEQUENTIAL);
        this.builder.setEngine(new Engine(13000));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
    }
}


export default Director;