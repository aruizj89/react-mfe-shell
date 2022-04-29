import { Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { MinHeight } from './components/MinHeight';
import { SideNav } from './components/SideNav';
import { ShellContextProvider } from './contexts/ShellContext';
import { POC } from './modules/poc';
import { palette } from './palette';

const drawerWidth = 240;

const theme = createTheme({ palette });

const App = () => {
  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
    return () => (document.body.style.backgroundColor = null);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ShellContextProvider>
        <MinHeight className="App" drawerWidth={drawerWidth}>
          <Header />
          <SideNav drawerWidth={drawerWidth} />
          <Container sx={{ p: 3 }}>
            <POC />
          </Container>
        </MinHeight>
      </ShellContextProvider>
    </ThemeProvider>
  );
};

export default App;
