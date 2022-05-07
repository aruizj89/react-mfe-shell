import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { RotateRight } from '@mui/icons-material';
import React from 'react';

export const LoadingPage = () => (
  <Div>
    <Spinner color="primary" />
  </Div>
);

const spin = keyframes`
    0% { transform: rotate(0deg) scale(2); }
    100% { transform: rotate(360deg) scale(2); }
`;

const Div = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

const Spinner = styled(RotateRight)`
  animation: ${spin} 1s linear infinite;
`;
