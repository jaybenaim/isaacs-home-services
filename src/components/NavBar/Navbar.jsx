import React from "react";
import { Link } from "react-router-dom";
import Auth from "../Auth";

import { Dropdown, Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

import "assets/stylesheets/navbar.scss";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types"

const NavBar = (props) => {
  const { auth: { isAuthenticated } } = props;
  const [showDropdown, setShowDropdown] = useState(false);
  const [windowWidth, setWidth] = useState(window.innerWidth)

  const handleResize = (
    {
      target: {
        innerWidth
      }
    }) => { 
    setWidth(innerWidth)
  }

  const handleScroll = () => { 
      if (document.querySelector('html').scrollTop > 250) {
        setShowDropdown(false)
        document.querySelector('.navbar').scroll = 0
      }
  }

  useEffect(() => { 
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)


    return () => { 
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const serviceLinks = () => {
    const { services } = props;

    const handleLinkClick = (event) => { 
      const elements = document.querySelectorAll('.nav-link') 

      for (const el of elements) { 
        el.classList.remove('nav-link--active')
      }

      event.currentTarget.classList.add('nav-link--active')
    }

    return services.map((service, i) => (
      <Link
        key={i}
        className="nav-item nav-link primary-font-color"
        onClick={(event) => handleLinkClick(event)}
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
        {windowWidth >= 992 && (
          <>
            <div className="desktop-nav-items">
              <Link
                className="nav-item nav-link active primary-font-color"
                to="/"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Home
              </Link>

              <Dropdown 
                className="nav-item nav-link"
                focusFirstItemOnShow={true}
                navbar={true}
                onToggle={() => setShowDropdown(!showDropdown)}
                show={showDropdown}
              >
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

        <a href="tel:6472295873" className="mobile-icons">
          <i className="fa fa-phone" id="nav-phone"></i>

          <span className="mobile-icons__text">
            647-229-5873
          </span>
        </a>

        <a href="mailto:isaac_palomi@outlook.com" className="mobile-icons">
          <i className="fa fa-envelope" id="nav-mail"></i>
          <span className="mobile-icons__text">
            isaac_palomi@outlook.com
          </span>
        </a>


        <div className="navbar-dropdown--right"> 
          <Button
            className={
              showDropdown ? "collapsed bars" : "bars"
            }
            aria-pressed="menuOpen"
            role="button"
            tabIndex="0"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div></div>
            <div></div>
            <div></div>
          </Button>
        </div>


        {showDropdown && windowWidth <= 992 && (
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

              {isAuthenticated && windowWidth <= 450 && (
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

NavBar.propTypes = {
  auth: PropTypes.object, 
  services: PropTypes.array
}

const mapStateToProps = (state) => {
  return { auth: state.auth, services: state.data.services };
};

export default connect(mapStateToProps, {})(NavBar);
