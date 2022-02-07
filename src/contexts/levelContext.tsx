import React, { createContext, useEffect, useMemo, useState } from "react";

interface LevelContextProps {
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
  space: number;
}

export const LevelContext = createContext<LevelContextProps>({
  level: 1,
  setLevel: () => {},
  space: 0,
});

interface LevelProviderProps {}

export const LevelProvider: React.FC<LevelProviderProps> = (props) => {
  const [level, setLevel] = useState<number>(1);

  const space = useMemo(() => {
    switch (level) {
      case 3:
        return 0.5;
      case 4:
        return 2;
      default:
        return 0;
    }
  }, [level]);

  return (
    <LevelContext.Provider value={{ level, setLevel, space }}>
      {props.children}
    </LevelContext.Provider>
  );
};
