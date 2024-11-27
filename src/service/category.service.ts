import { API_URL } from "@env";
class CategoryService {
    async getCategories() {
        const categories = await fetch(`${API_URL}/categories`);
        return categories;
    }
}