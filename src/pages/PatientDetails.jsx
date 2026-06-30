import "./Dashboard.css";
import "./PatientDetails.css";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";

import {
  FaUserCircle,
  FaChevronLeft,
  FaEdit,
  FaTrash,
  FaTimes,
} from "react-icons/fa";

function PatientDetails() {
  const { t } = useTranslation();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showNotificationModal, setShowNotificationModal] = useState(false);

  const navigate = useNavigate();

 const appointmentHistory = t(
  "patientDetails.appointmentHistory.data",
  {
    returnObjects: true,
  }
);
  return (
  <div className="dashboard-container patient-details-page">
    <Sidebar />

    <main className="main-content">
      <Navbar />

      {/* Header */}
      <div className="details-header">
        <div className="details-title">
          <FaChevronLeft
            className="back-icon"
            onClick={() => navigate("/PatientManagement")}
          />
          <h2>{t("patientDetails.title")}</h2>
        </div>

        <div className="details-actions">
          <button
            className="reward-btn"
            onClick={() => navigate("/issue-reward")}
          >
            {t("patientDetails.issueReward")}
          </button>

          <button
            className="notification-btn"
            onClick={() => setShowNotificationModal(true)}
          >
            {t("patientDetails.sendNotification")}
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
            <span>{t("patientDetails.patientInfo.fullName")}</span>
            <span>{t("patientDetails.patientInfo.nameValue")}</span>
          </div>

          <div className="info-row">
            <span>{t("patientDetails.patientInfo.email")}</span>
            <span>{t("patientDetails.patientInfo.emailValue")}</span>
          </div>

          <div className="info-row">
            <span>{t("patientDetails.patientInfo.phone")}</span>
            <span>{t("patientDetails.patientInfo.phoneValue")}</span>
          </div>

          <div className="info-row">
            <span>{t("patientDetails.patientInfo.status")}</span>
            <span>{t("patientDetails.patientInfo.statusValue")}</span>
          </div>

          <div className="info-row">
            <span>{t("patientDetails.patientInfo.retainerDueDate")}</span>
            <span>{t("patientDetails.patientInfo.retainerValue")}</span>
          </div>

          <div className="info-row">
            <span>{t("patientDetails.patientInfo.lastVisit")}</span>
            <span>{t("patientDetails.patientInfo.lastVisitValue")}</span>
          </div>

          <div className="patient-card-actions">
            <button
              className="delete-patient-btn"
              onClick={() => setShowDeleteModal(true)}
            >
              {t("patientDetails.buttons.deletePatient")}
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
          <h3>{t("patientDetails.appointmentHistory.title")}</h3>

          <div className="history-table-box">
            <h4>{t("patientDetails.appointmentHistory.newAppointments")}</h4>

            <table>
              <thead>
                <tr>
                  <th>{t("patientDetails.appointmentHistory.table.patientId")}</th>
                  <th>{t("patientDetails.appointmentHistory.table.name")}</th>
                  <th>{t("patientDetails.appointmentHistory.table.location")}</th>
                  <th>{t("patientDetails.appointmentHistory.table.date")}</th>
                  <th>{t("patientDetails.appointmentHistory.table.status")}</th>
                  <th>{t("patientDetails.appointmentHistory.table.amount")}</th>
                </tr>
              </thead>

              <tbody>
                {appointmentHistory.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.location}</td>
                    <td>{item.date}</td>
                    <td>
                      <span className="paid-status">{item.status}</span>
                    </td>
                    <td>{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

           {/* Delete Modal */}
      {showDeleteModal && (
        <div
          className="delete-modal-overlay"
          onClick={() => setShowDeleteModal(false)}
        >
          <div
            className="delete-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-modal-btn"
              onClick={() => setShowDeleteModal(false)}
            >
              <FaTimes />
            </button>

            <div className="delete-icon-circle">
              <FaTrash />
            </div>

            <h3>{t("patientDetails.deleteModal.title")}</h3>

            <p>{t("patientDetails.deleteModal.message")}</p>

            <div className="modal-actions">
              <button
                className="modal-no-btn"
                onClick={() => setShowDeleteModal(false)}
              >
                {t("patientDetails.buttons.no")}
              </button>

              <button className="modal-yes-btn">
                {t("patientDetails.buttons.yes")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Patient Modal */}
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

            <h3>{t("patientDetails.editModal.title")}</h3>

            <div className="edit-form">
              <label>{t("patientDetails.editModal.fullName")}</label>
              <input
                type="text"
                placeholder={t(
                  "patientDetails.editModal.fullNamePlaceholder"
                )}
              />

              <label>{t("patientDetails.editModal.mobileNumber")}</label>
              <input
                type="text"
                placeholder={t(
                  "patientDetails.editModal.mobilePlaceholder"
                )}
              />

              <label>{t("patientDetails.editModal.gender")}</label>

              <select>
                <option>
                  {t("patientDetails.editModal.selectGender")}
                </option>
                <option>{t("patientDetails.editModal.male")}</option>
                <option>{t("patientDetails.editModal.female")}</option>
              </select>

              <label>{t("patientDetails.editModal.dateOfBirth")}</label>
              <input type="date" />

              <h4>{t("patientDetails.editModal.clinicRetainer")}</h4>

              <label>{t("patientDetails.editModal.clinicLocation")}</label>

              <select>
                <option>
                  {t("patientDetails.editModal.selectClinic")}
                </option>
                <option>{t("patientDetails.editModal.newYork")}</option>
                <option>{t("patientDetails.editModal.chicago")}</option>
              </select>

              <label>{t("patientDetails.editModal.retainerDate")}</label>
              <input type="date" />

              <button className="save-patient-btn">
                {t("patientDetails.buttons.save")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notification Modal */}
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

            <h3>{t("patientDetails.notificationModal.title")}</h3>

            <div className="notification-form">
              <label>
                {t("patientDetails.notificationModal.subject")}
              </label>

              <textarea
                rows="5"
                placeholder={t(
                  "patientDetails.notificationModal.placeholder"
                )}
              />

              <button className="add-notification-btn">
                {t("patientDetails.buttons.addNow")}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  </div>
);

}

export default PatientDetails;