import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const theme = createTheme({
  palette: {
    color_h1: grey[100],
    bgcolor_disable: grey[300],
  },
});

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('root'),
);
