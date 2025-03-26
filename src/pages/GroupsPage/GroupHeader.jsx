import React from "react";
import { FaArrowLeft, FaUserCircle, FaBell, FaCog } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import "./GroupHeader.css";

const GroupHeader = () => {
  const navigate = useNavigate();
  const { groupId } = useParams(); // Retrieve groupId from the URL

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const groupData = {
    "english": {
      name: "English Language Group",
      members: 19,
    },
    "web-development": {
      name: "Web Development Group",
      members: 30,
    },
    "graphic-design": {
      name: "Graphic Design Group",
      members: 20,
    },
  };

  const group = groupData[groupId] || {
    name: "Unknown Group",
    members: 0,
  };

  return (
    <header className="group-header">
      <div className="header-left">
        <button className="back-button" onClick={handleBackClick}>
          <FaArrowLeft />
        </button>
        <div className="group-info">
          <h1 className="group-title">{group.name}</h1>
          <div className="member-count">
            <FaUserCircle />
            <span>{group.members} Members</span>
          </div>
        </div>
      </div>
      <div className="header-right">
        <button className="icon-button">
          <FaBell />
        </button>
        <button className="icon-button">
          <FaCog />
        </button>
        <button className="icon-button user-icon">
          <FaUserCircle />
        </button>
      </div>
    </header>
  );
};

export default GroupHeader;
