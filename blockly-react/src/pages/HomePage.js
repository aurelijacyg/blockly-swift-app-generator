import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from '../components/homePage/Header';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
});

const HomePage = () => {
    const classes = useStyles();

    return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={12} justify="center" alignItems="center">
          <Header />
        </Grid>
      </Grid>
    </div>
        
    );
}

export default HomePage;