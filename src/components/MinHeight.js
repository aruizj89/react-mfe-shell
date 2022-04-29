import styled from '@emotion/styled';
import React from 'react';

export const MinHeight = ({ children, drawerWidth: marginLeft }) => {
  return (
    <StyledContainer className="App" style={{ marginLeft }}>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 64px);
`;
