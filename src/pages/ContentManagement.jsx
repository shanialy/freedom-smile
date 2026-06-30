import { useState } from "react";
import "./Dashboard.css";
import "./ContentManagement.css";
import { FaImage } from "react-icons/fa";
import logo from "../assets/logo.png";
import { FaQuoteLeft, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { FaTimes } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";

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

function ContentManagement() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("terms");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddQuoteModal, setShowAddQuoteModal] = useState(false);
  const [quoteText, setQuoteText] = useState("");
  // const [showEditQuoteModal, setShowEditQuoteModal] = useState(false);
  // const [editQuoteText, setEditQuoteText] = useState(
  //   "Your smile reflects your care protect it daily with simple habits that make a lasting difference."
  // );
  const [showEditQuoteModal, setShowEditQuoteModal] = useState(false);
  const [editQuoteText, setEditQuoteText] = useState("");
  const quotesData = t("contentManagement.quotes", {
  returnObjects: true,
}).map((quote) => ({ quote }));

 const educationTips = t(
  "contentManagement.educationTips",
  {
    returnObjects: true,
  }
);
const contentData = {
  terms: t("contentManagement.content.terms"),
  privacy: t("contentManagement.content.privacy"),
  about: t("contentManagement.content.about"),
};

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <main className="main-content">
        {/* Navbar */}
        <Navbar />

        <h2 className="content-title"> {t("contentManagement.title")}</h2>

        {/* Tabs */}

        <div className="content-tabs">
          <button
            className={activeTab === "terms" ? "tab active-tab" : "tab"}
            onClick={() => setActiveTab("terms")}
          >
            {t("contentManagement.tabs.terms")}
          </button>

          <button
            className={activeTab === "privacy" ? "tab active-tab" : "tab"}
            onClick={() => setActiveTab("privacy")}
          >
            {t("contentManagement.tabs.privacy")}
          </button>

          <button
            className={activeTab === "about" ? "tab active-tab" : "tab"}
            onClick={() => setActiveTab("about")}
          >
            {t("contentManagement.tabs.about")}
          </button>

          <button
            className={activeTab === "education" ? "tab active-tab" : "tab"}
            onClick={() => setActiveTab("education")}
          >
            {t("contentManagement.tabs.education")}
          </button>

          <button
            className={activeTab === "quotes" ? "tab active-tab" : "tab"}
            onClick={() => setActiveTab("quotes")}
          >
            {t("contentManagement.tabs.quotes")}
          </button>
        </div>

        {/* Content Box */}

        {/* Content Box */}

        {activeTab === "quotes" ? (
          <div className="quotes-section">
            <div className="education-header">
              <button
                className="add-new-btn"
                onClick={() => setShowAddQuoteModal(true)}
              >
               {t("contentManagement.buttons.addNew")}
              </button>
            </div>

            <div className="quotes-grid">
              {quotesData.map((item, index) => (
                <div className="quote-card" key={index}>
                  <div className="quote-left">
                    <div className="quote-icon-wrapper">
                      <FaQuoteLeft className="quote-icon" />
                    </div>

                    <div className="quote-text">{item.quote}</div>
                  </div>

                  <div className="quote-actions">
                    <FaEdit
                      onClick={() => {
                        setEditQuoteText(item.quote);
                        setShowEditQuoteModal(true);
                      }}
                    />

                    <FaTrash
                      className="delete-icon"
                      onClick={() => setShowDeleteModal(true)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : activeTab === "education" ? (
          <div className="education-section">
            <div className="education-header">
              <Link to="/add-new-tip">
                <button className="add-new-btn">{t("contentManagement.buttons.addNew")}</button>
              </Link>
            </div>

            <div className="education-grid">
              {educationTips.map((tip, index) => (
                <Link
                  to="/tip-detail"
                  key={index}
                  className="education-card-link"
                >
                  <div className="education-card">
                    <div className="education-image">
                      <FaImage />
                    </div>

                    <div className="education-content">
                      <h4>{tip.title}</h4>
                      <p>{tip.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="content-box">
            <p>{contentData[activeTab]}</p>
          </div>
        )}

        {showDeleteModal && (
          <div className="delete-modal-overlay">
            <div className="delete-modal">
              <button
                className="modal-close-btn"
                onClick={() => setShowDeleteModal(false)}
              >
                <FaTimes />
              </button>

              <div className="delete-icon-circle">
                <FaTrash />
              </div>

              <h3><h3>{t("contentManagement.modals.deleteTitle")}</h3></h3>

              <p><p>{t("contentManagement.modals.deleteMessage")}</p></p>

              <div className="delete-modal-buttons">
                <button
                  className="cancel-btn"
                  onClick={() => setShowDeleteModal(false)}
                >
                  {t("contentManagement.buttons.no")}
                </button>

                <button className="confirm-btn">{t("contentManagement.buttons.yes")}</button>
              </div>
            </div>
          </div>
        )}

        {showAddQuoteModal && (
          <div className="quote-modal-overlay">
            <div className="quote-modal">
              <button
                className="quote-modal-close"
                onClick={() => setShowAddQuoteModal(false)}
              >
                <FaTimes />
              </button>

              <h3 className="quote-modal-title">{t("contentManagement.modals.addQuote")}</h3>

              <div className="quote-form-group">
                <label>{t("contentManagement.modals.content")}</label>

                <textarea
                  placeholder={t("contentManagement.modals.placeholder")}
                  value={quoteText}
                  onChange={(e) => setQuoteText(e.target.value)}
                />
              </div>

              <button className="quote-publish-btn">{t("contentManagement.buttons.publish")}</button>
            </div>
          </div>
        )}

        {showEditQuoteModal && (
          <div className="quote-modal-overlay">
            <div className="quote-modal">
              <button
                className="quote-modal-close"
                onClick={() => setShowEditQuoteModal(false)}
              >
                <FaTimes />
              </button>

              <h3 className="quote-modal-title">{t("contentManagement.modals.editQuote")}</h3>

              <div className="quote-form-group">
                <label><label>{t("contentManagement.modals.content")}</label></label>

                <textarea
                  value={editQuoteText}
                  onChange={(e) => setEditQuoteText(e.target.value)}
                />
              </div>

              <button className="quote-publish-btn">{t("contentManagement.buttons.update")}</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default ContentManagement;
