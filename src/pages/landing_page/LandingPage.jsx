import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroBg from "/hero_img.png";

const LandingPage = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <Navbar />
      <div className="landing-page">
        <section className="hero" id="hero">
          <div className="hero-content">
            <div className="hero-left">
              <div className="hero-left-img">
                <img src={HeroBg} alt="" />
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-header">
                
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
