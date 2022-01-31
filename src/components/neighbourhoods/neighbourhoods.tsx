import React, { useContext, useState } from "react";
import classes from "./neighbourhoods.module.scss";
import data from "../../../neighbourhoods.json";

function Neighbourhoods() {
  const [neighbourhoodSearch, setNeighbourhoodSearch] = useState("");

  return (
    <div className={classes.container}>
      <div className={classes.searchInputContainer}>
        <input
          className={classes.searchInput}
          type="text"
          placeholder="חפש אזור..."
          value={neighbourhoodSearch}
          onChange={(e) => setNeighbourhoodSearch(e.target.value)}
        />
      </div>
      <div className={classes.neighbourhoodContainer}>
        {data.features.map((neighbourhood) => {
          if (neighbourhood.properties.shemshchun.includes(neighbourhoodSearch))
            return (
              <div className={classes.neighbourhood}>
                <a>{neighbourhood.properties.shemshchun}</a>
              </div>
            );
        })}
      </div>
    </div>
  );
}
export default Neighbourhoods;
