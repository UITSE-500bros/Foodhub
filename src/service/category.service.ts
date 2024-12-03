import apis from "./Request";
class CategoryService {
    async getCategories() {
        const categories = await apis.get("category");
        return categories;
    }
}
const categoriesService = new CategoryService();
export default categoriesService;