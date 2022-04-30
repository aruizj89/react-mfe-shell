import { useMediaQuery, useTheme } from '@mui/material';
import React, { createContext, useContext, useState } from 'react';

export const ShellContext = createContext({
  openDrawer: null,
  setOpenDrawer: null,
  smallViewport: null,
});

export const useShellContext = () => useContext(ShellContext);

export const ShellContextProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const smallViewport = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <ShellContext.Provider value={{ openDrawer, setOpenDrawer, smallViewport }}>
      {children}
    </ShellContext.Provider>
  );
};
