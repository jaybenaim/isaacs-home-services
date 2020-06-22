import React from "react";
import Slider from "react-slick";

const SimpleSlider = ({ settings, elements, id }) => {
  return (
    <Slider {...settings} id={id}>
      {elements()}{" "}
    </Slider>
  );
};

export default SimpleSlider;
