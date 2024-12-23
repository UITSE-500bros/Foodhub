import axios from "axios";
import { API_URL } from "@env";


export const getNewArrivalProductsApi = async () => {
  let url = `${API_URL}/product/new_arrivals`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    console.log("api url: ", url);
  }
};
