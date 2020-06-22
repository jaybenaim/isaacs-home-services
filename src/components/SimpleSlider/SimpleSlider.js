import React from "react";
import Slider from "react-slick";

const SimpleSlider = ({ settings, elements }) => {
  return <Slider {...settings}>{elements()}</Slider>;
};

export default SimpleSlider;
