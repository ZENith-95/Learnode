import React from "react";
import "./ResourcesNav.css";
import img1 from "/vector.png";
import logo from "/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const ResourcesNav = () => {
  const [inputValue, setInputValue] = useState("");

  const handleBackClick = () => {
    window.history.back();
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="Nav">
      <div className="navbar-div">
        <div className="nav-left">
          <button className="back-button" onClick={handleBackClick}>
            <FaArrowLeft />
          </button>
          <div className="fp-logo">
            <Link to="/home" className="logo-container">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <div className="logo-text">
                <h4>Study Circle</h4>
              </div>
            </Link>
          </div>
        </div>
        <div className="nav-middle">
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Search resources..."
          />
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ResourcesNav;
