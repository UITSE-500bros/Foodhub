import apis from "./Request";
class ProductService {
    async getProductsByCategory(category: string) {
        const response = await apis.get(`product/category/${category}`);
        return response;
    }
    async getProductsById (id: string) {
        const response = await apis.get(`product/${id}`);
        return response;
    }
}
const productService = new ProductService();

export default productService;