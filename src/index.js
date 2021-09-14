import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {createTheme, ThemeProvider} from "@mui/material";
import {grey, purple} from "@mui/material/colors";

const theme = createTheme({
  palette: {
    color_h1: purple[500],
    bgcolor_disable: grey[300]
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
