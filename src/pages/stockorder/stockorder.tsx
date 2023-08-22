import { productsData } from './productdata';
import "./stockorder.css";
import ItemCard from "./itemcard";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home"; // Import HomeIcon
import { useCartContext } from "./cartcontext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Import ShoppingCartIcon


function Stockorder() {
  const { addToCart } = useCartContext(); // Add this line to access addToCart function
  const { cart } = useCartContext();

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
          <div className="cart-count">{cart.length}</div>{" "}
          {/* Display the number of items in the cart */}
        </div>
      </Link>

      <div className="items-container">
        {productsData.map((item, index) => (
          <div key={index}>
            <ItemCard id={item.id} name={item.productname} photoUrl={item.photoUrl} />
            <button onClick={() => addToCart({...item, name: item.productname})}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stockorder;
