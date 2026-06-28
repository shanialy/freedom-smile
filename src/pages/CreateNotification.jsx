import "./CreateNotification.css";
import Sidebar from "../components/Sidebar";
import { FaSearch, FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function CreateNotification() {
  const navigate = useNavigate();

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

        <div className="cn-page">

  <div className="cn-title-bar">
    <FaChevronLeft
      className="cn-back-icon"
      onClick={() => navigate(-1)}
    />
    <h2>Create Notifications</h2>
  </div>

  <div className="cn-wrapper">

    <div className="cn-form-card">
      <h3>Notifications Details</h3>

      <div className="cn-form-group">
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter Notification Title"
        />
      </div>

      <div className="cn-form-group">
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Enter Notification Message"
        />
      </div>

      <div className="cn-form-row">
        <div className="cn-form-group">
          <label>Type</label>

          <select>
            <option>Reminder</option>
            <option>Alert</option>
            <option>Announcement</option>
          </select>
        </div>

        <div className="cn-form-group">
          <label>Target Audience</label>

          <select>
            <option>All Patients</option>
            <option>Individual</option>
          </select>
        </div>
      </div>

      <div className="cn-form-group">
        <label>Schedule(Optional)</label>
        <input type="datetime-local" />
      </div>

      <div className="cn-btn-group">
        <button className="cn-send-btn">
          Send Now
        </button>

        <button className="cn-draft-btn">
          Save In Draft
        </button>
      </div>
    </div>

    <div className="cn-preview-card">
      <h3>Preview</h3>

      <div className="cn-preview-notification">
        <div className="cn-preview-top">
          <strong>
            New features available. Check out what's
            new in your Freedom Smile
          </strong>

          <span>Today</span>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit sed do eiusmod tempor
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