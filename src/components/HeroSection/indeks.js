import React from "react";
import bg from "../../images/bg.jpg";
import '../HeroSection/HeroElements.css'
const HeroSection = () => {
  return (
    <div id='Container'>
      <div id='imgContainer'>
        <img id='image'src={bg}></img>
      </div>
    </div>
  );
};

export default HeroSection;
