import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: '#8b4780',
    marginTop: '1em',
    padding: '1em'
  },
  brand: {
    height: '5em'
  },
  centerGrid: {
    margin: 'auto'
  }
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container direction='row' spacing={1} alignItems='center'>
        <Grid item className={classes.centerGrid}>
          <img
            className={classes.brand}
            src='/images/logo-white-square.png'
            alt='CFP'
          />
        </Grid>
      </Grid>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
};
