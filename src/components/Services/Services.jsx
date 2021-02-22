import React from "react";
import "assets/stylesheets/services.scss";
import { connect } from "react-redux";
import ServiceItem from "./ServiceItem";

const Services = (props) => {
  const getServices = () => {
    let { services } = props;
    return services.map((service, i) => {
      return <ServiceItem key={i} position={i} service={service} />;
    });
  };

  return (
    <div className="services-section">
      <div className="inner-container">
        {window.location.href.includes("services") && (
          <h2 className="primary-font">Services</h2>
        )}
        <div className="services">
          <h2 className="services__mobile-heading primary-font primary-font-color">
            Services
            </h2>
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
export default connect(mapStateToProps, {})(Services);
