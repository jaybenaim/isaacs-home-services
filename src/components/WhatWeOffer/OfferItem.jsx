import React from "react";
import "../../assets/stylesheets/offerItem.css";

const OfferItem = (props) => {
  const { service } = props;

  return <div className="service-title">{service.title}</div>;
};

export default OfferItem;
