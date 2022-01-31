import React, { useContext } from "react";
import classes from "./header.module.scss";

function NavBar() {
  return (
    <div>
      <div className={classes.topnav}>
        <a>
          <h2>ניתוב תלמידים למקומות ממוגנים</h2>
        </a>
      </div>
    </div>
  );
}
export default NavBar;
