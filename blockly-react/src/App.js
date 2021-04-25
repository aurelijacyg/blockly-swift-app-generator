import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Routing from './router/Routing';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#33c9dc",
      main: "#00bcd4",
      dark: "#008394",
      contrastText: "#fff",
    },
    secondary: {
      light: "#33ab9f",
      main: "#009688",
      dark: "#00695f",
    },
    background: {
      default: "#fafafa",
    }
  },
});

const App = () => {  
  return (
    <MuiThemeProvider theme={theme}>
        <Routing />
    </MuiThemeProvider>
  );
}

export default App;
