import React, { useRef} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InfoCard from '../components/homePage/InfoCard';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,

    },
}));

const HomePage = () => {
    const classes = useStyles();
    const childRef = useRef();

    return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={12} justify="center" alignItems="center">
          <InfoCard />
        </Grid>
      </Grid>
    </div>
        
    );
}

export default HomePage;