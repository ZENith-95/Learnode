import React, { useState, useRef, useEffect } from "react";
import {
  FaArrowLeft,
  FaUserCircle,
  FaBell,
  FaCog,
  FaTimes,
  FaPen,
} from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import "./GroupHeader.css";
import profile_img from "/profile.png";
import avatar4 from "../../assets/avatar4.png";
import avatar5 from "../../assets/avatar5.png";
import avatar6 from "../../assets/avatar6.png";

const GroupHeader = () => {
  const navigate = useNavigate();
  const { groupId } = useParams();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  const [profileData, setProfileData] = useState({
    firstName: "Labi",
    lastName: "Tina",
    email: "labitina05@gmail.com",
    education: "University",
    avatar: profile_img,
  });

  // State for managing network requests
  const [networkRequests, setNetworkRequests] = useState([
    {
      id: 1,
      name: "Brain Smith",
      avatar: avatar5,
      status: "pending",
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

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveProfile = () => {
    // Here you would typically save the changes to your backend
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prev) => ({
          ...prev,
          avatar: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    // Here you would typically clear any user session data
    navigate("/");
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  const groupData = {
    english: {
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
        <div className="notification-wrapper" ref={notificationRef}>
          <button
            className="icon-button"
            onClick={() => setShowNotifications(!showNotifications)}
            aria-label="Notifications"
          >
            <FaBell />
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

        <button className="icon-button">
          <FaCog />
        </button>

        <div className="profile-wrapper" ref={profileRef}>
          <button
            className="icon-button user-icon"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            aria-label="Profile menu"
          >
            <FaUserCircle />
          </button>
          {showProfileMenu && (
            <div className="profile-popup">
              <div className="profile-popup-heading">Profile</div>
              {!isEditing ? (
                <>
                  <div className="profile-popup-info">
                    <img
                      src={profileData.avatar}
                      alt="User"
                      className="profile-pic"
                    />
                    <div className="profile-info">
                      <h3>{`${profileData.firstName} ${profileData.lastName}`}</h3>
                      <p>{profileData.email}</p>
                    </div>
                  </div>
                  <div className="profile-actions">
                    <button className="edit-profile" onClick={handleEditClick}>
                      Edit profile
                    </button>
                    <button className="logout" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <div className="profile-edit-form">
                  <div className="profile-image-section">
                    <div className="profile-image-container">
                      <img
                        src={profileData.avatar}
                        alt="Profile"
                        className="profile-pic"
                      />
                      <label className="image-upload-label">
                        <FaPen className="pen-icon" />
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          style={{ display: "none" }}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="firstName"
                      value={profileData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="lastName"
                      value={profileData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <select
                      name="education"
                      value={profileData.education}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Education Level</option>
                      <option value="Junior High School">
                        Junior High School
                      </option>
                      <option value="Senior High School">
                        Senior High School
                      </option>
                      <option value="University">University</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="profile-edit-actions">
                    <button className="save-button" onClick={handleSaveProfile}>
                      Save
                    </button>
                    <button
                      className="cancel-button"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {showLogoutModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Confirm Logout</h3>
            <p>Are you sure you want to logout?</p>
            <div className="modal-actions">
              <button className="cancel-button" onClick={cancelLogout}>
                Cancel
              </button>
              <button className="confirm-button" onClick={confirmLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default GroupHeader;
