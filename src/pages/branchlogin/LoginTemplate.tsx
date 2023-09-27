import { useState } from "react";
import "./BranchLogin.css";
import { loginUsingEmail } from "../../utils/api/auth";

export default function LoginTemplate() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e: any) => {
    e.preventDefault();
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await loginUsingEmail(email, password);
    if (response === false) {
      alert("Login Failed!");
      return;
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" onChange={(e) => handleChange(e)} />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
