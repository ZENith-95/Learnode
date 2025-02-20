import React, { useState } from 'react'
import './Signing.css'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess(false);
        setLoading(true);

        // Basic validation
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

    return (
      <div className="sign-in">
        <h2>Forgot Password</h2>
        <p className='forgot-password-message'>
          Enter your email address below and we’ll send you a code to log in and
          reset your password
        </p>
        {error && <div className="error-message">{error}</div>}
        {success && (
          <div className="success-message">Password reset email sent!</div>
        )}
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
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
        <hr />
        <div className="log-in-bottom">
          <p>Remember your password? </p>
          <Link to="/signing" className="sign-up">
            Log In
          </Link>
        </div>
      </div>
    );
}

export default ForgotPassword