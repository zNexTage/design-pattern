import database from "../Server/Database";
import Permission from "../Server/Database/Permission";
import Middleware from "./Middleware";

class CheckPermissionMiddleware extends Middleware {
    public check(email: string, password: string): boolean {
        const user = database.find(item => item.email === email);

        if (!user) {
            console.log('Esse usuário não existe.');

            return false;
        }

        const isAdmin = user.permission === Permission.ADMIN;

        if (isAdmin) {
            console.log('Seja bem vindo administrador');
            return true;
        }

        console.log('Seja bem vindo usuário');

        return this.checkNext(email, password);
    }

}


export default CheckPermissionMiddleware;