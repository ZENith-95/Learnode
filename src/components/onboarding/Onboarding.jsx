import React, { useState } from "react";
import "./Onboarding.css";

const Onboarding = ({ onClose }) => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSkip = () => {
    onClose(); // Close the onboarding modal
  };

return (
    <div className="onboarding-modal">
        <div className="onboarding-container">
            <div className="onboarding-header">
                <h1>
                    {step === 1
                        ? "Welcome to our study circle! Tell us About Yourself"
                        : "Perfect, nice to meet you!"}
                </h1>
                {step === 1 && (
                    <p>
                        Tell us about yourself, so that we can recommend you personalized
                        study groups and friends later on!
                    </p>
                )}
                {step === 2 && <p>Welcome to Study Circle</p>}
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
                                        <input type="radio" name="education" value="junior" />
                                        Junior High School
                                    </label>
                                    <label>
                                        <input type="radio" name="education" value="senior" />
                                        Senior High School
                                    </label>
                                    <label>
                                        <input type="radio" name="education" value="university" />
                                        University
                                    </label>
                                    <label>
                                        <input type="radio" name="education" value="other" />
                                        Other
                                    </label>
                                </div>
                            </div>
                            <div className="onboarding-right">
                                <div className="edu-img">
                                    <img
                                        src="edu-img.png"
                                        alt="Education"
                                        className="education-img"
                                    />
                                </div>
                                <div className="onboarding-buttons">
                                    <button className="skip-button" onClick={() => window.location.href = '/'}>
                                        Skip
                                    </button>
                                    <button className="next-button" onClick={handleNext}>
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
                                <h2>Perfect, nice to meet you!
                                Welcome to Study Circle</h2>
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
                                    <button className="start-button" onClick={() => window.location.href = '/home'}>
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
