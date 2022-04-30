import styled from '@emotion/styled';
import { Divider, Toolbar } from '@mui/material';
import React from 'react';
import { useShellContext } from '../../contexts/ShellContext';
import { Menu } from './Menu';

export const Header = () => {
  const { smallViewport } = useShellContext();

  return (
    <Container>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <div>{smallViewport && <Menu />}</div>
        <div></div>
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
