import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Signing.css";

const Signing = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      // Add your login logic here
      console.log("Login attempt with:", { email, password });
    } catch (err) {
      setError("Failed to log in");
    } finally {
      setLoading(false);
    }
  };

  // Close modal when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`modal-overlay ${isOpen ? "active" : ""}`}
      onClick={handleOverlayClick}>
      <div className="sign-in">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Log In</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="email input">
            <label>Email</label>
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="password input">
            <label>Password</label>
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="forgot-password"
              onClick={(e) => {
                e.preventDefault();
                onClose(); 
                 <button
                   className="sign-in-button"
                   onClick={() => setIsLoginOpen(true)}>
                   Log In
                 </button>;
              }}
            >
              forgot password?
            </span>
          </div>
          <Link to= "/home" className="link-button">
            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Log In"}
            </button>
          </Link>
        </form>
        <hr />
        <div className="log-in-bottom">
          <p>Don't have an account? </p>
          <Link to="/sign-up" onClick={onClose}>
            <button className="sign-up">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signing;
