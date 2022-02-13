import { Plan } from "../../types/plan.type";
import classes from "./transfered-students.module.scss";

interface IPlanComponentProps {
  plan: Plan;
}

const PlanComponent: React.VFC<IPlanComponentProps> = (
  props: IPlanComponentProps
) => {
  const plan: Plan = props.plan;

  return (
    <table className={classes.stablePlan}>
      <tbody>
        <tr className={classes.trPlanHeader}>
          <th className={classes.senderStyle}>
            <span>{plan.actions[0].sender}</span>
            <span>{plan.actions[0].senderType}</span>
          </th>
          <th className={classes.receiverStyle}>
            <span>{plan.actions[0].receiver}</span>
            <span>{plan.actions[0].receiverType}</span>
          </th>
          <th className={classes.amountStyle}>{plan.actions[0].amount}</th>
        </tr>
      </tbody>
    </table>
  );
};

export default PlanComponent;
