import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import classes from "./transfered-students.module.scss";

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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                <div className={classes.plan}></div>
                <div className={classes.plan}></div>
                <div className={classes.plan}></div>
                <div className={classes.plan}></div>
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
