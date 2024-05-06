import React, { useState } from "react";
import "./style.css"
const Slider = () => {
  const images = [
    "https://res.cloudinary.com/dmhvb05w3/image/upload/v1697181450/2744bbfa15d14d5dd4cf508e5d0f8cac-removebg-preview_bckxqi.png",
    "https://res.cloudinary.com/dmhvb05w3/image/upload/v1697130164/0f3244fd40fc69ce723b75db86fa613e-removebg-preview_txagns.png",
    "https://res.cloudinary.com/dmhvb05w3/image/upload/v1697130164/af0dd2e3fd698f97a8912d1621fb94f6-removebg-preview_p827sp.png",
    "https://res.cloudinary.com/dmhvb05w3/image/upload/v1697181450/61a870e6931de05d72901aa46289ccf5-removebg-preview_dolp5g.png"
  ];

  const [imgeIndex, setImageIndex] = useState(0);

  const changeSlide = (direction) => {
    if (direction === "left") {
      setImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else {
      setImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <div className="slider">
      {imgeIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="./arrow.png" alt=">"className="rightar" />
          </div>
          <div className="imgContainer">
            <img src={images[imgeIndex]} alt="not work" />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <img src="./arrow.png" alt="<"  />
          </div>
       
        </div>
      )}
    </div>
  );
};

export default Slider;
