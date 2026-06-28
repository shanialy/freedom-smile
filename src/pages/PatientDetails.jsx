import "./Dashboard.css";
import "./PatientDetails.css";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaUserCircle,
  FaChevronLeft,
  FaEdit,
  FaTrash,
  FaTimes,
} from "react-icons/fa";

// import { FaSearch, FaUserCircle, FaChevronLeft, FaEdit } from "react-icons/fa";

function PatientDetails() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
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
              onClick={() => navigate("/PatientManagement")}
            />
            <h2>Patients Detail</h2>
          </div>

          <div className="details-actions">
            <button
              className="reward-btn"
              onClick={() => navigate("/issue-reward")}
            >
              Issue Reward
            </button>
            <button
              className="notification-btn"
              onClick={() => setShowNotificationModal(true)}
            >
              Send Notification
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="details-content">
          {/* Left Card */}
          <div className="patient-info-card">
            <div className="patient-avatar">
              <FaUserCircle />
            </div>

            <div className="info-row">
              <span>Full Name</span>
              <span>John Smith</span>
            </div>

            <div className="info-row">
              <span>Email Address</span>
              <span>john.smith@email.com</span>
            </div>

            <div className="info-row">
              <span>Phone Number</span>
              <span>+1234567890</span>
            </div>

            <div className="info-row">
              <span>Status</span>
              <span>Active</span>
            </div>

            <div className="info-row">
              <span>Retainer Due Date</span>
              <span>11 Months</span>
            </div>

            <div className="info-row">
              <span>Last Visit</span>
              <span>March, 16 2026</span>
            </div>

            <div className="patient-card-actions">
              <button
                className="delete-patient-btn"
                onClick={() => setShowDeleteModal(true)}
              >
                Delete Patient
              </button>
              <button
                className="edit-patient-btn"
                onClick={() => setShowEditModal(true)}
              >
                <FaEdit />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="appointment-history">
            <h3>Appointment History</h3>

            <div className="history-table-box">
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
                    <td>EV1001</td>
                    <td>John Smith</td>
                    <td>New York</td>
                    <td>May, 5 2026</td>
                    <td>
                      <span className="paid-status">Paid</span>
                    </td>
                    <td>$25.69</td>
                  </tr>

                  <tr>
                    <td>EV1001</td>
                    <td>John Smith</td>
                    <td>New York</td>
                    <td>May, 5 2026</td>
                    <td>
                      <span className="paid-status">Paid</span>
                    </td>
                    <td>$25.69</td>
                  </tr>

                  <tr>
                    <td>EV1001</td>
                    <td>John Smith</td>
                    <td>New York</td>
                    <td>May, 5 2026</td>
                    <td>
                      <span className="paid-status">Paid</span>
                    </td>
                    <td>$25.69</td>
                  </tr>

                  <tr>
                    <td>EV1001</td>
                    <td>John Smith</td>
                    <td>New York</td>
                    <td>May, 5 2026</td>
                    <td>
                      <span className="paid-status">Paid</span>
                    </td>
                    <td>$25.69</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {showDeleteModal && (
          <div
            className="delete-modal-overlay"
            onClick={() => setShowDeleteModal(false)}
          >
            <div className="delete-modal" onClick={(e) => e.stopPropagation()}>
              <button
                className="close-modal-btn"
                onClick={() => setShowDeleteModal(false)}
              >
                <FaTimes />
              </button>

              <div className="delete-icon-circle">
                <FaTrash />
              </div>

              <h3>Delete Patient</h3>

              <p>Are you sure you want to delete this patient?</p>

              <div className="modal-actions">
                <button
                  className="modal-no-btn"
                  onClick={() => setShowDeleteModal(false)}
                >
                  No
                </button>

                <button className="modal-yes-btn">Yes</button>
              </div>
            </div>
          </div>
        )}

        {showEditModal && (
          <div
            className="delete-modal-overlay"
            onClick={() => setShowEditModal(false)}
          >
            <div
              className="edit-patient-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-modal-btn"
                onClick={() => setShowEditModal(false)}
              >
                <FaTimes />
              </button>

              <h3>Edit Patient Details</h3>

              <div className="edit-form">
                <label>Full Name</label>
                <input type="text" placeholder="Patient Full Name" />

                <label>Mobile Number</label>
                <input type="text" placeholder="+123 456 7890" />

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
                  <option>Chicago</option>
                </select>

                <label>Retainer Date</label>
                <input type="date" />

                <button className="save-patient-btn">Save</button>
              </div>
            </div>
          </div>
        )}

        {showNotificationModal && (
          <div
            className="delete-modal-overlay"
            onClick={() => setShowNotificationModal(false)}
          >
            <div
              className="notification-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-modal-btn"
                onClick={() => setShowNotificationModal(false)}
              >
                <FaTimes />
              </button>

              <h3>Send Individual Notification</h3>

              <div className="notification-form">
                <label>Add Subject</label>

                <textarea placeholder="Add Text" rows="5"></textarea>

                <button className="add-notification-btn">Add Now</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default PatientDetails;
