import { ReactNode } from "react";
import ShopContext, { useShopContext } from "./shopcontext";

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

interface ShopProviderProps {
  children: ReactNode;
}

export function ShopProvider({ children }: ShopProviderProps) {
  const shops: Shop[] = [
    {
      id: 1,
      name: "MBZ",
      availableQuantity: 5,
      items: [
        { sku: "10171009", barcode: "123456789" },
        // Add more items...
      ],
    },
    {
      id: 2,
      name: "GALLERIA",
      availableQuantity: 10,
      items: [
        { sku: "10171009", barcode: "987654321" },
        // Add more items...
      ],
    },

    {
        id: 2,
        name: "GALLERIA",
        availableQuantity: 7,
        items: [
          { sku: "10141007", barcode: "8854689" },
          // Add more items...
        ],
      },

      {
        id: 1,
        name: "MBZ",
        availableQuantity: 5,
        items: [
          { sku: "10141014", barcode: "643775" },
          // Add more items...
        ],
      },
    // Add more shops...
  ];

  return (
    <ShopContext.Provider value={{ shops }}>
      {children}
    </ShopContext.Provider>
  );
}

export { useShopContext }; // Export useShopContext
