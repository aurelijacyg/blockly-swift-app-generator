import React from "react";
import { Typography, Grid } from "@material-ui/core";

import CustomCarousel from "../components/templatesPage/CustomCarousel";

var templates = [
  {
    title: "Grid",
    image: "",
  },
  {
    title: "Photo gallery",
    image: "",
  },
  {
    title: "Photo gallery",
    image: "",
  },
  {
    title: "Photo gallery",
    image: "",
  },
];

const TemplatesPage = () => {
  return (
    <main>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} justify="center" alignItems="center">
          <Typography gutterBottom variant="h5" color="primary" component="h2">
            Templates
          </Typography>
          &#160;
          <Typography variant="body1" color="textSecondary" component="p">
            Doably suggests you 5 screen templates and each of them could have different variations. Primary screen could have different layouts and you can choose of 7 amazing layouts.
            Some layouts could have a component. There are 4 suggested components to your wish app.
          </Typography>
          &#160;
          <Typography gutterBottom variant="h6" color="primary" component="h2">
            Screens
          </Typography>
        </Grid>
        <Grid item xs={12} justify="center" alignItems="center">
          <CustomCarousel templates={templates}/>
        </Grid>
        &#160;
        <Grid item xs={12} justify="center" alignItems="center">
          <Typography gutterBottom variant="h6" color="primary" component="h2">
            Layouts
          </Typography>
        </Grid>
        <Grid item xs={12} justify="center" alignItems="center">
          <CustomCarousel templates={templates}/>
        </Grid>
        &#160;
        <Grid item xs={12} justify="center" alignItems="center">
          <Typography gutterBottom variant="h6" color="primary" component="h2">
            Components
          </Typography>
        </Grid>
        <Grid item xs={12} justify="center" alignItems="center">
          <CustomCarousel templates={templates}/>
        </Grid>
      </Grid>
    </main>
  );
}

export default TemplatesPage;