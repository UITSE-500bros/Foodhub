import { VN_LOCATION_API } from "@env";
import axios from "axios";

export const getAllProvincesApi = async () => {
    try{
        const response =await axios.get(`${VN_LOCATION_API}/provinces?size=63`);
        return response.data.data;
    }
    catch(err){
        console.error(err);
        return null;
    }
}

export const getDistrictsByProvinceIdApi = async (provinceId: string) => {
         const response = await axios.get(`${VN_LOCATION_API}/districts/${provinceId}`);
        return response.data;  
}

export const getWardsByDistrictIdApi = async (districtId: string) => {
    const response = await axios.get(`${VN_LOCATION_API}/wards/${districtId}`);
    return response.data;
}