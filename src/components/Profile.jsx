import React, { useEffect } from "react";
import "./ProfileCard.css";
import { FaTimes } from "react-icons/fa";

const ProfileCard = ({ isOpen, onClose, profileData }) => {
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
            src={profileData.avatar}
            alt={`${profileData.name}'s profile`}
            className="profile-avatar"
          />
          <h3 className="profile-name">{profileData.name}</h3>
          <p className="profile-title">{profileData.about}</p>
        </div>

        <div className="profile-actions">
          <button className="network-btn">Network</button>
          <button className="message-btn">Message {"\u2709"}</button>
        </div>

        <div className="profile-details">
          <div className="detail-item"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
