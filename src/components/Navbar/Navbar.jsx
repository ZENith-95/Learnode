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
  const [isSignupOpen, setIsSignupOpen] = useState(false);
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
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

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
                to="#features"
                className={menu === "Features" ? "active" : ""}
                onClick={() => handleLinkClick("Features")}
                aria-current={menu === "Features" ? "page" : undefined}>
                Features
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
            <button
              className="sign-up-button"
              onClick={() => setIsSignupOpen(true)}>
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      <Signing isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <Signup isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
      <ForgotPassword
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
      />
    </>
  );
};

export default Navbar;
