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
          Highly Handy Home Services
        </Link>
        <button
          type="button"
          aria-label="Toggle navigation"
          class={showDropdown ? "navbar-toggler collapsed" : "navbar-toggler"}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        {showDropdown && (
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
                  className="nav-item nav-link active primary-font-color "
                  to="/calender"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  Calender
                </Link>
              </div>

              {isAuthenticated && (
                <NavDropdown>
                  <NavDropdown.Toggle id="navbar-toggle">
                    Account
                  </NavDropdown.Toggle>
                  <Dropdown.Menu>
                    <Auth />
                  </Dropdown.Menu>
                </NavDropdown>
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
