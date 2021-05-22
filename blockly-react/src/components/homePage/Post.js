import React from "react";
import { Typography, Grid, Divider } from "@material-ui/core";

const Post = () => {
    return (
        <Grid>
            <Typography variant="h6" gutterBottom>
                About
            </Typography>
            <Divider />
            &#160; &#160; &#160;

            <Typography variant="body1" color="textSecondary" component="p">
                Creating your own iOS App sounds complicated? Not with Doably! This is an easy and entertaining method to build your personalised iOS App. Place blocks like a puzzle and enjoy the visually attractive, functional result!
            </Typography>
            &#160;
            <Typography variant="body1" color="textSecondary" component="p">
                Doably is innovative tool that allows everyone to build their iOS App without having specific knowledge and skills. Ultimately, there is a way to have an App for personal or professional purposes without needing to spend significant amount of money. All you need is to turn on your creative mood and get started.
            </Typography>
            &#160;
            <Typography variant="body1" color="textSecondary" component="p">
                Programming should not be perceived as boring or unnecessary complicated. It is a process, which begins with small steps. Doably is user friendly, attractive and guarantees result - it is a tool that makes the first steps in programming world stress-free.
            </Typography>
        </Grid>
    );
}

export default Post;