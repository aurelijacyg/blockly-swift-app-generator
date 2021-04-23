import React, { Component } from 'react';

import HomePage from './pages/HomePage';
import AppBar from './components/AppBar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const App = () => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Grid container spacing={1} direction="column" justify="center" alignItems="center">
          <Grid item xs={12}>
            <AppBar />
          </Grid>
          <Grid item xs={12}>
            <HomePage />  
          </Grid>    
        </Grid>
      </div>
      
    );
}

export default App;
