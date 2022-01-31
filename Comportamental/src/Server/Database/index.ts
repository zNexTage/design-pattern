import Permission from "./Permission";

export interface IDatabaseItem {
    email: string;
    password: string;
    permission: Permission
};

const database: Array<IDatabaseItem> = [{
    email: 'master@hcode.com',
    password: '123',
    permission: Permission.ADMIN
}, {
    email: 'christian@email.com',
    password: 'us3r@p@ss',
    permission: Permission.USER
}];

export default database;