import { API_URL } from "@env"
import apis from "./Request";
let url = `${API_URL}`

class OrderService {
    async getOrdersByUserId(userId: string) {

    }
    async getOrderById(orderId: string) {

    }
    async getOrdersByStatus(status: string) {

    }
    async createOrder() {
        const response = await apis.post(`order/payment`, {
            "amount": 15000,
            "currency": "VND"
        });
        return response;
    }
}
const orderService = new OrderService();
export default orderService;