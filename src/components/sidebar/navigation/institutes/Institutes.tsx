import React, { useContext, useMemo, useState } from "react";
import classes from "./institutes.module.scss";
import { CurrentTabContext } from "../../../../contexts/currentTabContext";
import { NeighbourhoodContext } from "../../../../contexts/neighbourhoodContext";
import { Polygon, School } from "../../../../types/neighbourhood.type";
import { SelectedInstituteContext } from "../../../../contexts/instituteContext";
import { LevelContext } from "../../../../contexts/levelContext";
import clsx from "clsx";
import { placeLeft } from "../../../../utils/utils.util";

const Institutes = () => {
  const [instituteSearch, setInstituteSearch] = useState("");
  const { setCurrentTab } = useContext(CurrentTabContext);
  const { selected } = useContext(NeighbourhoodContext);
  const { setSelectedInstitute } = useContext(SelectedInstituteContext);
  const { space } = useContext(LevelContext);
  const setContexts = (institute: School) => {
    setCurrentTab("מוסד");
    setSelectedInstitute(institute);
  };
  {
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
        <div className={classes.instituteContainer}>
          {selected &&
            space !== undefined &&
            selected.properties.schools.map((institute) => {
              let left = 0;
              if (space !== 0) {
                left = placeLeft(
                  Math.floor(institute.shelter_area / space),
                  institute
                );
              }

              if (institute.name.includes(instituteSearch))
                return (
                  <div
                    key={institute.id}
                    className={classes.neighbourhood}
                    onClick={() => setContexts(institute)}
                  >
                    <span>{institute.name}</span>
                    {
                      <div
                        className={clsx([classes.instituteRed], {
                          [classes.instituteYellow]: left >= 0 && left < 70,
                          [classes.instituteOrange]: left >= 70 && left <= 100,
                        })}
                      >
                        {left}
                      </div>
                    }
                  </div>
                );
            })}
        </div>
      </div>
    );
  }
};
export default Institutes;
