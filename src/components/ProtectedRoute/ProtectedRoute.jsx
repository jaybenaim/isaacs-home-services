import React, { useState } from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../Auth/Login";
import "./protectedRoute.css";

function PrivateRoute({ role, children: Component, ...rest }) {
  const [showAlert, setShowAlert] = useState(true);
  if (role === undefined) {
    role = false;
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        role === "admin" ? (
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
            <Login {...props} />
          </>
        ) : (
          <Login {...props} />
        )
      }
    />
  );
}
export default PrivateRoute;

/// create component with alert message to login
