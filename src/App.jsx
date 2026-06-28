import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SplashScreen from "./components/SplashScreen";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import OTP_Verification from "./pages/OTP_Verification";
import SetPassword from "./pages/SetPassword";
import Dashboard from "./pages/Dashboard";
import PatientManagement from "./pages/PatientManagement";
import Notification from "./pages/Notification";
import Appointment from "./pages/Appointment";
import Payment from "./pages/Payment";
import Reports from "./pages/Reports";
import Referrals from "./pages/Referrals";
import ContentManagement from "./pages/ContentManagement";
import AddNewTip from "./pages/AddNewTip";
import TipDetail from "./pages/TipDetail";
import PatientDetails from "./pages/PatientDetails";
import IssueReward from "./pages/IssueReward";
import EditTip from "./pages/EditTip";
import Messages from "./pages/Messages";
// import Notification from "./pages/Notification";
import CreateNotification from "./pages/CreateNotification";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<SplashScreen />} /> */}
        <Route path="/" element={<Login />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/SetPassword" element={<SetPassword />} />
        <Route path="/OTP_Verification" element={<OTP_Verification />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/PatientManagement" element={<PatientManagement />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/Appointment" element={<Appointment />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/Referrals" element={<Referrals />} />
        <Route path="/ContentManagement" element={<ContentManagement />} />
        <Route path="/add-new-tip" element={<AddNewTip />} />
        <Route path="/tip-detail" element={<TipDetail />} />
        <Route path="/issue-reward" element={<IssueReward />} />
       <Route path="/edit-tip" element={<EditTip />} />
       <Route path="/Messages" element={<Messages />} />
<Route path="/patient-details" element={<PatientDetails />} />
{/* <Route path="/notifications" element={<Notification />} /> */}
  <Route
    path="/create-notification"
    element={<CreateNotification />}
  />
        <Route
  path="/PatientDetails"
  element={<PatientDetails />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
