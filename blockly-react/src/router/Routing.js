import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import HomePage from '../pages/HomePage';
import Workspace from '../pages/WorkSpacePage';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

const Routing = () => {
    const classes = useStyles();

    return (
        <Router>
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
                        <TopBar />
                        &#160; &#160; &#160;
                    </Grid>
                    <Grid item xs={12}>
                        <Switch>
                            <Route path="/workspace">
                                <Workspace />
                            </Route>
                            <Route path="/">
                                <HomePage />
                            </Route>
                            <Route path="*" component={() => '404 NOT FOUND'} />
                        </Switch>
                    </Grid>
                    <Grid item xs={12}>
                        &#160; &#160; &#160; &#160;
                        <BottomBar />
                    </Grid>
                </Grid>
            </div>
        </Router>
    )
};

export default Routing;