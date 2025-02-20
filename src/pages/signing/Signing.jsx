import React, { useState } from "react";
import "./Signing.css";
import { Link } from "react-router-dom";

const Signing = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  return (
    <div className="sign-in">
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
          <Link to="/forgot-password" className="forgot-password">
            forgot password?
          </Link>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Log In"}
        </button>
      </form>
      <hr />
      <div className="log-in-bottom">
        <p>Don't have an account? </p>
        <Link to="/sign-up" className="sign-up-button">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Signing;
