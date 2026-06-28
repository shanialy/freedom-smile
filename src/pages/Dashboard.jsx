import "./Dashboard.css";
import logo from "../assets/logo.png";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

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

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
     <div className={`sidebar-wrapper ${sidebarOpen ? "show" : ""}`}>
  <Sidebar />
</div>
{sidebarOpen && (
  <div
    className="sidebar-overlay"
    onClick={() => setSidebarOpen(false)}
  />
)}

      {/* Main Content */}
      <main className="main-content">
        {/* Navbar */}
        <div className="navbar">

  <button
    className="menu-toggle"
    onClick={() => setSidebarOpen(!sidebarOpen)}
  >
    <FaBars />
  </button>

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

        {/* Heading */}
        <div className="heading-row">
          <h2>
            Good Morning, <span>Freedom Smile</span>
          </h2>

          <button
  className="patient-btn"
  onClick={() => setShowModal(true)}
>
  Add Patient
</button>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          <div className="card">
            <h3>$5,235</h3>
            <p>Total Revenue</p>
          </div>

          <div className="card">
            <h3>453</h3>
            <p>Active Patients</p>
          </div>

          <div className="card">
            <h3>14</h3>
            <p>Pending Orders</p>
          </div>

          <div className="card">
            <h3>85</h3>
            <p>Upcoming Appointments</p>
          </div>
        </div>

        {/* Charts */}
       {/* Charts */}
<div className="charts">

  {/* Revenue Trend */}
  <div className="chart-box">
    <h4>Revenue trend</h4>

    <div className="chart-area">
      <div className="y-labels">
        <span>800000</span>
        <span>600000</span>
        <span>400000</span>
        <span>200000</span>
        <span>0</span>
      </div>

      <div className="graph">
        <div className="grid-lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="bars">
          <div className="bar rev1"></div>
          <div className="bar rev2"></div>
          <div className="bar rev3"></div>
          <div className="bar rev4"></div>
          <div className="bar rev5 active"></div>
        </div>
      </div>
    </div>
  </div>

  {/* Patient Growth */}
  <div className="chart-box">
    <h4>Patient growth</h4>

    <div className="chart-area">
      <div className="y-labels">
        <span>800000</span>
        <span>600000</span>
        <span>400000</span>
        <span>200000</span>
        <span>0</span>
      </div>

      <div className="graph">
        <div className="grid-lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="bars">
          <div className="bar pat1"></div>
          <div className="bar pat2"></div>
          <div className="bar pat3 active"></div>
          <div className="bar pat4"></div>
          <div className="bar pat5"></div>
        </div>
      </div>
    </div>
  </div>

</div>

        {/* Tables */}
        <div className="bottom-section">
          <div className="appointments">
            <h4>New Appointments</h4>

            <table>
              <thead>
                <tr>
                  <th>Patient ID</th>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>EY1001</td>
                  <td>John Smith</td>
                  <td>New York</td>
                  <td>May 5, 2026</td>
                  <td>
                    <span className="paid">Paid</span>
                  </td>
                  <td>$25.69</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="activity">
            <h4>Recent Activity</h4>

            <ul>
              <li>Appointment booked with Dr Roy</li>
              <li>New patient registered</li>
              <li>Invoice generated</li>
              <li>Appointment completed</li>
            </ul>
          </div>
        </div>
        {showModal && (
  <div
    className="modal-overlay"
    onClick={() => setShowModal(false)}
  >
    <div
      className="patient-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="close-btn"
        onClick={() => setShowModal(false)}
      >
        ×
      </button>

      <h3>Add New Patient</h3>

      <form>
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Patient Full Name"
        />

        <label>Mobile Number</label>
        <input
          type="text"
          placeholder="+1 123 456 7890"
        />

        <label>Gender</label>
        <select>
          <option>Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <label>Date Of Birth</label>
        <input type="date" />

        <h4>Clinic & Retainer Details</h4>

        <label>Clinic Location</label>
        <select>
          <option>Select Clinic Location</option>
          <option>New York</option>
          <option>California</option>
        </select>

        <label>Retainer Date</label>
        <input type="date" />

        <button
          type="submit"
          className="add-now-btn"
        >
          Add Now
        </button>
      </form>
    </div>
  </div>
)}
      </main>
    </div>
  );
}

export default Dashboard;