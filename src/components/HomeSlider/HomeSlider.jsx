import React from 'react';
import { homeSlickSliderSettings } from "assets/js/slickSliderSettings"
import SlickSlider from "components/SimpleSlider/SimpleSlider"

import images from "assets/js/slickElements.js";

import "assets/stylesheets/homeSlider.scss"

const HomeSlider = () => {
    // Replace with firebase images
    const slickElements = () => {
      return images.map((image, i) => {
        const { title, src } = image;
  
        return (
          <div key={i} className="home-slider-section__carousel-item carousel-item">
            <img src={src} alt={title} className="home-slider-section__carousel-item--image" key={i} />
          </div>
        );
      });
    };

  return ( 
    <div className="home-slider-section"> 
      <h2 className="primary-font-color primary-font">
        Previous Projects
      </h2>

      <SlickSlider
        elements={slickElements} 
        settings={homeSlickSliderSettings}
      />
  </div>
   );
}
 
export default HomeSlider;