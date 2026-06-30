// import "./Dashboard.css";
import "./AddNewTip.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
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
  FaCloudUploadAlt,
} from "react-icons/fa";

function AddNewTip() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />
      {/* Main */}
      <main className="main-content">
        <Navbar />

        <h2 className="add-tip-title">{t('addNewTip.title')}</h2>

        <div className="tip-form-card">
          <div className="upload-box">
            <FaCloudUploadAlt className="upload-icon" />
            <span>{t('addNewTip.uploadImage')}</span>
            <input type="file" />
          </div>

          <div className="form-group">
            <label>{t('addNewTip.titleLabel')}</label>
            <input 
              className="addNewTipInput" 
              type="text" 
              placeholder={t('addNewTip.titlePlaceholder')} 
            />
          </div>

          <div className="form-group">
            <label>{t('addNewTip.contentLabel')}</label>
            <textarea 
              rows="7" 
              placeholder={t('addNewTip.contentPlaceholder')}
            ></textarea>
          </div>

          <button
            className="publish-btn"
            onClick={() => navigate("/ContentManagement")}
          >
            {t('addNewTip.publishButton')}
          </button>
        </div>
      </main>
    </div>
  );
}

export default AddNewTip;