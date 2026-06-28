import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./SplashScreen.css";
import logo from "../assets/logo.png";

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <div className="left-circle"></div>
      <div className="right-circle"></div>

      <div className="logo-wrapper">
        <img src={logo} alt="Freedom Smile" />
      </div>
    </div>
  );
}

export default SplashScreen;