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

const Item = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            <Typography component="h1" variant="h5" align="center" color="textSecondary" gutterBottom>
                {props.item.title}
            </Typography>
        </div>
    );
}

export default Item;