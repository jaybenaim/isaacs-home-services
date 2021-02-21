import React from "react";

import "assets/stylesheets/contactInfo.css";

const ContactInfo = () => {

  return (
    <div className="contact-info-section">
      <div className="inner-content">
        <h2 className="primary-font">Contact Us</h2>

        <div className="contact-info">
          <p className="text secondary-font primary-font-color">
            TEXT OR CALL FOR A FREE QUOTE
            <span className="phone-number">
              <a href="tel:6472295873" className="primary-font">
                647-229-5873
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
