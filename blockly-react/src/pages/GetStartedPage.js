import React from "react";
import { Grid, Divider, Link, Typography } from "@material-ui/core";

import Header from "../components/getStartedPage/Header";
import StepsList from "../components/getStartedPage/StepsList";
import Network from "../components/getStartedPage/Network";
import UsefulLinks from "../components/getStartedPage/LinksSection";

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
      description: "To create iOS App, you will need a computer, which uses Mac’OS. Install development environment - Xcode. Xcode is a place where you build an App and see results."
    },
    {
      icon: <GetAppRoundedIcon color="primary" />,
      title: "Get app code",
      description:
        <Typography>
          {"The app configuration code will be generated and downloaded into your computer from the blocks you have created. You need to add generated file into the main code, which could be found "}
          <Link color="primary" href="https://github.com/aurelijacyg/blockly-swift-app-generator">
            here.
          </Link>{" "}
          {"Clone repository and follow steps from "}
          <Link color="primary" href="https://github.com/aurelijacyg/blockly-swift-app-generator/tree/main/MyApp">
            description
          </Link>{" "}
          {"in a README section: HOW TO RUN THE APP."}
        </Typography>
    },
    {
      icon: <FindInPageRoundedIcon color="primary" />,
      title: "Look for the templates",
      description:
        `Go to the section “Templates” and choose your favourites for your App.`,
    },
    {
      icon: <WidgetsRoundedIcon color="primary" />,
      title: `Start "blocking"`,
      description:
        <Typography display="block">
          Start creating your App by placing blocks like a puzzle! <br />
            1) Begin with the main “App” block, place “Tab” blocks into the main block and continue with the screens. Tabs represent the main screens of your App. Keep in mind, Tab bar will not be displayed in your App, if you place only one tab. <br />
            2) You can assign a design or behaviour for each element of the screen by choosing blocks. <br />
            3) Pay attention to the question mark. If the variable of the component has this mark, it means that this variable is optional - you can choose to sign value to it or not. If the variable doesn’t have question mark, it means that you must assign the value to it (otherwise your App won’t compile).<br />
            4) As soon as you are done, click the button “Generate Code”.<br />
            5) App configuration file will download into your computer. Insert the downloaded file into the main code and run your own, personal and well designed App!<br />
        </Typography>
    },
  ];

  const usefulLinks = [
    {
      link: "https://apps.apple.com/us/app/xcode/id497799835?mt=12",
      title: "Install Xcode in your Mac"
    },
    {
      link: "https://developer.apple.com/documentation/xcode/running-your-app-in-the-simulator-or-on-a-device",
      title: "Running Your App in the Simulator or on a Device"
    },
    {
      link: "https://developer.apple.com/xcode/",
      title: "Xcode documentation"
    },
    {
      link: "https://git-scm.com/docs/gittutorial",
      title: "How to use GIT"
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
          <UsefulLinks data={usefulLinks} />
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