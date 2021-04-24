import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Routing from './router/Routing';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#33c9dc",
      main: "#00bcd4",
      dark: "#008394",
      contrastText: "#fff",
    },
    secondary: {
      light: "#c7f7d4",
      main: "#b9f6ca",
      dark: "#81ac8d",
    },
  },
});

const App = () => {
  const classes = useStyles();
  
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Routing />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
