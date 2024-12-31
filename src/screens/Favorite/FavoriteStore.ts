import { create } from "zustand";
import Product from "../../models/Product";

type FavoriteStore = {
    favoriteProducts: any[];
    addToFavorite: (product: any) => void;
    removeFromFavorite: (productId: string) => void;
    clearFavorite: () => void;
    isFavorite: (productId: string) => boolean;
}

export const useFavoriteStore = create<FavoriteStore>((set,get)=>{
    return {
        favoriteProducts: [],
        addToFavorite: (product) => set((state) => {
            return {
                favoriteProducts: [...state.favoriteProducts, product]
            }
        }),
        removeFromFavorite: (productId) => set((state) => {
            return {
                favoriteProducts: state.favoriteProducts.filter((product) => product.id !== productId)
            }
        }),
        clearFavorite: () => set((state) => {
            return {
                favoriteProducts: []
            }
        }),
        isFavorite:(productId) => {
          const { favoriteProducts } = get();
          return favoriteProducts.some((product:Product)=>product.id===productId)
            
        },
    }
})