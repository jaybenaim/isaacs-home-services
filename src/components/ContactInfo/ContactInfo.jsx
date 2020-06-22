import React from "react";

import { slickSettings } from "./contactSlickSettings";
import images from "./slickElements";

import "../../assets/stylesheets/contactInfo.css";
import SimpleSlider from "../SimpleSlider/SimpleSlider";

const ContactInfo = () => {
  const slickElements = () => {
    return images.map((image, i) => (
      <img src={image.src} alt="grass" className="contact-slider-img" key={i} />
    ));
  };
  return (
    <div className="contact-info-section">
      <div className="inner-content">
        <h2 className="primary-font">Contact Us</h2>
        <div className="contact-info">
          <p className="text secondary-font">
            TEXT OR CALL FOR A FREE QUOTE{" "}
            <span className="phone-number">
              <a href="tel:6472295873">647-229-5873</a>
            </span>{" "}
            TEXT ADDRESS FOR A FAST PRICE
          </p>
        </div>
        <div className="contact-slider">
          {/* Slider with previous jobs */}
          <SimpleSlider settings={slickSettings} elements={slickElements} />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
