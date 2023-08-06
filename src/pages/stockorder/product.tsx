import { Link, useParams } from "react-router-dom";
import "./product.css";

interface ProductParams {
  id: string;
}

interface ProductData {
  id: string;
  productname: string;
  description: string;
  price: number;
  photoUrl: string;
  sku: string;
  quantity: number;
}

const products: ProductData[] = [
  {
    id: "1",
    productname: "Anker nano 65W",
    description: "Fast charger with 65W power output.",
    price: 29.99,
    photoUrl: "/src/assets/ankernano65w.jpeg",
    sku: "10171009",
    quantity: 10,
  },
  {
    id: "2",
    productname: "Power Flow 3 Cable",
    description: "High-speed charging cable for various devices.",
    price: 12.99,
    photoUrl: "/src/assets/powerflow3.jpeg",
    sku: "10171010",
    quantity: 10,
  },
  // Add more products here...
];

function Product() {
  const params = useParams() as unknown as ProductParams;
  const { id } = params;

  const product = products.find((item) => item.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-container">
      <div className="product-image-container">
        <img src={product.photoUrl} alt={product.productname} />
      </div>
      <div className="product-details">
        <h1>{product.productname}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>SKU: {product.sku}</p>
        <p>Quantity: {product.quantity}</p>
      </div>

      <Link to="/stockorder">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default Product;
