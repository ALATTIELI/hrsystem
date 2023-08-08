// Cart.tsx
import { useCartContext } from './cartcontext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Import the cart icon from MUI

function Cart() {
  const { cart } = useCartContext();

  return (
    <div className="cart-container">
      <ShoppingCartIcon className="cart-icon" />
      <div className="cart-count">{cart.length}</div> {/* Display the number of items in the cart */}
      {/* Add logic to display the cart items */}
      {/* You can map through the cart items and display them here */}
    </div>
  );
}

export default Cart;
