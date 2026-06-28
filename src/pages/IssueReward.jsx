import "./Dashboard.css";
import "./IssueReward.css";
import Sidebar from "../components/Sidebar";

import {
  FaSearch,
  FaChevronLeft,
  FaGift,
  FaUserCircle,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function IssueReward() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container patient-details-page">
      <Sidebar />

      <main className="main-content">
        {/* Navbar */}
        <div className="navbar">
          <div className="search-box">
            <FaSearch />
            <input type="text" placeholder="Search . . ." />
          </div>

          <div className="admin-profile">
            <div className="avatar">SM</div>

            <div>
              <h5>Super Admin</h5>
              <p>admin@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="details-header">
          <div className="details-title">
            <FaChevronLeft
              className="back-icon"
              onClick={() => navigate("/patient-details")}
            />

            <h2>Issue Rewards</h2>
          </div>
        </div>

        {/* Reward Card */}
        <div className="reward-wrapper">

  <div className="reward-card">
    <div className="reward-progress">
      <h4>Rewards Progress</h4>

      <div className="reward-item">✔ 1 Referral → $100 Gift Card</div>
      <div className="reward-item">✔ 2 Referrals → Miami Heat tickets (regular season)</div>
      <div className="reward-item">○ 3 Referrals → Free Retainer</div>

      <p className="reward-summary">
        02 Reward Issued 01 Remaining
      </p>
    </div>

    <div className="gift-circle">
      <FaGift />
    </div>
  </div>

  <div className="patient-code-section">
    <label>Patient Code</label>

    <div className="patient-code-box">
      <span>#494944</span>
      <span>📋</span>
    </div>
  </div>

  <div className="referral-section">
    <label>Referral Status Tracker</label>

    <div className="referral-users">

      <div className="referral-user">
        <div className="user-icon">
          <FaUserCircle />
        </div>
        <span>Kelvin #0012</span>
        <small>Registered</small>
      </div>

      <div className="referral-user">
        <div className="user-icon2 approved">
          <FaUserCircle />
          <span className="check-badge">✓</span>
        </div>
        <span>John #0011</span>
        <small>Approved</small>
      </div>

      <div className="referral-user">
        <div className="user-icon3 approved">
          <FaUserCircle />
          <span className="check-badge">✓</span>
        </div>
        <span>Mick #0013</span>
        <small>Approved</small>
      </div>

    </div>
  </div>

  <button className="issue-btn">
    Issued
  </button>

</div>
      </main>
    </div>
  );
}

export default IssueReward;