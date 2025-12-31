import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


import Homepage from './Page/Home.jsx';

// Auth Pages
import Login from './Page/Auth/Login.jsx';
import Signup from './Page/Auth/Signup.jsx';
import LoginOtp from './Page/Auth/Loginotp.jsx';
import SignupOtp from './Page/Auth/Singupotp.jsx';
import Changepassword from './Page/Auth/ChangePassword.jsx';
import Resetpassword from './Page/Auth/ResetPassword.jsx';
import Sendotp from './Page/Auth/SendOtp.jsx';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Homepage />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/login-otp" element={<LoginOtp />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/signup-otp" element={<SignupOtp />} />

        <Route path="/change-password" element={<Changepassword />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/send-otp" element={<Sendotp />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
