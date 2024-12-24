import axios from "axios";
import { API_URL } from "@env";
export const getProductsByIDApi = async (id: string) => {
  try {
    const res = await axios.get(
      `${API_URL}/product/product_detail?product_id=${id}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
