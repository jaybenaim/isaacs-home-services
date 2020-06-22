import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";

import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";

import { HashRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Provider } from "react-redux";
import store from "./redux/store";

import ReactSEO from "react-seo";

import { unregister } from "./registerServiceWorker";

function initializeReactGA() {
  ReactGA.initialize("UA-151372187-4");
  ReactGA.pageview(window.location.hash);
}
// Initialize google analytics page view tracking
const history = createBrowserHistory();

history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});
initializeReactGA();

ReactSEO.startMagic(
  [
    {
      url: "https://highlyhandy.com/#/services",
      isFullMatch: false,
    },
    {
      url: "https://highlyhandy.com/#/404",
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
