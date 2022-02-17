import { useContext, useEffect, useMemo } from "react";
import classes from "./institute.module.scss";
import { SelectedInstituteContext } from "../../../../contexts/instituteContext";
import { LevelContext } from "../../../../contexts/levelContext";
import InstituteTransfer from "../institute/instituteTransfer/InstituteTransfer";
import { placeLeft } from "../../../../utils/utils.util";

const Institute = () => {
  const { selectedInstitute, setSelectedInstitute } = useContext(
    SelectedInstituteContext
  );
  const { level, space } = useContext(LevelContext);

  const places = useMemo(() => {
    if (space !== 0 && space && selectedInstitute) {
      return Math.floor(selectedInstitute.shelter_area / space);
    } else {
      return selectedInstitute?.total_students ?? 0;
    }
  }, [selectedInstitute, level]);

  const placesLeft = useMemo(() => {
    if (selectedInstitute) {
      return placeLeft(places, selectedInstitute);
    } else {
      return 0;
    }
  }, [selectedInstitute, places]);

  // useEffect(() => {
  //   if (selectedInstitute) {
  //     setSelectedInstitute(selectedInstitute);
  //   }
  // }, [selectedInstitute]);

  return (
    <div className={classes.container}>
      <div className={classes.instituteInfo}>
        <a className={classes.instituteName}>{selectedInstitute?.name}</a>
        <div>
          <a>{selectedInstitute?.type}</a>
          <a>, </a>
          <a className={classes.smallerText}>{selectedInstitute?.address}</a>
        </div>
      </div>
      <div className={classes.studentsInfo}>
        <div className={classes.studentsAmountContainer}>
          <a className={classes.studentsAmountText}>כמות תלמידים</a>
          <div className={classes.amount}>
            <a>{selectedInstitute?.total_students}</a>
          </div>
        </div>
        <div className={classes.studentsFillContainer}>
          <a className={classes.studentsAmountText}>יכול להכיל</a>
          <div className={classes.amount}>
            <a>{places}</a>
          </div>
        </div>
      </div>
      {placesLeft > 0 && (
        <div className={classes.havePlace}>
          <div className={classes.studentsAmountContainer}>
            <a className={classes.studentsAmountPlaces}>מקומות פנויים</a>
            <div className={classes.amount}>
              <a>{placesLeft}</a>
            </div>
          </div>
        </div>
      )}
      {placesLeft < 0 && (
        <div className={classes.dontHavePlace}>
          <div className={classes.studentsAmountContainer}>
            <a className={classes.studentsAmountPlaces}>מקומות חסרים</a>
            <div className={classes.amount}>
              <a className={classes.fixPlacesLeft}>{placesLeft}</a>
            </div>
          </div>
        </div>
      )}
      {placesLeft === 0 && (
        <div className={classes.zeroPlace}>
          <div className={classes.studentsAmountContainer}>
            <a>מקומות חסרים</a>
            <div className={classes.amount}>
              <a>{placesLeft}</a>
            </div>
          </div>
        </div>
      )}
      <InstituteTransfer />
    </div>
  );
};
export default Institute;
