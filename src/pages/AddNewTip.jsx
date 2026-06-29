// import "./Dashboard.css";
import "./AddNewTip.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
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
  FaCloudUploadAlt,
} from "react-icons/fa";
function AddNewTip() {
const navigate = useNavigate();
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

        <h2 className="add-tip-title">Add New Tip</h2>

        <div className="tip-form-card">
          <div className="upload-box">
            <FaCloudUploadAlt className="upload-icon" />

            <span>Upload Image</span>

            <input type="file" />
          </div>

          <div className="form-group">
            <label>Title</label>

            <input className="addNewTipInput" type="text" placeholder="Enter Topic" />
          </div>

          <div className="form-group">
            <label>Content</label>

            <textarea rows="7" placeholder="Payment Types"></textarea>
          </div>

          <button
            className="publish-btn"
            onClick={() => navigate("/ContentManagement")}
          >
            Publish
          </button>
        </div>
      </main>
    </div>
  );
}

export default AddNewTip;
