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
  }, [hoods]);

  // const handlePlanChange = useCallback(() => {
  //   const plan = JSON.parse(localStorage.getItem("plan") ?? "") as Plan;
  //   // setHoods(fn(plan));

  //   /**
  //    * @function
  //    * @param plan
  //    * @returns {Hood[]}
  //    */
  // }, []);

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
