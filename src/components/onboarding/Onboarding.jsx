import React, { useState } from "react";
import "./Onboarding.css";
import { Link, useNavigate } from "react-router-dom";
import { getUserData, setUserData } from "../../utils/auth";

const Onboarding = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [education, setEducation] = useState("");

  const handleNext = () => {
    // Update user data with education level
    if (step === 1 && education) {
      const userData = getUserData();
      if (userData) {
        const updatedUserData = {
          ...userData,
          education: education,
        };
        setUserData(updatedUserData);
      }
    }

    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSkip = () => {
    onClose(); // Close the onboarding modal
  };

  const handleEducationChange = (e) => {
    setEducation(e.target.value);
  };

  const handleComplete = () => {
    onClose();
    navigate("/home");
  };

  // If modal is not open, don't render anything
  if (!isOpen) return null;

  return (
    <div className="onboarding-modal">
      <div className="onboarding-container">
        <div className="onboarding-header">
          <h1>
            {step === 1
              ? "Welcome to our StudyCircle! Tell us About Yourself"
              : "Welcome to StudyCircle!"}
          </h1>
          {step === 1 && (
            <p>
              Tell us about yourself, so that we can recommend you personalized
              study groups and friends later on!
            </p>
          )}
          {step === 2 && <p></p>}
        </div>

        <div className="onboarding-progress">
          <div className="onboarding-progress-left"></div>
          <div className="onboarding-progress-right">
            <p>{step} of 2 Completed</p>

            <div className="prog">
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${(step / 2) * 100}%` }}
                ></div>
              </div>
              <p>{`${(step / 2) * 100}%`}</p>
            </div>
          </div>
        </div>

        <div className="onboarding-content">
          {step === 1 && (
            <div className="onboarding-step">
              <div className="onboarding-tabs">
                <span className={`tab ${step === 1 ? "active" : ""}`}>
                  Education
                </span>
                <span className={`tab ${step === 2 ? "active" : ""}`}>
                  Welcome
                </span>
              </div>
              <div className="onboarding-info">
                <div className="onboarding-left">
                  <h2>Are you in High School or University Student?</h2>
                  <div className="options">
                    <label>
                      <input
                        type="radio"
                        name="education"
                        value="Junior High School"
                        checked={education === "Junior High School"}
                        onChange={handleEducationChange}
                      />
                      Junior High School
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="education"
                        value="Senior High School"
                        checked={education === "Senior High School"}
                        onChange={handleEducationChange}
                      />
                      Senior High School
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="education"
                        value="University"
                        checked={education === "University"}
                        onChange={handleEducationChange}
                      />
                      University
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="education"
                        value="Other"
                        checked={education === "Other"}
                        onChange={handleEducationChange}
                      />
                      Other
                    </label>
                  </div>
                </div>
                <div className="onboarding-right">
                  <div className="educ-img">
                    <img
                      src="edu-img.png"
                      alt="Education"
                      className="education-img"
                    />
                  </div>
                  <div className="onboarding-buttons">
                    <button className="skip-button" onClick={handleSkip}>
                      Skip
                    </button>

                    <button
                      className="next-button"
                      onClick={handleNext}
                      disabled={!education}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="onboarding-step">
              <div className="onboarding-tabs">
                <span className={`tab ${step === 1 ? "active" : ""}`}>
                  Education
                </span>
                <span className={`tab ${step === 2 ? "active" : ""}`}>
                  Welcome
                </span>
              </div>
              <div className="onboarding-info">
                <div className="onboarding-left">
                  <h2>Perfect! nice to meet you. Welcome to our StudyCircle</h2>
                </div>
                <div className="onboarding-right">
                  <div className="welcome-image">
                    <img
                      src="welcome.png"
                      alt="Welcome"
                      className="welcome-img"
                    />
                  </div>
                  <div className="onboarding-buttons">
                    <button className="bac-button" onClick={handleBack}>
                      Back
                    </button>
                    <button className="start-button" onClick={handleComplete}>
                      Start
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
