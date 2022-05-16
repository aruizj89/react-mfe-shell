import { AccountTree, AssignmentInd, PhotoLibrary } from '@mui/icons-material';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React, { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useShellContext } from '../../contexts/ShellContext';

export const Links = () => {
  const { setOpenDrawer } = useShellContext();

  const links = useMemo(
    () => [
      {
        href: '/',
        icon: <AssignmentInd />,
        key: 'portfolio',
        text: 'About Me',
      },
      {
        href: '/proof-of-concept',
        icon: <AccountTree sx={{ transform: 'scaleX(-1) rotate(90deg)' }} />,
        key: 'proof-of-concept',
        text: 'Proof of Concept',
      },
      {
        href: '/photo-library',
        icon: <PhotoLibrary />,
        key: 'photo-library',
        text: 'Photo Library',
      },
    ],
    []
  );

  const closeDrawer = useCallback(() => setOpenDrawer(false), [setOpenDrawer]);

  return (
    <List>
      {links.map(({ href, icon, key, text }) => (
        <Link key={key} to={href}>
          <ListItem button onClick={closeDrawer}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>{text}</ListItemText>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};
