import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import classes from "./transfered-students.module.scss";
import axios from "axios";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TransferedStudents: React.FC = () => {
  const [plansState, setPlansState] = useState();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const getPlans = async () => {
      const res = await axios.get("http://localhost:5000/plans/getPlans");
      setPlansState(res.data);
    };
    getPlans();
  }, []);

  console.log("blah", plansState);

  // const showPlans = plansState.map((plan: any) => (
  //   //use context and plan type to create the map thingy
  // )))

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
              <header>פירוט התוכנית הנוכחית</header>
              <main>
                <table className={classes.tablePlan}>
                  <tr className={classes.trPlan}>
                    <div className={classes.firstDivider}>
                      <td className={classes.mainText}>מוסד שולח</td>
                      <td className={classes.mainText}>סוג</td>
                    </div>
                    <div className={classes.dividerLineOne}></div>
                    <div className={classes.secondDivider}>
                      <td className={classes.mainText}>מוסד מקבל</td>
                      <td className={classes.mainText}>סוג</td>
                    </div>
                    <div className={classes.dividerLineTwo}></div>
                    <div className={classes.thirdDivider}>
                      <td className={classes.mainText}>כמות</td>
                    </div>
                  </tr>
                  <tr className={classes.trPlan}>
                    <div className={classes.plan}>{/* {plansState} */}</div>
                  </tr>
                  <tr className={classes.trPlan}>
                    <td>
                      <div className={classes.plan}></div>
                    </td>
                  </tr>
                </table>
              </main>
            </section>
          </main>

          <footer className={classes.footer}>
            <Button variant="contained" className={classes.saveBtn}>
              שמור
            </Button>
          </footer>
        </div>
      </Modal>
    </div>
  );
};
export default TransferedStudents;
