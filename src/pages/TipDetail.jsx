import "./Dashboard.css";
import "./TipDetail.css";
import logo from "../assets/logo.png";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { createPortal } from "react-dom";
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
  FaImage,
} from "react-icons/fa";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

function TipDetail() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="main-content">

       <Navbar />

        <div className="tip-detail-container">

          <h3 className="tip-detail-title">
            {t('tipDetail.title')}
          </h3>

          <div className="tip-image-box">
            <FaImage alt={t('tipDetail.imageAlt')} />
          </div>

          <p className="tip-detail-text">
            {t('tipDetail.description')}
          </p>

          <div className="tip-actions">
            <button
              className="edit-btn"
              onClick={() => navigate("/edit-tip")}
            >
              {t('tipDetail.actions.edit')}
            </button>

            <button
              className="delete-btn"
              onClick={() => setShowDeleteModal(true)}
            >
              {t('tipDetail.actions.delete')}
            </button>
          </div>

        </div>

        {showDeleteModal &&
          createPortal(
            <div className="delete-modal-overlay">
              <div className="delete-modal">

                <button
                  className="modal-close-btn"
                  onClick={() => setShowDeleteModal(false)}
                  aria-label={t('tipDetail.deleteModal.close')}
                >
                  <FaTimes />
                </button>

                <div className="delete-icon-circle">
                  <FaTrash />
                </div>

                <h3 className="delete-modal-title">
                  {t('tipDetail.deleteModal.title')}
                </h3>

                <p className="delete-modal-text">
                  {t('tipDetail.deleteModal.message')}
                </p>

                <div className="delete-modal-buttons">
                  <button
                    className="cancel-btn"
                    onClick={() => setShowDeleteModal(false)}
                  >
                    {t('tipDetail.deleteModal.cancel')}
                  </button>

                  <button className="confirm-btn">
                    {t('tipDetail.deleteModal.confirm')}
                  </button>
                </div>

              </div>
            </div>,
            document.body
          )
        }

      </main>
    </div>
  );
}

export default TipDetail;