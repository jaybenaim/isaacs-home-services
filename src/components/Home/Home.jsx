import React, { useEffect } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { refreshData, getData } from "../../redux/actions/dataActions";

import Hero from "../Hero/Hero";
import WhatWeOffer from "../WhatWeOffer/WhatWeOffer";
import ContactInfo from "../ContactInfo/ContactInfo";

import "../../assets/stylesheets/home.css";

const Home = (props) => {
  useEffect(() => {
    // use for development

    props.getData();

    // use to keep data synced in production
    // props.refreshData();
    // eslint-disable-next-line
  }, []);

  return (
    <main id="mainContent">
      <div className="container-fluid">
        <div className="row justify-content-center p-0">
          <h1>Network King</h1>
          <Hero />
          <WhatWeOffer />
          <ContactInfo />
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    services: state.services,
  };
};
export default withRouter(
  connect(mapStateToProps, { refreshData, getData })(Home)
);
