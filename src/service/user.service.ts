import axiosInstance from "./axiosInstance";

class UserService {
    baseURI: string;
    constructor() {
        this.baseURI = "user/userId";
    }
    private getURI(uri: string) {
        console.log(`${this.baseURI}${uri}`);
        return `${this.baseURI}${uri}`;
    }
    async updateInfo(userId: string, image: string) {
        const response = await axiosInstance.put("", {
            userId: userId,
            Image: image,
        });
        return response.data;
    }
    async getFavorites(userId: string) {
        const favorites = await axiosInstance.get("favorites");
        return favorites.data;
    }
    async addFavorite(userId: string, productId: string) {
        const response = await axiosInstance.post("favorites", {
            productId: productId,
        });
        return response.data;
    }
    async removeFavorite(userId: string, productId: string) {
        const response = await axiosInstance.delete(`favorites/${productId}`);
        return response;
    }
    async checkout(amount: number) {
        const response = await axiosInstance.post("/user/payment", { amount: amount });
        // const responseData = await response.json();
        return response.data;
    }
    async setSession(accessToken: string, refreshToken: string) {
        const response = await axiosInstance.post("/user/getToken", {
            access_token: accessToken,
            refresh_token: refreshToken,
        });
        return response.data;
    }
    async refreshToken(refreshToken: string) {
        const response = await axiosInstance.post("/user/refreshToken", {
            refresh_token: refreshToken,
        });
        return response.data;
    }
}
const userService = new UserService();
export default userService;