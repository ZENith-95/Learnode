import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaBell } from "react-icons/fa";
import "./FindPeersNav.css";
import searchicon from "/search.png";
import profile_img from "/profile.png";
import avatar4 from "../../assets/avatar4.png";
import avatar5 from "../../assets/avatar5.png";
import avatar6 from "../../assets/avatar6.png";

const FindPeersHeader = () => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  const notifications = [
    {
      id: 4,
      name: "Adjeibor Williams",
      role: "Product Designer",
      avatar: avatar4,
    },
    {
      id: 5,
      name: "Kumah Vincent",
      role: "4 years exp",
      avatar: avatar5,
    },
    {
      id: 6,
      name: "Dzadey Vivian",
      role: "UI/UX Designer",
      avatar: avatar6,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <header className="fp-header">
      <div className="fp-nav-right">
        <button
          className="fp-back-button"
          onClick={handleBackClick}
          aria-label="Go back">
          <FaArrowLeft size={14} />
        </button>
        <div className="fp-logo">
          <Link to="/">
            <img src="/logo.png" alt="App Logo" className="logo" />
          </Link>
        </div>
        {/* <div className="fp-search-bar">
          <img src={searchicon} alt="Search" />
          <input type="text" placeholder="Search peers..." />
        </div> */}
      </div>

      <div className="fp-icons">
        <div className="notification-wrapper" ref={notificationRef}>
          <button
            className="fp-notification-button"
            onClick={() => setShowNotifications(!showNotifications)}
            aria-label="Notifications">
            <FaBell size={24} />
          </button>
          {showNotifications && (
            <div className="notifications-popup">
              <div className="notifications-popup-heading">
                <h3>Notifications</h3>
                <p>Networkers</p>
              </div>
              {notifications.map((notification) => (
                <div key={notification.id} className="notification-item">
                  <img src={notification.avatar} alt={notification.name} />
                  <div className="notification-content">
                    <p>
                      <strong>{notification.name}</strong> wants to network
                    </p>
                    <div className="notification-actions">
                      <button className="accept-btn">Accept</button>
                      <button className="decline-btn">Decline</button>
                    </div>
                  </div>
                </div>
              ))}
              <button className="view-all">View All</button>
            </div>
          )}
        </div>

        <div className="profile-wrapper" ref={profileRef}>
          <button
            className="profile-button"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            aria-label="Profile menu">
            <img src={profile_img} alt="Profile" />
          </button>
          {showProfileMenu && (
            <div className="profile-popup">
              <div className="profile-popup-heading">Profile</div>
              <div className="profile-popup-info">
                <img src={profile_img} alt="User" className="profile-pic" />
                <div className="profile-info">
                  <h3>Labi Tina</h3>
                  <p>labitina05@gmail.com</p>
                </div>
              </div>
              <div className="profile-actions">
                <button className="edit-profile">Edit profile</button>
                <button className="logout">Logout</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default FindPeersHeader;
