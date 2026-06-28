import "./Dashboard.css";
import "./Reports.css";
import logo from "../assets/logo.png";
import Sidebar from "../components/Sidebar";

import {
  FaThLarge,
  FaUserInjured,
  FaBell,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaEnvelope,
  FaChartBar,
  FaUserFriends,
  FaFileAlt,
  FaSignOutAlt,
  FaSearch,
} from "react-icons/fa";

function Reports() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="main-content">
        {/* Navbar */}
        <div className="navbar">
          <div className="search-box">
            <FaSearch />
            <input type="text" placeholder="Search..." />
          </div>

          <div className="admin-profile">
            <div className="avatar">SM</div>

            <div>
              <h5>Super Admin</h5>
              <p>admin@gmail.com</p>
            </div>
          </div>
        </div>

        <h2 className="report-title">
          Report Management
        </h2>

        <div className="report-card">
          <div className="report-form">
            <div className="report-field">
              <label>Report Type</label>

              <select>
                <option>Revenue Report</option>
                <option>Patient Report</option>
                <option>Appointment Report</option>
              </select>
            </div>

            <div className="report-field">
              <label>Start Date</label>

              <input
                type="text"
                placeholder="11/01/2026"
              />
            </div>

            <div className="report-field">
              <label>End Date</label>

              <input
                type="text"
                placeholder="11/08/2026"
              />
            </div>
          </div>

          <button className="export-btn">
            Export File
          </button>
        </div>
      </main>
    </div>
  );
}

export default Reports;