import "./Dashboard.css";
import "./PatientManagement.css";
import logo from "../assets/logo.png";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";

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
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [showVisitModal, setShowVisitModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddPatientModal, setShowAddPatientModal] = useState(false);

  const patients = t("patientManagement.patients", {
  returnObjects: true,
});

  return (
    <div
      className={`dashboard-container ${
        showVisitModal || showDeleteModal || showAddPatientModal
          ? "modal-active"
          : ""
      }`}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="main-content">
        {/* Navbar */}
        <Navbar />

        {/* Header */}
        <div className="patient-header-row">
          <h2 className="patient-title">{t("patientManagement.title")}</h2>

          <button
            className="patient-btn"
            onClick={() => setShowAddPatientModal(true)}
          >
            {t("patientManagement.buttons.addPatient")}
          </button>
        </div>

        {/* Table */}
        <div className="patient-table-wrapper">
          <table className="patient-table">
            <thead>
              <tr>
                <th>{t("patientManagement.table.headers.name")}</th>
                <th>{t("patientManagement.table.headers.contact")}</th>
                <th>{t("patientManagement.table.headers.clinicLocation")}</th>
                <th>{t("patientManagement.table.headers.status")}</th>
                <th>{t("patientManagement.table.headers.retainerDueTime")}</th>
                <th>{t("patientManagement.table.headers.lastVisit")}</th>
                <th>{t("patientManagement.table.headers.actions")}</th>
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
                    {patient.lastVisit}

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
                <FaTimes />
              </button>

              <h3>{t("patientManagement.visitModal.title")}</h3>

              <form>
                <label>{t("patientManagement.visitModal.label")}</label>

                <input
                  type="date"
                  placeholder={t("patientManagement.visitModal.placeholder")}
                />

                <button type="submit" className="visit-update-btn">
                  {t("patientManagement.buttons.updateNow")}
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
                <FaTimes />
              </button>

              <div className="delete-icon-circle">
                <FaTrashAlt />
              </div>

              <h3>{t("patientManagement.deleteModal.title")}</h3>

              <p>{t("patientManagement.deleteModal.message")}</p>

              <div className="delete-actions">
                <button
                  className="delete-cancel-btn"
                  onClick={() => setShowDeleteModal(false)}
                >
                  {t("patientManagement.buttons.no")}
                </button>

                <button className="delete-confirm-btn">
                  {t("patientManagement.buttons.yes")}
                </button>
              </div>
            </div>
          </div>
        )}
        {showAddPatientModal && (
          <div
            className="pm-add-overlay"
            onClick={() => setShowAddPatientModal(false)}
          >
            <div className="pm-add-modal" onClick={(e) => e.stopPropagation()}>
              <button
                className="pm-add-close"
                onClick={() => setShowAddPatientModal(false)}
              >
                <FaTimes />
              </button>

              <h3>{t("patientManagement.addModal.title")}</h3>

              <form className="pm-add-form">
                <label>{t("patientManagement.addModal.fields.fullName")}</label>

                <input
                  type="text"
                  placeholder={t(
                    "patientManagement.addModal.placeholders.fullName",
                  )}
                />

                <label>
                  {t("patientManagement.addModal.fields.mobileNumber")}
                </label>

                <input
                  type="text"
                  placeholder={t(
                    "patientManagement.addModal.placeholders.mobileNumber",
                  )}
                />

                <label>{t("patientManagement.addModal.fields.gender")}</label>

                <select>
                  <option>
                    {t("patientManagement.addModal.options.selectGender")}
                  </option>

                  <option>
                    {t("patientManagement.addModal.options.male")}
                  </option>

                  <option>
                    {t("patientManagement.addModal.options.female")}
                  </option>
                </select>

                <label>
                  {t("patientManagement.addModal.fields.dateOfBirth")}
                </label>

                <input type="date" />

                <h4>{t("patientManagement.addModal.fields.clinicDetails")}</h4>

                <label>
                  {t("patientManagement.addModal.fields.clinicLocation")}
                </label>

                <select>
                  <option>
                    {t("patientManagement.addModal.options.selectClinic")}
                  </option>

                  <option>
                    {t("patientManagement.addModal.options.newYork")}
                  </option>

                  <option>
                    {t("patientManagement.addModal.options.california")}
                  </option>
                </select>

                <label>
                  {t("patientManagement.addModal.fields.retainerDate")}
                </label>

                <input type="date" />

                <button type="submit" className="pm-add-btn">
                  {t("patientManagement.buttons.addNow")}
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default PatientManagement;
