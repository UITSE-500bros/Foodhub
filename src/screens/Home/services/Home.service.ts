import axios from "axios";
import { API_URL } from "@env";

const fetchProducts = async (endpoint: string) => {
  let url = `${API_URL}/product/${endpoint}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getNewArrivalProductsApi = () => fetchProducts("new_arrivals");
export const getBestSellerProductsApi = () => fetchProducts("best_seller");
export const getExclusiveOfferProductsApi = () => fetchProducts("exclusive");

export const getBannerImagesApi = async () => {
  let url = `${API_URL}/bucket?bucketName=banners`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
