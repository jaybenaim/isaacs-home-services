import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./app.scss";
import NavBar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ErrorPage from "./components/ErrorPage";
import Admin from "./components/Admin/Admin";
import ClientCalendar from "./components/ClientCalendar/ClientCalendar";

import { connect } from "react-redux";
import { getData, refreshData } from "./redux/actions/dataActions";
import { loginUser } from "./redux/actions/authActions";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Services from "./components/Services/Services";
import OfferItemShow from "./components/Services/ServiceItemShow";
import PrivacyPolicy from "./components/Policies/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./components/Policies/TermsAndConditions/TermsAndConditions";
import PropTypes from "prop-types"

//TODO Web Template Studio: Add routes for your new pages here.
const App = (props) => {
  const {
    auth: {
      user: {
        role
       },
    },
  } = props;

  useEffect(() => {
    // Refresh services
    // Pass in 'true' to refresh the data
    props.getData();

    // !window.location.href.includes("local") && props.refreshData();
    // props.refreshData();
    props.loginUser();
    // use to keep data synced in production
    // eslint-disable-next-line
  }, []);

  return (
    <div className="main">
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/services/:title" component={OfferItemShow} />

        <ProtectedRoute path="/admin" role={role}>
          <Route exact path="/admin" render={(props) => <Admin {...props} />} />
        </ProtectedRoute>
        <Route exact path="/calendar" component={ClientCalendar} />
        {/* <Route exact path="/book" component={BookNow} /> */}

        <Route
          exact
          path="/register"
          render={(props) => <Register {...props} />}
        />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route
          exact
          path="/terms-and-conditions"
          component={TermsAndConditions}
        />
        <Route exact path="/404" render={(props) => <ErrorPage {...props} />} />
      </Switch>

      <Footer className="mt-auto" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

App.propTypes = {
  auth: PropTypes.object,
  refreshData: PropTypes.func,
  getData: PropTypes.func,
  loginUser: PropTypes.func
}

export default connect(mapStateToProps, { getData, refreshData, loginUser })(
  App
);
