import React, { createContext, useEffect, useState } from "react";
import { Plan } from "../types/plan.type";

interface PlanContextProps {
  currentPlan: Plan;
  setCurrentPlan: React.Dispatch<React.SetStateAction<Plan>>;
}

export const PlanContext = createContext<PlanContextProps>({
  currentPlan: {
    name: "",
    actions: JSON.parse(localStorage.getItem("movments-log") ?? "[]"),
  },
  setCurrentPlan: () => {},
});

interface PlanProviderProps {}

export const PlanProvider: React.FC<PlanProviderProps> = (props) => {
  const [currentPlan, setCurrentPlan] = useState<Plan>({
    name: "",
    actions: JSON.parse(localStorage.getItem("movments-log") ?? "[]"),
  });
  return (
    <PlanContext.Provider
      value={{
        currentPlan,
        setCurrentPlan,
      }}
    >
      {props.children}
    </PlanContext.Provider>
  );
};
