import { useContext, useState } from "react";
import { SelectedInstituteContext } from "../../../../../contexts/instituteContext";
import classes from "./institute-transfer.module.scss";
import { distance } from "./utils";

const InstituteTransfer = () => {
  const { selectedInstitute } = useContext(SelectedInstituteContext);

  const Menu = () => {
    return (
      <div>
        <h1>hey</h1>
      </div>
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
                    setIsClicked(!isClicked);
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
