import { create } from "zustand";

import ProductDetail from "../../../models/ProductDetail";
import { getCart, getCoupons } from "../../../service/cart.service";

type CartState = {
  cart: ProductDetail[]; // Array of Product type
  getCart: () => void;
  addToCart: (product: ProductDetail) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  paymentMethod: string,
  setPaymentMethod: (method: string) => void;
  coupon_code : string,
  coupons: [],
  getCoupon: () => void;
  setCouponCode : (code: string) => void;
};

 const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  getCart: () => {
    getCart().then((cart) => {
      set({ cart });
    });
  },
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
  updateQuantity: (id, quantity) => {
    set({
      cart: get().cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    });
  },
  paymentMethod: "vnpay",
  setPaymentMethod: (method) => set(() => ({ paymentMethod: method })),
  coupon_code: "",
  coupons: [],
  setCouponCode: (code) => set(() => ({ coupon_code: code })),
  getCoupon: () => {
    getCoupons().then((coupons) => {
      set({ coupons });
    });
  }
}));

export default useCartStore;
