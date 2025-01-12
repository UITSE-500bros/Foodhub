import { create } from "zustand";
import ProductDetail from "../../models/ProductDetail";
import axiosInstance from "../../service/axiosInstance";

type FavoriteStore = {
  favoriteProducts: ProductDetail[];
  addToFavorite: (product: ProductDetail) => Promise<void>;
  removeFromFavorite: (productId: string) => Promise<void>;
  clearFavorite: () => void;
  isFavorite: (productId: string) => boolean;
  fetchFavorite: () => Promise<void>;
  addToFavoriteOptimistic: (product: ProductDetail) => void;
  removeFromFavoriteOptimistic: (productId: string) => void;
};

export const useFavoriteStore = create<FavoriteStore>((set, get) => {
  return {
    favoriteProducts: [],
    fetchFavorite: async () => {
      try {
        const response = await axiosInstance.get("/user/favorites");
        set({ favoriteProducts: response.data });
        console.log(response.data);
        
      } catch (error) {
        console.log(error);
      }
    },
    addToFavorite: async (product) => {
      try {
        await axiosInstance.post("/user/favorites", {
          productId: product.id,
        });
        product.quantity = 1;
        set((state) => {
          return {
            favoriteProducts: [...state.favoriteProducts, product],
          };
        });
      } catch (error) {
        console.error("error in addToFavorite", error);
      }
    },

    removeFromFavorite: async (productId) => {
      try {
        await axiosInstance.delete(`/user/favorites`, {
          data: { productId },
        });
        await set((state) => {
          return {
            favoriteProducts: state.favoriteProducts.filter(
              (product) => product.id !== productId
            ),
          };
        });
      } catch (error) {
        console.log(error);
      }
    },
    clearFavorite: async () => {
      try {
        const response = await axiosInstance.delete(`/user/favourite/all`);
        await set({ favoriteProducts: [] });
      } catch (error) {
        console.log(error);
      }
    },
    isFavorite: (productId) => {
      const { favoriteProducts } = get();
      return favoriteProducts.some(
        (product: ProductDetail) => product.id === productId
      );
    },
    addToFavoriteOptimistic: (product: ProductDetail) => {
      set((state) => ({
        favoriteProducts: [...state.favoriteProducts, product],
      }));
    },
    removeFromFavoriteOptimistic: (productId: string) => {
      set((state) => ({
        favoriteProducts: state.favoriteProducts.filter(
          (product) => product.id !== productId
        ),
      }));
    },
  };
});
