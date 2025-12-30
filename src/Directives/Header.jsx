import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../Styles/Header.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header id="header" className="header">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul onClick={() => setIsMobileMenuOpen(false)}>
            <li>
              <NavLink
                to="/?=invest"
                end
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Invest
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/?=opportunities"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Opportunities
              </NavLink>
            </li>

             {/* <li>
              <NavLink
                to="/tokenomics"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Tokenomics
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/roadmap"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Roadmap
              </NavLink>
            </li> */}

          </ul>
        </nav>

        <button className="buy-token-btn">
          <a
            href="/login"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: '#FFFFFF', fontFamily: 'DM Sans' }}
          >
            Login
          </a>
        </button>

        <div
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="hamburger-icon"></span>
        </div>
      </header>
    </>
  );
}

export default Navbar;

