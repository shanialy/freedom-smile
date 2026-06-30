import { useState } from "react";
import { FaSearch, FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "../pages/Dashboard.css";

function Navbar() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  return (
    <div className="navbar">
      <div className="search-box">
        <FaSearch />
        <input type="text" placeholder="Search..." />
      </div>

      <div className="navbar-right">

        <div className="language-dropdown">
          <button
            className="language-btn"
            onClick={() => setOpen(!open)}
          >
            <FaGlobe />
            <span>
              {i18n.language === "es" ? "Spanish" : "English"}
            </span>
            <span>▼</span>
          </button>

          {open && (
            <div className="language-menu">
              <div onClick={() => changeLanguage("en")}>
                English
              </div>

              <div onClick={() => changeLanguage("es")}>
                Spanish
              </div>
            </div>
          )}
        </div>

        <div className="admin-profile">
          <div className="avatar">SM</div>

          <div>
            <h5>Super Admin</h5>
            <p>admin@gmail.com</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Navbar;