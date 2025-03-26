import React from "react";
import "./Features.css";
import { Link } from "react-router-dom";
import go_img from "/blue-btn.svg";

// Replace these imports with your actual images:
import cardImage1 from "/findpeersimg.png";
import cardImage2 from "/setgoalsimg.png";
import cardImage3 from "/resourcesimg.png";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

const ShowcaseCards = () => {
  return (
    <div className="features" id="features">
      <h2>Learn About Our Simple Yet Powerful Features</h2>
      <section className="showcase-cards">
        <div className="showcase-card">
          <img src={cardImage1} alt="Interact with Peers" />
          <h3>
            Interact with Peers, Inspire Yourself, and Improve Your Skills
          </h3>
          <p>Streamline Your Education with Our User-Friendly Platform</p>
          <Link to="/find-peers">
            <button>
              Find Peers{" "}
              <span>
                <img style={{ width: "1.4rem" }} src={go_img} />
              </span>
            </button>
          </Link>
        </div>
        <div className="showcase-card">
          <img src={cardImage2} alt="Study Group" />
          <h3>Become Part of a Study Group That Feels Like Family</h3>
          <p>
            Link up with like-minded peers who share your passion for learning
          </p>
          <Link to={"/groups"}>
            <button>
              Groups{" "}
              <span>
                <img style={{ width: "1.4rem" }} src={go_img} />
              </span>
            </button>
          </Link>
        </div>
        <div className="showcase-card">
          <img src={cardImage3} alt="Goal Setting" />
          <h3>Stay on Track with Tailored Goal Setting Solutions</h3>
          <p>
            Maintain Your Passion and Commitment With Our Motivational Features
          </p>
          <Link to="/resources">
            <button>
              Resources{" "}
              <span>
                <img style={{ width: "1.4rem" }} src={go_img} />
              </span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ShowcaseCards;
