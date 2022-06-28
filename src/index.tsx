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
import UserView from "./views/user";
import UserContext from './authContext';
import ProtectedRoutes from "./components/protectedRoutes";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <UserContext>
          <Router>
            <Routes>
              <Route path="/login" element={<LoginView />} />

              <Route element={<ProtectedRoutes />}>
                <Route path="/user" element={<UserView />} />
              </Route>
            </Routes>
          </Router>
        </UserContext>
      </Container>
    </ThemeProvider >
  </React.StrictMode >
);
