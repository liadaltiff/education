import { createContext, useState } from "react";
import { Hood } from "../types/neighbourhood.type";

interface DataContextProps {
  hoods: Hood[];
  setHoods: React.Dispatch<React.SetStateAction<Hood[]>>;
}

export const DataContext = createContext<DataContextProps>({
  hoods: [],
  setHoods: () => {},
});

interface DataProviderProps {}

export const DataProvider: React.FC<DataProviderProps> = (props) => {
  const [hoods, setHoods] = useState<Hood[]>([]);

  return (
    <DataContext.Provider value={{ hoods, setHoods }}>
      {props.children}
    </DataContext.Provider>
  );
};
