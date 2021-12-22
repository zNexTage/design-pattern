import IDbProduct from "./IDbProduct";

class MySqlProduct implements IDbProduct {
    getProductById(productId: number): string {
        return `MYSQL: Exibindo dados do produto ${productId}`;
    }
}


export default MySqlProduct;