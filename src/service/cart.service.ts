import apis from "./Request";

class CartService {
    baseURI: string;
    constructor() {
        this.baseURI = "products";
    }
    async getCart() {
        const response = await apis.get("cart");
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