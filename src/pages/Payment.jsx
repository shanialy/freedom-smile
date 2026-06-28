import "./Dashboard.css";
import "./Payment.css";
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

function Payment() {
  const payments = [
    {
      id: "EYT001",
      name: "John Smith",
      location: "New York",
      date: "May, 5 2026",
      amount: "$25.69",
    },
    {
      id: "EYT001",
      name: "John Smith",
      location: "New York",
      date: "May, 5 2026",
      amount: "$25.69",
    },
    {
      id: "EYT001",
      name: "John Smith",
      location: "New York",
      date: "May, 5 2026",
      amount: "$25.69",
    },
    {
      id: "EYT001",
      name: "John Smith",
      location: "New York",
      date: "May, 5 2026",
      amount: "$25.69",
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
          Payments Management
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

          <div className="payment-card">
            <h3>$1,222</h3>
            <p>Total Rewards</p>
          </div>
        </div>

        {/* Table */}

        <div className="payment-table-box">
          <h4>Recent Payments</h4>

          <table className="payment-table">
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Name</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Location</th>
                <th>Date</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              {payments.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td>{item.location}</td>
                  <td>{item.date}</td>

                  <td>
                    <span className="paid-badge">
                      Paid
                    </span>
                  </td>

                  <td><b>{item.amount}</b></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Revenue Chart */}

        <div className="revenue-box">
  <h4>Revenue breakdown</h4>

  <div className="chart-wrapper">

    <div className="y-axis">
      <span>800000</span>
      <span>600000</span>
      <span>400000</span>
      <span>200000</span>
      <span>0</span>
    </div>

    <div className="revenue-chart">

      <div className="grid-line"></div>
      <div className="grid-line"></div>
      <div className="grid-line"></div>
      <div className="grid-line"></div>

      <div className="bars">
        <div className="chart-bar bar1"></div>
        <div className="chart-bar bar2"></div>
        <div className="chart-bar bar3"></div>
        <div className="chart-bar bar4"></div>
        <div className="chart-bar bar5"></div>
      </div>

    </div>

  </div>
</div>
      </main>
    </div>
  );
}

export default Payment;