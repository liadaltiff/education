import React, { useEffect } from "react";
import { Plan } from "../../types/plan.type";
import PlanComponent from "./PlanComponent";
import classes from "./transfered-students.module.scss";
interface IMyTableProps {
  plan: Plan;
}

const MyTable: React.FC<IMyTableProps> = ({ plan }) => {
  return (
    <table className={classes.tablePlan}>
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
        {plan &&
          plan.actions.map((plan, index) => (
            <PlanComponent
              key={index}
              sender={plan.sender}
              senderType={plan.senderType}
              receiver={plan.receiver}
              receiverType={plan.receiverType}
              amount={plan.amount}
            />
          ))}
      </tbody>
    </table>
  );
};

export default MyTable;
