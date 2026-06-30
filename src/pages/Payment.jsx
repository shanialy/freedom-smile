import "./Dashboard.css";
import "./Payment.css";
import logo from "../assets/logo.png";
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
} from "react-icons/fa";

function Payment() {
 const { t } = useTranslation();

const payments = t("payment.payments", {
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
          {t("payment.title")}
        </h2>

        {/* Cards */}

        <div className="payment-summary-wrapper">

  <div className="payment-summary-card">
    <h3>$5,235</h3>
    <p>{t("payment.summary.totalRevenue")}</p>
  </div>

  <div className="payment-summary-card">
    <h3>$2,261</h3>
    <p>{t("payment.summary.totalTax")}</p>
  </div>

  <div className="payment-summary-card">
    <h3>$1,542</h3>
    <p>{t("payment.summary.totalDiscounts")}</p>
  </div>

  <div className="payment-summary-card">
    <h3>$1,222</h3>
    <p>{t("payment.summary.totalRewards")}</p>
  </div>

</div>

        {/* Table */}

        <div className="payment-table-box">
          <h4>{t("payment.table.title")}</h4>

          <table className="payment-table">
            <thead>
              <tr>
                <th>{t("payment.table.headers.patientId")}</th>
                <th>{t("payment.table.headers.name")}</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>{t("payment.table.headers.location")}</th>
                <th>{t("payment.table.headers.date")}</th>
                <th>{t("payment.table.headers.status")}</th>
                <th>{t("payment.table.headers.amount")}</th>
              </tr>
            </thead>

            <tbody>
              {payments.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td>{item.location}</td>
                  <td>{item.date}</td>

                  <td>
                    <span className="paid-badge">
                      {t("payment.status.paid")}
                    </span>
                  </td>

                  <td><b>{item.amount}</b></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Revenue Chart */}

        <div className="revenue-box">
  <h4>{t("payment.chart.title")}</h4>

  <div className="chart-wrapper">

    <div className="y-axis">
      <span>800000</span>
      <span>600000</span>
      <span>400000</span>
      <span>200000</span>
      <span>0</span>
    </div>

    <div className="revenue-chart">

      <div className="grid-line"></div>
      <div className="grid-line"></div>
      <div className="grid-line"></div>
      <div className="grid-line"></div>

      <div className="bars">
        <div className="chart-bar bar1"></div>
        <div className="chart-bar bar2"></div>
        <div className="chart-bar bar3"></div>
        <div className="chart-bar bar4"></div>
        <div className="chart-bar bar5"></div>
      </div>

    </div>

  </div>
</div>
      </main>
    </div>
  );
}

export default Payment;