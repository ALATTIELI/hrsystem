// src/App.tsx
import './App.css'; // Import the CSS file
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1> Prestige HR System </h1>
      </div>
      <div className="button-container">
        <Link to="/stockorder">
          <button>Stock Order</button>
        </Link>
        <Link to="/warrantyitems">
          <button>Warranty Items</button>
        </Link>
        <Link to="/borrowitems">
          <button>Borrow Items</button>
        </Link>
        <Link to="/devicementainence">
          <button>Device Mentainence</button>
        </Link>
        <Link to="/employeelogin">
          <button>Employee Login</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
