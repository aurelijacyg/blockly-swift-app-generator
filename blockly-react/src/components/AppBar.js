import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: window.innerWidth,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Blocks Pie
          </Typography>

          <Button 
            color="primary"
            onClick={() => { }}
            startIcon={<AppsIcon />}
          >
            Create App!
          </Button>
        
          <Button 
            color="default"
            onClick={() => { }}
            startIcon={<ArrowUpwardIcon />}
          >
            Get started
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
//Swift App builder