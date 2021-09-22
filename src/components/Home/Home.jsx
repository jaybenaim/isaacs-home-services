import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { loginUser } from "../../redux/actions/authActions";

import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import ContactInfo from "../ContactInfo/ContactInfo";
import HomeSlider from "components/HomeSlider/HomeSlider";
import PropTypes from "prop-types"

import "assets/stylesheets/home.scss";

const Home = () => {
  return (
    <main id="mainContent">

      <Hero />

      {/* Insert testimonials */}

      <Services />

      <ContactInfo />

      <HomeSlider />
    </main>
  );
};

Home.propTypes = {
  loginUser: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    services: state.services,
  };
};

export default withRouter(
  connect(mapStateToProps, { loginUser })(Home)
);
