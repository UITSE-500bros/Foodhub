import axios from "axios";
import { API_URL } from "@env";
import axiosInstance from "../../../service/axiosInstance";

const fetchProducts = async (endpoint: string) => {
  let url = `${API_URL}/product/${endpoint}`;
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getNewArrivalProductsApi = () => fetchProducts("new_arrivals");
export const getBestSellerProductsApi = () => fetchProducts("best_seller");
export const getExclusiveOfferProductsApi = () => fetchProducts("exclusive");

export const getBannerImagesApi = async () => {
  let url = `${API_URL}/bucket`;
  try {
    const response = await axiosInstance.get(url, {
      params: {
      bucketName: 'banners'
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProductBySearchQueryApi = async (query: string) => {
  let url = `${API_URL}/product?search=${query}`;
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
//Same brand
export const getRecommendedProductsApi = async (product_id: string) => {
  let url = `${API_URL}/recombee/item-to-item`;

  try {
    const response = await axiosInstance.post(url , {
      product_id: product_id
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}; 
