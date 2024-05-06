import React from "react";
import "./style.css";
import Slider from "../../components/slider/page";
const HomePage = () => {
  return (
    <div className="contianer">
      <div className="left">
        <div className="title">
          <h1>Game Features</h1>
        </div>
        <div className="sliderContainer">
          <Slider />
        </div>
        <div className="red"></div>
      </div>
      <div className="right">
        <div className="LoginButton">OFFICIAL WEBSITE</div>
        <div className="imgContainer">
          <img
            src="https://res.cloudinary.com/dmhvb05w3/image/upload/v1714867867/galaxy_slayer_zed___render_by_lol_overlay_dd3n9vy-pre-removebg-preview_ljnqkc.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
