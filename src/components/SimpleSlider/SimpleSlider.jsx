import React from "react";
import Slider from "react-slick";
import PropTypes from 'prop-types'

const SimpleSlider = ({ settings, elements, id }) => {
  return (
    <Slider {...settings} id={id}>
      {elements()}
    </Slider>
  );
};

SimpleSlider.propTypes = {
  id: PropTypes.string.isRequired,
  elements: PropTypes.object.isRequired, 
  settings: PropTypes.object, 
}
export default SimpleSlider;
