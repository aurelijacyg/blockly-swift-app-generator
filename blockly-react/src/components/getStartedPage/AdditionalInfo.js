import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        maxWidth: 1200
    },
}));

const AdditionalInfo = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography gutterBottom variant="h6" color="primary" component="h2">
                        Useful links
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        <Link color="primary" href="https://apps.apple.com/us/app/xcode/id497799835?mt=12">
                            Install
                        </Link>
                        {" Xcode in your Mac"}
                    </Typography>
                    &#160;
                    <Typography>
                        <Link color="primary" href="https://developer.apple.com/documentation/xcode/running-your-app-in-the-simulator-or-on-a-device">
                            Running
                        </Link>
                        {" Your App in the Simulator or on a Device"}
                    </Typography>
                    &#160;
                    <Typography>
                        {"Xcode "}
                        <Link color="primary" href="https://developer.apple.com/xcode/">
                            documentation
                        </Link>
                    </Typography>
                    &#160;
                    <Typography>
                        {"How to use "}
                        <Link color="primary" href="https://git-scm.com/docs/gittutorial">
                            GIT
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default AdditionalInfo;