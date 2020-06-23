import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../Auth/Login";
import "./protectedRoute.css";

function PrivateRoute({
  isAuthenticated,
  handleLogin,
  children: Component,
  ...rest
}) {
  const [showAlert, setShowAlert] = useState(true);
  if (isAuthenticated === undefined) {
    isAuthenticated = false;
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          Component
        ) : showAlert ? (
          <>
            <div className="alert alert-danger login-alert" role="alert">
              Please login first!
              <button
                className="btn-success alert-close-btn"
                onClick={() => setShowAlert(false)}
              >
                X
              </button>
            </div>
            <Login redirect={true} handleLogin={handleLogin} {...props} />
          </>
        ) : (
          <Login redirect={true} handleLogin={handleLogin} {...props} />
        )
      }
    />
  );
}
export default PrivateRoute;

/// create component with alert message to login
