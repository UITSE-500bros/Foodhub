import apis from "./Request";
class UserService {
    async updateInfo (userId: string, image: string) {
        const response = await apis.put("user/userId", {
            userId: userId,
            Image: image,
        });
        return response;
    }
    async getFavorites (userId: string) {
        const favorites = await apis.get("user/userId/favorites");
        return favorites;
    }
    async addFavorite (userId: string, productId: string) {
        const response = await apis.post("user/userId/favorites", {
            userId: userId,
            productId: productId,
        });
        return response;
    }
    async removeFavorite (userId: string, productId: string) {
        const response = await apis.delete("user/userId/favorites/productId");
        return response;
    }
    async checkout (userId: string, ) {
        const response = await apis.post("user/userId/checkout", {
            userId: userId
        });
        return response;
    }
}
const userService = new UserService();
export default userService;
