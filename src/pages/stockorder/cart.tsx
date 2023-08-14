// cart.tsx
import { Link } from "react-router-dom";
import { useCartContext } from "./cartcontext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./cart.css";
import { CartItem } from './cartcontext';


function Cart() {
  console.log("CartPage is being rendered");

  const { cart, removeFromCart, setCart } = useCartContext();
  console.log("Current cart contents:", cart);

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const incrementQuantity = (id: string) => {
    setCart((prevCart: CartItem[]) => {
      return prevCart.map((item: CartItem) => {
        const product = products.find(p => p.id === item.id);
        const maxQuantity = product ? product.availableQuantity : 0;
  
        if (item.id === id) {
          return { ...item, quantity: Math.min(item.quantity + 1, maxQuantity) };
        } else {
          return item;
        }
      });
    });
  };
  

  const decrementQuantity = (id: string) => {
    setCart((prevCart: CartItem[]) => {
      return prevCart
        .map((item: CartItem) => {
          if (item.id === id) {
            if (item.quantity <= 1) {
              return null; // return null to filter it out later
            }
            return { ...item, quantity: Math.max(1, item.quantity - 1) }; // Ensure quantity never goes below 1
          } else {
            return item;
          }
        })
        .filter((item: CartItem | null): item is CartItem => item !== null); // use a type guard to inform TypeScript that after the filter, the array is of type CartItem[]
    });
  };
  

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <div>Your cart is empty!</div>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.photoUrl} alt={item.name} width="50" height="50" />

              <div className="item-details">
                <p>{item.name}</p>
                <p>Cost Price: ${item.price.toFixed(2)}</p>
                <p>Quantity Available: {item.quantity}</p>
              </div>

              <div className="item-controls">
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                <input type="number" min="1" value={item.quantity} readOnly />
                <button onClick={() => incrementQuantity(item.id)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            Total: ${calculateTotal().toFixed(2)}
          </div>
        </>
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
