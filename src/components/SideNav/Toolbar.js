import styled from '@emotion/styled';
import { GitHub, LinkedIn } from '@mui/icons-material';
import {
  Divider,
  IconButton,
  Toolbar as MuiToolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { Links } from './Links';

export const Toolbar = () => (
  <Container>
    <MuiToolbar sx={{ justifyContent: 'space-between', zIndex: 1000 }}>
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
            <LinkedIn />
          </IconButton>
        </a>
        <a href="https://github.com/aruizj89" rel="noreferrer" target="_blank">
          <IconButton>
            <GitHub />
          </IconButton>
        </a>
      </div>
    </MuiToolbar>
    <Divider />
    <Links />
  </Container>
);

const Container = styled.div`
  backdrop-filter: blur(25px);
  position: sticky;
  top: 0;
`;
