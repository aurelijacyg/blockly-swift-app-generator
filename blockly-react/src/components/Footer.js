import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link } from "@material-ui/core";
import { grey200 } from "material-ui/styles/colors";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: grey200,
    padding: theme.spacing(6),
  },
}));

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://doably.com/">
        Doably
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h5" align="center" color="textSecondary" gutterBottom>
        • Doably •
        </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Do Magic
        </Typography>
      <Copyright />
    </footer>
  );
}

export default Footer;
