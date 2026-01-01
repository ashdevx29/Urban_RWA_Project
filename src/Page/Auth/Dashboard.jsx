import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import leftImg from "../../assets/Auth/auth.png";
import rightBg from "../../assets/Auth/right-bg.png";
import logo from "../../assets/logo/Urban RWA Token/Urban RWA Token logo 3.png";

import { baseUrl } from "../../config/config";
import { FaUser, FaEnvelope, FaGlobe, FaIdCard, FaCheckCircle, FaTimesCircle, FaLink, FaSignOutAlt } from "react-icons/fa";

export default function Dashboard() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("You must be logged in to view the dashboard.");
        setIsLoading(false);
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(`${baseUrl}/api/auth/dashboard`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data.user);
      } catch (err) {
        if (err.response?.status === 401) {
          setError("Session expired. Redirecting to login...");
          localStorage.removeItem("token");
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        } else {
          setError(err.response?.data?.message || "Failed to fetch dashboard data.");
        }
        console.error("Dashboard error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, [navigate]);

  const referralLink = userData ? `${window.location.origin}/signup?referral=${userData.user_id}` : "";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
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
          <p className="mt-2 text-base">
            Schedule visit in just a few clicks
          </p>
        </div>
      </div>

      {/* RIGHT CONTENT */}
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

          <h2 className="text-[32px] text-center text-[#282828] mb-2 font-bold">
            Dashboard
          </h2>
          <p className="text-[16px] text-center text-[#282828] mb-8">
            Your Account Details
          </p>

          {/* ERROR MESSAGE */}
          {error && (
            <div className="mb-8 px-6 py-4 rounded-lg text-sm font-medium bg-red-100 text-red-700 border border-red-300 shadow-md">
              {error}
            </div>
          )}

          {/* LOADING */}
          {isLoading && (
            <div className="text-center text-gray-600 text-lg font-medium">Loading your dashboard...</div>
          )}

          {/* USER DATA */}
          {!isLoading && !error && userData && (
            <div className="bg-white p-8 rounded-xl shadow-2xl space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-[#2460F5]">Welcome, {userData.first_name} {userData.last_name}</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 py-2 border-b border-gray-200">
                  <FaIdCard className="text-[#2460F5] text-xl" />
                  <span className="font-medium text-gray-700">User ID:</span>
                  <span className="ml-auto text-gray-900">{userData.user_id}</span>
                </div>
                <div className="flex items-center gap-3 py-2 border-b border-gray-200">
                  <FaUser className="text-[#2460F5] text-xl" />
                  <span className="font-medium text-gray-700">First Name:</span>
                  <span className="ml-auto text-gray-900">{userData.first_name}</span>
                </div>
                <div className="flex items-center gap-3 py-2 border-b border-gray-200">
                  <FaUser className="text-[#2460F5] text-xl" />
                  <span className="font-medium text-gray-700">Last Name:</span>
                  <span className="ml-auto text-gray-900">{userData.last_name}</span>
                </div>
                <div className="flex items-center gap-3 py-2 border-b border-gray-200">
                  <FaEnvelope className="text-[#2460F5] text-xl" />
                  <span className="font-medium text-gray-700">Email:</span>
                  <span className="ml-auto text-gray-900">{userData.email}</span>
                </div>
                <div className="flex items-center gap-3 py-2 border-b border-gray-200">
                  <FaGlobe className="text-[#2460F5] text-xl" />
                  <span className="font-medium text-gray-700">Country:</span>
                  <span className="ml-auto text-gray-900">{userData.country}</span>
                </div>
                <div className="flex items-center gap-3 py-2 border-b border-gray-200">
                  <FaIdCard className="text-[#2460F5] text-xl" />
                  <span className="font-medium text-gray-700">Sponsor ID:</span>
                  <span className="ml-auto text-gray-900">{userData.sponsor_id}</span>
                </div>
                <div className="flex items-center gap-3 py-2 border-b border-gray-200">
                  {userData.verified ? (
                    <FaCheckCircle className="text-green-500 text-xl" />
                  ) : (
                    <FaTimesCircle className="text-red-500 text-xl" />
                  )}
                  <span className="font-medium text-gray-700">Verified:</span>
                  <span className="ml-auto text-gray-900">{userData.verified ? "Yes" : "No"}</span>
                </div>
                <div className="flex items-center gap-3 py-2 border-b border-gray-200">
                  <FaLink className="text-[#2460F5] text-xl" />
                  <span className="font-medium text-gray-700">Referral Link:</span>
                  <span className="ml-auto text-gray-900 truncate max-w-xs">{referralLink}</span>
                  <button
                    onClick={copyToClipboard}
                    className="ml-2 px-4 py-1 bg-gradient-to-r from-[#2460F5] to-[#3B1DDA] text-white rounded-md hover:opacity-90 transition shadow-sm"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
              {/* LOGOUT BUTTON */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition shadow-md font-medium"
                >
                  <FaSignOutAlt className="text-xl" />
                  Logout
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}