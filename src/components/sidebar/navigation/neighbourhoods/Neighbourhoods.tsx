import React, { useContext, useEffect, useState } from "react";
import classes from "./neighbourhoods.module.scss";
import data from "../../../../../neighbourhoods.json";
import { CurrentTabContext } from "../../../../contexts/currentTabContext";
import { NeighbourhoodContext } from "../../../../contexts/neighbourhoodContext";
import { Polygon } from "../../../../types/neighbourhood.type";

const Neighbourhoods = () => {
  const [neighbourhoodSearch, setNeighbourhoodSearch] = useState("");
  const { currentTab, setCurrentTab } = useContext(CurrentTabContext);
  const { selected, setSelected } = useContext(NeighbourhoodContext);

  const setContexts = (neighbourhood: Polygon) => {
    setCurrentTab("מוסדות");
    setSelected(neighbourhood);
  };

  return (
    <div className={classes.container}>
      <div className={classes.searchInputContainer}>
        <input
          className={classes.searchInput}
          type="text"
          value={neighbourhoodSearch}
          placeholder="חפש אזור..."
          onChange={(e) => setNeighbourhoodSearch(e.target.value)}
        />
      </div>
      <div className={classes.neighbourhoodContainer}>
        {data.features.map((neighbourhood) => {
          if (neighbourhood.properties.shemshchun.includes(neighbourhoodSearch))
            return (
              <div
                key={neighbourhood.properties.UniqueId}
                className={classes.neighbourhood}
                onClick={() => setContexts(neighbourhood)}
              >
                <a>{neighbourhood.properties.shemshchun}</a>
              </div>
            );
        })}
      </div>
    </div>
  );
};
export default Neighbourhoods;
