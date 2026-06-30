import "./Dashboard.css";
import "./IssueReward.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";

import {
  FaSearch,
  FaChevronLeft,
  FaGift,
  FaUserCircle,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function IssueReward() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="dashboard-container patient-details-page">
      <Sidebar />

      <main className="main-content">
        {/* Navbar */}
        <Navbar />

        {/* Header */}
        <div className="details-header">
          <div className="details-title">
            <FaChevronLeft
              className="back-icon"
              onClick={() => navigate("/patient-details")}
            />

            <h2>{t('issueReward.title')}</h2>
          </div>
        </div>

        {/* Reward Card */}
        <div className="reward-wrapper">

  <div className="reward-card">
    <div className="reward-progress">
      <h4>{t('issueReward.rewardsProgress')}</h4>

      <div className="reward-item">✔ {t('issueReward.rewardItems.oneReferral')}</div>
      <div className="reward-item">✔ {t('issueReward.rewardItems.twoReferrals')}</div>
      <div className="reward-item">○ {t('issueReward.rewardItems.threeReferrals')}</div>

      <p className="reward-summary">
        {t('issueReward.rewardSummary')}
      </p>
    </div>

    <div className="gift-circle">
      <FaGift />
    </div>
  </div>

  <div className="patient-code-section">
    <label>{t('issueReward.patientCode')}</label>

    <div className="patient-code-box">
      <span>#494944</span>
      <span>📋</span>
    </div>
  </div>

  <div className="referral-section">
    <label>{t('issueReward.referralStatus')}</label>

    <div className="referral-users">

      <div className="referral-user">
        <div className="user-icon">
          <FaUserCircle />
        </div>
        <span>{t('issueReward.referralUsers.kelvin')}</span>
        <small>{t('issueReward.statuses.registered')}</small>
      </div>

      <div className="referral-user">
        <div className="user-icon2 approved">
          <FaUserCircle />
          <span className="check-badge">✓</span>
        </div>
        <span>{t('issueReward.referralUsers.john')}</span>
        <small>{t('issueReward.statuses.approved')}</small>
      </div>

      <div className="referral-user">
        <div className="user-icon3 approved">
          <FaUserCircle />
          <span className="check-badge">✓</span>
        </div>
        <span>{t('issueReward.referralUsers.mick')}</span>
        <small>{t('issueReward.statuses.approved')}</small>
      </div>

    </div>
  </div>

  <button className="issue-btn">
    {t('issueReward.issueButton')}
  </button>

</div>
      </main>
    </div>
  );
}

export default IssueReward;