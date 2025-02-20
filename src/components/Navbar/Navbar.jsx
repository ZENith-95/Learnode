import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <h2>Logo</h2>
          </Link>
        </div>

        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}>
          <span className="hamburger"></span>
        </button>

        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li>
            <Link
              to="/"
              className={menu === "home" ? "active" : ""}
              onClick={() => setMenu("home")}
              aria-current={menu === "home" ? "page" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              className={menu === "features" ? "active" : ""}
              onClick={() => setMenu("features")}
              aria-current={menu === "features" ? "page" : ""}>
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/howitworks"
              className={menu === "howitworks" ? "active" : ""}
              onClick={() => setMenu("howitworks")}
              aria-current={menu === "howitworks" ? "page" : ""}>
              How it works
            </Link>
          </li>
          <li>
            <Link
              to="#footer"
              className={menu === "contact" ? "active" : ""}
              onClick={() => setMenu("contact")}
              aria-current={menu === "contact" ? "page" : ""}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="auth-buttons">
          <Link to="/signing" className="sign-in-button">
            Log In
          </Link>
          <Link to="/sign-up" className="sign-up-button">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
