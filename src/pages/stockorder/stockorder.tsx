interface RootState {
  cart: {
    items: any[]; // The type can be refined further based on your cart item type
  };
  // ... any other slices of state go here
}

import { productsData } from './productdata';
import "./stockorder.css";
import ItemCard from "./itemcard";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home"; // Import HomeIcon
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Import ShoppingCartIcon
import { useState } from "react"; // Import useState
import { addToCart } from "./cartslice";

function Stockorder() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const handleQuantityChange = (id: string, value: number) => {
    setQuantities(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="stock-order-container">
      <Link to="/">
        <button className="back-to-home-button">
          <span className="home-icon">
            <HomeIcon />
          </span>
          Home
        </button>
      </Link>
      <h1>Stock Order Page</h1>

      {/* Display the cart */}
      <Link to="/cart">
        <div className="cart-container-stock">
          <ShoppingCartIcon className="cart-icon" />
          <div className="cart-count">{cart?.items?.length || 0}</div>
          {/* Display the number of items in the cart */}
        </div>
      </Link>

      <div className="items-container">
        {productsData.map((item, index) => (
          <div key={index}>
            <ItemCard id={item.id} name={item.productname} photoUrl={item.photoUrl} />
            
            <div className="quantity-input-container">
              <label>Quantity: </label>
              <input 
                type="number" 
                value={quantities[item.id] || 1} 
                onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))} 
                min="1"
              />
            </div>
            
            <button onClick={() => dispatch(addToCart({...item, name: item.productname, quantity: quantities[item.id] || 1}))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stockorder;
