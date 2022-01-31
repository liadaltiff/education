import React, { useContext, useState } from "react";
import classes from "./neighbourhoods.module.scss";
import data from "../../../neighbourhoods.json";
import { SelectedNeighbourhoodIdContext } from "../../contexts/neighbourhoodContext";
import { ActiveTabContext } from "../../contexts/activeTabContext";

function Neighbourhoods() {
  const [neighbourhoodSearch, setNeighbourhoodSearch] = useState("");
  const { activeTab, setActiveTab } = useContext(ActiveTabContext);
  const {
    selectedNeighbourhoodId,
    setSelectedNeighbourhoodId,
    setSelectedNeighbourhoodName,
  } = useContext(SelectedNeighbourhoodIdContext);

  const setContexts = (neighbourhoodId: string, neighbourhoodName: string) => {
    setActiveTab("מוסדות");
    setSelectedNeighbourhoodId(neighbourhoodId);
    setSelectedNeighbourhoodName(neighbourhoodName);
  };

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
              <div
                key={neighbourhood.properties.UniqueId}
                className={classes.neighbourhood}
                onClick={() =>
                  setContexts(
                    neighbourhood.properties.UniqueId,
                    neighbourhood.properties.shemshchun
                  )
                }
              >
                <a>{neighbourhood.properties.shemshchun}</a>
              </div>
            );
        })}
      </div>
    </div>
  );
}
export default Neighbourhoods;
