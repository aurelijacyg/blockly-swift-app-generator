import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    content: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        marginTop: theme.spacing(3)
    },
}));

const Template = ({ template }) => {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            <Typography component="h1" variant="h5" align="center" color="textSecondary" gutterBottom>
                {template.title}
            </Typography>
        </div>
    );
}

export default Template;