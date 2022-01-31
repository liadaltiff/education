import React, { useContext, useEffect, useState } from "react";
import Institute from "../institute/Institute";
import Institutes from "../institutes/Institutes";
import Neighbourhoods from "../neighbourhoods/Neighbourhoods";
import classes from "./sidebar.module.scss";
import clsx from "clsx";

function SideBar() {
  const [activeTab, setActiveTab] = useState("שכונות");

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.selectionAreaText}>
          <h5>בחר אזור</h5>
        </div>
        <div className={classes.selectionArea}>
          <div className={classes.selectionAreaNavBar}>
            <button
              className={clsx(
                classes.unActiveBtn,
                activeTab === "שכונות" && classes.activeBtn
              )}
              onClick={() => setActiveTab("שכונות")}
            >
              שכונות
            </button>
            <button
              className={clsx(
                classes.unActiveBtn,
                activeTab === "מוסדות" && classes.activeBtn
              )}
              onClick={() => setActiveTab("מוסדות")}
            >
              מוסדות
            </button>
            <button
              className={clsx(
                classes.unActiveBtn,
                activeTab === "מוסד" && classes.activeBtn
              )}
              onClick={() => setActiveTab("מוסד")}
            >
              מוסד
            </button>
          </div>
          {activeTab === "שכונות" && <Neighbourhoods />}
          {activeTab === "מוסדות" && <Institutes />}
          {activeTab === "מוסד" && <Institute />}
        </div>
      </div>
    </div>
  );
}
export default SideBar;
