import Middleware from "../Middlewares/Middleware";

class Server {
    private middleware: Middleware;
    public setMiddleware(middleware: Middleware) {
        this.middleware = middleware;
    }

    public login(email: string, password: string): boolean {
        if (this.middleware.check(email, password)) {
            console.log('Usuário autenticado com sucesso!');

            return true;
        }

        return false;
    }
}

export default Server;