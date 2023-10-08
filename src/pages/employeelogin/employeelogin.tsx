import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import "./employeelogin.css";
import { loginUsingEmail } from "../../utils/api/auth";

function Employeelogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false); // State for login error
  const navigate = useNavigate(); // Use useNavigate here

  const handleLogin = async () => {
    const response = await loginUsingEmail(username, password);
    console.log(response);

    if (response.res === false || response.data === null) {
      // alert("Login Failed!");
      setLoginError(true);
      return;
    } else {
      console.log(response);
      navigate(`/employee/${response.data.$id}`);
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
