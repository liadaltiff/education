import { FC, useContext, useEffect, useState } from "react";
import { SelectedInstituteContext } from "../../../../../contexts/instituteContext";
import classes from "./institute-transfer.module.scss";
import { distance } from "./utils";
import data from "../../../../../../neighbourhoods.json";
import { Institute } from "../../../../../types/institute.type";

interface SelectedInstituteProps {
  institute: Institute;
}

const InstituteTransfer: FC<SelectedInstituteProps> = ({ institute }) => {
  const [selected, setSelcted] = useState<Institute>();
  const { selectedInstitute } = useContext(SelectedInstituteContext);
  const [selectedInstituteState, setSelectedInstituteState] =
    useState<Number>();
  const [amountToTransfer, setAmountToTransfer] = useState(0);

  const findSelectedInstitute = (selectedId: number) => {
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

  const transferStudents = () => {
    const toLog = {
      from: selectedInstitute?.name,
      typeOfSender: selectedInstitute?.type,
      to: selected?.name,
      typeOfGetter: selected?.type,
      amount: amountToTransfer,
    };

    console.log("selected", JSON.stringify(toLog, null, 2));
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
                    findSelectedInstitute(school[0]);
                    setIsClicked(!isClicked);
                    setSelectedInstituteState(school.id);
                  }}
                  key={school[0]}
                  className={classes.school}
                >
                  <a className={classes.distance}>{school[2]} ק"מ</a>
                  <a>{school[1]}</a>
                </div>

                <div>
                  {isClicked &&
                    Menu(transferStudents, {
                      get: amountToTransfer,
                      set: setAmountToTransfer,
                    })}
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};
export default InstituteTransfer;

const Menu = (
  transferFn: () => void,
  amount: {
    get: number;
    set: (value: number) => void;
  }
) => {
  return (
    <div className={classes.openedPanel}>
      <button onClick={transferFn} className={classes.transferButton}>
        העבר
      </button>
      <input
        type="number"
        id="amountToTransferx"
        className={classes.openedPanelText}
        placeholder="כמות להעביר"
        onChange={(e) => {
          amount.set(parseInt(e.currentTarget.value ?? 0));
        }}
        value={amount.get}
      ></input>
    </div>
  );
};
