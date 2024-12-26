import axios from 'axios';
import { API_URL } from '@env';

export const getProductsByIDApi = async (categoryId: string) => {
  const url = `${API_URL}/product/category?category_id=${categoryId}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    console.log('api:', url);
  }
};

