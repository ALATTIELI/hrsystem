import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { employeesData } from "./employeedata"; // Import your employee data
import "./employeelogin.css";
import { loginUsingEmail } from "../../utils/api/auth";

function Employeelogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false); // State for login error
  const navigate = useNavigate(); // Use useNavigate here

  // const handleLogin = () => {
  //   // Check if the entered username and password are valid
  //   // Assuming you have a function for validating credentials
  //   const loggedInEmployee = employeesData.find(
  //     (employee) =>
  //       employee.username === username && employee.password === password
  //   );

  //   if (loggedInEmployee) {
  //     // Redirect to the employee's profile page
  //     navigate(`/employee/${loggedInEmployee.id}`);
  //   } else {
  //     // Set login error to true if credentials are incorrect
  //     setLoginError(true);
  //   }
  // };

  const handleLogin = async () => {
    const response = await loginUsingEmail(username, password);
    console.log(response);

    if (response.res === false) {
      alert("Login Failed!");
      return;
    } else {
      console.log(response);
    }
  };

  return (
    <div className="employee-login-container">
      <h1>Employee Login Page</h1>
      <div className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {loginError && (
          <p className="error-message">Incorrect username or password</p>
        )}
      </div>
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
