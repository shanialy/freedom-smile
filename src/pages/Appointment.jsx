import "./Dashboard.css";
import "./Appointment.css";
import logo from "../assets/logo.png";
import Sidebar from "../components/Sidebar";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import React from "react";

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

function Appointment() {
  const { t } = useTranslation();

  const appointments = t("appointment.data", {
    returnObjects: true,
  });

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="main-content">
        {/* Navbar */}
        <Navbar />

        <div className="appointment-page">
          <h2 className="appointment-title">{t("appointment.title")}</h2>

          <div className="appointment-card">
            <div className="appointment-date">{t("appointment.week")}</div>

            <hr />

            {Array.isArray(appointments) &&
              appointments.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="appointment-row">
                    <div className="appointment-time">{item.time}</div>

                    <div className="appointment-info">
                      <h4>{item.name}</h4>
                      <p>{item.type}</p>
                      <span>{item.duration}</span>
                    </div>

                    <button className="schedule-btn">
                      {t("appointment.schedule")}
                    </button>
                  </div>

                  {index !== appointments.length - 1 && (
                    <hr className="appointment-line" />
                  )}
                </React.Fragment>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Appointment;
