import React, { useState, useEffect } from "react";
import "./FindPeers.css";
import logo from "/logo.png";
import FindPeersHeader from "../../components/Navbar/FindPeersNav";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaBell, FaChevronRight } from "react-icons/fa";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";
import avatar5 from "../../assets/avatar5.png";
import avatar6 from "../../assets/avatar6.png";
import avatar7 from "../../assets/avatar7.png";
import Footer from "../../components/Footer/Footer";

const FindPeers = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [peers, setPeers] = useState([
    {
      id: 1,
      name: "Kailisa Adasu",
      role: "Community, Performance And Network",
      avatar: avatar1,
    },
    { id: 2, name: "Belinda Amegher", role: "Student", avatar: avatar2 },
    { id: 3, name: "Adoma Rechika", role: "Graphic Designer", avatar: avatar3 },
  ]);

  const [suggestions, setSuggestions] = useState([
    {
      id: 4,
      name: "Adjeibor Williams",
      role: "Product Designer",
      avatar: avatar4,
    },
    {
      id: 5,
      name: "Kumah Vincent",
      role: "4 years experience",
      avatar: avatar5,
    },

    { id: 6, name: "Dzadey Vivian", role: "UI/UX Designer", avatar: avatar6 },

    { id: 7, name: "Dzadey Vivian", role: "UI/UX Designer", avatar: avatar6 },
    { id: 8, name: "Dzadey Vivian", role: "UI/UX Designer", avatar: avatar6 },
    { id: 9, name: "Dzadey Vivian", role: "UI/UX Designer", avatar: avatar6 },
  ]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Add search logic here
  };

  const handleNetwork = async (peerId) => {
    try {
      setLoading(true);
      // Add networking logic here
      console.log(`Networking with peer ${peerId}`);
    } catch (err) {
      setError("Failed to connect with peer");
    } finally {
      setLoading(false);
    }
  };

  const handleViewAll = () => {
    // Add view all logic here
    console.log("View all clicked");
  };

  return (
    <div className="fp-page">
      <FindPeersHeader onSearch={handleSearch} />

      <main className="fp-main">
        <section className="fp-peers-section">
          {error && <div className="error-message">{error}</div>}

          <ul className="fp-peers-list">
            {peers.map((peer) => (
              <li key={peer.id} className="fp-peer-item">
                <img src={peer.avatar} alt={peer.name} className="fp-avatar" />
                <div className="fp-peer-info">
                  <h3>{peer.name}</h3>
                  <p>{peer.role}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className="fp-view-all-btn" onClick={handleViewAll}>
            View All
          </button>
        </section>

        <section className="fp-may-know-section">
          <h2>People you may know</h2>
          <div className="fp-cards-wrapper">
            <div className="fp-cards-scroll">
              {suggestions.map((suggestion) => (
                <div key={suggestion.id} className="fp-card">
                  <img
                    src={suggestion.avatar}
                    alt={suggestion.name}
                    className="fp-card-avatar"
                  />
                  <h3>{suggestion.name}</h3>
                  <p>{suggestion.role}</p>
                  <button
                    className="fp-network-btn"
                    onClick={() => handleNetwork(suggestion.id)}>
                    Network
                  </button>
                </div>
              ))}
            </div>
            <button className="fp-next-arrow" aria-label="Scroll next">
              <FaChevronRight size={20} />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FindPeers;
