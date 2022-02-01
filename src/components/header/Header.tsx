import React, { useContext } from "react";
import classes from "./header.module.scss";

function Header() {
  return (
    <div className={classes.headerButton}>
      <div className={classes.headerBack}>back</div>
    </div>
  );
}
export default Header;
