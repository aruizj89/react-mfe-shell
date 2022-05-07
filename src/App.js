import { ThemeProvider } from '@mui/material/styles';
import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/AppRouter';
import { Header } from './components/Header';
import { MinHeight } from './components/MinHeight';
import { SideNav } from './components/SideNav';
import { ShellContextProvider } from './contexts/ShellContext';
import { theme } from './theme';

const drawerWidth = 240;

const App = () => {
  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
    return () => (document.body.style.backgroundColor = null);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ShellContextProvider>
        <BrowserRouter>
          <MinHeight className="App" drawerWidth={drawerWidth}>
            <Header />
            <SideNav drawerWidth={drawerWidth} />
            <AppRouter />
          </MinHeight>
        </BrowserRouter>
      </ShellContextProvider>
    </ThemeProvider>
  );
};

export default App;
