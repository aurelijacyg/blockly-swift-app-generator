import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Typography, Button } from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import BorderAllIcon from "@material-ui/icons/BorderAll";


const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    color: theme.palette.primary.main
  },
  button: {
    color: theme.palette.primary.main
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

const AppTopBar = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleHomeBtnClick = () => history.push("/");
  const handleGetStartedBtnClick = () => history.push("/getstarted");
  const handleTemplatesBtnClick = () => history.push("/templates");

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title} noWrap>
          Doably
        </Typography>
        <Button
          className={classes.button}
          onClick={() => handleHomeBtnClick()}
          startIcon={<HomeIcon />}
        >
          Home
        </Button>
        &#160; &#160;
        <Button
          className={classes.button}
          onClick={() => handleTemplatesBtnClick()}
          startIcon={<BorderAllIcon />}
        >
          Templates
        </Button>
        &#160; &#160;
        <Button
          className={classes.button}
          onClick={() => handleGetStartedBtnClick()}
          startIcon={<ArrowUpwardIcon />}
        >
          Get started
        </Button>
      </Toolbar>
    </React.Fragment>
  );
}

export default AppTopBar;