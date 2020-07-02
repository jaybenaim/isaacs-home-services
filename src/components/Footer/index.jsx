import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <h5 className="title">Isaac's Home Services</h5>
        <div className="description" style={{ paddingBottom: "0" }}>
          <p className="text secondary-font">
            TEXT OR CALL FOR A FREE QUOTE{" "}
            <span className="phone-number">
              <a href="tel:6472295873">647-229-5873</a>
            </span>
          </p>
          <p style={{ marginBottom: "0" }}>
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
            <Link
              to="/terms-and-conditions"
              style={{ color: "#fff", marginBottom: "0" }}
            >
              Terms and Conditions
            </Link>
          </p>
        </div>
      </div>

      <ul className="list-unstyled">
        <li>
          <a
            className="footer-link"
            href="https://www.instagram.com/highlyhandy_lawn_care_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram"></i>
            <span className="link-text">@highlyhandy_lawn_care_</span>
          </a>
        </li>
        <li>
          <a
            className="footer-link"
            href="https://www.facebook.com/highlyhandyLawnCare"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook-f"></i>
            <span className="link-text">Highly Handy Lawn Care</span>
          </a>
        </li>
        <li>
          <a
            className="footer-link creator-link"
            href="https://jacobbenaim.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="link-text ">Website Made by Jacob Benaim ©</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
