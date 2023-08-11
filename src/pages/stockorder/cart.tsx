// Cart.tsx
import { Link } from 'react-router-dom';
import { useCartContext } from './cartcontext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import the back icon from MUI

function Cart() {
  useCartContext();

  return (
    <div className="cart-container">
      {/* Add logic to display the cart items */}
      {/* You can map through the cart items and display them here */}
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
