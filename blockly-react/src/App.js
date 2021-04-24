import React from 'react';

import HomePage from './pages/HomePage';
import AppBar from './components/AppBar';
import BottomBar from './components/BottomBar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
        <Grid
          container
          spacing={0}
          direction="column"
          justify="center"
          alignItems="center"
          style={{ maxHeight: '100%', overflow: 'auto' }}
        >
          <Grid item xs={12}>
            <AppBar />
            &#160; &#160; &#160;
          </Grid>
          <Grid item xs={12}>
            <HomePage />
          </Grid>
          <Grid item xs={12}>
            &#160; &#160; &#160; &#160;
            <BottomBar />
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
