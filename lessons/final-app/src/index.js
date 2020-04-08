// React
import React from "react";
import ReactDOM from "react-dom";

// CSS
import "normalize-css";
import "./css/styles.css";

// Components
import App from "./App";
import { NamesProvider } from "./providers/names";
import { AppStateProvider } from "./providers/app-state";

ReactDOM.render(
  <React.StrictMode>
    <NamesProvider>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </NamesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
