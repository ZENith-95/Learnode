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
              to="/find-peers"
              className={menu === "find-peers" ? "active" : ""}
              onClick={() => handleLinkClick("find-peers")}
              aria-current={menu === "find-peers" ? "page" : undefined}>
              Find Peers
            </Link>
          </li>
          <li>
            <Link
              to="/set-goals"
              className={menu === "set-goals" ? "active" : ""}
              onClick={() => handleLinkClick("set-goals")}
              aria-current={menu === "set-goals" ? "page" : undefined}>
              Set Goals
            </Link>
          </li>
          <li>
            <Link
              to="/resources"
              className={menu === "resources" ? "active" : ""}
              onClick={() => handleLinkClick("resources")}
              aria-current={menu === "resources" ? "page" : undefined}>
              Resources
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={menu === "contact" ? "active" : ""}
              onClick={() => handleLinkClick("contact")}
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
          <Link
            to="/sign-up"
            className="sign-up-button"
            onClick={() => handleNavClick("signup")}>
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
