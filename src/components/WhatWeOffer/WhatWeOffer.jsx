import React from "react";
import grass from "../../assets/img/grass-top-view.jpg";
import "../../assets/stylesheets/whatWeOffer.css";
import { connect } from "react-redux";
import OfferItem from "./OfferItem";

const WhatWeOffer = (props) => {
  const getOfferElements = () => {
    let { services } = props;
    return services.map((service, i) => {
      return <OfferItem key={i} service={service} />;
    });
  };

  return (
    <div
      className="what-we-offer-section"
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), 94%,  rgba(255, 255, 255, 0.3) ), url(${grass})`,
        minHeight: "1200px",
        width: "100%",
        objectFit: "cover",
        backgroundAttachment: "fixed",
      }}
    >
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
