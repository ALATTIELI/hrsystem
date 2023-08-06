import './product.css';
import { Link } from 'react-router-dom';

function Product() {
  return (
    <div className="product-container">
      <h1>Product Page</h1>
      <Link to="/stockorder">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default Product;