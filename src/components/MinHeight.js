import styled from '@emotion/styled';
import React, { useMemo } from 'react';
import { useShellContext } from '../contexts/ShellContext';

export const MinHeight = ({ children, drawerWidth }) => {
  const { smallViewport } = useShellContext();

  const marginLeft = useMemo(
    () => (smallViewport ? 0 : drawerWidth),
    [drawerWidth, smallViewport]
  );

  return (
    <StyledContainer className="App" style={{ marginLeft }}>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
