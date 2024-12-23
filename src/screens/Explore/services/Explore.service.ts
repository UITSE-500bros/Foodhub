import { API_URL } from "@env";
import axios from "axios";

export const getCategoriesApi = async () => {
    let url = `${API_URL}/category`;
    try {
        const response = await axios.get(url);
        return response.data
    } catch (error) {
        console.error(error);
    }
}