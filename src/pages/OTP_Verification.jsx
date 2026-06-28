import "./OTP_Verification.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function OTP_Verification() {
  const [timeLeft, setTimeLeft] = useState(30);
  const [otp, setOtp] = useState(["", "", "", "", ""]);

  const inputsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Redirect when OTP complete
  useEffect(() => {
    if (otp.every((digit) => digit !== "")) {
      setTimeout(() => {
        navigate("/SetPassword");
      }, 300);
    }
  }, [otp, navigate]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");

    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputsRef.current[index - 1].focus();

        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
      }
    }
  };

  const radius = 55;
  const circumference = 2 * Math.PI * radius;
  const progress = (timeLeft / 30) * circumference;

  return (
    <div className="OTP-page">
      <div className="OTP-card">
        <h1>OTP Verification</h1>

        <div className="para">
          <p>
            We have sent you an email containing 5 digits verification code.
            Please enter the code to verify your identity.
          </p>
        </div>

        <div className="code_b">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              value={digit}
              maxLength={1}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>

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