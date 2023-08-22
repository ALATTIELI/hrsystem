import { productsData } from './productdata';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './product.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useCartContext } from './cartcontext'; // Import useCartContext
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Import ShoppingCartIcon


interface ProductParams {
  id: string;
}

function Product() {
  
  const params = useParams() as unknown as ProductParams;
  const { id } = params;

  const product = productsData.find((item) => item.id === id);

  const { addToCart, cart } = useCartContext(); // Access addToCart function from context

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

      <Link to="/cart">
        <div className="cart-container">
          <ShoppingCartIcon className="cart-icon" />
          <div className="cart-count">{cart.length}</div>{" "}
          {/* Display the number of items in the cart */}
        </div>
      </Link>

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
