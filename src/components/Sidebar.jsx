import "../pages/Dashboard.css";
import logo from "../assets/logo.png";

// import { NavLink } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

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
            <FaThLarge /> Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/PatientManagement">
            <FaUserInjured /> Patients
          </NavLink>
        </li>

        <li>
          <NavLink to="/Notification">
            <FaBell /> Notifications
          </NavLink>
        </li>

        <li>
          <NavLink to="/Appointment">
            <FaCalendarAlt /> Appointments
          </NavLink>
        </li>

        <li>
          <NavLink to="/Payment">
            <FaMoneyBillWave /> Payments
          </NavLink>
        </li>

        <li>
  <NavLink to="/Messages">
    <FaComments /> Messages
  </NavLink>
</li>

        <li>
          <NavLink to="/Reports">
            <FaChartBar /> Reports
          </NavLink>
        </li>

        <li>
          <NavLink to="/Referrals">
            <FaUserFriends /> Referrals
          </NavLink>
        </li>

        <li>
          <NavLink to="/ContentManagement">
            <FaFileAlt /> Content
          </NavLink>
        </li>
      </ul>


<button
  className="logout-btn"
  onClick={() => setShowLogoutModal(true)}
>
  <FaSignOutAlt /> Logout
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

      <h3>Logout</h3>

      <p>Are you sure you want to logout your account?</p>

      <div className="logout-actions">
        <button
          className="logout-no"
          onClick={() => setShowLogoutModal(false)}
        >
          No
        </button>

        <button
          className="logout-yes"
          onClick={handleLogout}
        >
          Yes
        </button>
      </div>

    </div>
  </div>
)}

    </aside>
  );
}

export default Sidebar;