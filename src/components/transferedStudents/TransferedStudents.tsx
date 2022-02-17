import React, { useCallback, useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import classes from "./transfered-students.module.scss";
import { Plan } from "../../types/plan.type";
import "sweetalert2/src/sweetalert2.scss";
import MyTable from "./MyTable";
import { useData } from "../../hooks/useData";
import axios from "axios";
import { responseOk } from "../../utils/axios.util";
import { DataContext } from "../../contexts/DataContext";

const fetchPlans = async () => {
  try {
    const resAll = await fetch("http://localhost:5000/plans/getPlans");
    const data = await resAll.json();
    return data as Plan[];
  } catch (error) {
    console.error(error);
  }
};

export const emptyPlan: Plan = {
  name: "",
  actions: [],
};

const TransferedStudents: React.FC = () => {
  const { hoods, setHoods } = useContext(DataContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openSave, setOpenSave] = useState(false);
  const handleOpenSave = () => setOpenSave(true);
  const handleCloseSave = () => setOpenSave(false);

  const [plans, setPlans] = useState<Plan[]>();
  const [selectedPlan, setSelectedPlan] = useState<Plan>();

  const [newPlanName, setNewPlanName] = useState("");

  const { data, setData } = useData();

  const loadPlans = useCallback(async (plans: Promise<Plan[] | undefined>) => {
    setPlans(await plans);
  }, []);

  const setLocalStoragePlan = (plan: Plan) => {
    localStorage.setItem("plan", JSON.stringify(plan));
  };

  const getLocalStoragePlan = () => {
    const planFromLS = localStorage.getItem("plan");

    if (planFromLS) {
      return JSON.parse(planFromLS) as Plan;
    } else {
      return emptyPlan;
    }
  };

  const loadSelectedPlan = useCallback(
    async (plan: Plan) => {
      setData.reset();
      setLocalStoragePlan(plan);
      // setData(newData);

      const newData = hoods;
      console.log("newData", newData);
    },
    [data]
  );

  useEffect(() => {
    loadPlans(fetchPlans());
  }, [plans]);

  const createNewPlan = useCallback(async () => {
    try {
      console.log("new plan name", newPlanName);
      const response = await axios.post(
        "http://localhost:5000/plans/createPlan",
        { name: newPlanName, actions: [] }
      );

      if (!responseOk(response)) {
        throw new Error("response error");
      }
    } catch (error) {
      console.error(error);
    }
  }, [newPlanName]);

  const updatePlan = useCallback(async () => {
    try {
      const LSParams: Plan = JSON.parse(localStorage.getItem("plan") ?? "");

      const response = await axios.post(
        "http://localhost:5000/plans/createPlan",
        { name: LSParams.name, actions: LSParams.actions }
      );

      if (!responseOk(response)) {
        throw new Error("response error");
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  // console.log("actions", actions);

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
                          onClick={() => {
                            setSelectedPlan(plan);
                            loadSelectedPlan(plan);
                          }}
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
              <main>
                <MyTable plan={getLocalStoragePlan()} />
              </main>
            </section>
          </main>

          <footer className={classes.footer}>
            <Button
              onClick={handleOpenSave}
              variant="contained"
              className={classes.CreateNewPlanBtn}
            >
              צור תוכנית
            </Button>

            <Button
              onClick={() => {
                updatePlan();
              }}
              variant="contained"
              className={classes.saveBtn}
            >
              עדכן תוכנית
            </Button>
          </footer>
        </div>
      </Modal>

      <Modal open={openSave} onClose={handleCloseSave}>
        <div className={classes.containerSave}>
          <h1 className={classes.savePlanText}>הזן שם לתוכנית</h1>
          <input
            className={classes.savePlanInput}
            value={newPlanName}
            onChange={(e) => {
              setNewPlanName(e.currentTarget.value);
            }}
          ></input>
          <Button
            variant="contained"
            className={classes.savePlanBtn}
            onClick={() => {
              createNewPlan();
              handleCloseSave();
            }}
          >
            צור תוכנית
          </Button>
        </div>
      </Modal>
    </div>
  );
};
export default TransferedStudents;
