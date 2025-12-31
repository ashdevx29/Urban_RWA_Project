import { useState } from "react";
import { useNavigate } from "react-router-dom";

import leftImg from "../../assets/Auth/auth.png";
import rightBg from "../../assets/Auth/right-bg.png";
import logo from "../../assets/logo/Urban RWA Token/Urban RWA Token logo 3.png";

import { FaAt } from "react-icons/fa";
import { LiaEye } from "react-icons/lia";

export default function ChangePassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  /* VALIDATION */
  const validate = () => {
    let newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (newPassword.length < 6) {
      newErrors.newPassword = "Password must be at least 6 characters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (confirmPassword !== newPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* SUBMIT */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    // SUCCESS POPUP
    setShowPopup(true);

    // AUTO REDIRECT
    setTimeout(() => {
      navigate("/reset-password");
    }, 2000);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-black p-2 sm:p-4 md:p-8 lg:p-12 dm">

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
        className="relative flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${rightBg})` }}
      >
        <img
          src={logo}
          alt="logo"
          className="absolute left-[20px] top-[20px] w-[117px]"
        />

        <div className="relative z-10 w-full max-w-[600px] px-6 py-20">

          <h2 className="text-[32px] text-center text-[#282828] mb-2">
            Change Password
          </h2>

          <p className="text-[16px] font-Medium text-center text-[#6B6B6B] mb-10 max-w-[250px] mx-auto">
            Enter and confirm your new password to secure your account.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>

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
                    ${errors.email ? "border-red-500" : "border-gray-300"}`}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* NEW PASSWORD */}
            <div>
              <label className="text-[20px] text-[#1B1B1B]">
                New Password
              </label>
              <div className="relative mt-1">
                <LiaEye className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className={`w-full h-11 pl-10 rounded-md border outline-none
                    ${errors.newPassword ? "border-red-500" : "border-gray-300"}`}
                />
              </div>
              {errors.newPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.newPassword}
                </p>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="text-[20px] text-[#1B1B1B]">
                Confirm New Password
              </label>
              <div className="relative mt-1">
                <LiaEye className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`w-full h-11 pl-10 rounded-md border outline-none
                    ${errors.confirmPassword ? "border-red-500" : "border-gray-300"}`}
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                w-full h-12 rounded-md mt-6
                bg-gradient-to-r from-[#2460F5] to-[#3B1DDA]
                hover:from-[#1E4ED8] hover:to-[#2E16B8]
                text-white font-medium
                transition-all duration-300
              "
            >
              Change Password
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
              Password Changed Successfully
            </h2>

            <p className="text-sm text-gray-600 mb-6">
              Your password has been updated successfully.
            </p>

            <button
              onClick={() => navigate("/reset-password")}
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
