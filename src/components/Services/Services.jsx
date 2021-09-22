import React from "react";
import "assets/stylesheets/services.scss";
import { connect } from "react-redux";
import ServiceItem from "./ServiceItem";
import PropTypes from 'prop-types'
import { Container } from "react-bootstrap";

const Services = (props) => {
  let { services } = props;

  const getServices = () => {
    return services.map((service, i) => {
      return <ServiceItem key={i} position={i} service={service} />;
    });
  };

  return (
    <div className="services-section">
      <div className="inner-container">
        <h2 className="primary-font">Services</h2>

        <Container>
          <h3 className="text-center mb-5 pb-5">
            &quot;The best in the industry&quot; - Happy Client
          </h3>
        </Container>

        <div className="services">
          {getServices()}
          </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    services: state.data.services,
  };
};

Services.propTypes = {
  services: PropTypes.array
}

export default connect(mapStateToProps, {})(Services);
