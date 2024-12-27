import axiosInstance from "./axiosInstance";
class ProductService {
  async getProductsByCategory(category: string) {
    const response = await axiosInstance.get(`product/category/${category}`);
    return response.data;
  }
  async getProductsById(id: string) {
    const response = await axiosInstance.get(`product/${id}`);
    return response.data;
  }
}
const productService = new ProductService();

export default productService;
