import './borrowitems.css';
import { Link } from 'react-router-dom';

function Borrowitems() {
  return (
    <div className="borrow-items-container">
      <h1>Borrow Items Page</h1>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default Borrowitems;
