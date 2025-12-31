import { useState } from "react";
import { useNavigate } from "react-router-dom";
import popupBg from "../../assets/Auth/pop.jpg";
import leftImg from "../../assets/Auth/auth.png";
import rightBg from "../../assets/Auth/right-bg.png";
import logo from "../../assets/logo/Urban RWA Token/Urban RWA Token logo 3.png";
import picon from "../../assets/Auth/icon.png"

import { LiaEye } from "react-icons/lia";

export default function ResetPasswordOtp() {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const CORRECT_OTP = "123456"; // demo OTP

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!otp) {
      setError("OTP is required");
      return;
    }

    if (otp.length !== 6) {
      setError("Enter 6 digit OTP");
      return;
    }

    if (otp !== CORRECT_OTP) {
      setError("Invalid OTP. Please try again.");
      return;
    }

    setError("");
    setShowPopup(true);

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-black p-2 sm:p-4 md:p-8 lg:p-12">

      {/* LEFT IMAGE */}
      <div
        className="relative hidden min-h-[930px] lg:block bg-cover bg-center"
        style={{ backgroundImage: `url(${leftImg})` }}
      >
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="absolute bottom-12 left-12 text-white z-10">
          <h2 className="text-4xl font-semibold">Find Your Dream Home</h2>
          <p className="mt-2 text-[16px]">Schedule visit in just a few clicks</p>
        </div>
      </div>

      {/* RIGHT OTP SECTION */}
      <div
        className="relative flex items-start pt-20 justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${rightBg})` }}
      >
        <img
          src={logo}
          alt="logo"
          className="absolute left-[20px] top-[20px] w-[117px]"
        />

        <div className="relative z-10 w-full max-w-[520px] px-6 py-20 text-center">

          <h2 className="text-[32px] text-[#282828] mb-2">Enter OTP</h2>

          <p className="text-[16px] text-[#6B6B6B] mb-8 max-w-[420px] mx-auto">
            Enter the OTP sent to your registered email address.
          </p>

          <form onSubmit={handleSubmit}>

            {/* OTP INPUT WITH ICON */}
            <div className="relative">
              <LiaEye className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                maxLength={6}
                placeholder="Enter OTP"
                className={`w-full h-11 pl-10 rounded-md border outline-none text-center tracking-widest
                  ${error ? "border-red-500" : "border-gray-300"}`}
              />
            </div>

            {error && (
              <p className="text-red-500 text-xs mt-2">{error}</p>
            )}

            <button
              type="submit"
              className="
                w-full h-12 rounded-md mt-8
                bg-gradient-to-r from-[#2460F5] to-[#3B1DDA]
                hover:from-[#1E4ED8] hover:to-[#2E16B8]
                text-white font-medium
                transition-all duration-300
              "
            >
              Submit
            </button>

          </form>
        </div>

        {/* FOOTER */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-sm text-[#7E7E7E]">
          <div className="flex justify-center gap-6 mb-2">
            <a href="/privacy-policy" className="hover:underline">
              Privacy and Policy
            </a>
            <a href="/terms-and-condition" className="hover:underline">
              Terms and Condition
            </a>
          </div>
          <p className="text-sm text-[#939393]">
            © 2025 Areux. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* SUCCESS POPUP — EXACT IMAGE MATCH */}
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
                Password Reset Sucessfully
              </h2>
      
              <p className="text-[14px] text-[#6B6B6B] max-w-md mb-10">
                Your password has been successfully updated. You can now access the UrbanRWA platform.
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
