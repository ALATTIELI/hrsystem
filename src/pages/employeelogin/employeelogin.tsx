// Employeelogin.tsx
import './employeelogin.css';
import { Link } from 'react-router-dom';
import HomeIcon from "@mui/icons-material/Home";
import EmployeeList from './employeelist';
import { employeesData } from './employeedata'; // Import your employee data

function Employeelogin() {
  return (
    <div className="employee-login-container">
      <h1>Employee Login Page</h1>

      {/* Display the EmployeeList component */}
      <EmployeeList employees={employeesData} />

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
