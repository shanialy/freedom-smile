import "./Dashboard.css";
import "./Reports.css";
import logo from "../assets/logo.png";
import Sidebar from "../components/Sidebar";
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

function Reports() {
  const { t } = useTranslation();
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="main-content">
        {/* Navbar */}
        <Navbar />

        <h2 className="report-title">{t("reports.title")}</h2>

        <div className="report-card">
          <div className="report-form">
            <div className="report-field">
              <label>{t("reports.fields.reportType")}</label>

              <select>
                <option>{t("reports.reportTypes.revenue")}</option>

                <option>{t("reports.reportTypes.patient")}</option>

                <option>{t("reports.reportTypes.appointment")}</option>
              </select>
            </div>

            <div className="report-field">
              <label>{t("reports.fields.startDate")}</label>

              <input type="text" placeholder={t("reports.placeholders.startDate")} />
            </div>

            <div className="report-field">
              <label>{t("reports.fields.endDate")}</label>

              <input type="text" placeholder={t("reports.placeholders.endDate")} />
            </div>
          </div>

          <button className="export-btn">{t("reports.buttons.export")}</button>
        </div>
      </main>
    </div>
  );
}

export default Reports;
