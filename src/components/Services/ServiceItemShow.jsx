import React from "react";
import { Redirect } from "react-router-dom";
import "../../assets/stylesheets/offerItemShow.css";
import { Button } from "react-bootstrap";

const OfferItemShow = (props) => {
  if (!props.location.state) {
    return <Redirect to="/" />;
  }

  const {
    location: {
      state: {
        service: {
          title,
          details: { heading, description, mainImage },
        },
      },
    },
  } = props;

  return (
    <div
      className="offer-item-show-page"
      style={{ position: "relative", top: "120px" }}
    >
      <div className="left-column">
        <img src={mainImage} alt={title} />
      </div>
      <div className="center-column">
        <h1 className="primary-font">{title}</h1>
        <h2 className="secondary-font primary-font-color">{heading}</h2>
        <p className="secondary-font">{description}</p>

        <Button variant="info">
          <a href="tel:6472295873">Book A Quote</a>
        </Button>
      </div>
      <div className="right-column"></div>
    </div>
  );
};

export default OfferItemShow;
