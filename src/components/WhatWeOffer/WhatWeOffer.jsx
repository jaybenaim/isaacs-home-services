import React from "react";
import "../../assets/stylesheets/whatWeOffer.css";
import { connect } from "react-redux";
import OfferItem from "./OfferItem";

const WhatWeOffer = (props) => {
  const getOfferElements = () => {
    let { services } = props;
    return services.map((service, i) => {
      return <OfferItem key={i} position={i} service={service} />;
    });
  };

  return (
    <div className="what-we-offer-section">
      <div className="inner-container">
        <h2 className="primary-font">Services</h2>
        <div className="services">{getOfferElements()}</div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    services: state.data.services,
  };
};
export default connect(mapStateToProps, {})(WhatWeOffer);
