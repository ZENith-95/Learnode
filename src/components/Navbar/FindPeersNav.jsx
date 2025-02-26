import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaBell } from "react-icons/fa";
import "./FindPeersNav.css";

const FindPeersHeader = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    
    navigate(-1);
  };
  return (
    <header className="fp-header">
      <button
        className="fp-back-button"
        onClick={handleBackClick}
        aria-label="Go back">
        <FaArrowLeft size={18} />
      </button>

      <div className="fp-logo">
        <Link to ="/">
          <img src="/logo.png" alt="App Logo" />
        </Link>
      </div>

      <div className="fp-search-bar">
        <input type="text" placeholder="Search peers..." />
      </div>

      <button className="fp-notification-button" aria-label="Notifications">
        <FaBell size={18} />
      </button>
    </header>
  );
};

export default FindPeersHeader;
