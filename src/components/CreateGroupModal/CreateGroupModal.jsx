import React, { useState, useEffect } from "react";
import { FaTimes, FaSearch, FaPlus, FaCheck } from "react-icons/fa";
import "./CreateGroupModal.css";
import avatar4 from "../../assets/avatar4.png";
import avatar5 from "../../assets/avatar5.png";
import avatar6 from "../../assets/avatar6.png";
import avatar7 from "../../assets/avatar7.png";

const CreateGroupModal = ({ isOpen, onClose, onCreateGroup }) => {
  const [groupName, setGroupName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [error, setError] = useState("");

  // Sample network members data
  const [networkMembers, setNetworkMembers] = useState([
    {
      id: 1,
      name: "Brain Smith",
      avatar: avatar5,
    },
    {
      id: 2,
      name: "Mensah Williams",
      avatar: avatar4,
    },
    {
      id: 3,
      name: "Dzadey Vivian",
      avatar: avatar6,
    },
    {
      id: 4,
      name: "Karl Jessica",
      avatar: avatar7,
    },
  ]);

  // Filter members based on search query
  const filteredMembers = networkMembers.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    // Prevent body scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSelectMember = (member) => {
    if (selectedMembers.some((m) => m.id === member.id)) {
      // If already selected, remove from selection
      setSelectedMembers(selectedMembers.filter((m) => m.id !== member.id));
    } else {
      // Add to selection
      setSelectedMembers([...selectedMembers, member]);
    }
  };

  const handleCreateGroup = () => {
    // Validate group name
    if (!groupName.trim()) {
      setError("Please enter a group name");
      return;
    }

    // Validate at least one member is selected
    if (selectedMembers.length === 0) {
      setError("Please select at least one member");
      return;
    }

    // Clear any previous errors
    setError("");

    // Create the group
    onCreateGroup({
      name: groupName,
      members: selectedMembers,
    });

    // Reset form
    setGroupName("");
    setSelectedMembers([]);
    setSearchQuery("");

    // Close modal
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="create-group-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Create Study Group</h2>
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="modal-body">
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <label htmlFor="groupName">Group Name</label>
            <input
              type="text"
              id="groupName"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Enter group name"
            />
          </div>

          <div className="form-group">
            <label>Add Members</label>
            <div className="search-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search members..."
              />
            </div>
          </div>

          {selectedMembers.length > 0 && (
            <div className="selected-members">
              <h3>Selected Members ({selectedMembers.length})</h3>
              <div className="selected-members-list">
                {selectedMembers.map((member) => (
                  <div key={member.id} className="selected-member">
                    <img src={member.avatar} alt={member.name} />
                    <span>{member.name}</span>
                    <button
                      className="remove-member"
                      onClick={() => handleSelectMember(member)}
                    >
                      <FaTimes />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="members-list">
            <h3>Your Network</h3>
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member) => {
                const isSelected = selectedMembers.some(
                  (m) => m.id === member.id
                );
                return (
                  <div
                    key={member.id}
                    className={`member-item ${isSelected ? "selected" : ""}`}
                    onClick={() => handleSelectMember(member)}
                  >
                    <div className="member-info">
                      <img src={member.avatar} alt={member.name} />
                      <span>{member.name}</span>
                    </div>
                    <div className="selection-indicator">
                      {isSelected ? <FaCheck /> : <FaPlus />}
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="no-results">No members found</p>
            )}
          </div>
        </div>

        <div className="modal-footer">
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="create-button" onClick={handleCreateGroup}>
            Create Group
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateGroupModal;
