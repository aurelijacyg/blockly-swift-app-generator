import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Grid, ButtonBase } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    content: {
        backgroundColor: theme.palette.background.paper,
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 1200,
    },
    image: {
        width: 800,
        height: 300,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const Item = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            <div className={classes.root}>
                <Paper className={classes.paper} elevation={0} square>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src={props.item.image} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={0}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="h5" color="textPrimary" component="h2">
                                        {props.item.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                       {props.item.description}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2">
                                        
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </div>
    );
}

export default Item;