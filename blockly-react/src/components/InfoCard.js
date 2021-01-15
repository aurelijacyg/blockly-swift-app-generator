import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import logo from '../images/abstract.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 1800,
  },
  media: {
    height: 160,
  },
});

const InfoCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo}
          title="Blocks logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" color="textPrimary" component="h2">
            Build your own app
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This is an efiicient method for creating small iOS apps. 
            This tool allows you to place blocks like a puzzle and create your custom iOS app design and program buttons for a simple actions.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default InfoCard;