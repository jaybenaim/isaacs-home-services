import React from "react";
import { Carousel } from "react-bootstrap";
import "../../assets/stylesheets/bootstrapSlider.css";
import PropTypes from "prop-types"

const BootstrapSlider = ({ elements, id }) => {
  return (
    <Carousel
      id={id}
      className="carousel slide"
      data-ride="carousel"
      touch={true}
      slide={true}
      keyboard={true}
      >
      {elements()}
    </Carousel>
  );
};

BootstrapSlider.propTypes = {
  elements: PropTypes.func,
  id: PropTypes.number
}
export default BootstrapSlider;
