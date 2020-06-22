import React from "react";
import { Link } from "react-router-dom";
// import Auth from "../Auth";

// import { Dropdown } from "react-bootstrap";
import "../../assets/stylesheets/navbar.css";

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm  justify-content-between">
        <Link className="navbar-brand primary-font-color" to="/">
          Isaac's Home Services
        </Link>
        <div className="navbar-nav">
          <Link className="nav-item nav-link active primary-font-color" to="/">
            Home
          </Link>
          {/* <Dropdown>
            <Dropdown.Toggle id="navbar-toggle">Account</Dropdown.Toggle>
            <Dropdown.Menu>
              <Auth />
            </Dropdown.Menu>
          </Dropdown> */}
        </div>
      </nav>
    </React.Fragment>
  );
};
export default NavBar;
