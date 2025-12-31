import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo/Urban RWA Token/Urban RWA Token logo 3.png';
import '../Styles/Header.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header id="header" className="header">
      {/* LOGO */}
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>

      {/* NAV MENU */}
      <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul onClick={() => setIsMobileMenuOpen(false)}>
          <li><NavLink to="/?=invest">Invest</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/?=opportunities">Opportunities</NavLink></li>
        </ul>
      </nav>

      {/* AUTH BUTTONS */}
      <div className="auth-btns">
        <a href="/login" className="buy-token-btn">
          Login
        </a>

        <a href="/signup" className="signup-btn">
          Sign Up
        </a>
      </div>

      {/* MOBILE TOGGLE */}
      <div
        className="mobile-menu-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className="hamburger-icon"></span>
      </div>
    </header>
  );
}

export default Navbar;













// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import logo from '../assets/logo/Urban RWA Token/Urban RWA Token logo 3.png';
// import '../Styles/Header.css';

// function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <>
//       <header id="header" className="header">
//         <div className="logo">
//           <NavLink to="/">
//             <img src={logo} alt="Logo" />
//           </NavLink>
//         </div>

//         <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
//           <ul onClick={() => setIsMobileMenuOpen(false)}>
//             <li>
//               <NavLink
//                 to="/?=invest"
//                 end
//                 className={({ isActive }) => (isActive ? 'active' : '')}
//               >
//                 Invest
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/dashboard"
//                 className={({ isActive }) => (isActive ? 'active' : '')}
//               >
//                 Dashboard
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/?=opportunities"
//                 className={({ isActive }) => (isActive ? 'active' : '')}
//               >
//                 Opportunities
//               </NavLink>
//             </li>

//              {/* <li>
//               <NavLink
//                 to="/tokenomics"
//                 className={({ isActive }) => (isActive ? 'active' : '')}
//               >
//                 Tokenomics
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/roadmap"
//                 className={({ isActive }) => (isActive ? 'active' : '')}
//               >
//                 Roadmap
//               </NavLink>
//             </li> */}

//           </ul>
//         </nav>

//         <button className="buy-token-btn">
//           <a
//             href="/login"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ textDecoration: 'none', color: '#FFFFFF', fontFamily: 'DM Sans' }}
//           >
//             Login
//           </a>
//         </button>

//         <div
//           className="mobile-menu-toggle"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           <span className="hamburger-icon"></span>
//         </div>
//       </header>
//     </>
//   );
// }

// export default Navbar;



// import { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FaChevronDown } from "react-icons/fa";
// import logo from '../assets/logo/Urban RWA Token/Urban RWA Token logo 3.png';
// import '../Styles/Header.css';

// function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [buyOpen, setBuyOpen] = useState(false);
//   const buyRef = useRef(null);

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handler = (e) => {
//       if (buyRef.current && !buyRef.current.contains(e.target)) {
//         setBuyOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   return (
//     <header id="header" className="header">
//       {/* LOGO */}
//       <div className="logo">
//         <Link to="/">
//           <img src={logo} alt="Logo" />
//         </Link>
//       </div>

//       {/* NAV LINKS */}
//       <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
//         <ul onClick={() => setIsMobileMenuOpen(false)}>
//           <li><Link to="/?=invest">Invest</Link></li>
//           <li><Link to="/dashboard">Dashboard</Link></li>
//           <li><Link to="/?=opportunities">Opportunities</Link></li>
//         </ul>
//       </nav>

//       <div className='buttons'> 
//       <button className="buy-token-btn">
//         <Link to="/login" className="btn-link">Login</Link>
//       </button>

//       <button className="buy-token-btn-2">
//         <Link to="/signup" className="btn-link">Sign Up</Link>
//       </button>
//       </div>

//       {/* MOBILE TOGGLE */}
//       <div
//         className="mobile-menu-toggle"
//         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//       >
//         <span className="hamburger-icon"></span>
//       </div>
//     </header>
//   );
// }

// export default Navbar;

