import React from "react";
import { Link } from "react-router-dom";
import Auth from "../Auth";

import { Dropdown } from "react-bootstrap";
import "../../assets/stylesheets/navbar.css";
import { connect } from "react-redux";

const NavBar = ({ auth: isAuthenticated }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm  justify-content-between">
        <Link className="navbar-brand primary-font-color" to="/">
          Highly Handy Home Services
        </Link>
        <div className="navbar-nav">
          <Link className="nav-item nav-link active primary-font-color" to="/">
            Home
          </Link>
          {isAuthenticated && (
            <Dropdown>
              <Dropdown.Toggle id="navbar-toggle">Account</Dropdown.Toggle>
              <Dropdown.Menu>
                <Auth />
              </Dropdown.Menu>
            </Dropdown>
          )}
        </div>
      </nav>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return { auth: state.auth };
};
export default connect(mapStateToProps, {})(NavBar);
