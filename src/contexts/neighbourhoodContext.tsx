import React, { createContext, useState } from "react";

interface SelectedNeighbourhoodIdContextProps {
  selectedNeighbourhoodId: string | undefined;
  setSelectedNeighbourhoodId: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
  selectedNeighbourhoodName: string | undefined;
  setSelectedNeighbourhoodName: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
}

export const SelectedNeighbourhoodIdContext =
  createContext<SelectedNeighbourhoodIdContextProps>({
    selectedNeighbourhoodId: undefined,
    setSelectedNeighbourhoodId: () => {},
    selectedNeighbourhoodName: undefined,
    setSelectedNeighbourhoodName: () => {},
  });

interface SelectedNeighbourhoodIdProps {}

export const SelectedNeighbourhoodIdProvider: React.FC<
  SelectedNeighbourhoodIdProps
> = (props) => {
  const [selectedNeighbourhoodId, setSelectedNeighbourhoodId] = useState<
    string | undefined
  >();

  const [selectedNeighbourhoodName, setSelectedNeighbourhoodName] = useState<
    string | undefined
  >();

  return (
    <SelectedNeighbourhoodIdContext.Provider
      value={{
        selectedNeighbourhoodId,
        setSelectedNeighbourhoodId,
        selectedNeighbourhoodName,
        setSelectedNeighbourhoodName,
      }}
    >
      {props.children}
    </SelectedNeighbourhoodIdContext.Provider>
  );
};
