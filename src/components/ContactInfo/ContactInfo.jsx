import React from "react";
import grass from "../../assets/img/grass-top-view.jpg";

import "../../assets/stylesheets/contactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info-section">
      <div className="inner-content">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p className="phone">
            Text or Call{" "}
            <span className="phone-number">
              <a href="tel:6472295873">647-229-5873</a>
            </span>
          </p>
          <p className="text">
            TEXT OR CALL FOR A FREE QUOTE 647-229-5873 TEXT ADRESS FOR A FAST
            PRICE
          </p>
        </div>
        <img src={grass} alt="grass" className="left-image" />
        <img src={grass} alt="grass" className="center-image" />
        <img src={grass} alt="grass" className="right-image" />
      </div>
    </div>
  );
};

export default ContactInfo;
