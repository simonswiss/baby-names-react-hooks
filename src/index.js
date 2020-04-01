import React from "react";
import ReactDOM from "react-dom";
import "normalize-css";

import "./styles/styles.css";
import App from "./app";
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
