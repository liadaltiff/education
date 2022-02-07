import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CurrentTabProvider } from "./contexts/currentTabContext";
import { NeighbourhoodProvider } from "./contexts/neighbourhoodContext";
import { LevelProvider } from "./contexts/levelContext";
import { NeighbourhoodInfoProvider } from "./contexts/neighbourhoodInfoContext";
import { SelectedInstituteProvider } from "./contexts/instituteContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <NeighbourhoodProvider>
      <NeighbourhoodInfoProvider>
        <CurrentTabProvider>
          <SelectedInstituteProvider>
            <LevelProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </LevelProvider>
          </SelectedInstituteProvider>
        </CurrentTabProvider>
      </NeighbourhoodInfoProvider>
    </NeighbourhoodProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
