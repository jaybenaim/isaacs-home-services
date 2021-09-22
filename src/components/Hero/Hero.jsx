import React, { useEffect, useState } from "react";
import HeroImage from "./HeroImage";
import images from "../../assets/js/heroImages.js";
import { connect } from "react-redux";
import { getHeroes } from "../../redux/actions/heroActions";
import PropTypes from 'prop-types'
import BootstrapSlider from "components/SimpleSlider/BootstrapSlider";

import "assets/stylesheets/hero.scss";

const Hero = (props) => {

  const [windowWidth, setWidth] = useState(window.innerWidth)

  const onMobile = windowWidth <= 768;

  const handleResize = (
    {
      target: {
        innerWidth
      }
    }) => {
    setWidth(innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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
            loading="lazy"
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
        props.currentImages && heroImageElements
      )}
    </div>
  );
};

Hero.propTypes = {
  currentImages: PropTypes.array,
  getHeroes: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    currentImages: state.heroes.currentImages,
  };
};
export default connect(mapStateToProps, { getHeroes })(Hero);
