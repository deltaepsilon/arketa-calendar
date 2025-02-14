import "./index.css";

import * as serviceWorker from "./serviceWorker";

import AppContainer from "./components/App/AppContainer";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import calendarApp from "./redux/reducers";
import { createStore } from "redux";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

const store = createStore(
  calendarApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store as any}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
