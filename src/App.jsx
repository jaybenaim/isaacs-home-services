import React, { useEffect } from "react";
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
import ClientCalendar from "./components/ClientCalendar/ClientCalendar";

import { connect } from "react-redux";
import { getData, refreshData } from "./redux/actions/dataActions";
import { loginUser } from "./redux/actions/authActions";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import WhatWeOffer from "./components/WhatWeOffer/WhatWeOffer";
import OfferItemShow from "./components/WhatWeOffer/OfferItemShow";

//TODO Web Template Studio: Add routes for your new pages here.
const App = (props) => {
  const {
    auth: {
      user: { role },
    },
  } = props;

  useEffect(() => {
    // Refresh services
    props.getData();

    !window.location.href.includes("local") && props.refreshData();
    // props.refreshData();
    props.loginUser();
    // use to keep data synced in production
    // eslint-disable-next-line
  }, []);
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={WhatWeOffer} />
        <Route exact path="/services/:title" component={OfferItemShow} />

        <ProtectedRoute path="/admin" role={role}>
          <Route exact path="/admin" render={(props) => <Admin {...props} />} />
        </ProtectedRoute>
        <Route exact path="/calendar" component={ClientCalendar} />
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

export default connect(mapStateToProps, { getData, refreshData, loginUser })(
  App
);
