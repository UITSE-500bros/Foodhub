import { API_URL } from "@env";
import axiosInstance from "../../../service/axiosInstance";

export const getCategoriesApi = async () => {
    let url = `${API_URL}/category`;
    try {
        const response = await axiosInstance.get(url);
        return response.data
    } catch (error) {
        console.error(error);
    }
}