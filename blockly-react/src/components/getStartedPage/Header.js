import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        maxWidth: 1200
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography gutterBottom variant="h5" color="primary" component="h2">
                        Let's get started
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography gutterBottom variant="h6" color="primary" component="h2">
                        What is Doably?
                    </Typography>
                    &#160;
                    <Typography variant="body1" color="textSecondary" component="p">
                        Doably is an intuitive, visual programming environment that allows everyone - even children - to build Apps for smartphones. Apps are built by placing blocks like a puzzle and assigning a behaviour to them. Doably environment allows to personalise your App by suggesting many different designs for blocks. To save time and be stress-free in your creative process, you can use pre-built templates for your App (could be found in the section “Templates”).
                    </Typography>
                    &#160;
                    <Typography variant="body1" color="textSecondary" component="p">
                        The App you create using Doably attractively displays information of your choosing. It could become the App of your recipes’ book or an App designed to share your life hacks and advices with others. The purpose can be personal - such as your own individualised travel journal; or it can become a step forward in your career - for example to introduce your interior design ideas by sharing pictures of your best works with potential clients. Sky is the limit - your App, your ideas!
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default Header;