import React, { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import classes from "./transfered-students.module.scss";
import axios from "axios";
import { Action, Plan } from "../../types/plan.type";
import PlanComponent from "./PlanComponent";
import { responseOk } from "../../utils/axios.util";
import "sweetalert2/src/sweetalert2.scss";
import Swal from "sweetalert2";

const TransferedStudents: React.FC = () => {
  const [actions, setActions] = useState<Action[]>();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const createPlan = useCallback(() => {
  //   const sendRequest = async () => {
  //     try {
  //       const response = await axios.post(
  //         "http://localhost:5000/plans/createPlan"
  //       );

  //       Swal.fire({
  //         icon: "success",
  //         title: "התורנות נוצרה בהצלחה",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //       if (!responseOk(response)) {
  //         throw new Error("response error");
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   sendRequest();
  // }, []);

  const showSwal = () => {
    Swal.fire({
      customClass: {
        container: "my-swal",
      },
      icon: "success",
      title: "התוכנית נשמרה בהצלחה",
      showConfirmButton: false,
      timer: 30000,
    });
  };

  const getLatestPlan = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:5000/plans/getPlans");

      if (!responseOk(response)) {
        throw new Error("response error");
      }

      setActions(response.data[0].actions);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    // const getPlans = async () => {
    //   try {
    //     const res = await fetch("http://localhost:5000/plans/getPlans");
    //     const result = await res.json();
    //     setPlansState(result);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getPlans();
    getLatestPlan();
  }, []);

  // console.log("plansState", plansState);

  return (
    <div className={classes.buttonPlacing}>
      <Button
        onClick={handleOpen}
        className={classes.buttonStyle}
        variant="contained"
      >
        צפה בתוכניות
      </Button>

      <Modal open={open} onClose={handleClose}>
        <div className={classes.container}>
          <header className={classes.header}>
            <h1>תוכניות חירום</h1>
          </header>

          <main className={classes.mainContent}>
            <section>
              <header>תוכניות שמורות</header>
              <main>טקסט</main>
            </section>

            <section>
              <header>פירוט התוכנית הנוכחית</header>
              <main>
                <table className={classes.stablePlan}>
                  <thead>
                    <tr className={classes.trPlanHeader}>
                      <th className={classes.senderStyle}>
                        <span>מוסד שולח</span>
                        <span>סוג</span>
                      </th>
                      <th className={classes.receiverStyle}>
                        <span>מוסד מקבל</span>
                        <span>סוג</span>
                      </th>
                      <th className={classes.amountStyle}>כמות</th>
                    </tr>
                  </thead>
                  <tbody>
                    {actions &&
                      actions.map((action) => (
                        <tr>
                          {Object.values(action).map((value) => (
                            <td>{value}</td>
                          ))}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </main>
            </section>
          </main>

          <footer className={classes.footer}>
            <Button
              onClick={showSwal}
              variant="contained"
              className={classes.saveBtn}
            >
              שמור
            </Button>
          </footer>
        </div>
      </Modal>
    </div>
  );
};
export default TransferedStudents;
