import { Drawer } from '@mui/material';
import React from 'react';
import { Toolbar } from './Toolbar';

export const SideNav = ({ drawerWidth: width }) => {
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
