import React from "react";
import "assets/stylesheets/services.scss";
import { connect } from "react-redux";
import ServiceItem from "./ServiceItem";
import PropTypes from 'prop-types'

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
