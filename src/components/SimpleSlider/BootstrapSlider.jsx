import React from "react";
import { Carousel } from "react-bootstrap";
import "../../assets/stylesheets/bootstrapSlider.css";

const BootstrapSlider = ({ elements, id }) => {
  return (
    <Carousel id={id} className="carousel slide" data-ride="carousel">
      {elements()}
    </Carousel>
  );
};

export default BootstrapSlider;
