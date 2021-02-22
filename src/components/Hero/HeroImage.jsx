import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"
import "assets/stylesheets/heroImages.scss";
import { Container } from "react-bootstrap"

const HeroImage = (props) => {
  const [windowWidth, setWidth] = useState(window.innerWidth)

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

  const getClassName = () => {
    let classId = props.imageClassId;

    const animationOptions = {
      1: "animate__animated animate__slower hero-image animate__fadeInTopLeft",
      2: "animate__animated animate__slower hero-image animate__fadeInTopRight",
      3: "animate__animated animate__slower hero-image animate__fadeInBottomLeft",
      4: "animate__animated animate__slower hero-image animate__fadeInBottomRight",
    };
    if (windowWidth >= 480) {
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
        <Container className="hero-image__content">
          <h4 className="hero-image-title primary-font secondary-font-color">{props.innerTitle}</h4>
          <p className="hero-image-details secondary-font primary-font-color">{props.innerDetails}</p>
        </Container>
      )}
    </div>
  );
};

HeroImage.propTypes = { 
  imageClassId: PropTypes.number.isRequired, 
  innerTitle: PropTypes.string.isRequired,
  innerDetails: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired 
}

export default HeroImage;
