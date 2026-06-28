import "./SetPassword.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function SetPassword() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleUpdatePassword = () => {
    navigate("/dashboard");
  };

  return (
    <div className="SetPassword-page">
      <div className="SetPassword-card">
        <h1>Set Password</h1>

        <div className="form-group">
          <label>New Password</label>

          <div className="password-wrapper">
            <input
  style={{ backgroundColor: "#0383C71A" }}
  type={showNewPassword ? "text" : "password"}
  placeholder="Enter Your Password"
/>

<button
  type="button"
  className="eye-btn"
  onClick={() => setShowNewPassword(!showNewPassword)}
>
  {showNewPassword ? <FaEye /> : <FaEyeSlash />}
</button>
          </div>
        </div>

        <div className="form-group">
          <label>Confirm Password</label>

          <div className="password-wrapper">
           <input
  style={{ backgroundColor: "#0383C71A" }}
  type={showConfirmPassword ? "text" : "password"}
  placeholder="Enter Your Password"
/>

<button
  type="button"
  className="eye-btn"
  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
>
  {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
</button>
          </div>
        </div>

        <button className="SetPassword-btn" onClick={handleUpdatePassword}>
          Update Password
        </button>
      </div>
    </div>
  );
}

export default SetPassword;
