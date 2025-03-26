import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./GroupPage.css";
import {
  FaUserCircle,
  FaPaperPlane,
  FaMicrophone,
} from "react-icons/fa";
import Footer from "../../components/Footer/Footer";
import GroupHeader from "./GroupHeader";
import atama from "/atama.png";
import agbavor from "/agbavor.png";
import agbavitor from "/agbavitor.png";
import dzah from "/dzah.png";
import dzidefo from "/dzidefo.png"
import dzahevans from "/dzahevans.png"
import agbleze from "/agbleze.png"
import dzokotoromeo from '/dzokotoromeo.png'
import dzokoto from "/dzokoto.png"
import karl from "/karl.png"
import esinu from "/esinu.png"
import sitsofe from "/sitsofe.png"
import resource from "/resource.png"
import file_black from "/file-black.png"
import file_red from "/file-red.png"


const GroupPage = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef(null);

  // Group data based on the groupId
  const groupData = {
    english: {
      name: "English Language",
      members: 19,
      activeMembersList: [
        {
          id: 1,
          name: "Atama Jacob",
          avatar: atama,
        },
        {
          id: 2,
          name: "Agbavor Simon",
          avatar: agbavor,
        },
        {
          id: 3,
          name: "Agbavitor Woelinam",
          avatar: agbavitor,
        },
        {
          id: 4,
          name: "Dzah Precious",
          avatar: dzah,
        },
      ],
      messages: [
        {
          id: 1,
          sender: "Tanya Daniel",
          avatar: "/placeholder.svg?height=40&width=40",
          content:
            "Hello Everyone, Welcome To Today's Discussion On The Topic \"The Importance Of Learning English In Today's World\". Let's Start With Our First Speaker: John",
          timestamp: "6:31 PM",
        },
        {
          id: 2,
          sender: "Adrimah Johnson",
          avatar: "/placeholder.svg?height=40&width=40",
          content:
            "Thanks, Moderator. Hi everyone. Learning English is crucial in today's world because it's the global language of communication. It's the language of business, science, technology, and international relations.",
          timestamp: "6:32 PM",
        },
        {
          id: 3,
          sender: "Adrimah Johnson",
          avatar: "/placeholder.svg?height=40&width=40",
          content:
            "I completely agree with John. English is indeed the most widely spoken language in the world, with over 1.5 billion speakers globally. It's the language of international communication, business, science, technology, and entertainment. In today's increasingly interconnected world, speaking English has become essential for anyone who wants to succeed in their career or business.",
          timestamp: "6:33 PM",
        },
        {
          id: 4,
          sender: "Franklin Victor",
          avatar: "/placeholder.svg?height=40&width=40",
          content:
            "That's absolutely right. English is indeed the language of the Internet, and it plays a vital role in facilitating global communication and commerce. With over 50% of online content being in English, it's no surprise that English has become the lingua franca of the digital age.",
          timestamp: "6:35 PM",
        },
      ],
    },
    "web-development": {
      name: "Web Developement",
      members: 30,
      activeMembersList: [
        {
          id: 1,
          name: "Agbleze Courage",
          avatar: agbleze,
        },
        {
          id: 2,
          name: "Dzah Evans",
          avatar: dzahevans,
        },
        {
          id: 3,
          name: "Dzidefo Cynthia",
          avatar: dzidefo,
        },
        {
          id: 4,
          name: "Esinu Vivian",
          avatar: esinu,
        },
      ],
      messages: [
        {
          id: 1,
          sender: "Adams Henry",
          avatar: "/placeholder.svg?height=40&width=40",
          content:
            "Hey Everyone! Let's Discuss The Latest Trends And Best Practices In Web Development. As The Landscape Continues To Evolve, It's Crucial We Stay Informed And Adapt To Changing User And Business Needs. How Do You Think AI And Machine Learning Will Impact Web Development? Will AI-Powered Tools Become More Widespread For Design, Development, And Testing? Share Your Thoughts!",
          timestamp: "6:31 PM",
        },
        {
          id: 2,
          sender: "Loga Janet",
          avatar: "/placeholder.svg?height=40&width=40",
          content:
            "I think one of the biggest trends in web development right now is the shift towards progressive web apps (PWAs). They offer a seamless experience by combining the best of web and mobile apps, and are becoming increasingly popular. With features like offline support, push notifications, and home screen installation, PWAs are changing the way we interact with the web.",
          timestamp: "6:32 PM",
        },
        {
          id: 3,
          sender: "Loga Janet",
          avatar: "/placeholder.svg?height=40&width=40",
          content:
            "Agreed! PWAs offer a fantastic user experience. I think we'll see even more widespread adoption as browsers continue to improve their support.",
          timestamp: "6:33 PM",
        },
        {
          id: 4,
          sender: "Setsoafia Bernice",
          avatar: "/placeholder.svg?height=40&width=40",
          content:
            "And with the rise of PWAs, I think we'll also see a shift towards more focus on web performance and optimization. Ensuring fast load times, efficient data handling, and seamless updates will become even more crucial as PWAs become the new standard.",
          timestamp: "6:35 PM",
        },
      ],
    },
    "graphic-design": {
      name: "Graphic Design Group",
      members: 20,
      activeMembersList: [
        {
          id: 1,
          name: "Sitsofe Emmanuella",
          avatar: sitsofe,
        },
        {
          id: 2,
          name: "Dzokoto Jordan",
          avatar: dzokoto,
        },
        {
          id: 3,
          name: "Karl Jessica",
          avatar: karl,
        },
        {
          id: 4,
          name: "Dzokoto Romeo",
          avatar: dzokotoromeo,
        },
      ],
      messages: [
        {
          id: 1,
          sender: "Tettey Jorda",
          avatar: "/placeholder.svg?height=40&width=40",
          content:
            "Hey Everyone, Welcome To Today's Discussion On Graphic Design! To Start, What Are Some Current Trends In Graphic Design That You're Excited About, And How Do You See Them Evolving In The Next Few Years? Are There Any Trends That You Think Will Have A Significant Impact On The Industry, And How Can Designers Prepare For These Changes? What Emerging Technologies Or Tools Do You Think Will Shape The Future Of Graphic Design?",
          timestamp: "6:31 PM",
        },
        {
          id: 2,
          sender: "Dzokoto Jordan",
          avatar: "/placeholder.svg?height=40&width=40",
          content:
            "I love the minimalist approach that's popular now. Simple, clean designs focusing on typography and negative space are effective. This trend will continue to evolve and influence design. Simple designs will remain essential as technology advances. Minimalism helps designers convey complex ideas clearly.",
          timestamp: "6:32 PM",
        },
        {
          id: 3,
          sender: "Dzokoto Romeo",
          avatar: "/placeholder.svg?height=40&width=40",
          content:
            "As we move forward, I anticipate a design landscape that balances simplicity with bold, creative expression.",
          timestamp: "6:33 PM",
        },
        {
          id: 4,
          sender: "Lawson Doe",
          avatar: "/placeholder.svg?height=40&width=40",
          content:
            "What about sustainable design? With the growing awareness of environmental issues, I think graphic designers have a responsibility to create work that's eco-friendly and responsible. We should be thinking about the impact of our designs on the environment.",
          timestamp: "6:35 PM",
        },
      ],
    },
  };

  const group = groupData[groupId] || {
    name: "Unknown Group",
    members: 0,
    activeMembersList: [],
    messages: [],
  };

  // Resources data (same for all groups)
  const resources = [
    {
      id: 1,
      title: "A Guide To Visual Communication",
      type: "DOC",
      size: "5MB",
    },
    { id: 2, title: "Graphic Design Essentials", type: "PDF", size: "6MB" },
    { id: 3, title: "Design Trends", type: "DOC", size: "3MB" },
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Scroll to bottom of messages when they change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [group.messages]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // In a real app, you would send this to a backend
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  if (loading) {
    return (
      <div className="loading-overlay">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="group-page">
      {/* Header */}
      <GroupHeader />

      {/* Main Content */}
      <main className="group-main">
        <div className="chat-section">
          <div className="chat-header">
            <div className="divider">
              <span>Today</span>
            </div>
          </div>
          <div className="chat-messages">
            {group.messages.map((msg) => (
              <div key={msg.id} className="message-container">
                <div className="message-sender">
                  <div className="sender-info">
                    <span className="sender-name">{msg.sender}</span>
                  </div>
                </div>
                <div className="message-content">
                  <p>{msg.content}</p>
                  <span className="message-time">{msg.timestamp}</span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form
            className="message-input-container"
            onSubmit={handleSendMessage}
          >
            <div className="message-input-container-items">
              <button type="button" className="mic-button">
                <FaMicrophone />
              </button>
              <input
                type="text"
                placeholder="Type a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="message-input"
              />
              <button type="submit" className="send-button">
                <FaPaperPlane />
              </button>
            </div>
          </form>
        </div>

        <div className="sidebar">
          <div className="sidebar-section">
            <h2 className="sidebar-title">
              <FaUserCircle />
              <span>Active Members</span>
            </h2>
            <div className="active-members">
              {group.activeMembersList.map((member) => (
                <div key={member.id} className="active-member">
                  <div className="member-avatar-container">
                    <img
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                      className="member-avatar"
                    />
                    <span className="online-indicator"></span>
                  </div>
                  <span className="member-name">{member.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h2 className="sidebar-title">
              <i className="fas fa-file-alt"><img src={resource} alt="" /></i>
              <span>Resources</span>
            </h2>
            <div className="resources-list">
              {resources.map((resource) => (
                <div key={resource.id} className="resource-item">
                  <div className="resource-icon">
                    {resource.type === "PDF" ? (
                      <i className="fas fa-file-pdf"><img src={file_red} alt="" /></i>
                    ) : (
                      <i className="fas fa-file-word"><img src={file_black} alt="" /></i>
                    )}
                  </div>
                  <div className="resource-info">
                    <span className="resource-title">{resource.title}</span>
                    <span className="resource-meta">
                      {resource.type} {resource.size}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button className="add-resource-btn">
              {/* <i className="fas fa-plus"><img src={plus} alt="" /></i> */}
              <span>Add Resource</span>
            </button>
          </div>
        </div>
      </main>
      <Footer />

      {/* Footer */}
      {/* <footer className="group-footer">
        <div className="footer-container">
          <div className="footer-section">
            <div className="footer-logo">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Study Circle Logo"
                className="logo-img"
              />
            </div>
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Home</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-section">
            <h3>Stay Notified</h3>
            <ul>
              <li>
                <a href="#">Get Updates</a>
              </li>
              <li>
                <a href="#">Get Involved</a>
              </li>
              <li>
                <a href="#">Join us</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Connect With Us</h3>
            <p>
              <a href="mailto:jnrxcell04@gmail.com">jnrxcell04@gmail.com</a>
            </p>
            <p>
              <a href="tel:0598734550">0598734550 / 0550677233</a>
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default GroupPage;
