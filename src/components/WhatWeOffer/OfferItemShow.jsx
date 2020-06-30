import React from "react";
import { Redirect } from "react-router-dom";

const OfferItemShow = ({
  location: {
    state: {
      service,
      service: { title, details },
    },
  },
}) => {
  if (!service) {
    return <Redirect to="/" />;
  }
  return (
    <div className="" style={{ position: "relative", top: "120px" }}>
      <h1>{title}</h1>
      <h2>{details.heading}</h2>
    </div>
  );
};

export default OfferItemShow;
