import "./ForgotPass.css";
import { useState } from "react";

function ForgotPassword() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="forgotpass-card">
        <h1>Forgot Password</h1>

        <div className="form-group">
          <label>Email Address</label>
          <input
            style={{ backgroundColor: "#0383C71A" }}
            type="email"
            placeholder="Enter Your Email Address"
          />
        </div>
        <button className="login-btn">Continue</button>
      </div>
    </div>
  );
}

export default ForgotPassword;
