import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AppsIcon from '@material-ui/icons/Apps';

import headerImg from '../../images/header.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1200
  },
  media: {
    height: 320,
    width: 1200,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <img src={headerImg} className={classes.media} />
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h5" component="h2" color="primary">
            Build your own iOS app
        </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            This is a fun method for creating small iOS apps.
            This tool allows you to place blocks like a puzzle and create your custom iOS app design and program buttons for a simple actions.
        </Typography>
        </Grid>
        <Grid item xs={3}>
          <Fab
            variant="extended"
            color="secondary"
          > 
            <AppsIcon className={classes.extendedIcon} />
            Create App
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;