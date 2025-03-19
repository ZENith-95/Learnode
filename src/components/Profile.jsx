import React, { useState, useEffect } from "react";
import "./ProfileCard.css";
import { FaTimes } from "react-icons/fa";
import graduation_cap from "/graduation-cap.svg";

const ProfileCard = ({ isOpen, onClose, profileData, onMessageClick }) => {
  const [loading, setLoading] = useState(false);
  const [networkStatus, setNetworkStatus] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !profileData) return null;

  const handleNetwork = async () => {
    try {
      setLoading(true);
      // Add network logic here
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated delay
      setNetworkStatus(true);
    } catch (error) {
      console.error("Networking failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChatOpen = () => {
    if (onMessageClick) {
      onMessageClick(profileData);
    }
  };

  return (
    <div className="profile-overlay" onClick={onClose}>
      <div
        className={`profile-card ${isOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}>
        <div className="profile-heading">
          <div className="heading">
            <h4>Profile</h4>
          </div>
          <button className="close-profile" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="profile-header">
          <img
            src={profileData.avatar || "/placeholder.svg"}
            alt={`${profileData.name}'s profile`}
            className="profile-avatar"
          />
          <h3 className="profile-name">{profileData.name}</h3>
          <p className="profile-title">{profileData.about}</p>
        </div>

        <div className="profile-actions">
          <button
            className={`network-btn ${networkStatus ? "networked" : ""}`}
            onClick={handleNetwork}
            disabled={loading || networkStatus}>
            {loading ? "Pending..." : networkStatus ? "Added" : "Network"}
          </button>
          <button
            className="message-btn"
            onClick={handleChatOpen}
            disabled={loading}>
            Message {"\u2709"}
          </button>
        </div>

        <div className="profile-details">
          <div className="edu-img">
            <img src={graduation_cap || "/placeholder.svg"} alt="" />
          </div>
          <div className="edu-detail">
            <h5 className="education-label">Level of Education</h5>
            <p className="education-value">
              {profileData.education || "Not specified"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
