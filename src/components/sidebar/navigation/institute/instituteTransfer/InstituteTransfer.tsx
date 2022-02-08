import { useContext, useEffect, useState } from "react";
import { SelectedInstituteContext } from "../../../../../contexts/instituteContext";
import classes from "./institute-transfer.module.scss";
import { distance } from "./utils";
import data from "../../../../../../neighbourhoods.json";

const InstituteTransfer = () => {
  const { selectedInstitute } = useContext(SelectedInstituteContext);
  const [selectedInstituteState, setSelectedInstituteState] =
    useState<Number>();
  const [selected, setSelcted] = useState({});
  const [amountToTransfer, setAmountToTransfer] = useState("");

  const Menu = () => {
    return (
      <div className={classes.openedPanel}>
        <button onClick={transferStudents} className={classes.transferButton}>
          העבר
        </button>
        <input
          type="number"
          className={classes.openedPanelText}
          placeholder="כמות להעביר"
          onChange={(e) => {
            setAmountToTransfer(e.currentTarget.value);
          }}
          //check amountToTransfer bug when you enter a number.
        ></input>
      </div>
    );
  };
  const kaki = (selectedId: number) => {
    const schools = data.features.map(
      (neighbourhood) => neighbourhood.properties.schools
    );
    for (let i = 0; i < schools.length; i++) {
      const selectedInst = schools[i].find(({ id }) => id === selectedId);
      if (selectedInst) {
        setSelcted(selectedInst);
        console.log(selectedInst);
        return;
      }
    }
  };

  console.log("nigga", selected);

  const transferStudents = () => {
    console.log(
      "מוסד שולח:",
      selectedInstitute?.name,
      "\n",
      "סוג:",
      selectedInstitute?.type,
      "\n",
      "מוסד מקבל:",
      selected.name,
      "\n",
      "סוג:",
      selected.type,
      "\n",
      "כמות להעביר:",
      amountToTransfer
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.sendHomeHeader}>
        <p className={classes.sendHomeHeaderText}>העבר אל</p>
        <div className={classes.sendHomeContainer}>
          <div className={classes.sendHome}>שלח הביתה</div>
        </div>
      </div>
      <div className={classes.instituteContainer}>
        {selectedInstitute &&
          distance(selectedInstitute).map((school: any) => {
            const [isClicked, setIsClicked] = useState(false);
            return (
              <>
                <div
                  onClick={() => {
                    console.log("school.id", school[0]);
                    kaki(school[0]);
                    setIsClicked(!isClicked);
                    setSelectedInstituteState(school.id);
                  }}
                  key={school[0]}
                  className={classes.school}
                >
                  <a className={classes.distance}>{school[1]} ק"מ</a>
                  <a>{school[0]}</a>
                </div>

                <div>{isClicked && <Menu />}</div>
              </>
            );
          })}
      </div>
    </div>
  );
};
export default InstituteTransfer;
