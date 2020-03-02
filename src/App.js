import React from 'react';
import { Container, Grid, Hidden, Typography } from '@material-ui/core';
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider
} from '@material-ui/core/styles';
import './App.css';

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
      <Container className='app'>
        <Grid container>
          <Hidden mdDown>
            <Grid item lg={3}></Grid>
          </Hidden>
          <Grid justify='space-between' container>
            <Grid item xs={6}>
              <Typography
                align='left'
                style={{ fontSize: '0.2rem' }}></Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography align='right' style={{ fontSize: '0.2rem' }}>
                Next Meeting: 3/18/20
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item lg={3}></Grid>
          </Hidden>
        </Grid>

        <Grid container justify='space-evenly'>
          <Hidden mdDown>
            <Grid item lg={3}></Grid>
          </Hidden>
          <Grid item md={12} lg={6}>
            <img
              style={{ paddingTop: '2em', height: '2em' }}
              src='/images/logo-white.jpg'
              alt='CFP'
            />
          </Grid>
          <Hidden mdDown>
            <Grid item lg={3}></Grid>
          </Hidden>
        </Grid>
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
