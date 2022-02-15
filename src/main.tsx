import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CurrentTabProvider } from "./contexts/currentTabContext";
import { NeighbourhoodProvider } from "./contexts/neighbourhoodContext";
import { LevelProvider } from "./contexts/levelContext";
import { SelectedInstituteProvider } from "./contexts/instituteContext";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";

ReactDOM.render(
  <React.StrictMode>
    <NeighbourhoodProvider>
      <DataProvider>
        <CurrentTabProvider>
          <SelectedInstituteProvider>
            <LevelProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </LevelProvider>
          </SelectedInstituteProvider>
        </CurrentTabProvider>
      </DataProvider>
    </NeighbourhoodProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
