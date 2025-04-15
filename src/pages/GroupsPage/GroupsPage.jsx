import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./GroupsPage.css";
import {
  FaArrowLeft,
  FaBell,
  FaCog,
  FaUserCircle,
  FaUsers,
  FaTimes,
  FaPen,
} from "react-icons/fa";
import CreateGroupModal from "../../components/CreateGroupModal/CreateGroupModal";
import Footer from "../../components/Footer/Footer";
import { clearUserData, getUserData } from "../../utils/auth";
import { Link } from "react-router-dom";

import gd from "/graphic-design.png";
import webdev from "/web-dev.png";
import english from "/english.png";
import logo from "/logo.png";
import profile_img from "/profile.png";
import avatar4 from "../../assets/avatar4.png";
import avatar5 from "../../assets/avatar5.png";
import avatar6 from "../../assets/avatar6.png";
import graduation_cap from "/graduation-cap.svg";

const GroupsPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  // Load user data from localStorage
  const [profileData, setProfileData] = useState(() => {
    const userData = getUserData();
    if (!userData) {
      // Redirect to login if no user data found
      navigate("/");
      return {
        firstName: "",
        lastName: "",
        email: "",
        education: "",
        avatar: profile_img,
      };
    }
    return userData;
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

  // State for managing groups
  const [groups, setGroups] = useState([
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

  const handleCreateGroup = () => {
    // Open the create group modal
    setShowCreateGroupModal(true);
  };

  const handleGroupCreated = (groupData) => {
    // Generate a unique ID for the new group
    const groupId = `group-${Date.now()}`;
    
    // Add the new group to the groups list
    const newGroup = {
      id: groupId,
      name: groupData.name,
      image: "/logo.png", // Default image
      members: groupData.members.length,
    };

    // Update groups array with the new group
    setGroups((prevGroups) => [...prevGroups, newGroup]);
    
    // Store the group data in localStorage for use in GroupPage
    const dynamicGroups = JSON.parse(localStorage.getItem('dynamicGroups') || '{}');
    dynamicGroups[groupId] = {
      name: groupData.name,
      members: groupData.members.length,
      activeMembersList: groupData.members.map(member => ({
        id: member.id,
        name: member.name,
        avatar: member.avatar
      }))
    };
    localStorage.setItem('dynamicGroups', JSON.stringify(dynamicGroups));

    // In a real application, this would likely involve an API call
    console.log("New group created:", newGroup);

    // Show a success message
    alert(`Group "${groupData.name}" created successfully!`);

    // Close the modal
    setShowCreateGroupModal(false);
  };

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

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    // Clear user data from localStorage
    clearUserData();

    // Navigate to landing page
    navigate("/");
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
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
            <Link to="/home" className="logo-container">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <div className="logo-text">
                <h4>Study Circle</h4>
              </div>
            </Link>
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
                        request.status !== "pending"
                          ? "notification-resolved"
                          : ""
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
                              onClick={() =>
                                handleRemoveNotification(request.id)
                              }
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
                              onClick={() =>
                                handleRemoveNotification(request.id)
                              }
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

            <button className="create-group-btn" onClick={handleCreateGroup}>
              <FaUsers /> Create Study Group
            </button>

            <div className="profile-wrapper" ref={profileRef}>
              <button
                className="profile-button"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                aria-label="Profile menu"
              >
                <img src={profileData.avatar} alt="" />
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
                      <div className="profile-details">
                        <div className="edu-img">
                          <img
                            src={graduation_cap || "/placeholder.svg"}
                            alt=""
                          />
                        </div>
                        <div className="edu-detail">
                          <h5 className="education-label">
                            Level of Education
                          </h5>
                          <p className="education-value">
                            {profileData.education || "Not specified"}
                          </p>
                        </div>
                      </div>
                      <div className="profile-actions">
                        <button
                          className="edit-profile"
                          onClick={handleEditClick}
                        >
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
                        <button
                          className="save-button"
                          onClick={handleSaveProfile}
                        >
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

      {/* Create Group Modal */}
      <CreateGroupModal
        isOpen={showCreateGroupModal}
        onClose={() => setShowCreateGroupModal(false)}
        onCreateGroup={handleGroupCreated}
      />

      {/* Add the logout confirmation modal */}
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
    </>
  );
};

export default GroupsPage;
