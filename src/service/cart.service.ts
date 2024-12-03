import { API_URL } from "@env"
let url = `${API_URL}/products`

class CartService {
    async getCart(userId: string) {
        
    }
    async addToCart (userId: string, productId: string) {

    }
    async checkout (userId: string) {

    }
    async removeItem (userId: string, productId: string) {

    }
}
const cartService = new CartService();
export default cartService;