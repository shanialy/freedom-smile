import "../pages/Dashboard.css";
import logo from "../assets/logo.png";

// import { NavLink } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import {
  FaThLarge,
  FaUserInjured,
  FaBell,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaComments,
  FaChartBar,
  FaUserFriends,
  FaFileAlt,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    setShowLogoutModal(false);
    navigate("/");
  };

  return (
    
    <aside className="sidebar">
      <div className="logo">
        <img
          src={logo}
          alt="Freedom Smile"
          className="logo-img"
        />
      </div>

      <ul className="menu">
        <li>
          <NavLink to="/Dashboard">
            <FaThLarge /> {t('sidebar.dashboard')}
          </NavLink>
        </li>

        <li>
          <NavLink to="/PatientManagement">
            <FaUserInjured /> {t('sidebar.patients')}
          </NavLink>
        </li>

        <li>
          <NavLink to="/Notification">
            <FaBell /> {t('sidebar.notifications')}
          </NavLink>
        </li>

        <li>
          <NavLink to="/Appointment">
            <FaCalendarAlt /> {t('sidebar.appointments')}
          </NavLink>
        </li>

        <li>
          <NavLink to="/Payment">
            <FaMoneyBillWave /> {t('sidebar.payments')}
          </NavLink>
        </li>

        <li>
          <NavLink to="/Messages">
            <FaComments /> {t('sidebar.messages')}
          </NavLink>
        </li>

        <li>
          <NavLink to="/Reports">
            <FaChartBar /> {t('sidebar.reports')}
          </NavLink>
        </li>

        <li>
          <NavLink to="/Referrals">
            <FaUserFriends /> {t('sidebar.referrals')}
          </NavLink>
        </li>

        <li>
          <NavLink to="/ContentManagement">
            <FaFileAlt /> {t('sidebar.content')}
          </NavLink>
        </li>
      </ul>

      <button
        className="logout-btn"
        onClick={() => setShowLogoutModal(true)}
      >
        <FaSignOutAlt /> {t('sidebar.logout')}
      </button>

      {showLogoutModal && (
        <div className="logout-overlay">
          <div className="logout-popup">

            <button
              className="logout-close"
              onClick={() => setShowLogoutModal(false)}
            >
              <FaTimes />
            </button>

            <div className="logout-icon">
              <FaSignOutAlt />
            </div>

            <h3>{t('sidebar.logoutTitle')}</h3>

            <p>{t('sidebar.logoutMessage')}</p>

            <div className="logout-actions">
              <button
                className="logout-no"
                onClick={() => setShowLogoutModal(false)}
              >
                {t('sidebar.no')}
              </button>

              <button
                className="logout-yes"
                onClick={handleLogout}
              >
                {t('sidebar.yes')}
              </button>
            </div>

          </div>
        </div>
      )}

    </aside>
  );
}

export default Sidebar;