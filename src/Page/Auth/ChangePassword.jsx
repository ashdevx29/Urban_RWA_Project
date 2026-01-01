import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import leftImg from "../../assets/Auth/auth.png";
import rightBg from "../../assets/Auth/right-bg.png";
import logo from "../../assets/logo/Urban RWA Token/Urban RWA Token logo 3.png";

import { FaAt } from "react-icons/fa";

import { baseUrl } from "../../config/config";

export default function SendOtp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /* VALIDATION */
  const validate = () => {
    if (!email) {
      setError("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Enter a valid email address");
      return false;
    }
    setError("");
    return true;
  };

  /* SUBMIT */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const data = {
      email,
      type: "reset",
    };

    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(`${baseUrl}/api/auth/resend-otp`, data);
      const result = response.data;

      // SUCCESS
      setShowPopup(true);

      setTimeout(() => {
        navigate("/reset-password", { state: { email } }); // Pass email to next page if needed
      }, 2000);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to send OTP. Please try again.");
      console.error("Send OTP error:", error);
    } finally {
      setIsLoading(false);
    }
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
          <h2 className="text-4xl font-semibold">
            Find Your Dream Home
          </h2>
          <p className="mt-2 text-[16px]">
            Schedule visit in just a few clicks
          </p>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div
        className="relative flex items-start justify-center bg-cover bg-center pt-20"
        style={{ backgroundImage: `url(${rightBg})` }}
      >
        <img
          src={logo}
          alt="logo"
          className="absolute left-[20px] top-[20px] w-[117px]"
        />

        <div className="relative z-10 w-full max-w-[600px] px-6 py-20">

          <h2 className="text-[32px] text-center text-[#282828] mb-2">
            Reset Password
          </h2>

          <p className="text-[16px] text-center text-[#6B6B6B] mb-10 max-w-[320px] mx-auto">
            Forgot your password? No worries! Enter your email below, and we’ll send you instructions to reset it.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>

            {/* EMAIL */}
            <div>
              <label className="text-[20px] text-[#1B1B1B]">
                Your Email Address
              </label>
              <div className="relative mt-1">
                <FaAt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full h-11 pl-10 rounded-md border outline-none
                    ${error ? "border-red-500" : "border-gray-300"}`}
                />
              </div>
              {error && (
                <p className="text-red-500 text-xs mt-1">{error}</p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={isLoading}
              className={`
                w-full h-12 rounded-md
                bg-gradient-to-r from-[#2460F5] to-[#3B1DDA]
                hover:from-[#1E4ED8] hover:to-[#2E16B8]
                text-white font-medium
                transition-all duration-300
                ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}
              `}
            >
              {isLoading ? 'Sending...' : 'Send OTP'}
            </button>

          </form>

          
        </div>
        {/* FOOTER */}
            <div className="absolute bottom-6 left-1/2  -translate-x-1/2 text-center text-sm text-[#7E7E7E]">
            <div className="flex justify-center gap-6 mb-2">
                <a
                href="/privacy-policy"
                className="hover:underline lato"
                >
                Privacy and Policy
                </a>
                <a
                href="/terms-and-condition"
                className="hover:underline lato"
                >
                Terms and Condition
                </a>
            </div>

            <p className="text-sm text-[#939393] dm font-Regular">
                © 2025 Areux. All Rights Reserved.
            </p>
            </div>

      </div>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]">
          <div className="bg-white rounded-2xl w-full max-w-[520px] px-10 py-12 text-center">

            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[#2F4AF5] flex items-center justify-center text-white text-3xl">
                ✓
              </div>
            </div>

            <h2 className="text-[26px] font-semibold mb-2">
              OTP Sent Successfully
            </h2>

            <p className="text-sm text-gray-600 mb-6">
              A verification code has been sent to your email address.
            </p>

            <button
              onClick={() => navigate("/send-otp")}
              className="
                w-full h-11 rounded-md
                bg-gradient-to-r from-[#2460F5] to-[#3B1DDA]
                text-white font-medium
              "
            >
              OK
            </button>

          </div>
        </div>
      )}
    </div>
  );
}