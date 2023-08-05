import './employeelogin.css';
import { Link } from 'react-router-dom';

function Employeelogin() {
  return (
    <div className="employee-login-container">
      <h1>Employee Login Page</h1>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default Employeelogin;