import React, { useContext, useEffect, useState } from "react";
import Institute from "../institute/Institute";
import Institutes from "../institutes/Institutes";
import Neighbourhoods from "../neighbourhoods/Neighbourhoods";
import classes from "./sidebar.module.scss";
import clsx from "clsx";
import { ActiveTabContext } from "../../contexts/activeTabContext";
import { SelectedNeighbourhoodIdContext } from "../../contexts/neighbourhoodContext";

function SideBar() {
  const { activeTab, setActiveTab } = useContext(ActiveTabContext);
  const { selectedNeighbourhoodName } = useContext(
    SelectedNeighbourhoodIdContext
  );
  useEffect(() => {
    setActiveTab("שכונות");
  }, []);

  useEffect(() => {
    console.log("tab", activeTab);
  }, [activeTab]);

  const btns = ["שכונות", "מוסדות", "מוסד"];

  return (
    <div className={classes.container}>
      <div className={classes.currentText}>
        {!selectedNeighbourhoodName && <h5>בחר אזור</h5>}
        {selectedNeighbourhoodName && <h5>{selectedNeighbourhoodName}</h5>}
      </div>
      <div className={classes.selection}>
        <div className={classes.navBtns}>
          {btns.map((type, key) => {
            return (
              <button
                key={key}
                className={clsx(classes.btn, {
                  [classes.active]: type === activeTab,
                })}
                onClick={() => setActiveTab(type)}
              >
                {type}
              </button>
            );
          })}
        </div>
        <section className={classes.content}>
          {activeTab === "שכונות" && <Neighbourhoods />}
          {activeTab === "מוסדות" && <Institutes />}
          {activeTab === "מוסד" && <Institute />}
        </section>
      </div>
    </div>
  );
}
export default SideBar;
