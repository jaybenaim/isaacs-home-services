import React from "react";
import { Link } from "react-router-dom";
import lawn1 from "../../assets/img/lawn1.jpg";
import CompareSlider from "../SimpleSlider/CompareSlider";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types" 
import { Container } from "react-bootstrap";

import "assets/stylesheets/serviceItem.scss";

const ServiceItem = (props) => {
  let { service, position } = props;

  const gridClass = {
    imgContainer: `img-container ${position % 2 === 0 ? "even" : "odd"}`,
    details: `details ${(position + 1) % 2 === 0 ? "even" : "odd"}`,
  };
  const beforeImage = !service.beforeImage ? lawn1 : service.beforeImage;
  const afterImage = !service.afterImage ? lawn1 : service.afterImage;
  return (
    <div className="service-content">
      <div className={gridClass.imgContainer}>
        <CompareSlider
          leftImage={beforeImage}
          rightImage={afterImage}
          hover={true}
        />

        <img src={afterImage} alt={service.title} className="img-thumb" />

        <div className="img-layover">
          <Link
            to={{ pathname: `/services/${service.title}`, state: { service } }}
          >
            <h5 className="secondary-font">{service.title}</h5>
          </Link>
        </div>
      </div>
      <Container className={gridClass.details}>
        <h5 className="title secondary-font">{service.title}</h5>

        <div className="service-short-description secondary-font">
          <Container>
            {service.shortDescription}
          </Container>

          <div className="service-buttons">
            <Button variant="outline-secondary">
              <a href="tel:6472295873">Get a Free Quote</a>
            </Button>

            <Button variant="outline-secondary">
              <Link to="/book">Book Now</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};


ServiceItem.propTypes = { 
  service: { 
    title: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired, 
  },
  position: PropTypes.number.isRequired
}

export default ServiceItem;
