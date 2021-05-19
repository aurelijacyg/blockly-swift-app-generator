import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import Item from './Item';

const useStyles = makeStyles((theme) => ({
    content: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        marginTop: theme.spacing(3)
    },
}));

const CustomCorousel = ({ templates }) => {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            <Carousel
                next={ () => {/* Do stuff */} }
                prev={ () => {/* Do other stuff */} }
                animation={"slide"}
                swipe={"true"}
                timeout={300}
            >
                {
                    templates.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>
    );
}

export default CustomCorousel;
