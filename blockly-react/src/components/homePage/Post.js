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
                The digitization process is an integral part of today’s world, especially in 2020. In the face of the prevailing pandemic, societies around the world have felt the need to incorporate as many innovative digital processes as possible into their activities, enabling some of their activities to be transferred to the digital space. However, it is obvious that such processes require specific knowledge and skills, time costs. Not everyone who comes up with the idea of ​​sharing their experiences, ideas or doing business in the digital space has enough programming knowledge and skills or resources to hire a professional programmer or company to create the right platform to run the business. That is why there is a need for a simpler, more efficient, cheaper solution that allows you to create platforms where you can carry out your desired activities. This makes application development more widely available. Not only is it a good technological solution, but it also contributes to solving the problem of social digitization by reducing the gap between those for whom programming or programming services are more accessible and those who, without programming experience, would like to create simple programs themselves. Doably allows you to write code intuitively using visual aids - blocks.
            </Typography>
        </Grid>
    );
}

export default Post;