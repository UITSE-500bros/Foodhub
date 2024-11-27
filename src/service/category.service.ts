import { API_URL } from "@env";
class CategoryService {
    async getCategories() {
        const categories = await fetch(`${API_URL}category`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await categories.json();
        return data;
    }
}
const categoriesService = new CategoryService();
export default categoriesService;