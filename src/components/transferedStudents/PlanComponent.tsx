import { Plan } from "../../types/plan.type";
import classes from "./transfered-students.module.scss";

interface IPlanComponentProps {
  sender: string;
  senderType: string;
  receiver: string;
  receiverType: string;
  amount: number;
}

const PlanComponent: React.VFC<IPlanComponentProps> = ({
  sender,
  senderType,
  receiver,
  receiverType,
  amount,
}) => {
  return (
    <tr className={classes.trPlanHeader}>
      <th className={classes.senderStyle}>
        <span>{sender}</span>
        <span>{senderType}</span>
      </th>
      <th className={classes.receiverStyle}>
        <span>{receiver}</span>
        <span>{receiverType}</span>
      </th>
      <th className={classes.amountStyle}>{amount}</th>
    </tr>
  );
};

export default PlanComponent;
