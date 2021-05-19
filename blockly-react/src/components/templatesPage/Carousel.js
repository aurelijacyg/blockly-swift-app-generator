import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    content: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        marginTop: theme.spacing(3)
    },
}));

const Carousel = ({ template }) => {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            
        </div>
    );
}

export default Carousel;