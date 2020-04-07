// React
import React from "react";
import ReactDOM from "react-dom";

// CSS
import "normalize-css";
import "./css/styles.css";

// Components
import App from "./App";
import { ShortListProvider } from "./context/short-list";
import { SearchProvider } from "./context/search";

ReactDOM.render(
  <React.StrictMode>
    <ShortListProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </ShortListProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
