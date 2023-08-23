import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './cart.css';
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, handleQuantityChange } from "./cartslice";
import { productsData } from "./productdata";

interface CartItem {
  id: string;
  name: string;
  photoUrl: string;
  price: number;
  quantity: number;
}

function Cart() {
    const cart = useSelector((state: { cart: CartItem[] }) => state.cart);
    const dispatch = useDispatch();

    return (
        <div className="cart-container">
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item: CartItem) => {
                        const productMaxQuantity = productsData.find(p => p.id === item.id)?.quantity || 0;
                        return (
                            <li key={item.id}>
                                <img src={item.photoUrl} alt={item.name} width="50" />
                                <div>
                                    <span>{item.name}</span>
                                    <span>Price: ${item.price.toFixed(2)}</span>
                                    <span>Quantity: {item.quantity}</span>
                                </div>
                                <div className="quantity-controls">
                                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => dispatch(handleQuantityChange({ id: item.id, quantity: Number(e.target.value) }))}
                                        min="1"
                                        max={productMaxQuantity}
                                    />
                                    <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
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
