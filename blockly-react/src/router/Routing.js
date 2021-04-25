import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';

import HomePage from '../pages/HomePage';
import WorkspacePage from '../pages/WorkSpacePage';
import GetStartedPage from '../pages/GetStartedPage';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

const Routing = () => {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root} >
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    justify="center"
                    alignItems="center"
                    style={{maxHeight: '100%', overflow: 'auto'}}
                >
                    <Grid item xs={12}>
                        <TopBar />
                        &#160; &#160; &#160;
                    </Grid>
                    <Grid item xs={12} style={{maxHeight: '100%'}}>
                        <Switch>
                            <Route path="/workspace">
                                <WorkspacePage />
                            </Route>
                            <Route path="/getstarted">
                                <GetStartedPage />
                            </Route>
                            <Route path="/">
                                <HomePage />
                            </Route>
                            <Route path="*" component={() => '404 NOT FOUND'} />
                        </Switch>
                    </Grid>
                </Grid>
            </div>
        </Router>
    )
};

export default Routing;

/*
<Grid item xs={12}>
                        &#160; &#160; &#160; &#160;
                        <BottomBar />
                    </Grid>

*/