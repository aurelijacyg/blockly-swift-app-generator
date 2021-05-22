import React from "react";
import { Typography, Grid } from "@material-ui/core";

import CustomCarousel from "../components/templatesPage/CustomCarousel";

import ScreenPrimaryImg from "../images/logo.png";

var screens = [
  {
    title: "Primary screen",
    description: "This is most flexible template of the screens. You can assign layouts for it.",
    image: ScreenPrimaryImg,
  },
  {
    title: "Cards gallery screen",
    description: "",
    image: ScreenPrimaryImg,
  },
  {
    title: "Phrase screen",
    description: "",
    image: ScreenPrimaryImg,
  },
  {
    title: "Article screen",
    description: "",
    image: ScreenPrimaryImg,
  },
  {
    title: "Paper screen",
    description: "",
    image: ScreenPrimaryImg,
  },
];

var layouts = [
  {
    title: "Animated board",
    description: "This layout has animations.",
    image: ScreenPrimaryImg,
  },
  {
    title: "Note",
    description: "This layout could have animation for floating component up and down.",
    image: ScreenPrimaryImg,
  },
  {
    title: "Honeycomb",
    description: "",
    image: ScreenPrimaryImg,
  },
  {
    title: "List",
    description: "",
    image: ScreenPrimaryImg,
  },
  {
    title: "Grid",
    description: "",
    image: ScreenPrimaryImg,
  },
  {
    title: "Bubble list",
    description: "",
    image: ScreenPrimaryImg,
  },
  {
    title: "Catalog grid",
    description: "",
    image: ScreenPrimaryImg,
  },
];

var components = [
  {
    title: "Photo",
    description: "",
    image: ScreenPrimaryImg,
  },
  {
    title: "Circle component",
    description: "",
    image: ScreenPrimaryImg,
  },
  {
    title: "Card",
    description: "",
    image: ScreenPrimaryImg,
  },
  {
    title: "Flip card",
    description: "",
    image: ScreenPrimaryImg,
  }
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
            Doably also suggests you 5 options for screen templates and each of them could be modified to reflect your needs.
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            To create your Primary screen you can choose out of 7 amazing layouts. Some of the layouts are designed to have a component. Bring your individuality to the Primary screen by choosing one or more components out of selection of 4.
          </Typography>
          &#160;
          <Typography variant="body1" color="textSecondary" component="p">
            Mix and Match screens templates, layouts and components to make your perfect iOS App!
          </Typography>
          &#160;
          <Typography gutterBottom variant="h6" color="primary" component="h2">
            Screens
          </Typography>
        </Grid>
        <Grid item xs={12} justify="center" alignItems="center">
          <CustomCarousel templates={screens}/>
        </Grid>
        &#160;
        <Grid item xs={12} justify="center" alignItems="center">
          <Typography gutterBottom variant="h6" color="primary" component="h2">
            Layouts
          </Typography>
        </Grid>
        <Grid item xs={12} justify="center" alignItems="center">
          <CustomCarousel templates={layouts}/>
        </Grid>
        &#160;
        <Grid item xs={12} justify="center" alignItems="center">
          <Typography gutterBottom variant="h6" color="primary" component="h2">
            Components
          </Typography>
        </Grid>
        <Grid item xs={12} justify="center" alignItems="center">
          <CustomCarousel templates={components}/>
        </Grid>
      </Grid>
    </main>
  );
}

export default TemplatesPage;