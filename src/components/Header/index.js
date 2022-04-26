import styled from '@emotion/styled';
import { AppBar, Typography, useTheme } from '@mui/material';
import React from 'react';

export const Header = () => {
  const theme = useTheme();

  return (
    <StyledAppBar
      bc={theme.palette.divider}
      sx={{ p: 1, px: 4 }}
      position="sticky"
    >
      <Typography color="" variant="h6">
        Art Ruiz
      </Typography>
    </StyledAppBar>
  );
};

const StyledAppBar = styled(AppBar)`
  backdrop-filter: blur(25px);
  background: transparent;
  ${({ bc }) => `border-bottom: 1px solid ${bc};`}
  box-shadow: none;
  flex-direction: row;
  justify-content: space-between;
`;
