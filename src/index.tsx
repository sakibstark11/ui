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
            <Route path="/login" element={<LoginView />}>
            </Route>
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  </React.StrictMode >
);
