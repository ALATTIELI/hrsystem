/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./BranchLogin.css";
import { loginUsingUsername } from "../../utils/api/auth";
import { useDispatch, useSelector } from "react-redux";
import { clearSession, startSession } from "../../redux/branchslice";
import { useNavigate } from "react-router-dom";

export default function BranchLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [alert, setAlert] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const branch = useSelector((state: any) => state.branch);

  const handleChange = (e: any) => {
    e.preventDefault();
    if (e.target.name === "username") setUsername(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (username === "" || password === "") {
      return;
    }

    setAlert("");
    setIsLoading(true);

    const response = await loginUsingUsername(username, password);
    if (response === false) {
      // alert("Login Failed!");
      setIsLoading(false);
      setAlert("Login Failed");
      return;
    } else {
      setIsLoading(false);
      // alert("User authenticated");
      setLoginSuccess(true); // Show the checkmark
      setAlert("User authenticated");

      // After 1 second, reset the checkmark and proceed
      setTimeout(() => {
        setLoginSuccess(false);
        setAlert("");
        dispatch(startSession({ branch: username }));
        navigate("/");
      }, 1000);
      return;
    }
  };

  useEffect(() => {
    const logged = isSessionValid(branch.sessionStart); // Check if the session is valid

    function isSessionValid(sessionStart: number) {
      if (sessionStart === 0) return false;
      const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds
      const currentTime = Date.now();
      return currentTime - sessionStart <= oneWeekInMilliseconds;
    }

    if (!logged) {
      dispatch(clearSession());
    } else {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let disableBtn: boolean;

  if (isLoading || loginSuccess || username === "" || password === "") {
    disableBtn = true;
  } else {
    disableBtn = false;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <div className="result-container">
          <button
            type="submit"
            className={`submit-button ${isLoading ? "loading" : ""} ${
              loginSuccess ? "success" : ""
            }`}
            disabled={disableBtn} // Disable the button during loading or after success
          >
            {isLoading ? (
              <div
                className={`loader ${isLoading ? "" : "result-hidden"}`}
              ></div>
            ) : loginSuccess ? (
              <div className="success-container">
                <span className="success-checkmark">&#10003;</span>
              </div>
            ) : (
              "Submit"
            )}
          </button>
          {alert ? <p className="alert-message">{alert}</p> : <></>}
        </div>
      </form>
    </div>
  );
}
