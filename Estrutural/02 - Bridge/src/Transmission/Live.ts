import IPlatform from "../Platforms/Providers/IPlatform";
import ITransmission from "./Providers/ITransmission";

class Live implements ITransmission {
    constructor(private platform: IPlatform) {}

    broadcasting(): void {
        console.log('Iniciando a transmissão...');
    }
    result(): void {
        console.log('**** On Air ***');

    }

}

export default Live;