import CheckPermissionMiddleware from "./Middlewares/CheckPermissionMiddleware";
import CheckUserMiddleware from "./Middlewares/CheckUserMiddleware";
import Server from "./Server";



const server = new Server();

const middleware = new CheckUserMiddleware();

middleware.linkWith(new CheckPermissionMiddleware());

server.setMiddleware(middleware);


const email = 'christian@email.com';
const password = 'us3r@p@ss';

server.login(email, password);