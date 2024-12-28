import { create } from "zustand";

import ProductDetail from "../../../models/ProductDetail";

type CartState = {
  cart: ProductDetail[]; // Array of Product type
  addToCart: (product: ProductDetail) => void;
  removeFromCart: (id: string) => void;
};

 const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  addToCart: (product) => {
    const cart = get().cart;
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      set({
        cart: cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({
        cart: [...cart, { ...product, quantity: 1 }],
      });
    }
  },
  removeFromCart: (id) => {
    set({
      cart: get().cart.filter((item) => item.id !== id),
    });
  },
}));

export default useCartStore;
