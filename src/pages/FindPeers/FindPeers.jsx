import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./FindPeers.css";
import logo from "/logo.png";

const FindPeers = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="find-peers">
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
          </div>
        </nav>
      </div>
    </>
  );
};

export default FindPeers;
