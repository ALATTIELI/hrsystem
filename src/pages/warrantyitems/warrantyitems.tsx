import './warrantyitems.css';
import { Link } from 'react-router-dom';

function Warrantyitems() {
  return (
    <div className="warranty-items-container">
      <h1>Warranty Items Page</h1>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default Warrantyitems;
