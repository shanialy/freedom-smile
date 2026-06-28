import { useState } from "react";
import "./Dashboard.css";
import "./Notification.css";
import Sidebar from "../components/Sidebar";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Notification() {
  const [activeTab, setActiveTab] = useState("sent");
const navigate = useNavigate();
  const sentNotifications = [
    {
      title: "Retainer Replacement Reminder",
      desc: "Your retainer is due for replacement...",
      target: "All Patient",
      date: "2026-09-01",
      action: "Reminder",
    },
    {
      title: "Payment Reminder",
      desc: "Your payment is due...",
      target: "Individual",
      date: "2026-09-02",
      action: "Alert",
    },
    {
      title: "Appointment Reminder",
      desc: "Upcoming appointment scheduled...",
      target: "All Patient",
      date: "2026-09-03",
      action: "Reminder",
    },
    {
      title: "New Offer",
      desc: "Special dental care discount...",
      target: "All Patient",
      date: "2026-09-04",
      action: "Offer",
    },
    {
      title: "Follow-up Reminder",
      desc: "Please schedule your follow-up...",
      target: "Individual",
      date: "2026-09-05",
      action: "Alert",
    },
    {
      title: "Treatment Update",
      desc: "Your treatment plan updated...",
      target: "All Patient",
      date: "2026-09-06",
      action: "Info",
    },
    {
      title: "Clinic Announcement",
      desc: "Clinic timings updated...",
      target: "All Patient",
      date: "2026-09-07",
      action: "Notice",
    },
  ];

  const scheduledNotifications = [
    {
      title: "Scheduled Appointment Reminder",
      desc: "Will be sent tomorrow...",
      target: "All Patient",
      date: "2026-09-10",
      action: "Scheduled",
    },
    {
      title: "Scheduled Payment Alert",
      desc: "Will be sent next week...",
      target: "Individual",
      date: "2026-09-15",
      action: "Scheduled",
    },
  ];

  const draftNotifications = [
    {
      title: "Draft Notification",
      desc: "This notification is saved as draft...",
      target: "All Patient",
      date: "2026-09-20",
      action: "Draft",
    },
  ];

  const getNotifications = () => {
    if (activeTab === "sent") return sentNotifications;
    if (activeTab === "scheduled") return scheduledNotifications;
    return draftNotifications;
  };

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

        <div className="notification-header">
          <h2>Notifications</h2>

          <button
  className="create-btn"
  onClick={() => navigate("/create-notification")}
>
  Create Notifications
</button>
        </div>

        <div className="notification-tabs">
          <button
            className={`tab ${
              activeTab === "sent" ? "active-tab" : ""
            }`}
            onClick={() => setActiveTab("sent")}
          >
            Sent
          </button>

          <button
            className={`tab ${
              activeTab === "scheduled" ? "active-tab" : ""
            }`}
            onClick={() => setActiveTab("scheduled")}
          >
            Scheduled
          </button>

          <button
            className={`tab ${
              activeTab === "draft" ? "active-tab" : ""
            }`}
            onClick={() => setActiveTab("draft")}
          >
            Draft
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
                <span>Target: {item.target}</span>
                <span>Date: {item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Notification;