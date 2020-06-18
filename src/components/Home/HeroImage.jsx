import React, { useState } from "react";
import "../../assets/stylesheets/heroImages.css";

const HeroImage = (props) => {
  const getClassName = () => {
    let classId = props.imageClassId;

    const animationOptions = {
      1: "animate__animated animate__slower hero-image animate__fadeInTopLeft",
      2: "animate__animated animate__slower hero-image animate__fadeInTopRight",
      3: "animate__animated animate__slower hero-image animate__fadeInBottomLeft",
      4: "animate__animated animate__slower hero-image animate__fadeInBottomRight",
    };
    if (window.innerWidth >= 450) {
      return animationOptions[classId];
    }
    return "hero-image";
  };
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      style={{
        backgroundImage: `url(${props.image}) `,
      }}
      className={getClassName()}
      id={`hero-image-${props.imageClassId}`}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {isShown && (
        <div className="hero-image-content">
          <p className="hero-image-title">{props.innerTitle}</p>
        </div>
      )}
    </div>
  );
};

export default HeroImage;
