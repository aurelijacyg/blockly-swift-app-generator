import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: window.innerWidth,
  },
  title: {
    flexGrow: 1,
    color: "#FFFFFF"
  },
  secondaryButton: {
    color: theme.palette.secondary.light
  },
  primaryButton: {
    color: "#FFFFFF"
  }
}));

const TopBar = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleHomeBtnClick = () => history.push('/');
  const handleGetStartedBtnClick = () => history.push('/');

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Doably
          </Typography>
          <Button
            className={classes.secondaryButton}
            onClick={() => handleHomeBtnClick()}
            startIcon={<HomeIcon />}
          >
            Home
          </Button>
        
          <Button 
            className={classes.primaryButton}
            onClick={() => handleGetStartedBtnClick()}
            startIcon={<ArrowUpwardIcon />}
          >
            Get started
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;