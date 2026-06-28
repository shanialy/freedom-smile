import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";


function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    // Filhal direct dashboard par bhej do
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Login</h1>

        <div className="form-group">
          <label>Email Address</label>
          <input
            style={{ backgroundColor: "#0383C71A" }}
            type="email"
            placeholder="Enter Your Email Address"
          />
        </div>

        <div className="form-group">
          <label>Password</label>

          <div className="password-wrapper">
            <input
              style={{ backgroundColor: "#0383C71A" }}
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
            />

            <button
  type="button"
  className="login-eye-btn"
  onClick={() => setShowPassword(!showPassword)}
>
  {showPassword ? <FaEye /> : <FaEyeSlash />}
</button>
          </div>
        </div>

        <div className="options-row">
          <label className="login-remember-wrap">
  <input type="checkbox" className="login-remember-input" />
  <span className="login-custom-checkbox"></span>
  <span className="login-remember-text">Remember me</span>
</label>

          <Link to="/ForgotPassword">Forgot Password?</Link>
        </div>

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;