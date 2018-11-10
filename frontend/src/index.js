import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import Promise from "promise-polyfill";

// To add to window
if (!window.Promise) {
  window.Promise = Promise;
}

ReactDOM.render(<Root />, document.getElementById("root"));
