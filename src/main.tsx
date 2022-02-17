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
import { PlanProvider } from "./contexts/PlanContext";

ReactDOM.render(
  <React.StrictMode>
    <NeighbourhoodProvider>
      <DataProvider>
        <CurrentTabProvider>
          <SelectedInstituteProvider>
            <LevelProvider>
              <PlanProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </PlanProvider>
            </LevelProvider>
          </SelectedInstituteProvider>
        </CurrentTabProvider>
      </DataProvider>
    </NeighbourhoodProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
