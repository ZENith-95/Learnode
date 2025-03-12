import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import logo from "/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (menuItem) => {
    setMenu(menuItem);
    setIsMobileMenuOpen(false); // Close mobile menu when item is clicked
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="nav-container">
        <div className="div">
          <div className="logo">
            <Link to="/home">
               <img src={logo} alt="" />
               
            </Link>
        </div>
        <h5>Study Circle</h5>
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
              to="/how-it-works"
              className={menu === "how-it-works" ? "active" : ""}
              onClick={() => handleNavClick("how-it-work")}
              aria-current={menu === "how-it-work" ? "page" : undefined}>
              How It Works
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={menu === "contact" ? "active" : ""}
              onClick={() => handleNavClick("contact")}
              aria-current={menu === "contact" ? "page" : undefined}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="auth-buttons">
          <Link
            to="/signing"
            className="sign-in-button"
            onClick={() => handleNavClick("signin")}>
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
