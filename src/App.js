import styled from '@emotion/styled';
import { AppBar, Paper, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MinHeight className="App">
        <StyledAppBar sx={{ p: 1, px: 4 }}>
          <Typography variant="h6">Art Ruiz</Typography>
        </StyledAppBar>
        <Paper sx={{ borderRadius: 0, flexGrow: 1, pt: 6 }}></Paper>
      </MinHeight>
    </ThemeProvider>
  );
};

const MinHeight = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledAppBar = styled(AppBar)`
  backdrop-filter: blur(25px);
  background: rgba(0, 0, 0, 0.1);
`;

export default App;
