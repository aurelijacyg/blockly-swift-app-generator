import React, { useRef} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import CodeIcon from '@material-ui/icons/Code';
import BlocklyBox from '../components/workspacePage/BlocklyBox';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    fab: {
      marginRight: theme.spacing(1),
    },
}));

const HomePage = () => {
    const classes = useStyles();
    const childRef = useRef();

    return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid 
          item xs={6}
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-end"

        >
          <Fab 
            variant="extended"
            color="secondary"
            className={classes.fab}
            onClick={() => { childRef.current.generateCode() }}
          >
            <CodeIcon className={classes.extendedIcon} />
            Generate code
          </Fab>
        </Grid>
        <Grid item xs={12}>
          <BlocklyBox ref={childRef} />
        </Grid>
      </Grid>
    </div>
        
    );
}

export default HomePage;

// YRA ICON GetApp