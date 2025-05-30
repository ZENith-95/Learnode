import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../../utils/auth";
import "./Signing.css";

const Signup = ({ isOpen, onClose, onSignupSuccess }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Form validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      // Simulate successful signup
      console.log("Signup attempt with:", {
        firstName,
        lastName,
        email,
        password,
      });

      // Create user data object with properly capitalized names
      const userData = {
        id: Date.now(), // Using timestamp as a simple unique ID
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        avatar: "/profile.png", // Default avatar
        education: "", // Default empty education
      };

      // Store user data in localStorage
      setUserData(userData);

      // Call the onSignupSuccess callback to show onboarding
      if (onSignupSuccess) {
        onSignupSuccess();
      }
    } catch (err) {
      setError("Failed to create account");
    } finally {
      setLoading(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.className.includes("modal-overlay")) {
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
        <h2>Sign Up</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="name">
            <div className="firstname input">
              <label>First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                required
              />
            </div>
            <div className="lastname input">
              <label>Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="email input">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="password input">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <div className="password input">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={loading ? "button-loading" : ""}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p className="terms">
          By clicking 'Sign Up' you confirm that you've read, understood, and
          accepted our Terms and Conditions, and that you agree to receive
          updates from our P2P Team.
        </p>

        <div className="log-in-bottom">
          <p>Already have an account? </p>
          <button className="sign-in-link" onClick={onClose}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
