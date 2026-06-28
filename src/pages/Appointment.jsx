import "./Dashboard.css";
import "./Appointment.css";
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

function Appointment() {
  const appointments = [
    {
      time: "08:00 AM",
      name: "Sarah Johnsons",
      type: "Check-up",
      duration: "30 min",
    },
    {
      time: "08:00 AM",
      name: "Sarah Johnsons",
      type: "Check-up",
      duration: "30 min",
    },
    {
      time: "09:00 AM",
      name: "Sarah Johnsons",
      type: "Check-up",
      duration: "30 min",
    },
    {
      time: "09:00 AM",
      name: "Sarah Johnsons",
      type: "Check-up",
      duration: "30 min",
    },
    {
      time: "10:00 AM",
      name: "Sarah Johnsons",
      type: "Check-up",
      duration: "30 min",
    },
    {
      time: "10:00 AM",
      name: "Sarah Johnsons",
      type: "Check-up",
      duration: "30 min",
    },
  ];

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

        <div className="appointment-page">
          <h2 className="appointment-title">
            Appointments
          </h2>

          <div className="appointment-card">
            <div className="appointment-date">
              This Week April 26 - May 2, 2026
            </div>
            <hr />

            {appointments.map((item, index) => (
  <>
    <div className="appointment-row" key={index}>
      <div className="appointment-time">
        {item.time}
      </div>

      <div className="appointment-info">
        <h4>{item.name}</h4>
        <p>{item.type}</p>
        <span>{item.duration}</span>
      </div>

      <button className="schedule-btn">
        Schedule
      </button>
    </div>

    <hr className="appointment-line" />
  </>
))}
            
            {/* <hr /> */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Appointment;