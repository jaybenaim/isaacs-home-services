import React from "react";
import "../../assets/stylesheets/offerItem.css";

const OfferItem = (props) => {
  const { service } = props;

  return (
    <div className="service-content">
      <div className="img-container">
        <img src={service.image} alt={service.title} className="img-thumb" />
      </div>
      <div className="details">
        <h5 className="title secondary-font">{service.title}</h5>
        <p className="service-short-description secondary-font">
          {service.shortDescription}
        </p>
      </div>
    </div>
  );
};

export default OfferItem;
