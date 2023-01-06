import React from "react";
import "./HeroStyles.css";
import Video from "../../assets/maldivesVideo.mp4";
function Hero() {
  return (
    <div className="hero">
      <video autoPlay loop id="video">
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
}

export default Hero;
