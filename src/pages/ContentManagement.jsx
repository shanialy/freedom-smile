import { useState } from "react";
import "./Dashboard.css";
import "./ContentManagement.css";
import { FaImage } from "react-icons/fa";
import logo from "../assets/logo.png";
import { FaQuoteLeft, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

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
  const quotesData = [
    {
      quote:
        "Your smile reflects your care protect it daily with simple habits that make a lasting difference.",
    },
    {
      quote:
        "Your smile reflects your care protect it daily with simple habits that make a lasting difference.",
    },
    {
      quote:
        "Your smile reflects your care protect it daily with simple habits that make a lasting difference.",
    },
    {
      quote:
        "Your smile reflects your care protect it daily with simple habits that make a lasting difference.",
    },
    {
      quote:
        "Your smile reflects your care protect it daily with simple habits that make a lasting difference.",
    },
    {
      quote:
        "Your smile reflects your care protect it daily with simple habits that make a lasting difference.",
    },
    {
      quote:
        "Your smile reflects your care protect it daily with simple habits that make a lasting difference.",
    },
    {
      quote:
        "Your smile reflects your care protect it daily with simple habits that make a lasting difference.",
    },
  ];
  const educationTips = [
    {
      title: "Daily Brushing Habits",
      description:
        "Brush your teeth twice a day using fluoride toothpaste to prevent cavities and maintain healthy gums.",
    },
    {
      title: "Regular Dental Checkups",
      description:
        "Visit your dentist every six months for professional cleaning and early detection of oral problems.",
    },
    {
      title: "Healthy Food Choices",
      description:
        "Reduce sugary snacks and drinks. Eat fruits, vegetables, and calcium-rich foods for stronger teeth.",
    },
    {
      title: "Floss Every Day",
      description:
        "Flossing removes plaque and food particles from areas where a toothbrush cannot reach.",
    },
    {
      title: "Drink More Water",
      description:
        "Water helps wash away food particles and keeps your mouth hydrated throughout the day.",
    },
    {
      title: "Protect Your Teeth",
      description:
        "Wear a mouthguard while playing sports to reduce the risk of dental injuries.",
    },
    {
      title: "Avoid Smoking",
      description:
        "Smoking can stain teeth, damage gums, and increase the risk of oral cancer.",
    },
    {
      title: "Replace Toothbrush",
      description:
        "Change your toothbrush every three months or sooner if the bristles become worn out.",
    },
  ];
  const contentData = {
    terms: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
    `,

    privacy: `
Privacy Policy explains how user information is collected, stored, and protected. All personal information remains confidential and is used only to improve service quality.

User data is never shared without consent except where required by law. Security measures are regularly reviewed and updated to maintain data integrity and privacy standards.

Our organization follows industry best practices to ensure transparency and accountability in handling user information.
    `,

    about: `
Freedom Smile is a modern dental management platform designed to simplify patient care, appointments, referrals, payments, and communication.

The system helps clinics streamline daily operations while improving the patient experience through digital tools and automated workflows.

Our goal is to provide healthcare professionals with a reliable and easy-to-use solution.
    `,

    quotes: `
"Every smile makes you a day younger."

"A healthy smile is a reflection of a healthy lifestyle."

"Small daily habits create lasting dental health."

"Confidence begins with a smile."

"Taking care of your teeth today protects your smile tomorrow."
    `,
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
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

        <h2 className="content-title">Content Management System</h2>

        {/* Tabs */}

        <div className="content-tabs">
          <button
            className={activeTab === "terms" ? "tab active-tab" : "tab"}
            onClick={() => setActiveTab("terms")}
          >
            Terms & Condition
          </button>

          <button
            className={activeTab === "privacy" ? "tab active-tab" : "tab"}
            onClick={() => setActiveTab("privacy")}
          >
            Privacy Policy
          </button>

          <button
            className={activeTab === "about" ? "tab active-tab" : "tab"}
            onClick={() => setActiveTab("about")}
          >
            About App
          </button>

          <button
            className={activeTab === "education" ? "tab active-tab" : "tab"}
            onClick={() => setActiveTab("education")}
          >
            Education Tips
          </button>

          <button
            className={activeTab === "quotes" ? "tab active-tab" : "tab"}
            onClick={() => setActiveTab("quotes")}
          >
            Daily Quotes
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
  + Add New
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
                </div>
              ))}
            </div>
          </div>
        ) : activeTab === "education" ? (
          <div className="education-section">
            <div className="education-header">
              <Link to="/add-new-tip">
                <button className="add-new-btn">+ Add New</button>
              </Link>
            </div>

            <div className="education-grid">
              {educationTips.map((tip, index) => (
                <div className="education-card" key={index}>
                  <div className="education-image">
                    <FaImage />
                  </div>

                  <div className="education-content">
                    <h4>{tip.title}</h4>
                    <p>{tip.description}</p>
                  </div>
                </div>
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
                ×
              </button>

              <div className="delete-icon-circle">
                <FaTrash />
              </div>

              <h3>Delete Quote</h3>

              <p>Are you sure you want to delete this quote?</p>

              <div className="delete-modal-buttons">
                <button
                  className="cancel-btn"
                  onClick={() => setShowDeleteModal(false)}
                >
                  No
                </button>

                <button className="confirm-btn">Yes</button>
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
        ×
      </button>

      <h3 className="quote-modal-title">
        Add New Quote
      </h3>

      <div className="quote-form-group">
        <label>Content</label>

        <textarea
          placeholder="Add Content"
          value={quoteText}
          onChange={(e) => setQuoteText(e.target.value)}
        />
      </div>

      <button className="quote-publish-btn">
        Publish
      </button>

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
        ×
      </button>

      <h3 className="quote-modal-title">
        Edit Quote
      </h3>

      <div className="quote-form-group">
        <label>Content</label>

        <textarea
          value={editQuoteText}
          onChange={(e) => setEditQuoteText(e.target.value)}
        />
      </div>

      <button className="quote-publish-btn">
        Update
      </button>

    </div>
  </div>
)}

      </main>
    </div>
  );
}

export default ContentManagement;
