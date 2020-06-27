import React from "react";
import "../../assets/stylesheets/offerItem.css";

const OfferItem = (props) => {
  let { service, position } = props;

  const gridClass = {
    imgContainer: `img-container ${position % 2 === 0 ? "even" : "odd"}`,
    details: `details ${(position + 1) % 2 === 0 ? "even" : "odd"}`,
  };
  return (
    <div className="service-content">
      <div className={gridClass.imgContainer}>
        <img src={service.image} alt={service.title} className="img-thumb" />

        <div className="img-layover">
          <h5 className="secondary-font">{service.title}</h5>
        </div>
      </div>
      <div className={gridClass.details}>
        <h5 className="title secondary-font">{service.title}</h5>

        <p className="service-short-description secondary-font">
          {service.shortDescription}
        </p>
      </div>
    </div>
  );
};

export default OfferItem;
