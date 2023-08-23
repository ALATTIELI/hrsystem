import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productsData } from "./productdata";

interface CartItem {
  id: string;
  name: string;
  photoUrl: string;
  price: number;
  quantity: number;
}

export interface RootState {
    cart: CartItem[];
    // ... any other slices of state go here
  }

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      // Find the item in the cart
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        // If item exists, increase its quantity
        state[itemIndex].quantity += action.payload.quantity;
      } else {
        // If item doesn't exist, add it to the cart
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload);
      if (itemIndex >= 0) {
        state[itemIndex].quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload);
      if (itemIndex >= 0 && state[itemIndex].quantity > 1) {
        state[itemIndex].quantity -= 1;
      }
    },
    handleQuantityChange: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state[itemIndex].quantity = action.payload.quantity;
      }
    },
  },
});

export const getMaxQuantity = (productId: string) => {
  const product = productsData.find((p) => p.id === productId);
  return product ? product.quantity : 0;
};

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  handleQuantityChange,
} = cartSlice.actions;

export default cartSlice.reducer;
export const getCartItemCount = (state: CartItem[]) => {
    return state.reduce((count, item) => count + item.quantity, 0);
};

  
