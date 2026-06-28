import "./ForgotPass.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleContinue = () => {
  navigate("/OTP_Verification");
};

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
       <button className="login-btn" onClick={handleContinue}>
  Continue
</button>
      </div>
    </div>
  );
}

export default ForgotPassword;
