import "./Dashboard.css";
import "./PatientManagement.css";
import logo from "../assets/logo.png";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import {
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
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function PatientManagement() {
  const navigate = useNavigate();
  // const [showVisitModal, setShowVisitModal] = useState(false);
  const [showVisitModal, setShowVisitModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const patients = [
    {
      name: "John Smith",
      contact: "+1234567890",
      location: "New York, NY",
      status: "Active",
      dueTime: "11 Months",
      lastVisit: "March, 16 2026",
    },
    {
      name: "John Smith",
      contact: "+1234567890",
      location: "New York, NY",
      status: "Active",
      dueTime: "11 Months",
      lastVisit: "March, 16 2026",
    },
    {
      name: "John Smith",
      contact: "+1234567890",
      location: "New York, NY",
      status: "Active",
      dueTime: "11 Months",
      lastVisit: "March, 16 2026",
    },
    {
      name: "John Smith",
      contact: "+1234567890",
      location: "New York, NY",
      status: "Active",
      dueTime: "11 Months",
      lastVisit: "March, 16 2026",
    },
    {
      name: "John Smith",
      contact: "+1234567890",
      location: "New York, NY",
      status: "Active",
      dueTime: "11 Months",
      lastVisit: "March, 16 2026",
    },
    {
      name: "John Smith",
      contact: "+1234567890",
      location: "New York, NY",
      status: "Active",
      dueTime: "11 Months",
      lastVisit: "March, 16 2026",
    },
    {
      name: "John Smith",
      contact: "+1234567890",
      location: "New York, NY",
      status: "Active",
      dueTime: "11 Months",
      lastVisit: "March, 16 2026",
    },
    {
      name: "John Smith",
      contact: "+1234567890",
      location: "New York, NY",
      status: "Active",
      dueTime: "11 Months",
      lastVisit: "March, 16 2026",
    },
    {
      name: "John Smith",
      contact: "+1234567890",
      location: "New York, NY",
      status: "Active",
      dueTime: "11 Months",
      lastVisit: "March, 16 2026",
    },
  ];

  return (
    <div
      className={`dashboard-container ${
        showVisitModal || showDeleteModal ? "modal-active" : ""
      }`}
    >
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

        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h2 className="patient-title">Patients Management</h2>

          <button className="patient-btn" style={{ marginTop: "10px" }}>
            Add Patient
          </button>
        </div>

        {/* Table */}
        <div className="patient-table-wrapper">
          <table className="patient-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Clinic Location</th>
                <th>Status</th>
                <th>Retainer Due Time</th>
                <th>Last Visit</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {patients.map((patient, index) => (
                <tr
                  key={index}
                  className="patient-row"
                  onClick={() => navigate("/PatientDetails")}
                >
                  <td>{patient.name}</td>
                  <td>{patient.contact}</td>
                  <td>{patient.location}</td>
                  <td>{patient.status}</td>
                  <td>{patient.dueTime}</td>
                  <td>
                    {patient.lastVisit}{" "}
                    <FaEdit
                      className="edit-icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowVisitModal(true);
                      }}
                    />
                  </td>

                  <td>
                    <div className="actions">
                      {/* <FaEye className="view-icon" /> */}
                      <FaEdit
                        className="edit-icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowVisitModal(true);
                        }}
                      />
                      <FaTrash
                        className="delete-icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowDeleteModal(true);
                        }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {showVisitModal && (
          <div
            className="visit-modal-overlay"
            onClick={() => setShowVisitModal(false)}
          >
            <div className="visit-modal" onClick={(e) => e.stopPropagation()}>
              <button
                className="visit-close-btn"
                onClick={() => setShowVisitModal(false)}
              >
                ×
              </button>

              <h3>Update Last Visit</h3>

              <form>
                <label>Update Date</label>

                <input type="date" placeholder="Enter Date" />

                <button type="submit" className="visit-update-btn">
                  Update Now
                </button>
              </form>
            </div>
          </div>
        )}

        {showDeleteModal && (
          <div
            className="visit-modal-overlay"
            onClick={() => setShowDeleteModal(false)}
          >
            <div className="delete-modal" onClick={(e) => e.stopPropagation()}>
              <button
                className="visit-close-btn"
                onClick={() => setShowDeleteModal(false)}
              >
                ×
              </button>

              <div className="delete-icon-circle">
                <FaTrashAlt />
              </div>

              <h3>Delete Patient</h3>

              <p>Are you sure you want to delete this patient?</p>

              <div className="delete-actions">
                <button
                  className="delete-cancel-btn"
                  onClick={() => setShowDeleteModal(false)}
                >
                  No
                </button>

                <button className="delete-confirm-btn">Yes</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default PatientManagement;
