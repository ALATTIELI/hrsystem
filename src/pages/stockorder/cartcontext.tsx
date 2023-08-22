import React, { createContext, useContext, useState } from "react";
import { productsData } from "./productdata";

interface CartItem {
  id: string;
  name: string;
  photoUrl: string;
  price: number;
  quantity: number;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeItem: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  handleQuantityChange: (id: string, value: number) => void;
  getMaxQuantity: (id: string) => number;  // <-- Define this method in the context props
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

const getMaxQuantity = (id: string) => {
  const product = productsData.find((prod) => prod.id === id);
  return product?.quantity || 0;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItem = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id: string) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === id && item.quantity < getMaxQuantity(id)) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  const decreaseQuantity = (id: string) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  };

  const handleQuantityChange = (id: string, value: number) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: value };
        }
        return item;
      });
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        handleQuantityChange,
        getMaxQuantity  // <-- Provide this method to the context
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
