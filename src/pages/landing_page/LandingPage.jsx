import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import img1 from "../../../public/game.png";
import img2 from "../../../public/beauty.png";
import img3 from "../../../public/connect.png"

const LandingPage = () => {
  // const [email, setEmail] = useState("");

  return (
    <>
      <Navbar />
      <div className="landing-page">
        <section className="hero" id="hero">
             <div className="hero-contain">
              <div className="image">
                <img src={img1} alt="" />
              </div>
              <div className="connect">
                <h1>Connect, Share,and Thrive Together—The Power of P2P in Your Hands!</h1> 
                <p>Empowering individuals to exchange resources,  skills,<br /> and services directly—building trust,  one connection at a time.</p>
                <button>Get Started</button>   
              </div>
             </div>
        </section>
        </div>

        {/* <div className="howitwork">
              <img src={img2} alt="" />
        </div> */}

        <section className="motivation" id="motivation">
          <div className="container">
           <div className="image">
              <img src={img2} alt="" />
           </div>
           <div className="description">
             <h1>Stay Inspired: Get Real-Time  Motivation with Activity Insights</h1>
             <p>Stay inspired by tracking your progress in a visually stunning way. Get pumped up about your progress with our dynamic,   colorful learning journey visualizer.</p>
           </div>
           </div>
        </section>

        <section className="connect" id="connect">
          <div className="content">
             <div className="image">
              <img src={img3} alt="" />
             </div>
             <div className="connect-description">
              <h1>Connect, Discover, and  Thrive: Real-Time <br /> Notifications  for a Dynamic Learning Journey</h1>
              <p>Stay linked to your learning community and resources with  our notifications, ensuring you never miss an opportunity to engage, learn, and grow.</p>

              <div className="recent">
                 <h2>Recent Updates</h2>
                 <p>Stay plugged into your learning community and resources, <br /> ensuring uninterrupted accessto opportunities for growth.</p>

              </div>
              <div className="recent">
                 <h2>Stay Engaged</h2>
                 <p>Keep your goals top of mind with timely reminders, driving you towards accomplishment</p>
              </div>
             </div>
             </div>
        </section>

      <Footer />
    </>
  );
};

export default LandingPage;
