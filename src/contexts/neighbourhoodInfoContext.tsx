import React, { createContext, useEffect, useState } from "react";
import { Polygon } from "../types/neighbourhood.type";

interface NeighbourhoodInfoContextProps {
  neighbourhoodInfo: Polygon[] | undefined;
  setNeighourhoodInfo: React.Dispatch<
    React.SetStateAction<Polygon[] | undefined>
  >;
}

export const NeighbourhoodInfoContext =
  createContext<NeighbourhoodInfoContextProps>({
    neighbourhoodInfo: undefined,
    setNeighourhoodInfo: () => {},
  });

interface NeighbourhoodInfoProviderProps {}

export const NeighbourhoodInfoProvider: React.FC<
  NeighbourhoodInfoProviderProps
> = (props) => {
  const [neighbourhoodInfo, setNeighourhoodInfo] = useState<
    Polygon[] | undefined
  >();

  return (
    <NeighbourhoodInfoContext.Provider
      value={{ neighbourhoodInfo, setNeighourhoodInfo }}
    >
      {props.children}
    </NeighbourhoodInfoContext.Provider>
  );
};
