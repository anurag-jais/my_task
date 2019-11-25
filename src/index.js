import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { helloSaga } from "./sagas";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./store/reducer";
import { Provider } from "react-redux";
import { fetchUserDetails } from "./sagas";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(fetchUserDetails);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
import { Provider } from "react-redux";ot")
import { Provider } from "react-redux";
import { Provider } from "react-redux";
import { Provider } from "react-redux";