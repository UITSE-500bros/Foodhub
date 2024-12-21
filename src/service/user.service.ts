import apis from "./Request";
class UserService {
    baseURI: string;
    constructor() {
        this.baseURI = "user/userId";
    }
    private getURI(uri: string) {
        return `${this.baseURI}${uri}`;
    }
    async updateInfo(userId: string, image: string) {
        const response = await apis.put("", {
            userId: userId,
            Image: image,
        });
        return response;
    }
    async getFavorites(userId: string) {
        const favorites = await apis.get("favorites");
        return favorites;
    }
    async addFavorite(userId: string, productId: string) {
        const response = await apis.post("favorites", {
            productId: productId,
        });
        return response;
    }
    async removeFavorite(userId: string, productId: string) {
        const response = await apis.delete("favorites/", {
            productId: productId,
        });
        return response;
    }
    async checkout(amount: number) {
        const response = await apis.post("checkout", {
            ammount: amount,
        });
        return response;
    }
}
const userService = new UserService();
export default userService;
