import './employeelogin.css';
import { Link } from 'react-router-dom';
import HomeIcon from "@mui/icons-material/Home"; // Import HomeIcon


function Employeelogin() {
  return (
    <div className="employee-login-container">
      <h1>Employee Login Page</h1>
      <Link to="/">
        <button className="back-to-home-button">
          <span className="home-icon">
            <HomeIcon />
          </span>
          Home
        </button>
      </Link>
    </div>
  );
}

export default Employeelogin;