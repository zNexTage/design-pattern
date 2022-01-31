import database from '../Server/Database';
import Middleware from "./Middleware";
import * as chalk from 'chalk';


class CheckUserMiddleware extends Middleware {
    public check(email: string, password: string): boolean {
        const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
        
        if (!emailRegex.test(email)) {
            console.error('Email inválido');

            return false;
        }

        const userExists = database.find(item => item.email === email);

        if (!userExists) {
            console.log('Esse email já está cadastrado.');
            return false;
        }

        return this.checkNext(email, password);
    }

}

export default CheckUserMiddleware;