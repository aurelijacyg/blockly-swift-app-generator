import React from "react";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";

import HeaderImage from "../images/cubes.jpg";
import ExampleAppHomeGridImage from "../images/appExamples/App_example_home_grid.png";
import ExampleAppPhotoGalleryImage from "../images/appExamples/App_example_photo_gallery.png";

import Header from "../components/homePage/Header";
import ExampleCard from "../components/homePage/ExampleCard";
import BeginSection from "../components/homePage/BeginSection";
import Post from "../components/homePage/Post";

const HomePage = () => {
  const history = useHistory();
  const handleCreateAppBtn = () => history.push("/workspace");

  const headerPost = {
    title: "Doably",
    description:
      "This is a fun method for creating iOS apps. This tool allows you to place blocks like a puzzle and create your custom iOS app.",
    image: HeaderImage
  };

  const exampleCards = [
    {
      title: "Home screen",
      description:
        "Make your app home screen colorful and bright with one of the Doably templates.",
      footer: "App example",
      image: ExampleAppHomeGridImage,
    },
    {
      title: "Photo gallery",
      description:
        "Present your ideas in a stylish photo gallery. Choose your favorite template and code blocks.",
      footer: "App example",
      image: ExampleAppPhotoGalleryImage,
    },
  ];

  return (
    <main>
      <Header post={headerPost} />
      <Grid container spacing={4}>
        {exampleCards.map((card) => (
          <ExampleCard key={card.title} card={card} />
        ))}
      </Grid>
        &#160; &#160; &#160;
      <Post />
        &#160; &#160; &#160;
      <BeginSection
        onCreateApp={() => handleCreateAppBtn()}
      />
    </main>
  );
}

export default HomePage;