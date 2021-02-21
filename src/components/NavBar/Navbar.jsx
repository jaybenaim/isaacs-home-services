import React from "react";
import { Link } from "react-router-dom";
import Auth from "../Auth";

import { Dropdown, Navbar, Nav } from "react-bootstrap";
import "../../assets/stylesheets/navbar.css";
import { connect } from "react-redux";
import { useState } from "react";

const NavBar = (props) => {
  const { isAuthenticated } = props.auth;
  const [showDropdown, setShowDropdown] = useState(false);

  const serviceLinks = () => {
    const { services } = props;
    return services.map((service, i) => (
      <Link
        key={i}
        className="nav-item nav-link  primary-font-color "
        onClick={() => setShowDropdown(!showDropdown)}
        to={{ pathname: `/services/${service.title}`, state: { service } }}
      >
        {service.title}
      </Link>
    ));
  };
  return (
      <Navbar bg="light" expand="lg" id="main-nav">
        <Link className="navbar-brand primary-font-color" to="/">
          <span className="primary-font">Highly Handy</span>
        </Link>
        {window.innerWidth >= 450 && (
          <>
            <div className="desktop-nav-items">
              <a
                className="nav-item nav-link call-to-action  primary-font-color"
                href="tel:6472295873"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <i
                  className="fa fa-phone"
                  style={{ fontSize: "1.4em", marginRight: "5px" }}
                ></i>{" "}
                647-229-5873
              </a>
              <a
                className="nav-item nav-link call-to-action  primary-font-color"
                href="mailto:isaac_palomi@outlook.com"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <i
                  className="fa fa-envelope"
                  style={{ fontSize: "1.4em", marginRight: "5px" }}
                ></i>{" "}
                Email
              </a>
              <Link
                className="nav-item nav-link active primary-font-color"
                to="/"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Home
              </Link>

              <Dropdown className="nav-item nav-link ">
                <Dropdown.Toggle
                  id="navbar-toggle-services"
                  className="primary-font-color"
                >
                  Services
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <div id="services-dropdown">{serviceLinks()}</div>
                </Dropdown.Menu>
              </Dropdown>

              <Link
                className="nav-item nav-link primary-font-color"
                to="/calendar"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Calendar
              </Link>

              <a
                className="nav-item nav-link call-to-action  primary-font-color"
                href="tel:6472295873"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Book Now
              </a>

              {isAuthenticated && (
                <Dropdown className="nav-item nav-link">
                  <Dropdown.Toggle
                    id="navbar-toggle"
                    className="primary-font-color"
                  >
                    Account
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Auth />
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </div>
          </>
        )}
        <a href="tel:6472295873">
          <i className="fa fa-phone" id="nav-phone"></i>
        </a>
        <a href="mailto:isaac_palomi@outlook.com">
          <i className="fa fa-envelope" id="nav-mail"></i>{" "}
        </a>
        <button
          type="button"
          aria-label="Toggle navigation"
          className={
            showDropdown ? "navbar-toggler collapsed" : "navbar-toggler"
          }
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {showDropdown && window.innerWidth <= 480 && (
          <div id="basic-navbar-nav">
            <Nav className="mr-auto">
              <div className="mobile-nav-links">
                <Link
                  className="nav-item nav-link  primary-font-color "
                  to="/"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  Home
                </Link>

                <Dropdown className="nav-item nav-link">
                  <Dropdown.Toggle
                    id="navbar-toggle-services"
                    className="primary-font-color"
                  >
                    Services
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <div id="services-dropdown">{serviceLinks()}</div>
                  </Dropdown.Menu>
                </Dropdown>

                <Link
                  className="nav-item nav-link primary-font-color "
                  to="/calendar"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  Calendar
                </Link>

                <a
                  className="nav-item nav-link call-to-action  primary-font-color"
                  href="tel:6472295873"
                  id="cta-phone"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <i className="fa fa-phone" style={{ fontSize: "1.4em" }}></i>{" "}
                  647-229-5873
                </a>

                <a
                  className="nav-item nav-link call-to-action  primary-font-color"
                  href="mailto:isaac_palomi@outlook.com"
                  id="cta-email"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <i
                    className="fa fa-envelope"
                    style={{ fontSize: "1.4em" }}
                  ></i>{" "}
                  Email
                </a>
              </div>

              {isAuthenticated && window.innerWidth <= 450 && (
                <Dropdown className="nav-item nav-link">
                  <Dropdown.Toggle
                    id="account-toggle"
                    className="primary-font-color"
                  >
                    Account
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="account-dropdown">
                    <Auth />
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </Nav>
          </div>
        )}
      </Navbar>
  );
};
const mapStateToProps = (state) => {
  return { auth: state.auth, services: state.data.services };
};
export default connect(mapStateToProps, {})(NavBar);
