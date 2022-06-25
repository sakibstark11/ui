import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider } from '@emotion/react';
import theme from '../src/themes/default';
import { Container } from '@mui/system';
import LoginView from "./views/login";
import UserContext from './userContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Router>
          <Routes>
            <Route path="/login"
              element={
                <UserContext>
                  <LoginView />
                </UserContext>
              }
            />
          </Routes>
        </Router>
      </Container>
    </ThemeProvider >
  </React.StrictMode >
);
