import React from "react";
import { Link } from "react-router-dom";
import Auth from "../Auth";

import { Dropdown, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../../assets/stylesheets/navbar.css";
import { connect } from "react-redux";
import { useState } from "react";

const NavBar = (props) => {
  const { isAuthenticated } = props.auth;
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <Link className="navbar-brand primary-font-color" to="/">
          <span className="primary-font">Highly Handy</span>
        </Link>

        {window.innerWidth >= 450 && (
          <>
            <div className="desktop-nav-items">
              <Link
                className="nav-item nav-link active primary-font-color "
                to="/"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Home
              </Link>
              <Link
                className="nav-item nav-link active primary-font-color "
                to="/calender"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Calender
              </Link>
            </div>

            {isAuthenticated && (
              <Dropdown>
                <Dropdown.Toggle id="navbar-toggle">Account</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Auth />
                </Dropdown.Menu>
              </Dropdown>
            )}
          </>
        )}

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
            <Nav className="mr-auto ">
              <div className="nav-links">
                <Link
                  className="nav-item nav-link active primary-font-color "
                  to="/"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  Home
                </Link>
                <Link
                  className="nav-item nav-link  primary-font-color "
                  to="/calender"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  Calender
                </Link>
              </div>

              {isAuthenticated && window.innerWidth <= 450 && (
                <Dropdown className="account-toggle">
                  <Dropdown.Toggle id="account-toggle">Account</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Auth />
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </Nav>
          </div>
        )}
      </Navbar>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return { auth: state.auth };
};
export default connect(mapStateToProps, {})(NavBar);
