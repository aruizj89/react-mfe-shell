import React, { createContext, useContext, useState } from 'react';

export const ShellContext = createContext({ state: null, setState: null });
export const useShellContext = () => useContext(ShellContext);

export const ShellContextProvider = ({ children }) => {
  const [state, setState] = useState({});

  return (
    <ShellContext.Provider value={{ state, setState }}>
      {children}
    </ShellContext.Provider>
  );
};
