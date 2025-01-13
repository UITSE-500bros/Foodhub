import ProductDetail from "../models/ProductDetail";
import axiosInstance from "./axiosInstance";


export const getCart = async () => {
    try {
        const res = await axiosInstance.get("/cart/get");
        return res.data;
    } catch (error) {
        throw error;
    }
}
export const addToCart = async (productId: string , quantity: number) => {
    try {
        const res = await axiosInstance.post("/cart/add", { productId, quantity });
        return res.data;
    } catch (error) {
        throw error;
    }
}
export const removeFromCart = async (productId: string) => {
    try {
        const res = await axiosInstance.delete(`/cart/${productId}`);
        return res.data;
    } catch (error) {
        throw error;
    }
}
export const updateQuantity = async (productId: string, quantity: number) => {
    try {
        const res = await axiosInstance.put(`/cart/${productId}`, { quantity });
        return res.data;
    } catch (error) {
        throw error;
    }
}
//VNpay
export const vnpay = async (amount: number , products: ProductDetail[] , delivery_address: string) => {
    try {
        
        const res = await axiosInstance.post("order/createPaymentIntent", { 
            amount: amount , 
            products: products ,
            delivery_address: delivery_address
        });
        return res.data;
    } catch (error) {
        throw error;
    }
}
//COD
export const checkout = async (amount: number , products: ProductDetail[] , delivery_address: string) => {
    try {
        
        const res = await axiosInstance.post("order/cod", { 
            total: amount , 
            products: products ,
            delivery_address: delivery_address
        });

        return res.status;
    } catch (error) {
        throw error;
    }
}
export const clearCart = async () => {  
    try {
        const res = await axiosInstance.delete("/cart");
        return res.data;
    } catch (error) {
        throw error;
    }
}
export const applyCoupon = async (couponCode: string) => {
    try {
        const res = await axiosInstance.post("/coupon", { couponCode });
        return res.data;
    } catch (error) {
        throw error;
    }
}
export const getCoupons = async () => {
    try {
        const res = await axiosInstance.get("/coupon");
        return res.data;
    } catch (error) {
        throw error;
    }
}
export const validateVNPay = async (params: string) => {
    try {
        const res = await axiosInstance.post(`/order/paymentCallback?${params}`);
        return res.data;
    } catch (error) {
        throw error;
    }

}