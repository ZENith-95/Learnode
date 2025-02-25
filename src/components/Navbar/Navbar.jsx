import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import logo from "/logo.png";

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
              onClick={() => setMenu("home")}
              aria-current={menu === "home" ? "page" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/find-peers"
              className={menu === "find-peers" ? "active" : ""}
              onClick={() => setMenu("find-peers")}
              aria-current={menu === "find-peers" ? "page" : ""}>
              Find Peers
            </Link>
          </li>
          <li>
            <Link
              to="/set-goals"
              className={menu === "set-goals" ? "active" : ""}
              onClick={() => setMenu("set-goals")}
              aria-current={menu === "set-goals" ? "page" : ""}>
              Set Goals
            </Link>
          </li>
          <li>
            <Link
              to="/resources"
              className={menu === "resources" ? "active" : ""}
              onClick={() => setMenu("resources")}
              aria-current={menu === "resources" ? "page" : ""}>
              Resources
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
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
