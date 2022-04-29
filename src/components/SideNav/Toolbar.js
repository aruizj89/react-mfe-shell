import styled from '@emotion/styled';
import { GitHub, LinkedIn } from '@mui/icons-material';
import {
  Divider,
  IconButton,
  Toolbar as MuiToolbar,
  Typography,
} from '@mui/material';
import React from 'react';

export const Toolbar = () => (
  <Container>
    <MuiToolbar sx={{ justifyContent: 'space-between' }}>
      <Typography color="" variant="h6">
        Art Ruiz
      </Typography>
      <div>
        <a
          href="https://www.linkedin.com/in/aruizjr/"
          rel="noreferrer"
          target="_blank"
        >
          <IconButton>
            <GitHub />
          </IconButton>
        </a>
        <a href="https://github.com/aruizj89" rel="noreferrer" target="_blank">
          <IconButton>
            <LinkedIn />
          </IconButton>
        </a>
      </div>
    </MuiToolbar>
    <Divider />
  </Container>
);

const Container = styled.div`
  backdrop-filter: blur(25px);
  position: sticky;
  top: 0;
`;
