import { API_URL } from "@env"
let url = `${API_URL}/products`

class OrderService {
    async getOrdersByUserId (userId: string) {
        
    }
    async getOrderById (orderId: string) {

    }
    async getOrdersByStatus (status: string) {

    }
}
const orderService = new OrderService();
export default orderService;