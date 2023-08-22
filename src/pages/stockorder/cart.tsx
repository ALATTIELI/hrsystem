import { Link } from 'react-router-dom';
import { useCartContext } from './cartcontext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './cart.css';

function Cart() {
    const { cart, increaseQuantity, decreaseQuantity, handleQuantityChange, getMaxQuantity } = useCartContext();

    return (
        <div className="cart-container">
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map(item => (
                        <li key={item.id}>
                            <img src={item.photoUrl} alt={item.name} width="50" />
                            <div>
                                <span>{item.name}</span>
                                <span>Price: ${item.price.toFixed(2)}</span>
                                <span>Quantity: {item.quantity}</span>
                            </div>
                            <div className="quantity-controls">
                                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                                    min="1"
                                    max={getMaxQuantity(item.id)}  // Use the method from context here
                                />
                                <button onClick={() => increaseQuantity(item.id)}>+</button>
                            </div>
                        </li>
                    ))}
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
