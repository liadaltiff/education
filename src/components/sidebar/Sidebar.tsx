import React, { useContext, useEffect, useState } from "react";
import Institute from "./navigation/institute/Institute";
import Institutes from "./navigation/institutes/Institutes";
import Neighbourhoods from "./navigation/neighbourhoods/Neighbourhoods";
import classes from "./sidebar.module.scss";
import clsx from "clsx";
import { CurrentTabContext } from "../../contexts/currentTabContext";
import { NeighbourhoodContext } from "../../contexts/neighbourhoodContext";
import TransferedStudents from "../transferedStudents/TransferedStudents";

const SideBar = () => {
  const { currentTab, setCurrentTab } = useContext(CurrentTabContext);
  const { selected } = useContext(NeighbourhoodContext);
  useEffect(() => {
    setCurrentTab("שכונות");
  }, []);

  const btns = ["שכונות", "מוסדות", "מוסד"];

  return (
    <div className={classes.container}>
      <div className={classes.currentText}>
        {!selected?.properties.shemshchun && <h4>בחר אזור</h4>}
        {selected?.properties.shemshchun && (
          <h4>{selected.properties.shemshchun}</h4>
        )}
      </div>
      <div className={classes.selection}>
        <div className={classes.navBtns}>
          {btns.map((type, key) => {
            return (
              <button
                key={key}
                className={clsx(classes.btn, {
                  [classes.active]: type === currentTab,
                })}
                onClick={() => setCurrentTab(type)}
              >
                {type}
              </button>
            );
          })}
        </div>
        <section className={classes.content}>
          {currentTab === "שכונות" && <Neighbourhoods />}
          {currentTab === "מוסדות" && <Institutes />}
          {currentTab === "מוסד" && <Institute />}
        </section>
      </div>
    </div>
  );
};
export default SideBar;
