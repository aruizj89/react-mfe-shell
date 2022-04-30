import { Drawer } from '@mui/material';
import React from 'react';
import { useShellContext } from '../../contexts/ShellContext';
import { ResponsiveDrawer } from './ResponsiveDrawer';
import { Toolbar } from './Toolbar';

export const SideNav = ({ drawerWidth: width }) => {
  const { smallViewport } = useShellContext();

  if (smallViewport) return <ResponsiveDrawer />;

  return (
    <Drawer
      open
      sx={{
        width,
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width,
        },
      }}
      variant="persistent"
    >
      <Toolbar />
    </Drawer>
  );
};
