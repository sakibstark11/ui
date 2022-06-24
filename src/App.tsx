import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import theme from './themes/default';
import { Container } from '@mui/system';
import LoginView from "./views/login";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <LoginView />
      </Container>
    </ThemeProvider>
  );
}

export default App;
