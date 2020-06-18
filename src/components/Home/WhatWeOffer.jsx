import React from "react";
import grass from "../../assets/img/grass-top-view.jpg";
import "../../assets/stylesheets/whatWeOffer.css";

const WhatWeOffer = () => {
  return (
    <div
      className="what-we-offer-section"
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${grass})`,
        height: "1200px",
        width: "100%",
        objectFit: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="inner-container">
        <h2>What We Offer</h2>
      </div>
    </div>
  );
};

export default WhatWeOffer;
