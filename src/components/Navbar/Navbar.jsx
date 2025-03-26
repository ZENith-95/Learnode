import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import logo from "/logo.png";
import Signing from "../../pages/signing/Signing";
import Signup from "../../pages/signing/Signup";
import ForgotPassword from "../../pages/signing/ForgotPassword";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  const handleNavClick = (menuItem) => {
    setMenu(menuItem);
    setIsMobileMenuOpen(false); // Close mobile menu when item is clicked
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="navbar" aria-label="Main navigation">
        <div className="nav-container">
          <Link to='/' className="logo-container">
          <div className="logo">
              <img src={logo} alt="" />
        
          </div>
          <div className="logo-text">
            <h4>Study Circle</h4>
          </div>
          </Link>
           

          <button
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}>
            <span className="hamburger">
              <FaBars />
            </span>
          </button>

          <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
            <li>
              <Link
                to="/"
                className={menu === "home" ? "active" : ""}
                onClick={() => handleNavClick("home")}
                aria-current={menu === "home" ? "page" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#howitworks"
                className={menu === "How it Works" ? "active" : ""}
                onClick={() => handleLinkClick("How It Works")}
                aria-current={menu === "How It Works" ? "page" : undefined}>
                How It Works
              </Link>
            </li>

            <li>
              <Link
                to="#footer"
                className={menu === "contact" ? "active" : ""}
                onClick={() => handleLinkClick("contact")}
                aria-current={menu === "contact" ? "page" : undefined}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="auth-buttons">
            <button
              className="sign-in-button"
              onClick={() => setIsLoginOpen(true)}>
              Log In
            </button>
          </div>
        </div>
      </nav>
      <Signing isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <ForgotPassword
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
      />
    </>
  );
};

export default Navbar;
