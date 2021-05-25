import React from "react";
import { Typography, Grid } from "@material-ui/core";

import CustomCarousel from "../components/templatesPage/CustomCarousel";

import ScreenPrimaryImg from "../images/templates/screen-primary.png";
import ScreenPhraseImg from "../images/templates/screen-phrase.png";
import ScreenPaperImg from "../images/templates/screen-paper.png";
import ScreenCardGalleryImg from "../images/templates/screen-card-gallery.png";
import ScreenArticleImg from "../images/templates/screen-article.png";
import ScreenNoteImg from "../images/templates/screen-note.png";
import ScreenSimpleList from "../images/templates/screen-simple-list.png";

import LayoutListImg from "../images/templates/layout-list.png";
import LayoutBubbleListImg from "../images/templates/layout-bubble-list.png";
import LayoutGridImg from "../images/templates/layout-grid.png";
import LayoutCatalogGridImg from "../images/templates/layout-catalog-grid.png";
import LayoutHoneycombImg from "../images/templates/layout-honeycomb.png";
import LayoutAnimatedBoardImg from "../images/templates/layout-animated-board.png";

import ComponentCardImg from "../images/templates/component-card.png";
import ComponentFlipCardImg from "../images/templates/component-flip-card.png";
import ComponentPhotoImg from "../images/templates/component-photo.png";
import ComponentBubbleImg from "../images/templates/component-bubble.png";

var screens = [
  {
    title: "Primary screen",
    description: "This is most flexible template of the screens. You can assign layouts for it.",
    image: ScreenPrimaryImg,
  },
  {
    title: "Cards gallery screen",
    description: "",
    image: ScreenCardGalleryImg,
  },
  {
    title: "Phrase screen",
    description: "",
    image: ScreenPhraseImg,
  },
  {
    title: "Article screen",
    description: "",
    image: ScreenArticleImg,
  },
  {
    title: "Paper screen",
    description: "",
    image: ScreenPaperImg,
  },
  {
    title: "Note screen",
    description: "This screen could have animation for floating component up and down.",
    image: ScreenNoteImg,
  },
  {
    title: "Simple list screen",
    description: "",
    image: ScreenSimpleList,
  },
];

var layouts = [
  {
    title: "Animated board",
    description: "This type of layout has animations. Bubbles (one by one) are rising to the front.",
    image: LayoutAnimatedBoardImg,
  },
  {
    title: "Honeycomb",
    description: "",
    image: LayoutHoneycombImg,
  },
  {
    title: "List",
    description: "",
    image: LayoutListImg,
  },
  {
    title: "Grid",
    description: "",
    image: LayoutGridImg,
  },
  {
    title: "Bubble list",
    description: "Elements of bubble list could be big or small.",
    image: LayoutBubbleListImg,
  },
  {
    title: "Catalog grid",
    description: "",
    image: LayoutCatalogGridImg,
  },
];

var components = [
  {
    title: "Photo",
    description: "Photo could have shape: circle, rectangle, rounded rectangle, ellipse...",
    image: ComponentPhotoImg,
  },
  {
    title: "Bubble",
    description: "",
    image: ComponentBubbleImg,
  },
  {
    title: "Card",
    description: "",
    image: ComponentCardImg,
  },
  {
    title: "Flip card",
    description: "Hidden text appears on tapping card.",
    image: ComponentFlipCardImg,
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