import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccordionItem from "./AccordionItem";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const StepsList = ({ steps }) => {
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