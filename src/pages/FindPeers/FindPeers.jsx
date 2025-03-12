import React, { useState, useEffect, useRef } from "react";
import "./FindPeers.css";
import FindPeersHeader from "../../components/Navbar/FindPeersNav";
import ProfileCard from "../../components/Profile";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";
import avatar5 from "../../assets/avatar5.png";
import avatar6 from "../../assets/avatar6.png";
import avatar7 from "../../assets/avatar7.png";
import peer1 from "/peer1.png";
import peer2 from "/peer2.png";
import peer3 from "/peer3.png";
import Footer from "../../components/Footer/Footer";

const FindPeers = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [viewAllLoading, setViewAllLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [pendingNetworks, setPendingNetworks] = useState({});
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedPeer, setSelectedPeer] = useState(null);

  const scrollContainerRef = useRef(null);

  const [peers, setPeers] = useState([
    {
      id: 1,
      name: "Belinda Adzah",
      about: "Community, Performance And Network",
      avatar: peer2,
    },
    { id: 2, name: "Belinda Amehgbor", about: "Student", avatar: peer1 },
    { id: 3, name: "Adams Nicholas", about: "Graphic Designer", avatar: peer3 },
  ]);

  const [suggestions, setSuggestions] = useState([
    {
      id: 4,
      name: "Agbedor Williams",
      about: "4 Mutual Friends",
      about_img: peer1,
      avatar: avatar1,
    },
    {
      id: 5,
      name: "Kumah Vincent",
      about: "6 Mutual Friends",
      about_img: peer1,
      avatar: avatar5,
    },
    { id: 6, name: "Dzadey Vivian", about: "", avatar: avatar4 },
    {
      id: 7,
      name: "Karl Cindy",
      about: "18 Mutual Friends",
      about_img: peer1,
      avatar: avatar3,
    },
    { id: 8, name: "Bibinti Evie", about: "", avatar: avatar2 },
    { id: 9, name: "Klutse Dennis", about: "", avatar: avatar6 },
    {
      id: 10,
      name: "Mensah Williams",
      about: "3 Mutual Friends",
      about_img: peer1,
      avatar: avatar7,
    },
  ]);

  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      const observer = new ResizeObserver(checkScroll);
      observer.observe(container);

      return () => {
        container.removeEventListener("scroll", checkScroll);
        observer.disconnect();
      };
    }
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Add search logic here
  };

  const handleNetwork = async (peerId) => {
    if (pendingNetworks[peerId]) return;

    try {
      setPendingNetworks((prev) => ({ ...prev, [peerId]: true }));
      // Add networking logic here
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
      console.log(`Networking with peer ${peerId}`);
    } catch (err) {
      setError("Failed to connect with peer");
      setPendingNetworks((prev) => ({ ...prev, [peerId]: false }));
    }
  };

  const handleViewAll = async () => {
    try {
      setViewAllLoading(true);
      // Add view all logic here
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
      console.log("View all clicked");
    } catch (err) {
      setError("Failed to load more peers");
    } finally {
      setViewAllLoading(false);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleViewProfile = (peer) => {
    setSelectedPeer(peer);
    setIsProfileOpen(true);
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
                <div className="fp-peer-left">
                  <img
                    src={peer.avatar}
                    alt={`${peer.name}'s avatar`}
                    className="fp-avatar"
                  />
                  <div className="fp-peer-info">
                    <h3>{peer.name}</h3>
                    <p>{peer.about}</p>
                  </div>
                </div>
                <button
                  className="view-profile-btn"
                  onClick={() => handleViewProfile(peer)}>
                  View Profile
                </button>
              </li>
            ))}
          </ul>
          <button
            className="fp-view-all-btn"
            onClick={handleViewAll}
            disabled={viewAllLoading}>
            {viewAllLoading ? "Loading..." : "View All"}
          </button>
        </section>

        <section className="fp-may-know-section">
          <h2>People you may know</h2>
          <div className="fp-cards-wrapper">
            {canScrollLeft && (
              <button
                className="fp-prev-arrow"
                onClick={() => scroll("left")}
                aria-label="Scroll previous">
                <FaChevronLeft size={20} />
              </button>
            )}
            <div className="fp-cards-scroll" ref={scrollContainerRef}>
              {suggestions.map((suggestion) => (
                <div key={suggestion.id} className="fp-card">
                  <img
                    src={suggestion.avatar}
                    alt={`${suggestion.name}'s avatar`}
                    className="fp-card-avatar"
                  />
                  <h3>{suggestion.name}</h3>
                  <div className="suggestion-info">
                    <span>
                      <img src={suggestion.about_img} />
                    </span>

                    <p>{suggestion.about}</p>
                  </div>
                  <button
                    className="fp-network-btn"
                    onClick={() => handleNetwork(suggestion.id)}
                    disabled={pendingNetworks[suggestion.id]}>
                    {pendingNetworks[suggestion.id] ? "Pending" : "Network"}
                  </button>
                </div>
              ))}
            </div>
            {canScrollRight && (
              <button
                className="fp-next-arrow"
                onClick={() => scroll("right")}
                aria-label="Scroll next">
                <FaChevronRight size={20} />
              </button>
            )}
          </div>
        </section>
      </main>

      <ProfileCard
        isOpen={isProfileOpen}
        onClose={() => {
          setIsProfileOpen(false);
          setSelectedPeer(null);
        }}
        profileData={selectedPeer}
      />
      <Footer />
    </div>
  );
};

export default FindPeers;
