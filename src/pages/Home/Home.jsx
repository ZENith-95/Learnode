import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


const Home = () => {
  return (
    <div className="landing-page">
      <section className="hero" id="hero">
        <div className="hero-content">
          <div className="hero-left">
            <h1>Unlock Your Full Potential</h1>
            <p>
              Master any skill through the power of collaborative P2P learning.
              Join a community where every lesson is personalized, progress is
              celebrated, and knowledge sharing becomes an adventure.
            </p>
          </div>
          <div className="hero-right"></div>
          <Link to="#howitworks" className="cta">
            <button>Join the Learning Revolution</button>
          </Link>
        </div>
      </section>
      <section className="features" id="features">
        <div className="container"></div>
      </section>
    </div>
  );
};

export default Home;
