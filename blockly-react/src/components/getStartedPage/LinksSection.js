import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        maxWidth: 1200
    },
}));

const LinksSection = () => {
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
                        <Link color="textPrimary" href="https://apps.apple.com/us/app/xcode/id497799835?mt=12">
                            Install Xcode in your Mac
                        </Link>
                    </Typography>
                    &#160;
                    <Typography>
                        <Link color="textPrimary" href="https://developer.apple.com/documentation/xcode/running-your-app-in-the-simulator-or-on-a-device">
                            Running Your App in the Simulator or on a Device
                        </Link>
                    </Typography>
                    &#160;
                    <Typography>
                        <Link color="textPrimary" href="https://developer.apple.com/xcode/">
                            Xcode documentation
                        </Link>
                    </Typography>
                    &#160;
                    <Typography>
                        <Link color="textPrimary" href="https://git-scm.com/docs/gittutorial">
                            How to use GIT
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default LinksSection;