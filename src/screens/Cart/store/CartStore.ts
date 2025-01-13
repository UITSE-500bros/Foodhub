import { create } from "zustand";

import ProductDetail from "../../../models/ProductDetail";
import { addToCart, getCart, getCoupons } from "../../../service/cart.service";

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
  total: number;
  setTotal: (total: number) => void;
};

 const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  total: 0,
  setTotal: (total) => set({ total }),
  getCart: () => {
    getCart().then((cart) => {
      console.log(cart);
      set({ cart });
      set({ total: cart.reduce((acc: number, item: ProductDetail) => acc + item.product_price * item.quantity, 0) });
    });
  },
  addToCart: (product) => {
    const cart = get().cart;
    const existingProduct = cart.find((item) => item.id === product.id);

    const addToServer = async () => {
      await addToCart(product.id, 1); // Update the server with the new quantity
      get().getCart(); // Get updated cart from the server
    };

    if (existingProduct) {
      set({
        cart: cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
      addToServer(); // Call the server update after modifying state
    } else {
      set({
        cart: [...cart, { ...product, quantity: 1 }],
      });
      addToServer(); // Call the server update for a new item
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
