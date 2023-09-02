import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productsData } from "../pages/stockorder/productdata";

interface CartItem {
  id: string;
  name: string;
  photoUrl: string;
  costprice: number;
  quantity: number;
}

export interface RootState {
  cart: CartItem[];
}

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state[itemIndex].quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload);
      const productMaxQuantity = productsData.find(p => p.id === action.payload)?.availablequantity || 0;
      if (itemIndex >= 0 && state[itemIndex].quantity < productMaxQuantity) {
        state[itemIndex].quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload);
      if (itemIndex >= 0 && state[itemIndex].quantity > 1) {
        state[itemIndex].quantity -= 1;
      }
    },
    handleQuantityChange: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state[itemIndex].quantity = action.payload.quantity;
      }
    },
    clearCart: () => {
      return initialState;
    }
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  handleQuantityChange,
  clearCart
} = cartSlice.actions;

export const getCartItemCount = (state: CartItem[]) => {
  return state.reduce((count, item) => count + item.quantity, 0);
};

export default cartSlice.reducer;
