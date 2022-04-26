import styled from '@emotion/styled';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { ShellContextProvider } from './contexts/ShellContext';
import { POC } from './modules/poc';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
    return () => (document.body.style.backgroundColor = null);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ShellContextProvider>
        <Header />
        <MinHeight className="App">
          <POC />
        </MinHeight>
      </ShellContextProvider>
    </ThemeProvider>
  );
};

const MinHeight = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 49px);
`;

export default App;
