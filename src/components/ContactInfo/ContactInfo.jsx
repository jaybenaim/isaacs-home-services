import React from "react";
import grass from "../../assets/img/grass-top-view.jpg";
import progress from "../../assets/img/progress.jpg";

import "../../assets/stylesheets/contactInfo.css";

const ContactInfo = () => {
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
        {/* Slider with previous jobs */}
        <img src={grass} alt="grass" className="left-image" />
        <img src={progress} alt="grass" className="center-image" />
        <img src={grass} alt="grass" className="right-image" />
      </div>
    </div>
  );
};

export default ContactInfo;
