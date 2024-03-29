﻿import React from "react";
import { Link } from "react-router-dom";
import "assets/stylesheets/footer.scss";

const Footer = () => {
  return (
    <footer className="footer container-fluid position-sticky">
        <div className="footer__left"> 
        <h5 className="footer__title pb-2"> 
          <Link to="/"> 
            Isaac's Home Services
          </Link>
        </h5>

        <div className="footer__description">
          <p className="text secondary-font">
            TEXT OR CALL FOR A FREE QUOTE <br />
            <span className="phone-number">
              <a href="tel:6472295873">
                647-229-5873
              </a>
            </span>
          </p>

          <p className="footer__policies">
            <Link
              to="/privacy-policy"
              style={{
                marginRight: "10px",
                marginBottom: "0",
                color: "#fff",
              }}
            >
              Privacy Policy
            </Link>
            <br />
            <Link
              to="/terms-and-conditions"
            >
              Terms and Conditions
            </Link>
          </p>
        </div>
        </div>

        <div className="footer__right"> 
          <div className="footer__socials">
            <ul className="list-unstyled">
              <li className="footer__socials__instagram">
                <a
                  className="footer-link"
                  href="https://www.instagram.com/highlyhandy_lawn_care_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-instagram"></i>
                  <span className="link-text">highlyhandy_lawn_care_</span>
                </a>
              </li>

              <li className="footer__socials__facebook">
                <a
                  className="footer-link"
                  href="https://www.facebook.com/highlyhandyLawnCare"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-facebook-link"
                >
                  <i className="fa fa-facebook-f"></i>
                  <span className="link-text">Highly Handy Lawn Care</span>
                </a>
              </li>

              <li className="footer__socials__developed-by">
                <a
                  className="footer-link developed-by"
                  id="developed-by"
                  href="https://jacobbenaim.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="">Website Made by Jacob Benaim ©</span>
                </a>
            </li>
            </ul>
          </div>
        </div>
      </footer>
  );
};
export default Footer;
