import { Drawer } from '@mui/material';
import React, { useCallback } from 'react';
import { useShellContext } from '../../contexts/ShellContext';
import { Toolbar } from './Toolbar';

export const ResponsiveDrawer = () => {
  const { openDrawer: open, setOpenDrawer } = useShellContext();

  const onClose = useCallback(() => setOpenDrawer(false), [setOpenDrawer]);

  return (
    <Drawer
      onClose={onClose}
      open={open}
      sx={{
        '& .MuiDrawer-paper': {
          width: '80vw',
        },
      }}
      variant="temporary"
    >
      <Toolbar />
    </Drawer>
  );
};
