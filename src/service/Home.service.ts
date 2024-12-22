import axios from 'axios';
import { API_URL } from '@env';

let url = `${API_URL}product`;
export const getHomeProductsApi = async () => {

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}