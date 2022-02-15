import { useCallback, useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";
import originalJson from "../../neighbourhoods.json";
export const useData = () => {
  const { hoods, setHoods } = useContext(DataContext);

  const resetData = useCallback(() => {
    setHoods(originalJson.features);
  }, [hoods]);

  useEffect(() => {
    console.log("context hoods", hoods);
  }, [hoods]);

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
