import "./Dashboard.css";
import "./TipDetail.css";
import logo from "../assets/logo.png";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

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
  FaImage,
} from "react-icons/fa";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

function TipDetail() {
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  return (
    <div className="dashboard-container">
      <Sidebar />

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

        <div className="tip-detail-container">

          <h3 className="tip-detail-title">
            lorem Ipsum......
          </h3>

          <div className="tip-image-box">
            <FaImage />
          </div>

          <p className="tip-detail-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis molestiae, consequatur temporibus.
            Laborum pariatur reprehenderit officiis impedit.
            Consequatur molestias fugiat saepe.
          </p>

          <div className="tip-actions">
            <button
  className="edit-btn"
  onClick={() => navigate("/edit-tip")}
>
  Edit
</button>

            <button
  className="delete-btn"
  onClick={() => setShowDeleteModal(true)}
>
  Delete
</button>
          </div>

        </div>

{showDeleteModal && (
  <div className="delete-modal-overlay">
    <div className="delete-modal">

      <button
        className="modal-close-btn"
        onClick={() => setShowDeleteModal(false)}
      >
        ×
      </button>

      <div className="delete-icon-circle">
        <FaTrash />
      </div>

      <h3 className="delete-modal-title">
        Delete Tip
      </h3>

      <p className="delete-modal-text">
        Are you sure you want to delete this tip?
      </p>

      <div className="delete-modal-buttons">

        <button
          className="cancel-btn"
          onClick={() => setShowDeleteModal(false)}
        >
          No
        </button>

        <button className="confirm-btn">
          Yes
        </button>

      </div>

    </div>
  </div>
)}

      </main>
    </div>
  );
}

export default TipDetail;