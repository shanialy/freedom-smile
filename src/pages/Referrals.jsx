import "./Dashboard.css";
import "./Referrals.css";
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

function Referrals() {
 const referrals = [
  {
    referrer: "John Smith",
    referredPatient: "Milly Johnson",
    date: "May 5, 2026",
    status: "Converted",
    reward: "$100",
    action: "Completed",
  },
  {
    referrer: "Sarah Wilson",
    referredPatient: "David Brown",
    date: "May 8, 2026",
    status: "Converted",
    reward: "$75",
    action: "Completed",
  },
  {
    referrer: "Michael Clark",
    referredPatient: "Emma Davis",
    date: "May 10, 2026",
    status: "Converted",
    reward: "$120",
    action: "Completed",
  },
  {
    referrer: "Olivia Taylor",
    referredPatient: "James Wilson",
    date: "May 12, 2026",
    status: "Converted",
    reward: "$90",
    action: "Completed",
  },
  {
    referrer: "Daniel Lee",
    referredPatient: "Sophia Martin",
    date: "May 15, 2026",
    status: "Converted",
    reward: "$80",
    action: "Completed",
  },
];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
     <Sidebar />

      {/* Main */}
      <main className="main-content">
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

        <h2 className="payment-title">
          Referrals
        </h2>

        {/* Cards */}

        <div className="payment-cards">
          <div className="payment-card">
            <h3>$5,235</h3>
            <p>Total Revenue</p>
          </div>

          <div className="payment-card">
            <h3>$2,261</h3>
            <p>Total Tax</p>
          </div>

          <div className="payment-card">
            <h3>$1,542</h3>
            <p>Total Discounts</p>
          </div>

          {/* <div className="payment-card">
            <h3>$1,222</h3>
            <p>Total Rewards</p>
          </div> */}
        </div>

        {/* Table */}

        <div className="payment-table-box">
          <h4>Referrals List</h4>

          <table className="payment-table">
            <thead>
              <tr>
                <th>Referrer</th>
                <th>Referrerd Patient</th>
                <th>Date</th>
                <th></th>
                <th>Status</th>
                <th></th>
                <th></th>
                <th></th>
                <th>Reward</th>
                <th></th>
                <th>Action</th>
              </tr>
            </thead>
<tbody>
  {referrals.map((item, index) => (
    <tr key={index}>
      <td>{item.referrer}</td>
      <td>{item.referredPatient}</td>
      <td>{item.date}</td>
      <td></td>

      <td>
        <span
          className={
            item.status === "Converted"
              ? "paid-badge"
              : "pending-badge"
          }
        >
          {item.status}
        </span>
      </td>

      <td></td>
      <td></td>
      <td></td>
      <td>{item.reward}</td>
      <td></td>

      <td>
         <b> {item.action} </b>
      </td>
    </tr>
  ))}
</tbody>
          </table>
        </div>

        {/* Revenue Chart */}

        
      </main>
    </div>
  );
}

export default Referrals;