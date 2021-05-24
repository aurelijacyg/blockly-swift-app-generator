import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        maxWidth: 1200
    },
}));

const LinksSection = ({ data }) => {
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
                    {data.map((item) => (
                        <Typography>
                            <Link color="textPrimary" href={item.link}>
                                {item.title} 
                            </Link>
                        </Typography>
                    ))}
                </Grid>
            </Grid>
        </div>
    );
}

export default LinksSection;