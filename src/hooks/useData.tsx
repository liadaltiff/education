import { useCallback, useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";
import originalJson from "../../neighbourhoods.json";
import { Plan } from "../types/plan.type";
export const useData = () => {
  const { hoods, setHoods } = useContext(DataContext);

  const resetData = useCallback(() => {
    setHoods(originalJson.features);
  }, [hoods]);

  useEffect(() => {
    console.log("context hoods", hoods);
    const LSParams: Plan = JSON.parse(localStorage.getItem("plan") ?? "");

    for (let i = 0; i < LSParams.actions.length; i++) {
      console.log("transfer number", i);
      console.log(
        "sender",
        LSParams.actions[i].sender,
        "senderType",
        LSParams.actions[i].senderType,
        "receiver",
        LSParams.actions[i].receiver,
        "receiverType",
        LSParams.actions[i].receiverType,
        "amount",
        LSParams.actions[i].amount
      );

      if (LSParams.actions[i].typeOfAction === "TRANSFER") {
        const senderID = LSParams.actions[i].senderID;
        const receiverID = LSParams.actions[i].receiverID;

        const senderStartingAmount = hoods.forEach((hood) => {
          const releventSchool = hood.properties.schools.find(
            (school) => school.id === senderID
          );

          if (releventSchool) {
            const senderUpdatedAmount =
              releventSchool.total_students - LSParams.actions[i].amount;
            console.log("senderUpdatedAmount", senderUpdatedAmount);
            releventSchool.total_students = senderUpdatedAmount;
          }
        });

        const receiverStartingAmount = hoods.forEach((hood) => {
          const releventSchool = hood.properties.schools.find(
            (school) => school.id === receiverID
          );

          if (releventSchool) {
            const receiverUpdatedAmount =
              releventSchool.total_students + LSParams.actions[i].amount;
            console.log("receiverUpdatedAmount", receiverUpdatedAmount);
            releventSchool.total_students = receiverUpdatedAmount;
          }
        });
      } else {
        const senderID = LSParams.actions[i].senderID;
        const senderStartingAmount = hoods.forEach((hood) => {
          const releventSchool = hood.properties.schools.find(
            (school) => school.id === senderID
          );

          if (releventSchool) {
            const senderUpdatedAmount =
              releventSchool.total_students - LSParams.actions[i].amount;
            console.log(
              "senderUpdatedAmount for senthome",
              senderUpdatedAmount
            );
          }
        });
      }
    }
  }, [hoods]);

  const handlePlanChange = useCallback(() => {
    setHoods(hoods);
  }, [hoods]);

  // console.log("hoods after change is", hoods);

  return {
    data: {
      hoods,
      schools: hoods.map((hood) => hood.properties).flat(),
    },
    setData: {
      reset: resetData,
      setHoods,
    },
  };
};
