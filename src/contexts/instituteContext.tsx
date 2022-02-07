import React, { createContext, useState } from "react";
import { School } from "../types/neighbourhood.type";

interface SelectedInstituteContextProps {
  selectedInstitute: School | undefined;
  setSelectedInstitute: React.Dispatch<
    React.SetStateAction<School | undefined>
  >;
}

export const SelectedInstituteContext =
  createContext<SelectedInstituteContextProps>({
    selectedInstitute: undefined,
    setSelectedInstitute: () => {},
  });

interface SelectedInstituteProps {}

export const SelectedInstituteProvider: React.FC<SelectedInstituteProps> = (
  props
) => {
  const [selectedInstitute, setSelectedInstitute] = useState<
    School | undefined
  >();

  return (
    <SelectedInstituteContext.Provider
      value={{
        selectedInstitute,
        setSelectedInstitute,
      }}
    >
      {props.children}
    </SelectedInstituteContext.Provider>
  );
};
