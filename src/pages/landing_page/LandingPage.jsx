import React from "react";
import "./LandingPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { FaUsers, FaPuzzlePiece, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "/game.png";
import img2 from "/beauty.png";
import img3 from "/connect.png";
import signup from "/signup.png";
import share from "/share.png";
import engage from "/engage.png";
import { useState } from "react";
import Signup from "../signing/Signup";
import Onboarding from "../../components/onboarding/Onboarding";

const LandingPage = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showOnboardingModal, setShowOnboardingModal] = useState(false);

  // Handle successful signup
  const handleSignupSuccess = () => {
    setShowSignupModal(false);
    setShowOnboardingModal(true);
  };

  return (
    <>
      <Navbar />
      <div className="landing-page">
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-image-container">
              <img
                src={img1}
                alt="People connecting puzzle pieces"
                className="hero-image"
              />
            </div>
            <div
              className="hero-content"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                boxShadow: "none",
              }}
            >
              <h1 className="hero-title">
                Connect, Share, <br />
                And Thrive Together—The Power <br />
                Of P2P In Your Hands!
              </h1>
              <p className="hero-description">
                Unlocking Opportunities For Individuals To Share Resources,
                Talents, And Services—Building Trust Through Meaningful
                Collaboration.
              </p>
              <div
                className="get-started-button"
                onClick={() => setShowSignupModal(true)}
              >
                Get Started
              </div>
            </div>
          </div>
        </section>

        {/* Guide Section */}
        <section className="guide-section" id="howitworks">
          <div className="section-container">
            <h2 className="section-title">Step-By-Step Guide</h2>
            <div className="steps-container">
              <div className="step-card">
                <img src={signup} alt="" />
              </div>
              <div className="step-card">
                <img src={share} alt="" />
              </div>
              <div className="step-card">
                {" "}
                <img src={engage} alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="section-container">
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-image-container">
                  <img
                    src={img2}
                    alt="Person smiling with phone"
                    className="feature-image"
                  />
                </div>
                <div className="feature-content">
                  <h2 className="feature-title">
                    Stay Inspired: Get Real-Time Motivation With Activity
                    Insights
                  </h2>
                  <p className="feature-description">
                    Stay inspired by tracking your progress in a visually
                    stunning way. Get pumped up about your progress with our
                    dynamic, colorful learning journey visualizer.
                  </p>
                </div>
              </div>

              <div className="feature-card reverse">
                <div className="feature-image-container">
                  <img
                    src={img3}
                    alt="People collaborating"
                    className="feature-image"
                  />
                </div>
                <div className="feature-content">
                  <h2 className="feature-title">
                    Connect, Discover, And Thrive: Real-Time Notifications For a
                    Dynamic Learning Journey
                  </h2>
                  <p className="feature-description">
                    Stay linked to your learning community and resources with
                    our notifications, ensuring you never miss an opportunity to
                    engage, learn, and grow.
                  </p>
                  <div className="feature-highlight">
                    <h3 className="highlight-title">Recent Updates</h3>
                    <p className="highlight-text">
                      Stay plugged into your learning community and resources,
                      ensuring uninterrupted access to opportunities for growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Modals */}
      {showSignupModal && (
        <Signup
          isOpen={showSignupModal}
          onClose={() => setShowSignupModal(false)}
          onSignupSuccess={handleSignupSuccess}
        />
      )}

      {showOnboardingModal && (
        <Onboarding
          isOpen={showOnboardingModal}
          onClose={() => setShowOnboardingModal(false)}
        />
      )}

      <Footer />
    </>
  );
};

export default LandingPage;
