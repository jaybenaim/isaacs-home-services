import React, { useEffect } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { refreshData, getData } from "../../redux/actions/dataActions";
import { loginUser } from "../../redux/actions/authActions";

import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import ContactInfo from "../ContactInfo/ContactInfo";

import "../../assets/stylesheets/home.css";

const Home = (props) => {
  useEffect(() => {
    props.getData();
    localStorage.removeItem("services");

    // !window.location.href.includes("local") && props.refreshData();
    props.refreshData();
    props.loginUser();
    // use to keep data synced in production
    // eslint-disable-next-line
  }, []);

  return (
    <main id="mainContent">
      <div className="container-fluid">
        <div className="row justify-content-center p-0">
          <h1 className="primary-font ">Highly Handy</h1>

          <Hero />
          <Services />
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
  connect(mapStateToProps, { refreshData, getData, loginUser })(Home)
);
