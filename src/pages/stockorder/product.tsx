import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './product.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useCartContext } from './cartcontext'; // Import useCartContext

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
  // Your product data here...
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
];

function Product() {
  const params = useParams() as unknown as ProductParams;
  const { id } = params;

  const product = products.find((item) => item.id === id);

  const { addToCart } = useCartContext(); // Access addToCart function from context

  const [quantity, setQuantity] = useState(1); // State to track quantity

  const handleAddToCart = () => {
    addToCart({
      id: product?.id || '',
      name: product?.productname || '',
      price: product?.price || 0,
      quantity: quantity, // Use the selected quantity
      photoUrl: product?.photoUrl || '',
    });
  };

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

        {/* Quantity selector */}
        <label htmlFor="quantity">Quantity Needed:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
          max={product.quantity}
        />

        {/* Add to Cart button */}
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>

      <Link to="/stockorder" className="back-link">
        <button className="back-button">
          <ArrowBackIcon className="arrow-icon" />
          Back
        </button>
      </Link>
    </div>
  );
}

export default Product;
