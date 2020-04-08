// React
import React from "react";
import ReactDOM from "react-dom";

// CSS
import "normalize-css";
import "./css/styles.css";

// Components
import App from "./App";

// Data
import { names } from "./data";

ReactDOM.render(
  <React.StrictMode>
    <App names={names} />
  </React.StrictMode>,
  document.getElementById("root")
);
