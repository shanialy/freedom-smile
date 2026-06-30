import "./Dashboard.css";
import "./Referrals.css";
import logo from "../assets/logo.png";
import Sidebar from "../components/Sidebar";
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

function Referrals() {
  const { t } = useTranslation();

  const referrals = t("referrals.data", {
    returnObjects: true,
  });



  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <main className="main-content">
        <Navbar />

        <h2 className="payment-title">
          {t("referrals.title")}
        </h2>

        {/* Cards */}

        <div className="payment-cards">
          <div className="payment-card">
            <h3>$5,235</h3>
            
              <p>{t("referrals.cards.totalRevenue")}</p>
           
          </div>

          <div className="payment-card">
            <h3>$2,261</h3>
            <p>{t("referrals.cards.totalTax")}</p>
          </div>

          <div className="payment-card">
            <h3>$1,542</h3>
            <p>{t("referrals.cards.totalDiscounts")}</p>
          </div>

          {/* <div className="payment-card">
            <h3>$1,222</h3>
            <p>Total Rewards</p>
          </div> */}
        </div>

        {/* Table */}

        <div className="payment-table-box">
          <h4>{t("referrals.table.title")}</h4>

          <table className="payment-table">
            <thead>
              <tr>
                <th>{t("referrals.table.headers.referrer")}</th>
                <th>{t("referrals.table.headers.referredPatient")}</th>
                <th>{t("referrals.table.headers.date")}</th>
                <th></th>
                <th>{t("referrals.table.headers.status")}</th>
                <th></th>
                <th></th>
                <th></th>
                <th>{t("referrals.table.headers.reward")}</th>
                <th></th>
                <th>{t("referrals.table.headers.action")}</th>
              </tr>
            </thead>
            <tbody>
              {referrals.map((item, index) => (
                <tr key={index}>
                  <td>{item.referrer}</td>
                  <td>{item.referredPatient}</td>
                  <td>{item.date}</td>
                  <td></td>

                  <td>
                    <span
                      className={
                        item.status === t("referrals.status.converted")
                          ? "paid-badge"
                          : "pending-badge"
                      }
                    >
                      {item.status}
                    </span>
                  </td>

                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{item.reward}</td>
                  <td></td>

                  <td>
                    <b> {item.action} </b>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Revenue Chart */}
      </main>
    </div>
  );
}

export default Referrals;
