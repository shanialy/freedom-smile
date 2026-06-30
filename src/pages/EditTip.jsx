import "./Dashboard.css";
import "./EditTip.css";
import Sidebar from "../components/Sidebar";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";

import {
  FaSearch,
  FaImage,
} from "react-icons/fa";

function EditTip() {
  const { t } = useTranslation();

  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="main-content">

        <Navbar />

        <h2 className="edit-tip-title">{t('editTip.title')}</h2>

        <div className="edit-tip-card">

          <div className="edit-tip-image">
            <FaImage />
          </div>

          <div className="edit-tip-field">
            <label>{t('editTip.titleLabel')}</label>

            <input
              type="text"
              placeholder={t('editTip.titlePlaceholder')}
            />
          </div>

          <div className="edit-tip-field">
            <label>{t('editTip.contentLabel')}</label>

            <textarea
              rows="7"
              placeholder={t('editTip.contentPlaceholder')}
            ></textarea>
          </div>

          <button className="save-tip-btn">
            {t('editTip.saveButton')}
          </button>

        </div>

      </main>
    </div>
  );
}

export default EditTip;