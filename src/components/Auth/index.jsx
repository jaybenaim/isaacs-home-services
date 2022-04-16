import React from "react";
import { logoutUser } from "../../redux/actions/authActions";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

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
    <div className="auth-content nav-item nav-link">
      <Link
        to="/login"
        className="auth-link nav-item nav-link primary-font-color"
      >
        Log In
      </Link>
      <Link
        to="/register"
        className="auth-link nav-item nav-link primary-font-color"
      >
        Register
      </Link>
    </div>
  ) : (
    <div className="auth-content">
      <div className="auth-link">
        <Link to="/admin" className="primary-font-color">
          Admin
        </Link>
      </div>

      <div className="auth-link">
        <Button
          id="logout"
          onClick={(e) => onLogoutClick(e)}
          className="btn button-outline primary-font-color"
        >
          Logout <span className="auth-content--name"> {name}?</span>
        </Button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default withRouter(connect(mapStateToProps, { logoutUser })(Auth));
