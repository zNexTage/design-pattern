import IDbProduct from "./IDbProduct";

class MongoDbProduct implements IDbProduct {
    getProductById(productId: number): string {
        return `MongoDb: Exibindo os dados do produto ${productId}`
    }    
}


export default MongoDbProduct;