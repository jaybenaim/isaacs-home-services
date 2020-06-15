﻿import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";

import App from "./App";
import { HashRouter } from "react-router-dom";
import unregister from "./registerServiceWorker";

import { Provider } from "react-redux";
import store from "./redux/store";

import ErrorBoundary from "./components/ErrorBoundary";

import ReactSEO from "react-seo";

import "bootstrap/dist/css/bootstrap.min.css";

function initializeReactGA() {
  ReactGA.initialize("UA-151372187-4");
  ReactGA.pageview(window.location.hash);
}
initializeReactGA();

ReactSEO.startMagic(
  [
    {
      url: "/services",
      isFullMatch: false,
    },
    {
      url: "/404",
      isFullMatch: false,
    },
  ],
  renderDOM
);
function renderDOM() {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </HashRouter>
    </Provider>,
    document.getElementById("root")
  );
}
/**
 * Be aware that the website will only update to the latest version on the 2nd page visit if it as already cached
 * Learn more about service workers in React: https://create-react-app.dev/docs/making-a-progressive-web-app
 */
unregister();
