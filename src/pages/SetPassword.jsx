import "./SetPassword.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function SetPassword() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="SetPassword-page">
      <div className="SetPassword-card">
        <h1>Set Password</h1>

        

        <div className="form-group">
          <label>New Password</label>

          <div className="password-wrapper">
            <input
              style={{ backgroundColor: "#0383C71A" }}
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
            />

            

            <button
              type="button"
              className="eye-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁
            </button>
          </div>
        </div>

        <div className="form-group">
          <label>Confirm Password</label>

          <div className="password-wrapper">
            <input
              style={{ backgroundColor: "#0383C71A" }}
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
            />

            

            <button
              type="button"
              className="eye-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁
            </button>
          </div>
        </div>

      

        <button className="SetPassword-btn">Update Password</button>
      </div>
    </div>
  );
}

export default SetPassword;
