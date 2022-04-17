import React from "react";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import "assets/stylesheets/serviceItemShow.scss";

const ServiceItem = (props) => {
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
    <Container className="service-page">
      <div className="service-page__left">
        <img src={mainImage} alt={title} />
      </div>

      {/* <div className="service-page__center">
        <Button variant="info" className="service-page__book-btn">
          <a href="tel:6472295873">Book A Quote</a>
        </Button>
      </div> */}

      <div className="service-page__right">
        <h1 className="primary-font title">{title}</h1>

        <h2 className="secondary-font primary-font-color sub-title">
          {heading}
        </h2>

        <p className="secondary-font description">{description}</p>

        <Button variant="info" className="service-page__book-btn mt-4">
          <a
            href={
              title?.toLowerCase().includes("window")
                ? "tel:6472410832"
                : "tel:6472295873"
            }
          >
            Book A Quote
          </a>
        </Button>
      </div>
    </Container>
  );
};

ServiceItem.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ServiceItem;
