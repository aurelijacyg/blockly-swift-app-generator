import React from "react";
import { Grid, Divider, Link, Typography } from "@material-ui/core";

import Header from "../components/getStartedPage/Header";
import StepsList from "../components/getStartedPage/StepsList";
import Network from "../components/getStartedPage/Network";
import UsefulLinks from "../components/getStartedPage/AdditionalInfo";

import GitHubIcon from "@material-ui/icons/GitHub";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import WidgetsRoundedIcon from "@material-ui/icons/WidgetsRounded";
import FindInPageRoundedIcon from "@material-ui/icons/FindInPageRounded";

const GetStartedPage = () => {
  const networks = [
    {
      title: "Github",
      icon: <GitHubIcon fontSize="large" color="disabled" />,
      web: "https://github.com/aurelijacyg/blockly-swift-app-generator"
    },
    {
      title: "Email",
      icon: <MailOutlineIcon fontSize="large" color="disabled" />,
      web: "https://mail.google.com/mail/?view=cm&fs=1&to=cygaurelija@gmail.com&su=Support.Doably"
    },
    {
      title: "LinkedIn",
      icon: <LinkedInIcon fontSize="large" color="disabled" />,
      web: "https://www.linkedin.com/in/aurelija-čygaitė-2aa74a160/"
    },
  ];

  const steps = [
    {
      icon: <SettingsRoundedIcon color="primary" />,
      title: "Set up",
      description:
        "You need a computer with macOS. To build an app and see the result you have to be installed development environment - Xcode.",
    },
    {
      icon: <GetAppRoundedIcon color="primary" />,
      title: "Get app code",
      description:
        <Typography>
          {"The app configuration code will be generated and downloaded into your computer from the blocks you have created. You need to add generated file into the main code which could be found "}
          <Link color="primary" href="https://github.com/aurelijacyg/blockly-swift-app-generator">
            here.
          </Link>{" "}
          {"Clone repository and follow steps from "}
          <Link color="primary" href="https://github.com/aurelijacyg/blockly-swift-app-generator/tree/main/MyApp">
            description
          </Link>{" "}
          {"in a README section: HOW TO RUN THE APP."}
        </Typography>,
    },
    {
      icon: <FindInPageRoundedIcon color="primary" />,
      title: "Look for the templates",
      description:
        `Go to the section "Templates" and keep up with our suggested templates for your app design.`,
    },
    {
      icon: <WidgetsRoundedIcon color="primary" />,
      title: `Start "blocking"`,
      description:
        `Start creating your app! Start making your wish app by placing blocks like a puzzle. Start with the main "App" block, place "Tab" blocks into the main block and continue with screens. Tabs represent main screens of your app. Tab bar of your app will dot be displayed if you will place only one tab. You can assign a design or behavior for each element of the screen. As soon as you are done, click the button “Generate Code”. App configuration will be downloaded into your computer, then insert it into the main code and run the app!`,
    },
  ];

  return (
    <main>
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={12} justify="center" alignItems="center">
          <Header />
        </Grid>
        <Grid item xs={12} justify="center" alignItems="center">
          <StepsList steps={steps} />
        </Grid>
        <Grid item xs={12} justify="center" alignItems="center">
          <UsefulLinks />
        </Grid>
        <Grid item xs={12} justify="center" alignItems="center">
          <Divider />
          <Network networks={networks} />
        </Grid>
      </Grid>
    </main>
  );
}

export default GetStartedPage;