// cartcontext.tsx
import { createContext, useContext, ReactNode, useState } from 'react';

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   photoUrl: string;
//   quantity: number;
// }
// cartcontext.tsx

export interface CartItem {
  id: string;
  name: string;
  price: number;
  photoUrl: string;
  quantity: number;
}

// ... rest of your code


interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(i => i.id === item.id);

      if (existingItem) {
        // Update the quantity for the existing item
        return prevCart.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      } else {
        // Add the new item to the cart
        return [...prevCart, item];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
}
