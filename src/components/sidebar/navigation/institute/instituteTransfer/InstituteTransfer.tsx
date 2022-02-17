import { useContext, useState } from "react";
import { SelectedInstituteContext } from "../../../../../contexts/instituteContext";
import classes from "./institute-transfer.module.scss";
import { distance } from "./utils";
import { DataContext } from "../../../../../contexts/DataContext";
import { Action, Plan } from "../../../../../types/plan.type";
import { PlanContext } from "../../../../../contexts/PlanContext";
import { emptyPlan } from "../../../../transferedStudents/TransferedStudents";

function InstituteTransfer() {
  const { selectedInstitute } = useContext(SelectedInstituteContext);
  const { hoods } = useContext(DataContext);

  const [amountToTransfer, setAmountToTransfer] = useState<number>(0);
  const [choosenSchool, setChoosenSchool] =
    useState<[number, string, number, string]>();

  const { currentPlan, setCurrentPlan } = useContext(PlanContext);

  const saveAction = (
    typeOfAction: string,
    sender: string,
    senderType: string,
    senderID: number,
    amount: number,
    receiver?: string,
    receiverType?: string,
    receiverID?: number
  ) => {
    const planFromLS = localStorage.getItem("plan");
    const plan = planFromLS ? (JSON.parse(planFromLS) as Plan) : emptyPlan;

    const newAction: Action = {
      typeOfAction: typeOfAction,
      sender: sender,
      senderType: senderType,
      senderID: senderID,
      amount: amount,
      receiver: receiver,
      receiverType: receiverType,
      receiverID: receiverID,
    };

    plan.actions.push(
      newAction.typeOfAction === "SENDHOME"
        ? { ...newAction, receiver: undefined, receiverType: undefined }
        : newAction
    );

    localStorage.setItem("plan", JSON.stringify(plan));
  };

  return (
    <div className={classes.container}>
      <div className={classes.moveToHeader}>
        <p className={classes.moveToHeaderText}>העבר אל</p>
        <div className={classes.sendHomeContainer}>
          {selectedInstitute && (
            <div
              className={classes.sendHome}
              onClick={() => {
                saveAction(
                  "SENDHOME",
                  selectedInstitute.name,
                  selectedInstitute.type,
                  selectedInstitute.id,
                  selectedInstitute.total_students,
                  "נשלחו הביתה",
                  "בית"
                );
              }}
            >
              שלח הביתה
            </div>
          )}
        </div>
      </div>
      <div className={classes.instituteContainer}>
        {selectedInstitute &&
          hoods &&
          distance(hoods, selectedInstitute).map((school: any) => {
            return (
              <div className={classes.schoolContainer}>
                <div
                  key={school[0]}
                  className={classes.school}
                  onClick={() => setChoosenSchool(school)}
                >
                  <a className={classes.distance}>{school[2]} ק"מ</a>
                  <a>{school[1]}</a>
                </div>
                {choosenSchool && choosenSchool[0] === school[0] && (
                  <div className={classes.moveToContainer}>
                    <div
                      className={classes.send}
                      onClick={() => {
                        saveAction(
                          "TRANSFER",
                          selectedInstitute.name,
                          selectedInstitute.type,
                          selectedInstitute.id,
                          amountToTransfer,
                          choosenSchool[1],
                          choosenSchool[3],
                          choosenSchool[0]
                        );
                      }}
                    >
                      העבר
                    </div>
                    <input
                      className={classes.moveToInput}
                      id="filled-number"
                      type="number"
                      placeholder="כמות להעברה"
                      onChange={(event) => {
                        setAmountToTransfer(Number(event.target.value));
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default InstituteTransfer;
