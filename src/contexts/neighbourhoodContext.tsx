import React, { createContext, useEffect, useState } from "react";
import { Polygon } from "../types/neighbourhood.type";
import data from "../../neighbourhoods.json";

interface NeighbourhoodContextProps {
  selected: Polygon | undefined;
  setSelected: React.Dispatch<React.SetStateAction<Polygon | undefined>>;
}

export const NeighbourhoodContext = createContext<NeighbourhoodContextProps>({
  selected: undefined,
  setSelected: () => {},
});

interface NeighbourhoodProviderProps {}

export const NeighbourhoodProvider: React.FC<NeighbourhoodProviderProps> = (
  props
) => {
  const [selected, setSelected] = useState<Polygon | undefined>();

  return (
    <NeighbourhoodContext.Provider
      value={{
        selected,
        setSelected,
      }}
    >
      {props.children}
    </NeighbourhoodContext.Provider>
  );
};
