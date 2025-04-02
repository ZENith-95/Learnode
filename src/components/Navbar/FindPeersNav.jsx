import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaBell, FaTimes } from "react-icons/fa";
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

  // State for managing network requests
  const [networkRequests, setNetworkRequests] = useState([
    {
      id: 1,
      name: "Brain Smith",
      avatar: avatar5,
      status: "pending", // pending, accepted, declined
      time: "1d",
    },
    {
      id: 2,
      name: "Mensah Williams",
      avatar: avatar4,
      status: "pending",
      time: "2h",
    },
    {
      id: 3,
      name: "Dzadey Vivian",
      avatar: avatar6,
      status: "pending",
      time: "3h",
    },
  ]);

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

  // Handle accept network request
  const handleAcceptRequest = (requestId) => {
    setNetworkRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === requestId ? { ...request, status: "accepted" } : request
      )
    );
  };

  // Handle decline network request
  const handleDeclineRequest = (requestId) => {
    setNetworkRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === requestId ? { ...request, status: "declined" } : request
      )
    );
  };

  // Handle removing a notification
  const handleRemoveNotification = (requestId) => {
    setNetworkRequests((prevRequests) =>
      prevRequests.filter((request) => request.id !== requestId)
    );
  };

  return (
    <header className="fp-header">
      <div className="fp-nav-right">
        <button
          className="fp-back-button"
          onClick={handleBackClick}
          aria-label="Go back"
        >
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
            aria-label="Notifications"
          >
            <FaBell size={24} />
          </button>
          {showNotifications && (
            <div className="notifications-popup">
              <div className="notifications-popup-heading">
                <h3>Notifications</h3>
                <p>Networkers</p>
              </div>

              {networkRequests.map((request) => (
                <div
                  key={request.id}
                  className={`notification-item ${
                    request.status !== "pending" ? "notification-resolved" : ""
                  }`}
                >
                  <img src={request.avatar} alt={request.name} />
                  <div className="notification-content">
                    {request.status === "pending" && (
                      <>
                        <p>
                          <strong>{request.name}</strong> wants to network
                        </p>
                        <div className="notification-actions">
                          <button
                            className="accept-btn"
                            onClick={() => handleAcceptRequest(request.id)}
                          >
                            Accept
                          </button>
                          <button
                            className="decline-btn"
                            onClick={() => handleDeclineRequest(request.id)}
                          >
                            Decline
                          </button>
                        </div>
                      </>
                    )}

                    {request.status === "accepted" && (
                      <div className="notification-status">
                        <p>
                          <strong>invitation accepted</strong>
                        </p>
                        <span
                          className="close-icon"
                          onClick={() => handleRemoveNotification(request.id)}
                        >
                          <FaTimes />
                        </span>
                      </div>
                    )}

                    {request.status === "declined" && (
                      <div className="notification-status">
                        <p>You ignored this invitation</p>
                        <span
                          className="close-icon"
                          onClick={() => handleRemoveNotification(request.id)}
                        >
                          <FaTimes />
                        </span>
                      </div>
                    )}

                    <div className="notification-time">{request.time}</div>
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
            aria-label="Profile menu"
          >
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
