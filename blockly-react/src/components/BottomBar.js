import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  bottomBar: {
    top: 'auto',
    bottom: 0
  },
  grow: {
    flexGrow: 1,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const BottomAppBar = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="inherit" className={classes.bottomBar}>
        <Toolbar>
          <Typography variant="body2" color="textSecondary" component="p">
              Blokcs Pie @2021 AC
          </Typography>
          <div className={classes.grow} />
          <Typography variant="body2" color="textSecondary" component="p">
              Support: cygaurelija@gmail.com
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default BottomAppBar;
