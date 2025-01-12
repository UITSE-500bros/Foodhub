
import { API_URL } from '@env';
import axiosInstance from '../../../service/axiosInstance';

export const getProductsByIDApi = async (categoryId: string) => {
  const url = `${API_URL}/product/category?category_id=${categoryId}`;
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

