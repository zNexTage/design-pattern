import IPlatform from "./IPlatform";

class FacebookLive implements IPlatform {
    constructor() {
        this.configureRMTP();
        console.log('Facebook Live: Transmissão foi iniciada');
    }

    configureRMTP(): void {
        this.authToken();
        console.log('Facebook Live: Configurando o brodcasting')
    }
    authToken(): void {
        console.log('Facebook Live: Autorizando a aplicação')
    }

}

export default FacebookLive;