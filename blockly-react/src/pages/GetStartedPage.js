import React from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from '../components/homePage/Header';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
});

const GetStartedPage = () => {
    const classes = useStyles();
    const history = useHistory();

    const handleCreateAppBtn = () => history.push('/workspace');

    return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={12} justify="center" alignItems="center">
          <Header 
            onCreateApp={() => handleCreateAppBtn()}
          />
        </Grid>
      </Grid>
    </div>
        
    );
}

export default GetStartedPage;