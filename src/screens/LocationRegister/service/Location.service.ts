import { VN_LOCATION_API } from "@env";
import axios from "axios";

export const getAllProvincesApi = async () => {
    try{
        const response =await axios.get(`${VN_LOCATION_API}/provinces?size=63`);
        return response.data;
    }
    catch(err){
        console.error(err);
        return null;
    }
}