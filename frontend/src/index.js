import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import Promise from "promise-polyfill"; // FUCKING IE11
import "babel-polyfill" // FUCKING IE11

// FUCKING IE11
if (!window.Promise) {          
  window.Promise = Promise;     
}

ReactDOM.render(<Root />, document.getElementById("root"));
