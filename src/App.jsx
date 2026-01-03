import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
// import Loader from "./Components/Loader";
import "./App.css";

import Homepage from "./Page/Home";

// Auth Pages
import Login from "./Page/Auth/Login";
import Signup from "./Page/Auth/Signup";
import LoginOtp from "./Page/Auth/Loginotp";
import SignupOtp from "./Page/Auth/Singupotp";
import Changepassword from "./Page/Auth/ChangePassword";
import Resetpassword from "./Page/Auth/ResetPassword";

// Dashboard
import UserDashboardLayout from "./UserDashborad/Layout/DashboardLayout";
import Dashboard from "./UserDashborad/Pages/Dashboard";


function App() {
  return (
    <BrowserRouter>
      {/* <Suspense fallback={<Loader />}> */}
        <Routes>
          {/* Public */}
          <Route path="/" element={<Homepage />} />

          {/* Auth (NO layout) */}
          <Route path="/login" element={<Login />} />
          <Route path="/login-otp" element={<LoginOtp />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup-otp" element={<SignupOtp />} />
          <Route path="/change-password" element={<Changepassword />} />
          <Route path="/reset-password" element={<Resetpassword />} />

          {/* Dashboard Layout */}
          <Route path="/dashboard" element={<UserDashboardLayout />}>
            <Route index element={<Dashboard />} />
            {/* <Route path="buy-token" element={<BuyNowPage />} />
            <Route path="referral" element={<ReferralPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="my-transactions" element={<MyTransaction />} />
            <Route path="live-transactions" element={<LiveTransactions />} /> */}
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      {/* </Suspense> */}
    </BrowserRouter>
  );
}

export default App;




// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css';


// import Homepage from './Page/Home.jsx';

// // Auth Pages
// import Login from './Page/Auth/Login.jsx';
// import Signup from './Page/Auth/Signup.jsx';
// import LoginOtp from './Page/Auth/Loginotp.jsx';
// import SignupOtp from './Page/Auth/Singupotp.jsx';
// import Changepassword from './Page/Auth/ChangePassword.jsx';
// import Resetpassword from './Page/Auth/ResetPassword.jsx';
// import Dashboard from './Page/Auth/Dashboard.jsx';

// function App() {
//   return (
//     <BrowserRouter>

//       <Routes>
//         {/* Main Pages */}
//         <Route path="/" element={<Homepage />} />

//         {/* Auth Pages */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/login-otp" element={<LoginOtp />} />

//         <Route path="/signup" element={<Signup />} />
//         <Route path="/signup-otp" element={<SignupOtp />} />

//         <Route path="/change-password" element={<Changepassword />} />
//         <Route path="/reset-password" element={<Resetpassword />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;
