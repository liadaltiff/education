import { FC, useContext, useEffect, useState } from "react";
import { SelectedInstituteContext } from "../../../../../contexts/instituteContext";
import classes from "./institute-transfer.module.scss";
import { distance } from "./utils";
import data from "../../../../../../neighbourhoods.json";
import { Institute } from "../../../../../types/institute.type";
import { TextField } from "@mui/material";
import { DataContext } from "../../../../../contexts/DataContext";

function InstituteTransfer() {
  const { selectedInstitute } = useContext(SelectedInstituteContext);
  const { hoods } = useContext(DataContext);

  const [amountToTransfer, setAmountToTransfer] = useState<number>(0);
  const [choosenSchool, setChoosenSchool] =
    useState<[number, string, number]>();

  return (
    <div className={classes.container}>
      <div className={classes.moveToHeader}>
        <p className={classes.moveToHeaderText}>העבר אל</p>
        <div className={classes.sendHomeContainer}>
          {selectedInstitute && (
            <div
              className={classes.sendHome}
              onClick={() => {
                // saveMovment(
                //   "SENDHOME",
                //   selectedInstitute.id,
                //   selectedInstitute.total_students
                // );
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
          distance(selectedInstitute).map((school: any) => {
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
                        // saveMovment(
                        //   "TRANSFER",
                        //   selectedInstitute.id,
                        //   amountToTransfer,
                        //   choosenSchool[0]
                        // );
                      }}
                    >
                      העבר
                    </div>
                    <input
                      // sx={{ width: "15ch" }}
                      className={classes.moveToInput}
                      id="filled-number"
                      // label="כמות להעברה"
                      type="number"
                      // InputLabelProps={{
                      //   shrink: true,
                      // }}
                      // variant="filled"
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
