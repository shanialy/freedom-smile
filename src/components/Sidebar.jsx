import "../pages/Dashboard.css";
import logo from "../assets/logo.png";

import { NavLink } from "react-router-dom";

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

      <button className="logout-btn">
        <FaSignOutAlt /> Logout
      </button>
    </aside>
  );
}

export default Sidebar;