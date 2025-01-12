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
};

export const useFavoriteStore = create<FavoriteStore>((set, get) => {
  return {
    favoriteProducts: [],
    fetchFavorite: async () => {
      try{
        const response = await axiosInstance.get('/user/favourite')
        set({favoriteProducts: response.data})

      }
      catch(error){
        console.log(error)
      }
    },
    addToFavorite:async (product) => {
      try{
        const response = await axiosInstance.post('/user/favourite', {productId: product.id})
        set((state) => {
          return {
            favoriteProducts: [...state.favoriteProducts, product],
          };
        });
      }
      catch(error){
        console.log(error)
      }

    },
      
    removeFromFavorite: async (productId) =>{
      try{
        const response = await axiosInstance.delete(`/user/favourite`,{
          data: {productId}
        })
        await set((state) => {
          return {
            favoriteProducts: state.favoriteProducts.filter(
              (product) => product.id !== productId
            ),
          };
        });
      }
      catch(error){
        console.log(error)
      }
    },
    clearFavorite: async () =>{
      try{
        const response = await axiosInstance.delete(`/user/favourite/all`)
        await set({favoriteProducts: []})
      }
      catch(error){
        console.log(error)
      }
    },
    isFavorite: (productId) => {
      const { favoriteProducts } = get();
      return favoriteProducts.some(
        (product: ProductDetail) => product.id === productId
      );
    },
  };
});
