import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import leftImg from "../../assets/Auth/auth.png";
import rightBg from "../../assets/Auth/right-bg.png";
import logo from "../../assets/logo/Urban RWA Token/Urban RWA Token logo 3.png";

import { LiaEye } from "react-icons/lia";
import { FaAt } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Enter a valid email";

    if (!password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setShowPopup(true);
    setTimeout(() => {
      navigate("/login-otp");
    }, 2000);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#000] p-2 sm:p-4 md:p-8 lg:p-12 dm">

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
            Sign in
          </h2>

          <p className="text-[16px] text-center text-[#282828] mb-8 max-w-[420px] mx-auto">
            Welcome back! <br />
            Access your account and manage your digital assets seamlessly.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>

            {/* EMAIL */}
            <div>
              <label className="text-[20px] text-[#1B1B1B]">
                Your Email
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

            {/* PASSWORD */}
            <div>
              <label className="text-[20px] text-[#1B1B1B]">
                Password
              </label>
              <div className="relative mt-1">
                <LiaEye className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full h-11 pl-10 rounded-md border outline-none
                    ${errors.password ? "border-red-500" : "border-gray-300"}`}
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* 🔹 FORGOT PASSWORD (ONLY ADDITION) */}
            <div className="text-right">
              <Link
                to="/change-password"
                className="text-sm text-[#2460F5] font-medium hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* REMEMBER ME */}
            <div className="flex items-start gap-2 text-[15px] mt-4">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="w-[20px] h-[20px]"
              />
              <p>Remember Me</p>
            </div>

            {/* BUTTON */}
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
              Sign In
            </button>

            {/* SIGN UP */}
            <p className="text-center text-sm font-medium mt-4">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-[#009DFF] font-semibold">
                Sign up
              </Link>
            </p>

          </form>
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
              Login Successful
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              OTP verification required to continue.
            </p>
            <button
              onClick={() => navigate("/login-otp")}
              className="w-full h-11 rounded-md bg-gradient-to-r from-[#2460F5] to-[#3B1DDA] text-white font-medium"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
