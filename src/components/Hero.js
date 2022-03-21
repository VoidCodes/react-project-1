import React from "react";
import background from '../images/background.jpg';

function HeroSection() {
  return (
    <div id="index-banner" className="parallax-container">
      <div className="section no-pad-bot">
        <div className="container">
          <br />
          <h1 className="header center teal-text text-lighten-2">Innova Training Center</h1>
          <div className="row center">
            <h5 className="header col s12 light">A Company that is focused on training our staffs to prepare them for the real world</h5>
          </div>
          <div className="row center">
            <a href="/" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">REGISTER NOW</a>
          </div>
          <br />
        </div>
      </div>
      <div className="parallax"><img className="HeroImage" src={background} alt="Unsplashed background img 1" /></div>
    </div>
  );
}

export default HeroSection;