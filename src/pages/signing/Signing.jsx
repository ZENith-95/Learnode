import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setUserData } from "../../utils/auth";
import "./Signing.css";

const Signing = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
      // Simulate a successful login
      console.log("Login attempt with:", { email, password });

      // Create mock user data (in a real app, this would come from your backend)
      // For this exercise, let's create a mock user based on email
      // Email format: firstname.lastname@example.com
      let firstName = "User";
      let lastName = "";

      // Try to extract name from email
      if (email.includes("@")) {
        const emailName = email.split("@")[0]; // Get the part before @
        if (emailName.includes(".")) {
          // If email has format firstname.lastname@example.com
          const nameParts = emailName.split(".");
          if (nameParts.length >= 2) {
            firstName =
              nameParts[0].charAt(0).toUpperCase() + nameParts[0].slice(1);
            lastName =
              nameParts[1].charAt(0).toUpperCase() + nameParts[1].slice(1);
          }
        } else {
          // If email has no dot in name part
          firstName = emailName.charAt(0).toUpperCase() + emailName.slice(1);
          lastName = "";
        }
      }

      const userData = {
        id: 1,
        firstName: firstName,
        lastName: lastName,
        email: email.trim(),
        avatar: "/profile.png",
        education: "University",
      };

      // Store user data in localStorage
      setUserData(userData);

      // Close the login modal
      onClose();

      // Navigate to home page
      navigate("/home");
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
      onClick={handleOverlayClick}
    >
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
                  onClick={() => setIsLoginOpen(true)}
                >
                  Log In
                </button>;
              }}
            >
              forgot password?
            </span>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>
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
