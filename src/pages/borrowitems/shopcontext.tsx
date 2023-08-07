import { createContext, useContext } from "react";

interface Item {
  sku: string;
  barcode: string;
}

interface Shop {
  id: number;
  name: string;
  availableQuantity: number;
  items: Item[];
}

interface ShopContextType {
  shops: Shop[];
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error("useShopContext must be used within a ShopProvider");
  }
  return context;
};

export default ShopContext;
