import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import leftImg from "../../assets/Auth/auth.png";
import rightBg from "../../assets/Auth/right-bg.png";
import logo from "../../assets/logo/Urban RWA Token/Urban RWA Token logo 3.png";

import { FaUser, FaIdBadge, FaAt } from "react-icons/fa";
import { LiaEye } from "react-icons/lia";
import { TbEyeClosed } from "react-icons/tb";
import { IoIosPhonePortrait } from "react-icons/io";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    referral: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [formMessage, setFormMessage] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);

  /* HANDLE INPUT CHANGE */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  /* VALIDATION */
  const validate = () => {
    let newErrors = {};

    if (!form.referral) newErrors.referral = "Referral Id is required";
    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!form.phone) {
      newErrors.phone = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10-digit number";
    }

    if (!form.country) newErrors.country = "Country is required";

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Repeat password is required";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!form.terms) {
      newErrors.terms = "Please accept terms & conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* SUBMIT */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      setFormSuccess(false);
      setFormMessage("Please fix the highlighted errors below.");
      return;
    }

    setFormSuccess(true);
    setFormMessage("Signup successful! Redirecting to OTP verification...");

    setTimeout(() => {
      navigate("/signup-otp");
    }, 1200);
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
            Join Us!
          </h2>
          <p className="text-[16px] text-center text-[#282828] mb-8">
            Create Your New Urban RWA Account
          </p>

          {/* MESSAGE BOX */}
          {formMessage && (
            <div
              className={`mb-4 px-4 py-3 rounded-md text-sm font-medium
                ${
                  formSuccess
                    ? "bg-green-100 text-green-700 border border-green-300"
                    : "bg-red-100 text-red-700 border border-red-300"
                }`}
            >
              {formMessage}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>

            {/* Referral */}
            <Input
              label="Referral Id"
              icon={FaIdBadge}
              name="referral"
              value={form.referral}
              onChange={handleChange}
              error={errors.referral}
            />

            {/* First / Last */}
            <TwoGrid>
              <Input
                label="First Name"
                icon={FaUser}
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                error={errors.firstName}
              />
              <Input
                label="Last Name"
                icon={FaUser}
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                error={errors.lastName}
              />
            </TwoGrid>

            {/* Email / Phone */}
            <TwoGrid>
              <Input
                label="Your Email"
                icon={FaAt}
                name="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
              />
              <Input
                label="Mobile Number"
                icon={IoIosPhonePortrait}
                name="phone"
                value={form.phone}
                onChange={handleChange}
                error={errors.phone}
              />
            </TwoGrid>

            {/* Country */}
            <div>
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className={`w-full h-11 rounded-md border px-3 outline-none ${
                  errors.country ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select Country</option>
                <option>India</option>
                <option>USA</option>
              </select>
              {errors.country && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.country}
                </p>
              )}
            </div>

            {/* Passwords */}
            <TwoGrid>
              <Input
                type="password"
                label="Password"
                icon={LiaEye}
                name="password"
                value={form.password}
                onChange={handleChange}
                error={errors.password}
              />
              <Input
                type="password"
                label="Repeat Password"
                icon={TbEyeClosed}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
              />
            </TwoGrid>

            {/* Terms */}
            <div className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                name="terms"
                checked={form.terms}
                onChange={handleChange}
                className="mt-1"
              />
              <span>
                I agree to the{" "}
                <span className="font-medium">Terms and Conditions</span> and{" "}
                <span className="font-medium">Privacy Policy</span>.
              </span>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-xs">{errors.terms}</p>
            )}

            {/* Button */}
            <button
              type="submit"
              className="
                w-full h-12 rounded-md
                bg-gradient-to-r from-[#2460F5] to-[#3B1DDA]
                hover:from-[#1E4ED8] hover:to-[#2E16B8]
                text-white font-medium
                transition-all duration-300
              "
            >
              Sign Up
            </button>

            {/* Sign In */}
            <p className="text-center text-sm font-medium">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#009DFF] font-semibold"
              >
                Sign In
              </Link>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}

/* ===== SMALL HELPERS ===== */

const TwoGrid = ({ children }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {children}
  </div>
);

const Input = ({
  label,
  icon: Icon,
  error,
  type = "text",
  ...props
}) => (
  <div>
    <label className="text-[20px] text-[#1B1B1B]">{label}</label>
    <div className="relative mt-1">
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        type={type}
        {...props}
        className={`w-full h-11 pl-10 rounded-md border outline-none ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
    </div>
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);
