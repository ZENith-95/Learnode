import React, { useState, useEffect } from "react";
import "./Signing.css";

const ForgotPassword = ({ isOpen, onClose, onLoginClick }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

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
    setSuccess(false);
    setLoading(true);

    if (!email) {
      setError("Please enter your email");
      setLoading(false);
      return;
    }

    try {
      // Add your password reset logic here
      console.log("Password reset attempt for:", email);
      setSuccess(true);
    } catch (err) {
      setError("Failed to send reset email");
    } finally {
      setLoading(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="sign-in">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Reset Password</h2>
        {error && <div className="error-message">{error}</div>}
        {success && (
          <div className="success-message">
            Password reset instructions sent to your email!
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="email input">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Reset Password"}
          </button>
        </form>
        <hr />
        <div className="log-in-bottom">
          <p>Remember your password? </p>
          <button
            className="sign-in-button"
            onClick={() => {
              onClose();
              onLoginClick();
            }}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
