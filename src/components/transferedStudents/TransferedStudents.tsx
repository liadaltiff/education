import React, { useCallback, useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import classes from "./transfered-students.module.scss";
import { Plan } from "../../types/plan.type";
import "sweetalert2/src/sweetalert2.scss";
import MyTable from "./MyTable";
import { DataContext } from "../../contexts/DataContext";
import { useData } from "../../hooks/useData";

const TransferedStudents: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openSave, setOpenSave] = useState(false);
  const handleOpenSave = () => setOpenSave(true);
  const handleCloseSave = () => setOpenSave(false);

  // const [actions, setActions] = useState<Action[]>();
  const [plans, setPlans] = useState<Plan[]>();
  const [myPlan, setMyPlan] = useState<Plan>();

  const { data, setData } = useData();

  const getLatestPlan = useCallback(async (planid: string) => {
    const sendRequest = async () => {
      try {
        const resAll = await fetch("http://localhost:5000/plans/getPlans");
        const data = await resAll.json();
        setPlans(data);
        setMyPlan(data[0]);

        if (planid) {
          const resOne = await fetch(
            `http://localhost:5000/plans/getPlan/${planid}`
          );
          const dataOne = await resOne.json();

          setMyPlan(dataOne);
          console.log("u chose plan", dataOne);
        }
      } catch (error) {
        console.error(error);
      }
    };

    sendRequest();
  }, []);

  useEffect(() => {
    getLatestPlan("");
  }, []);

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
              <main>
                {plans &&
                  plans.map((plan, index) => {
                    return (
                      <div>
                        <h1
                          className={classes.planNames}
                          key={index}
                          onClick={() => getLatestPlan(plan._id)}
                        >
                          {plan.name}
                        </h1>
                      </div>
                    );
                  })}
              </main>
            </section>

            <section>
              <header>פירוט התוכנית הנוכחית</header>
              <main>{myPlan && <MyTable plan={myPlan} />}</main>
            </section>
          </main>

          <footer className={classes.footer}>
            <Button
              onClick={handleOpenSave}
              variant="contained"
              className={classes.CreateNewPlanBtn}
            >
              צור תורנות חדשה
            </Button>

            <Button variant="contained" className={classes.saveBtn}>
              עדכן תורנות נוכחית
            </Button>
          </footer>
        </div>
      </Modal>

      <Modal open={openSave} onClose={handleCloseSave}>
        <div className={classes.containerSave}>
          <h1 className={classes.savePlanText}>הזן שם לתוכנית</h1>
          <input className={classes.savePlanInput}></input>
          <Button variant="contained" className={classes.savePlanBtn}>
            צור תורנות חדשה
          </Button>
        </div>
      </Modal>
    </div>
  );
};
export default TransferedStudents;
