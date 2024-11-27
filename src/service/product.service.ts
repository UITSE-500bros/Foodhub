import { API_URL } from "@env"
let url = `${API_URL}/products`

class ProductService {
    async getProductsByCategory(category: string) {
        const response = await fetch(`${url}/category/${category}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        const data = await response.json();
        return data
    }
    async getProductsById (id: string) {
        const response = await fetch(`${url}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        const data = await response.json();
        return data;
    }
}