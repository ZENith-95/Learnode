import React from "react";
import "./ResourcesNav.css";
import img1 from "../../../public/vector.png";
import img2 from "../../../public/logo.png";
import img3 from "../../../public/arrow.png";
import { useState } from "react";

const ResourcesNav = () => {
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => {
    if (inputValue === "") {
      setInputValue('search');
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="Nav">
      <div className="navbar-div">
        <div className="nav-left">
          <img className="img3" src={img3} alt="" />
          <div className="nav-logo">
            <img src={img2} alt="" />
            <h4>study circle</h4>
          </div>
        </div>
        <div className="nav-middle">
          <input
            type="text"
            value={inputValue}
            onFocus={handleFocus}
            onChange={handleChange}
            // placeholder="search"
          />
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ResourcesNav;
