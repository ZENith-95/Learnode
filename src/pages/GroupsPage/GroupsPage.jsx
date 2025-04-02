import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GroupsPage.css";
import {
  FaArrowLeft,
  FaBell,
  FaCog,
  FaUserCircle,
  FaUsers,
} from "react-icons/fa";
import Footer from "../../components/Footer/Footer";

import gd from "/graphic-design.png";
import webdev from "/web-dev.png";
import english from "/english.png";
import logo from "/logo.png";

const GroupsPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const groups = [
    {
      id: "english",
      name: "English",
      image: english,
      members: 19,
    },
    {
      id: "web-development",
      name: "Web Development",
      image: webdev,
      members: 30,
    },
    {
      id: "graphic-design",
      name: "Graphic Design",
      image: gd,
      members: 20,
    },
  ];

  const handleGroupClick = (groupId) => {
    setLoading(true);
    // Navigate to the group page
    navigate(`/groups/${groupId}`);

    // Reset loading state after a short delay
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="groups-page">
        {/* Header */}
        <header className="groups-header">
          <div className="header-left">
            <button className="back-button" onClick={handleBackClick}>
              <FaArrowLeft />
            </button>
            <div className="header-logo">
              <img src={logo} alt="Study Circle Logo" className="logo-img" />
              <span className="logo-text">Study Circle</span>
            </div>
          </div>
          <div className="header-right">
            <button className="create-group-btn">
              <FaUsers /> Create Study Group
            </button>
            <button className="icon-button">
              <FaBell />
            </button>
            <button className="icon-button user-icon">
              <FaUserCircle />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="groups-main">
          <div className="groups-container">
            <h1 className="groups-title">Suggested Groups</h1>

            <div className="groups-grid">
              {groups.map((group) => (
                <div
                  key={group.id}
                  className="group-card"
                  onClick={() => handleGroupClick(group.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Join ${group.name} group`}
                >
                  <div className="group-image-container">
                    <img
                      src={group.image || "/placeholder.svg"}
                      alt={`${group.name} group`}
                      className="group-image"
                    />
                    <div className="group-overlay"></div>
                    <h2 className="group-name">{group.name}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Loading Overlay */}
        {loading && (
          <div className="loading-overlay">
            <div className="loader"></div>
          </div>
        )}
      </div>
      {/* Footer Component */}
      <Footer />
    </>
  );
};

export default GroupsPage;
