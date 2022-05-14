import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { AssignmentInd, AccountTree, PhotoLibrary } from '@mui/icons-material';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

export const Links = () => {
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

  return (
    <List>
      {links.map(({ href, icon, key, text }) => (
        <Link key={key} to={href}>
          <ListItem button>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>{text}</ListItemText>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};
