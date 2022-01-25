import IPlatform from "./IPlatform";

class YouTube implements IPlatform {

    constructor(){
        this.configureRMTP();
        console.log('YouTube: Transmissão foi iniciada');
    }

    configureRMTP(): void {
        this.authToken();
        console.log('YouTube: Configurando o brodcasting')
    }
    authToken(): void {
        console.log('YouTube: Autorizando a aplicação')
    }
    
}

export default YouTube;