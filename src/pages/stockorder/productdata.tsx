interface ProductData {
    id: string;
    productname: string;
    description: string;
    price: number;
    photoUrl: string;
    sku: string;
    availableQuantity: number; // Total available quantity
}
  
  const products: ProductData[] = [
    // Your product data here...
    {
      id: "1",
      productname: "Anker nano 65W",
      description: "Fast charger with 65W power output.",
      price: 29.99,
      photoUrl: "/src/assets/ankernano65w.jpeg",
      sku: "10171009",
      availableQuantity: 8,
    },
    {
      id: "2",
      productname: "Power Flow 3 Cable",
      description: "High-speed charging cable for various devices.",
      price: 12.99,
      photoUrl: "/src/assets/powerflow3.jpeg",
      sku: "10171010",
      availableQuantity: 10,
    },
  ];