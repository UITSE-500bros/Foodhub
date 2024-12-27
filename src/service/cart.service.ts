import axiosInstance from "./axiosInstance";


class CartService {
    baseURI: string;
    constructor() {
        this.baseURI = "products";
    }
    async getCart() {
        const response = await axiosInstance.get("cart");
    }
    async addToCart (productId: string) {

    }
    async checkout () {

    }
    async removeItem (productId: string) {

    }
}
const cartService = new CartService();
export default cartService;