import React from 'react';
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider
} from '@material-ui/core/styles';
import './App.css';
import Meeting from './Meeting';

let theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Meeting />
    </MuiThemeProvider>
  );
}

export default App;
