import React, { useState } from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import ScrollToTopButton from "../ScrollToTopButton";

import logo from "/logo.png";
import { Linkedin, Instagram, Youtube, Twitter } from "lucide-react"; // Import icons from lucide-react

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email) {
      setError("Please enter an email address");
      setLoading(false);
      return;
    }

    try {
      console.log("Subscribing email:", email);
      setSubscribed(true);
      setEmail("");
    } catch (err) {
      setError("Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="footer" id="footer">
      <ScrollToTopButton />
      <div className="footer-desktop">
        <div className="footer-section logo-section">
          <Link className="footer-link" to="/home">
            <img src={logo} alt="Logo" className="footer-logo" />
            <h5>Study Circle</h5>
          </Link>
        </div>

        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/find-peers">Find Peers</Link>
            </li>
            <li>
              <Link to="/set-goals">Set Goals</Link>
            </li>
            <li>
              <Link to="/feedback">Feedback</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section stay-notified">
          <h4>Stay Notified</h4>
          <ul>
            <li>
              <Link to="/updates">Get Updates</Link>
            </li>
            <li>
              <Link to="/involved">Get Involved</Link>
            </li>
            <li>
              <Link to="/join">Join Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section connect-with-us">
          <h4>Connect With Us</h4>
          <ul>
            <li>Email: jmrxeiAI@gmail.com</li>
            <li>Phone: 0583074550 / 0553772333</li>
          </ul>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <div className="social-icons">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <Youtube size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
        </div>
      </div>

      <div className="footer-copyright">
        © {new Date().getFullYear()} Learnode. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
