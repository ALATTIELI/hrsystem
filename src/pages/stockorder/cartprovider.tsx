import { createContext, useContext, useState, ReactNode } from "react";



// Define the type for a cart item
interface CartItem {
  id: string;
  name: string;
  price: number;
}

// Define the type for the CartContext
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
}

// Create the CartContext
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider component
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Function to add an item to the cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Provide the cart state and addToCart function to children
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the CartContext
export function useCartContext() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
}
export function cartprovider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
  
    const addToCart = (item: CartItem) => {
      setCart((prevCart) => [...prevCart, item]);
    };
    return (
        <CartContext.Provider value={{ cart, addToCart }}>
          {children}
        </CartContext.Provider>
      );
    }