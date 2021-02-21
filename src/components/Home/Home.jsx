import React, { useEffect } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { refreshData, getData } from "../../redux/actions/dataActions";
import { loginUser } from "../../redux/actions/authActions";

import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import ContactInfo from "../ContactInfo/ContactInfo";
import BootstrapSlider from "components/SimpleSlider/BootstrapSlider";

import images from "../../assets/js/slickElements.js";

import "assets/stylesheets/home.css";

import { slickSettings } from "assets/js/contactSlickSettings";

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

  // Replace with firebase images
  const slickElements = () => {
    return images.map((image, i) => {
      const { title, src } = image;

      return (
        <div key={i} className="carousel-item">
          <img src={src} alt={title} className="contact-slider-img" key={i} />
        </div>
      );
    });
  };

  return (
    <main id="mainContent">
      <div className="container-fluid">
        <div className="row justify-content-center p-0">
          <h1 className="primary-font ">Highly Handy</h1>

            <Hero />

          {/* Insert testimonials */}

            <Services />

            <ContactInfo />
          
          {/* <div className="home-slider-section container">
            <h3
              className="primary-font-color secondary-font"
            >
              Previous Projects
            </h3>

            <BootstrapSlider 
              elements={slickElements} 
              settings={slickSettings}
            />
           </div> */}
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
