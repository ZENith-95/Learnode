import React from "react";
import "../landing_page/LandingPage.css";
import { useState } from "react";
import FindPeersHeader from "../../components/Navbar/FindPeersNav";
import Footer from "../../components/Footer/Footer";
import HeroBg from "/hero_img.png";
import Features from "../landing_page/Features";

const Home = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <FindPeersHeader />
      <div className="landing-page">
        <section className="hero" id="hero">
          <div className="hero-content">
            <div className="hero-left">
              <div className="hero-header">
                <h2>
                  Unlock Your Full <br /> Potential
                </h2>
              </div>
              <p>
                Achieve Academic Excellence <br /> Alongside A Dedicated
                Community Of Learners
              </p>
            </div>
            <div className="hero-right">
              <div className="hero-right-img">
                <img src={HeroBg} alt="" />
              </div>
            </div>
          </div>
        </section>
        <Features />
      </div>
      <Footer />
    </>
  );
};

export default Home;
