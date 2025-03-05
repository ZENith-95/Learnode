import React, { useState } from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import logo from "/logo.png";

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
      // Add your subscription logic here
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
      <div className="footer-desktop">
        <div className="footer-section logo-section">
          <Link to="/">
            <img
              src= {logo}
              alt="Logo"
              className="footer-logo"
            />
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
            aria-label="LinkedIn">
            <i className="fab fa-linkedin" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram">
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube">
            <i className="fab fa-youtube" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter">
            <i className="fab fa-twitter" />
          </a>
        </div>
      </div>

      {/* <form onSubmit={handleSubmit} className="subscription-form">
          <p>
            Subscribe to our newsletter to stay informed about new features and
            updates.
          </p>
          {error && <div className="error-message">{error}</div>}
          {subscribed && (
            <div className="success-message">Thank you for subscribing!</div>
          )}
          <div className="form-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-label="Email address"
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
          <small>
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates.
          </small>
        </form> */}

      {/* <div className="legal-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/cookies">Cookies Settings</Link>
        </div>
      </div> */}

      <div className="footer-copyright">
        © {new Date().getFullYear()} Learnode. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
