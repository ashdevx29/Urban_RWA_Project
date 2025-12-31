import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import popupBg from "../../assets/Auth/pop.jpg";
import picon from "../../assets/Auth/icon.png"

import leftImg from "../../assets/Auth/auth.png";
import rightBg from "../../assets/Auth/right-bg.png";
import logo from "../../assets/logo/Urban RWA Token/Urban RWA Token logo 3.png";

export default function SignupOtp() {
  const navigate = useNavigate();

  const OTP_LENGTH = 6;
  const CORRECT_OTP = "123456"; // demo OTP

  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(30);
  const [showPopup, setShowPopup] = useState(false);

  const inputsRef = useRef([]);

  /* TIMER */
  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  /* OTP CHANGE */
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    if (value && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  /* BACKSPACE */
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  /* VERIFY OTP */
  const handleVerify = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length < OTP_LENGTH) {
      setError("Please enter complete OTP");
      return;
    }

    if (enteredOtp !== CORRECT_OTP) {
      setError("Invalid OTP. Please try again.");
      return;
    }

    // SUCCESS
    setShowPopup(true);

    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  /* RESEND OTP */
  const handleResend = () => {
    setOtp(Array(OTP_LENGTH).fill(""));
    setTimer(30);
    setError("");
    inputsRef.current[0].focus();
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-black p-2 sm:p-4 md:p-8 lg:p-12 dm ">

      {/* LEFT IMAGE */}
      <div
        className="relative hidden min-h-[930px] lg:block bg-cover bg-center"
        style={{ backgroundImage: `url(${leftImg})` }}
      >
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="absolute bottom-12 left-12 text-white">
          <h2 className="text-4xl font-semibold">Find Your Dream Home</h2>
          <p className="mt-2">Schedule visit in just a few clicks</p>
        </div>
      </div>

      {/* RIGHT OTP */}
      <div
        className="relative flex items-start justify-center bg-cover bg-center pt-20"
        style={{ backgroundImage: `url(${rightBg})` }}
      >
        <img
          src={logo}
          alt="logo"
          className="absolute left-5 top-5 w-[117px]"
        />

        <div className="relative z-10 w-full max-w-[480px] px-6 py-20">

          <h2 className="text-[32px] font-semibold text-[#282828] mb-2">
            Enter OTP
          </h2>

          <p className="text-sm text-[#6B6B6B] mb-8">
            A security code has been sent via SMS.
            <br />
            Please enter it below.
          </p>

          {/* OTP INPUTS */}
          <div className="flex justify-center gap-3 mb-6">
            {otp.map((val, i) => (
              <input
                key={i}
                ref={(el) => (inputsRef.current[i] = el)}
                value={val}
                onChange={(e) => handleChange(e.target.value, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                maxLength="1"
                className="
                  w-[32px] h-[32px]
                  sm:w-[48px] sm:h-[48px]
                  text-center text-lg font-semibold
                  rounded-md border border-gray-300
                  outline-none
                  focus:border-[#2460F5]
                  focus:ring-2 focus:ring-[#2460F5]/30
                "
              />
            ))}
          </div>

          {/* ERROR */}
          {error && (
            <p className="text-red-500 text-sm text-center mb-4">
              {error}
            </p>
          )}

          {/* BUTTON */}
          <button
            onClick={handleVerify}
            className="
              w-full h-12 rounded-md
              bg-gradient-to-r from-[#2460F5] to-[#3B1DDA]
              text-white font-medium
              transition-all duration-300 mb-4
            "
          >
            Get OTP
          </button>

          {/* RESEND */}
          {timer > 0 ? (
            <p className="text-sm text-[#9A9A9A] text-center">
              Don’t receive an OTP? Resend in {timer}s
            </p>
          ) : (
            <p
              onClick={handleResend}
              className="text-[#2460F5] text-sm font-medium text-center cursor-pointer"
            >
              Resend OTP
            </p>
          )}
        </div>
      </div>

      {/* SUCCESS POPUP */}
     {showPopup && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]">

    <div className="relative bg-white rounded-2xl w-full max-w-[720px] overflow-hidden">

      {/* TOP BAR */}
      <div className="absolute top-6 left-6 z-20">
        <img src={logo} alt="logo" className="h-6" />
      </div>

      <button
        className="absolute top-6 right-6 z-20 text-2xl text-black"
        onClick={() => setShowPopup(false)}
      >
        ✕
      </button>

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: `url(${popupBg})` }}
      />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center px-10 py-16">

        {/* CHECK ICON */}
        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6">
                      <img src={picon} alt="" className="w-16 h-auto" />
          {/* <svg width="36" height="26" viewBox="0 0 36 26" fill="none">
            <path
              d="M3 13.5L13.5 23L33 3"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg> */}
        </div>

        <h2 className="text-[28px] font-semibold text-[#1A1A1A] mb-2">
          Registration Successful
        </h2>

        <p className="text-[14px] text-[#6B6B6B] max-w-md mb-10">
          Your ID has been successfully registered.
          You can now access the UrbanRWA platform.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="
            w-[280px] h-[48px] rounded-md
            bg-gradient-to-r from-[#2460F5] to-[#3B1DDA]
            text-white font-medium text-[16px]
          "
        >
          OK
        </button>
      </div>

    </div>
  </div>
)}

    </div>
  );
}
