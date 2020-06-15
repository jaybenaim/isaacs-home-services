import React from "react";
import { logoutUser } from "../../redux/actions/authActions";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";

import { Dropdown } from "react-bootstrap";
import "../../assets/stylesheets/auth.css";

const Auth = (props) => {
  const {
    auth: {
      user: { name },
      isAuthenticated,
    },
    logoutUser: handleLogoutUser,
  } = props;

  const onLogoutClick = (e) => {
    e.preventDefault();
    handleLogoutUser();
  };

  return !isAuthenticated ? (
    <div className="auth-content">
      <Link to="/login" className="auth-link">
        Log In
      </Link>
      <Link to="/register" className="auth-link">
        Register
      </Link>
    </div>
  ) : (
    <div className="auth-content">
      <button
        id="logout"
        onClick={(e) => onLogoutClick(e)}
        className=" auth-link"
      >
        Logout <span className="auth-content--name"> {name}?</span>
      </button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default withRouter(connect(mapStateToProps, { logoutUser })(Auth));
