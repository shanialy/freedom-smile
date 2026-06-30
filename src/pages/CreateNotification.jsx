import "./CreateNotification.css";
import Sidebar from "../components/Sidebar";
import { FaSearch, FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";

function CreateNotification() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="main-content">
        <Navbar />

        <div className="cn-page">
          <div className="cn-title-bar">
            <FaChevronLeft
              className="cn-back-icon"
              onClick={() => navigate(-1)}
              aria-label={t("createNotification.back")}
            />
            <h2>{t("createNotification.title")}</h2>
          </div>

          <div className="cn-wrapper">
            <div className="cn-form-card">
              <h3>{t("createNotification.details")}</h3>

              <div className="cn-form-group">
                <label>{t("createNotification.titleLabel")}</label>
                <input 
                  type="text" 
                  placeholder={t("createNotification.titlePlaceholder")} 
                />
              </div>

              <div className="cn-form-group">
                <label>{t("createNotification.messageLabel")}</label>
                <textarea 
                  rows="6" 
                  placeholder={t("createNotification.messagePlaceholder")} 
                />
              </div>

              <div className="cn-form-row">
                <div className="cn-form-group">
                  <label>{t("createNotification.typeLabel")}</label>

                  <select>
                    <option>{t("createNotification.typeReminder")}</option>
                    <option>{t("createNotification.typeAlert")}</option>
                    <option>{t("createNotification.typeAnnouncement")}</option>
                  </select>
                </div>

                <div className="cn-form-group">
                  <label>{t("createNotification.audienceLabel")}</label>

                  <select>
                    <option>{t("createNotification.audienceAll")}</option>
                    <option>{t("createNotification.audienceIndividual")}</option>
                  </select>
                </div>
              </div>

              <div className="cn-form-group">
                <label>{t("createNotification.scheduleLabel")}</label>
                <input type="datetime-local" />
              </div>

              <div className="cn-btn-group">
                <button className="cn-send-btn">{t("createNotification.sendBtn")}</button>
                <button className="cn-draft-btn">{t("createNotification.draftBtn")}</button>
              </div>
            </div>

            <div className="cn-preview-card">
              <h3>{t("createNotification.previewTitle")}</h3>

              <div className="cn-preview-notification">
                <div className="cn-preview-top">
                  <strong>
                    New features available. Check out what's new in your Freedom
                    Smile
                  </strong>

                  <span>{t("createNotification.previewToday")}</span>
                </div>

                <p>
                  {t("createNotification.previewMessage")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CreateNotification;