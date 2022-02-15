import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

export const useData = () => {
  const { hoods, setHoods } = useContext(DataContext);

  return {
    data: {
      hoods,
      schools: hoods.map((hood) => hood.properties).flat(),
    },
    setData: setHoods,
  };
};
