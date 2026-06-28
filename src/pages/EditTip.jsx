import "./Dashboard.css";
import "./EditTip.css";
import Sidebar from "../components/Sidebar";

import {
  FaSearch,
  FaImage,
} from "react-icons/fa";

function EditTip() {
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

        <h2 className="edit-tip-title">Edit Tip</h2>

        <div className="edit-tip-card">

          <div className="edit-tip-image">
            <FaImage />
          </div>

          <div className="edit-tip-field">
            <label>Title</label>

            <input
              type="text"
              placeholder="Edit Tip"
            />
          </div>

          <div className="edit-tip-field">
            <label>Content</label>

            <textarea
              rows="7"
              placeholder="Add Content"
            ></textarea>
          </div>

          <button className="save-tip-btn">
            Save
          </button>

        </div>

      </main>
    </div>
  );
}

export default EditTip;