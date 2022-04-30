import { Menu as MenuIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useCallback } from 'react';
import { useShellContext } from '../../contexts/ShellContext';

export const Menu = () => {
  const { setOpenDrawer } = useShellContext();

  const onClick = useCallback(() => setOpenDrawer(true), [setOpenDrawer]);

  return (
    <IconButton onClick={onClick}>
      <MenuIcon />
    </IconButton>
  );
};
