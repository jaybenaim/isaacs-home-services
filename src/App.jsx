import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ErrorPage from "./components/ErrorPage";

//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
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

export default App;
