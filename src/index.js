import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import file from "./reducer"; // That we have created in the earlier section
import {Provider} from "react-redux";
import App from "./App";
import  thunk from 'redux-thunk';
/** 
 * Creating the store by sending the Reducer
 */

let middleware = applyMiddleware(thunk);
export let store = createStore(file,middleware);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
