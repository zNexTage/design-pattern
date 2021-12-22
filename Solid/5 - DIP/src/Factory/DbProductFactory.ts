import Db from "../Model/Db";
import IDbProduct from "../Model/IDbProduct";
import MongoDbProduct from "../Model/MongoDbProduct";
import MySqlProduct from "../Model/MySqlProduct";

class DbProductFactory {
    private static type: Db = Db.MYSQL;

    public static create(): IDbProduct {
        switch (DbProductFactory.type) {
            case Db.MYSQL: return new MySqlProduct();
            case Db.MONGODB: return new MongoDbProduct();
            default: return new MySqlProduct()
        }
    }
}


export default DbProductFactory;