import React, { useEffect } from "react";
import HeroImage from "./HeroImage";
import images from "./heroImages";
import { connect } from "react-redux";
import { getHeroes } from "../../redux/actions/heroActions";

import BootstrapSlider from "../SimpleSlider/BootstrapSlider";

import "../../assets/stylesheets/hero.css";

const Hero = (props) => {
  const onMobile = window.innerWidth < 450 && true;

  useEffect(() => {
    props.getHeroes();
    // eslint-disable-next-line
  }, []);
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

  const heroImageElements = props.currentImages.map((element, i) => {
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

const mapStateToProps = (state) => {
  return {
    currentImages: state.heroes.currentImages,
  };
};
export default connect(mapStateToProps, { getHeroes })(Hero);
