import { useState } from "react";
import "./Dashboard.css";
import "./Notification.css";
import Sidebar from "../components/Sidebar";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";

function Notification() {
  const [activeTab, setActiveTab] = useState("sent");
  const navigate = useNavigate();
 const { t } = useTranslation();

const sentNotifications = t("notification.sent", {
  returnObjects: true,
});

const scheduledNotifications = t("notification.scheduled", {
  returnObjects: true,
});

const draftNotifications = t("notification.draft", {
  returnObjects: true,
});
  const getNotifications = () => {
    if (activeTab === "sent") return sentNotifications;
    if (activeTab === "scheduled") return scheduledNotifications;
    return draftNotifications;
  };

  return (
  <div className="dashboard-container">
    <Sidebar />

    <main className="main-content">
      <Navbar />

      <div className="notification-header">
        <h2>{t("notification.title")}</h2>

        <button
          className="create-btn"
          onClick={() => navigate("/create-notification")}
        >
          {t("notification.buttons.create")}
        </button>
      </div>

      <div className="notification-tabs">
        <button
          className={`tab ${activeTab === "sent" ? "active-tab" : ""}`}
          onClick={() => setActiveTab("sent")}
        >
          {t("notification.tabs.sent")}
        </button>

        <button
          className={`tab ${activeTab === "scheduled" ? "active-tab" : ""}`}
          onClick={() => setActiveTab("scheduled")}
        >
          {t("notification.tabs.scheduled")}
        </button>

        <button
          className={`tab ${activeTab === "draft" ? "active-tab" : ""}`}
          onClick={() => setActiveTab("draft")}
        >
          {t("notification.tabs.draft")}
        </button>
      </div>

      <div className="notification-grid">
        {getNotifications().map((item, index) => (
          <div className="notification-card" key={index}>
            <div className="card-top">
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>

              <button className="action-btn">
                {item.action}
              </button>
            </div>

            <div className="card-footer">
              <span>
                {t("notification.labels.target")}: {item.target}
              </span>

              <span>
                {t("notification.labels.date")}: {item.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  </div>
);
}

export default Notification;
