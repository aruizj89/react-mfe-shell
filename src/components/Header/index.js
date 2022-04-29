import styled from '@emotion/styled';
import { Person } from '@mui/icons-material/';
import { Divider, IconButton, Toolbar } from '@mui/material';
import React from 'react';

export const Header = () => {
  return (
    <Container>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <div></div>
        <div>
          <IconButton>
            <Person />
          </IconButton>
        </div>
      </Toolbar>
      <Divider />
    </Container>
  );
};

const Container = styled.div`
  backdrop-filter: blur(25px);
  position: sticky;
  top: 0;
`;
