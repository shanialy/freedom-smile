import "./Dashboard.css";
import logo from "../assets/logo.png";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";

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

function Dashboard() {
  const { t } = useTranslation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className={`sidebar-wrapper ${sidebarOpen ? "show" : ""}`}>
        <Sidebar />
      </div>
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="main-content">
        {/* Navbar */}
        <Navbar />

        {/* Heading */}
        <div className="heading-row">
          <h2>
            {t("dashboard.greeting")}, <span>{t("dashboard.company")}</span>
          </h2>

          <button className="patient-btn" onClick={() => setShowModal(true)}>
            {t("dashboard.buttons.addPatient")}
          </button>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          <div className="card">
            <h3>$5,235</h3>
            <p>{t("dashboard.stats.totalRevenue")}</p>
          </div>

          <div className="card">
            <h3>453</h3>
            <p>{t("dashboard.stats.activePatients")}</p>
          </div>

          <div className="card">
            <h3>14</h3>
            <p>{t("dashboard.stats.pendingOrders")}</p>
          </div>

          <div className="card">
            <h3>85</h3>
            <p>{t("dashboard.stats.upcomingAppointments")}</p>
          </div>
        </div>

        {/* Charts */}
        {/* Charts */}
        <div className="charts">
          {/* Revenue Trend */}
          <div className="chart-box">
            <h4>{t("dashboard.charts.revenueTrend")}</h4>

            <div className="chart-area">
              <div className="y-labels">
                <span>800000</span>
                <span>600000</span>
                <span>400000</span>
                <span>200000</span>
                <span>0</span>
              </div>

              <div className="graph">
                <div className="grid-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="bars">
                  <div className="bar rev1"></div>
                  <div className="bar rev2"></div>
                  <div className="bar rev3"></div>
                  <div className="bar rev4"></div>
                  <div className="bar rev5 active"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Patient Growth */}
          <div className="chart-box">
            <h4>{t("dashboard.charts.patientGrowth")}</h4>

            <div className="chart-area">
              <div className="y-labels">
                <span>800000</span>
                <span>600000</span>
                <span>400000</span>
                <span>200000</span>
                <span>0</span>
              </div>

              <div className="graph">
                <div className="grid-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="bars">
                  <div className="bar pat1"></div>
                  <div className="bar pat2"></div>
                  <div className="bar pat3 active"></div>
                  <div className="bar pat4"></div>
                  <div className="bar pat5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tables */}
        <div className="bottom-section">
          <div className="appointments">
            <h4>{t("dashboard.appointments.title")}</h4>

            <table>
              <thead>
                <tr>
                  <th>{t("dashboard.appointments.headers.patientId")}</th>
                  <th>{t("dashboard.appointments.headers.name")}</th>
                  <th>{t("dashboard.appointments.headers.location")}</th>
                  <th>{t("dashboard.appointments.headers.date")}</th>
                  <th>{t("dashboard.appointments.headers.status")}</th>
                  <th>{t("dashboard.appointments.headers.amount")}</th>
                </tr>
              </thead>

              <tbody>
                {t("dashboard.appointments.data", {
                  returnObjects: true,
                }).map((item, index) => (
                  <tr key={index}>
                    <td>{item.patientId}</td>
                    <td>{item.name}</td>
                    <td>{item.location}</td>
                    <td>{item.date}</td>
                    <td>
                      <span className="paid">{item.status}</span>
                    </td>
                    <td>{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="activity">
            <h4>{t("dashboard.activity.title")}</h4>

            <ul>
              {t("dashboard.activity.items", {
                returnObjects: true,
              }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        {showModal && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="patient-modal" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setShowModal(false)}>
                <FaTimes />
              </button>

              <h3>{t("dashboard.modal.title")}</h3>

              <form className="patient-form">
                <label>{t("dashboard.modal.fields.fullName")}</label>
                <input
                  type="text"
                  placeholder={t("dashboard.modal.placeholders.fullName")}
                />

                <label>{t("dashboard.modal.fields.mobileNumber")}</label>
                <input
                  type="text"
                  placeholder={t("dashboard.modal.placeholders.mobileNumber")}
                />

                <label>{t("dashboard.modal.fields.gender")}</label>

                <select>
                  <option>{t("dashboard.modal.options.selectGender")}</option>
                  <option>{t("dashboard.modal.options.male")}</option>
                  <option>{t("dashboard.modal.options.female")}</option>
                </select>

                <label>{t("dashboard.modal.fields.dateOfBirth")}</label>

                <input type="date" />

                <h4>{t("dashboard.modal.fields.clinicDetails")}</h4>

                <label>{t("dashboard.modal.fields.clinicLocation")}</label>

                <select>
                  <option>{t("dashboard.modal.options.selectClinic")}</option>

                  <option>{t("dashboard.modal.options.newYork")}</option>

                  <option>{t("dashboard.modal.options.california")}</option>
                </select>

                <label>{t("dashboard.modal.fields.retainerDate")}</label>

                <input type="date" />

                <button type="submit" className="add-now-btn">
                  {t("dashboard.buttons.addNow")}
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;