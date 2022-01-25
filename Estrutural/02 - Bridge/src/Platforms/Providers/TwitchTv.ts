import IPlatform from "./IPlatform";

class TwitchTv implements IPlatform {
    constructor(){
        this.configureRMTP();
        console.log('TwitchTv: Transmissão foi iniciada');
    }

    configureRMTP(): void {
        this.authToken();
        console.log('TwitchTv: Configurando o brodcasting')
    }
    authToken(): void {
        console.log('TwitchTv: Autorizando a aplicação')
    }
    
}

export default TwitchTv;