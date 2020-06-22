import React from "react";
import HeroImage from "./HeroImage";
import images from "./heroImages";

import "../../assets/stylesheets/hero.css";

const Hero = () => {
  // get images

  const heroImageElements = images.map((element, i) => {
    const { image, alt, innerTitle, innerDetails } = element;
    return (
      <HeroImage
        key={i}
        imageClassId={i + 1}
        image={image}
        alt={alt}
        innerTitle={innerTitle}
        innerDetails={innerDetails}
      />
    );
  });
  return (
    // render image squares in 2x2 grid
    <div className="hero-container">{heroImageElements}</div>
  );
};

export default Hero;
