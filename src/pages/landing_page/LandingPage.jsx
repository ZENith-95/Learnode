import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const LandingPage = () => {
  const [email, setEmail] = useState("");
 const steps = [
   {
     title: "Create Account",
     description: "Sign up and customize your learning preferences",
     icon: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z",
   },
   {
     title: "Join Groups",
     description: "Find study groups that match your interests",
     icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
   },
   {
     title: "Start Learning",
     description: "Collaborate, earn rewards, and track progress",
     icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
   },
 ];

  return (
    <>
      <Navbar />
      <div className="landing-page">
        <section className="hero" id="hero">
          <div className="hero-content">
            <h1>Unlock Your Full Potential Together</h1>
            <p>
              Master any skill through the power of collaborative P2P learning.
              Join a community where every lesson is personalized, progress is
              celebrated, and knowledge sharing becomes an adventure.
            </p>
            <Link to="#howitworks" className="cta">
              <button>Join the Learning Revolution</button>
            </Link>
          </div>
        </section>
       <section className="how-it-works">
      <div className="container">
        <h2>Start in Three Simple Steps</h2>
        <p className="section-description">Begin your learning journey in minutes</p>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{index + 1}</div>
              <div className="step-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                </svg>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
