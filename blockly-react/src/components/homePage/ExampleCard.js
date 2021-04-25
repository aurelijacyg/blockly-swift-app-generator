import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
    height: 220,
  },
});

const ExampleCard = ({ card }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6}>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="h2" variant="h5">
              {card.title}
            </Typography>
              &#160; &#160; &#160;
              <Typography variant="subtitle1" paragraph alignItems="center">
              {card.description}
            </Typography>
              &#160; &#160; &#160; &#160; &#160; &#160;
              <Typography variant="subtitle1" color="textSecondary">
              {card.footer}
            </Typography>
          </CardContent>
        </div>
        <Hidden xsDown>
          <CardMedia className={classes.cardMedia} image={card.image} />
        </Hidden>
      </Card>
    </Grid>
  );
}

export default ExampleCard;