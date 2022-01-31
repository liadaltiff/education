import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ActiveTabProvider } from "./contexts/activeTabContext";
import { SelectedNeighbourhoodIdProvider } from "./contexts/neighbourhoodContext";

ReactDOM.render(
  <React.StrictMode>
    <SelectedNeighbourhoodIdProvider>
      <ActiveTabProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ActiveTabProvider>
    </SelectedNeighbourhoodIdProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
