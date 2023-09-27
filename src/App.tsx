// src/App.tsx
import { useDispatch } from "react-redux";
import "./App.css"; // Import the CSS file
import { Link } from "react-router-dom";
import { clearSession } from "./redux/branchslice";

function App() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearSession());
  };
  return (
    <div className="container">
      <p onClick={handleLogout}>Branch Logout</p>
      <div className="header">
        <div>
          <img
            src="/assets/logo1.png"
            alt="Company Logo"
            className="company-logo"
          />
        </div>
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
        <Link to="/devicemaintenance">
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
