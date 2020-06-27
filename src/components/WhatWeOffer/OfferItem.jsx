import React from "react";
import "../../assets/stylesheets/offerItem.css";

const OfferItem = (props) => {
  const { service } = props;

  return (
    <div className="service-content">
      <div className="img-container">
        <img src={service.image} alt={service.title} className="img-thumb" />

        <div className="img-layover">
          <h5 className="secondary-font">{service.title}</h5>
        </div>
      </div>
      <div className="details">
        <p className="service-short-description secondary-font">
          {service.shortDescription}
        </p>
      </div>
    </div>
  );
};

export default OfferItem;
