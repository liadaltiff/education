import React, { createContext, useEffect, useState } from "react";

interface ActiveTabContextProps {
  activeTab: string | undefined;
  setActiveTab: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const ActiveTabContext = createContext<ActiveTabContextProps>({
  activeTab: undefined,
  setActiveTab: () => {},
});

interface ActiveTabProviderProps {}

export const ActiveTabProvider: React.FC<ActiveTabProviderProps> = (props) => {
  const [activeTab, setActiveTab] = useState<string | undefined>();

  return (
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
      {props.children}
    </ActiveTabContext.Provider>
  );
};
