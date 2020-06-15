import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import Auth from "../Auth";

import { Dropdown } from "react-bootstrap";
import "../../assets/stylesheets/navbar.css";

//TODO Add a new link in the NavBar for your page here.
// A skip link is included as an accessibility best practice. For more information visit https://www.w3.org/WAI/WCAG21/Techniques/general/G1.
const NavBar = () => {
  return (
    <React.Fragment>
      <div className={styles.skipLink}>
        <a href="#mainContent">Skip to Main Content</a>
      </div>
      <nav className="navbar navbar-expand-sm navbar-light border-bottom justify-content-between">
        <Link className="navbar-brand" to="/">
          AGW
        </Link>
        <div className="navbar-nav">
          <Link className="nav-item nav-link active " to="/">
            Home
          </Link>
          <Dropdown>
            <Dropdown.Toggle id="navbar-toggle">Account</Dropdown.Toggle>
            <Dropdown.Menu>
              <Auth />
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default NavBar;
