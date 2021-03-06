import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Reducer from "../reducer/reducer";
import thunk from "redux-thunk";
import App from "./App";

const rootElement = document.getElementById("root");

const store = createStore(Reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
