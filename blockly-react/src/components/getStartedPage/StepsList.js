import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccordionItem from './AccordionItem';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import WidgetsRoundedIcon from '@material-ui/icons/WidgetsRounded';
import FindInPageRoundedIcon from '@material-ui/icons/FindInPageRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const steps = [
  {
    icon: <SettingsRoundedIcon color="primary"/>,
    title: 'Set up',
    description:
      "You need a computer with macOS. To build an app and see the result you have to be installed development environment - Xcode.",
  },
  {
    icon: <GetAppRoundedIcon color="primary"/>,
    title: 'Get app code',
    description:
    <Typography>
    {'The app configuration code will be generated and downloaded into your computer from the blocks you have created. You need to add generated file into the main code which could be found '}
    <Link color="primary" href="https://github.com/aurelijacyg/blockly-swift-app-generator">
      here.
    </Link>{' '}
    {'Clone repository and follow steps from '}
    <Link color="primary" href="https://github.com/aurelijacyg/blockly-swift-app-generator/tree/main/MyApp">
      description
    </Link>{' '}
    {'in a README section: HOW TO RUN THE APP.'}
  </Typography>,
  },
  {
    icon: <FindInPageRoundedIcon color="primary"/>,
    title: "Look for the templates",
    description:
    `Go to the section "Templates" and keep up with our suggested templates for your app design.`,
  },
  {
    icon: <WidgetsRoundedIcon color="primary"/>,
    title: `Start "blocking"`,
    description:
    `Start creating your app! Start making your wish app by placing blocks like a puzzle. As soon as you are done, click the button “Generate Code”. App configuration will be downloaded into your computer, then insert it into the main code and build the app!`,
  },
];

const StepsList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h6" color="primary" component="h2">
            First Steps
        </Typography>
        </Grid>
        <Grid item xs={12}>
          {steps.map((step) => (
            <AccordionItem key={step.title} item={step} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default StepsList;