import React, { useContext, useMemo, useState } from "react";
import classes from "./institutes.module.scss";
import { ActiveTabContext } from "../../contexts/activeTabContext";
import { SelectedNeighbourhoodIdContext } from "../../contexts/neighbourhoodContext";
import data from "../../../neighbourhoods.json";
import { Polygon } from "../../types/neighbourhood.type";

function Institutes() {
  const [instituteSearch, setInstituteSearch] = useState("");

  const { activeTab, setActiveTab } = useContext(ActiveTabContext);
  const { selectedNeighbourhoodId, setSelectedNeighbourhoodId } = useContext(
    SelectedNeighbourhoodIdContext
  );
  const setContexts = () => {
    setActiveTab("מוסד");
  };
  const selectedNeighbourhood: Polygon | undefined = useMemo(() => {
    return data.features.find((neighbourhood) => {
      return neighbourhood.properties.UniqueId === selectedNeighbourhoodId;
    });
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.searchInputContainer}>
        <input
          className={classes.searchInput}
          type="text"
          placeholder="חפש אזור..."
          value={instituteSearch}
          onChange={(e) => setInstituteSearch(e.target.value)}
        />
      </div>
      <div className={classes.neighbourhoodContainer}>
        {selectedNeighbourhood &&
          selectedNeighbourhood.properties.schools.map((school) => {
            if (school.name.includes(instituteSearch))
              return (
                <div
                  key={school.name}
                  className={classes.neighbourhood}
                  onClick={() => setContexts()}
                >
                  <a>{school.name}</a>
                </div>
              );
          })}
      </div>
    </div>
  );
}
export default Institutes;
