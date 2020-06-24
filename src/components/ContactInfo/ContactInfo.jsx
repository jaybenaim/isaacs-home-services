import React from "react";

import { slickSettings } from "./contactSlickSettings";
import images from "./slickElements";

import "../../assets/stylesheets/contactInfo.css";
import SimpleSlider from "../SimpleSlider/SimpleSlider";

const ContactInfo = () => {
  const slickElements = () => {
    return images.map((image, i) => {
      const { title, src } = image;
      return (
        <div className="slider-image-container ">
          <img src={src} alt={title} className="contact-slider-img" key={i} />
          <p className="primary-font-color title">{title}</p>
        </div>
      );
    });
  };
  return (
    <div className="contact-info-section">
      <div className="inner-content">
        <h2 className="primary-font">Contact Us</h2>
        <div className="contact-info">
          <p className="text secondary-font primary-font-color">
            TEXT OR CALL FOR A FREE QUOTE{" "}
            <span className="phone-number">
              <a href="tel:6472295873" className="primary-font">
                647-229-5873
              </a>
            </span>{" "}
          </p>
        </div>
        <div className="contact-slider">
          {/* Slider with previous jobs */}
          <h3 className="primary-font-color secondary-font">
            Previous Projects
          </h3>
          <SimpleSlider settings={slickSettings} elements={slickElements} />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
