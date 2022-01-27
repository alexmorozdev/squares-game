import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";

import createSagaMiddleware from "redux-saga";
import { sagaWatcher } from "./sagas/sagaWatcher";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import initialState from "./store/initialState";

const saga = createSagaMiddleware();
const store = createStore(rootReducer, initialState, applyMiddleware(saga));

saga.run(sagaWatcher);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
