import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
                    <Typography variant="body1" color="textSecondary" component="p">
                        Doably is an intuitive, visual programming environment that allows everyone – even children – to build apps for smartphones.
                        Apps are build by placing blocks like a puzzle and assigning a behavior or design to the blocks. Apps could be built from pre-built templates which can be found in this section.
                    </Typography>
                    &#160;
                    <Typography variant="body1" color="textSecondary" component="p">
                        The main purpose of designed app is to attractively display information of your choosing. It could become the app of your Recipes’ book or an app designated to share your life hacks and advices with others. It might even become an app to introduce you interior design ideas by sharing the pictures of your best works.
                        Sky is the limit – your app, your ideas!
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default Header;