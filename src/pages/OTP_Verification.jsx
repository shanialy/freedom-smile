import "./OTP_Verification.css";
import { useState, useEffect } from "react";

function OTP_Verification() {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const radius = 55;
const circumference = 2 * Math.PI * radius;
const progress = (timeLeft / 30) * circumference;

  return (
    <div className="OTP-page">
      
      <div className="OTP-card">
        <h1>OTP Verification</h1>

        <div className="para">
          <p>
            We have sent you an email containing 6 digits verification code.
            Please enter the code to verify your identity.
          </p>
        </div>

        <div className="code_b">
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
        </div>

        {/* Timer */}
      <div className="timer-wrapper">
  <svg width="140" height="140">
    <circle
      cx="70"
      cy="70"
      r={radius}
      className="timer-bg"
    />

    <circle
      cx="70"
      cy="70"
      r={radius}
      className="timer-progress"
      strokeDasharray={circumference}
      strokeDashoffset={circumference - progress}
    />
  </svg>

  <div className="timer-content">
    <h2>
      00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
    </h2>
    <span>OTP</span>
  </div>
</div>
      </div>
    </div>
  );
}

export default OTP_Verification;