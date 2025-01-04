import { create } from "zustand";
import ProductDetail from "../../models/ProductDetail";

type FavoriteStore = {
    favoriteProducts: ProductDetail[];
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
                favoriteProducts: state.favoriteProducts.filter((product) => product.product_name !== productId)
            }
        }),
        clearFavorite: () => set((state) => {
            return {
                favoriteProducts: []
            }
        }),
        isFavorite:(productId) => {
          const { favoriteProducts } = get();
          return favoriteProducts.some((product:ProductDetail)=>product.id===productId)
            
        },
    }
})