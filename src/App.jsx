import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ErrorPage from "./components/ErrorPage";
import Admin from "./components/Admin/Admin";
import BookNow from "./components/BookNow/BookNow";
import ClientCalender from "./components/ClientCalender/ClientCalender";

import { connect } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

//TODO Web Template Studio: Add routes for your new pages here.
const App = ({
  auth: {
    user: { role },
  },
}) => {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Home} />

        <ProtectedRoute path="/admin" role={role}>
          <Route exact path="/admin" render={(props) => <Admin {...props} />} />
        </ProtectedRoute>
        <Route exact path="/calender" component={ClientCalender} />
        <Route exact path="/book" component={BookNow} />

        <Route
          exact
          path="/register"
          render={(props) => <Register {...props} />}
        />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route exact path="/404" render={(props) => <ErrorPage {...props} />} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {})(App);
