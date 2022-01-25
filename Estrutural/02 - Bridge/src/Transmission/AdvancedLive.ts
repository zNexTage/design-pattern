import IPlatform from "../Platforms/Providers/IPlatform";
import Live from "./Live";

class AdvancedLive extends Live {

    constructor(platform: IPlatform) {
        super(platform);
    }

    subtitles(): void {
        console.log('Legendas ativadas na Transmissão');
    }

    comments(): void {
        console.log('Comentários liberados na live');
    }
}

export default AdvancedLive;