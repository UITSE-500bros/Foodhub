import axiosInstance from "./axiosInstance";

class CategoryService {
    async getCategories() {
        const categories = await axiosInstance.get("category");
        return categories;
    }
}
const categoriesService = new CategoryService();
export default categoriesService;