import React, { createContext, useEffect, useState } from "react";

interface CurrentTabContextProps {
  currentTab: string | undefined;
  setCurrentTab: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const CurrentTabContext = createContext<CurrentTabContextProps>({
  currentTab: undefined,
  setCurrentTab: () => {},
});

interface CurrentTabProviderProps {}

export const CurrentTabProvider: React.FC<CurrentTabProviderProps> = (
  props
) => {
  const [currentTab, setCurrentTab] = useState<string | undefined>();

  return (
    <CurrentTabContext.Provider value={{ currentTab, setCurrentTab }}>
      {props.children}
    </CurrentTabContext.Provider>
  );
};
