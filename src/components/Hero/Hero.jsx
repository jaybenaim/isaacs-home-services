import React, { useState, useEffect } from "react";
import HeroImage from "./HeroImage";
import images from "./heroImages";

import BootstrapSlider from "../SimpleSlider/BootstrapSlider";

import "../../assets/stylesheets/hero.css";

const Hero = () => {
  const onMobile = window.innerWidth < 450 && true;

  const sliderElements = () => {
    return images.map((image, i) => {
      return (
        <div key={i} className="carousel-item">
          <img
            src={image.src}
            alt={image.innerTitle}
            height={"400px"}
            width={"400px"}
          />
          <div className="carousel-caption">
            <h3>{image.innerTitle}</h3>
          </div>
        </div>
      );
    });
  };

  const heroImageElements = images.map((element, i) => {
    const { src, alt, innerTitle, innerDetails } = element;

    return (
      <HeroImage
        key={i}
        imageClassId={i + 1}
        image={src}
        alt={alt}
        innerTitle={innerTitle}
        innerDetails={innerDetails}
      />
    );
  });

  return (
    // render image squares in 2x2 grid
    <div className="hero-container">
      {onMobile ? (
        <BootstrapSlider elements={sliderElements} />
      ) : (
        heroImageElements
      )}
    </div>
  );
};

export default Hero;
