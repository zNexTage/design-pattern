/**
 * A classe Notify tem como uma única responsabilidade notificar o usuário.
 */
class Notify {
    sendEmail(email: string): boolean {
        console.log(`Enviando email para ${email}`);

        return true;
    }
}

export default Notify;