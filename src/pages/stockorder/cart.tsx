import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./cart.css";
import { clearCart } from "../../redux/cartslice"; // Import the action to clear the cart
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../../redux/cartslice";
import { productsData } from "./productdata";

interface CartItem {
  id: string;
  name: string;
  photoUrl: string;
  costprice: number;
  quantity: number;
}

function Cart() {
  const cart = useSelector((state: { cart: CartItem[] }) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((sum, item) => {
    if (typeof item.costprice === "number" && typeof item.quantity === "number") {
      return sum + item.costprice * item.quantity;
    } else {
      console.error("Invalid data in cart:", item);
      return sum;
    }
  }, 0);
  
  const removeItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id: string) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id: string) => {
    dispatch(decreaseQuantity(id));
  };
  const handleClearCart = () => {
    dispatch(clearCart()); // Clear the entire cart
  };
  function handleSubmit() {
    console.log(cart);
}

  return (
    <div className="cart-container">
      <div className="clear-cart-container">
        <button onClick={handleClearCart}>Clear Cart</button>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cart.map((item: CartItem) => {
              const productDetails = productsData.find((p) => p.id === item.id);
              return (
                <div key={item.id} className="cart-item">
                  <img src={item.photoUrl} alt={item.name} className="cart-item-image"/>
                  <div className="cart-item-details">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="cart-item-costprice">Cost: AED{productDetails?.costprice.toFixed(2)}</span>
                    <span className="cart-item-availablequantity">Available Quantity: {productDetails?.availablequantity}</span>
                    <div className="cart-item-quantity">
                      <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                      <input type="number" value={item.quantity} readOnly />
                      <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                    </div>
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-summary">
            <span>Cart Summary</span>
            <span>Subtotal: AED: {totalPrice.toFixed(2)}</span>
            <button className="checkout-button" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}

      <Link to="/stockorder" className="back-link">
        <button className="back-button">
          <ArrowBackIcon className="arrow-icon" />
          Back
        </button>
      </Link>
    </div>
  );
}

export default Cart;
