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
import Calender from "./components/Calender/Calender";

import { connect } from "react-redux";

//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/calender" component={Calender} />

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
